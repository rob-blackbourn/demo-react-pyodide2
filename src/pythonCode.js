const PYTHON_CODE = `
import random
import numpy as np

# Make the function async so it becomes a promise in JavaScript.
async def generate_matmul_exercise(max_rows, max_cols):
  m = random.randint(1, max_rows)
  n = random.randint(1, max_cols)
  p = random.randint(1, max_cols)

  rng = np.random.default_rng()
  A = rng.integers(low=-10, high=10, size=(m, n), dtype=np.int32)
  B = rng.integers(low=-10, high=10, size=(n, p), dtype=np.int32)
  C = A @ B

  return {
      'm': m,
      'n': n,
      'p': p,
      'A': A,
      'B': B,
      'C': C
  }    
`

function wrapGenerateMatmulExercise(pyodide) {
  const func = pyodide.globals.get('generate_matmul_exercise')

  return async (maxNumberOfRows, maxNumberOfColumns) => {
    const obj = await func(maxNumberOfRows, maxNumberOfColumns)
    const results = {
      m: obj.get('m'),
      n: obj.get('n'),
      p: obj.get('p'),
      A: obj
        .get('A')
        .toJs()
        .map((x) => Array.from(x)),
      B: obj
        .get('B')
        .toJs()
        .map((x) => Array.from(x)),
      C: obj
        .get('C')
        .toJs()
        .map((x) => Array.from(x))
    }
    obj.destroy()
    return results
  }
}

export async function importLocalPythonCode(pyodide) {
  await pyodide.runPythonAsync(PYTHON_CODE)

  const generateMatmulExercise = wrapGenerateMatmulExercise(pyodide)

  return {
    generateMatmulExercise
  }
}

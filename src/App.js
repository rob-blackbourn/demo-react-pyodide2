import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import MatrixMultiplication from './components/MatrixMultiplication'
import { importLocalPythonCode } from './pythonCode'

const styles = (theme) => ({
  progress: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pyodide: null,
      localPythonCode: null
    }
  }

  async componentDidMount() {
    const pyodide = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' })
    const localPythonCode = await importLocalPythonCode(pyodide)
    this.setState({ pyodide, localPythonCode })
  }

  render() {
    const { pyodide, localPythonCode } = this.state
    const { classes } = this.props

    return pyodide == null ? (
      <div className={classes.progress}>
        <Typography variant="h2">Loading Python</Typography>
        <LinearProgress />
      </div>
    ) : (
      <div>
        <MatrixMultiplication generator={localPythonCode.generateMatmulExercise} />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)

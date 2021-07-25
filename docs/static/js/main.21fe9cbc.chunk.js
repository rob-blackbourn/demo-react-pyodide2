(this["webpackJsonpdemo-react-pyodide2"]=this["webpackJsonpdemo-react-pyodide2"]||[]).push([[0],{62:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(9),s=t.n(a),c=(t(54),t(100)),i=t(21),o=t.n(i),u=t(29),l=t(16),d=t(13),p=t(26),m=t(24),h=t(4),b=t(99),f=t(98),j=t(36),g=t(97),x=t(96),v=t(101),O=t(102),y=t(6),w=function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.values,t=e.readOnly,r=e.onChange,a=e.classes;return Object(y.jsx)("div",{className:a.divTable,children:n.map((function(e,n){return Object(y.jsx)("div",{className:a.divTableRow,children:e.map((function(e,s){return Object(y.jsx)("div",{className:a.divTableCol,children:Object(y.jsx)(v.a,{className:a.cell,value:e,readOnly:t,onChange:function(e){return r(n,s,e.target.value)}})},"cell-".concat(n,"-").concat(s))}))},"row-".concat(n))}))})}}]),t}(r.Component);w.defaultProps={readonly:!1,onChange:function(){}};var C=Object(h.a)((function(e){return{button:{margin:e.spacing(1,1,0,0)},cell:{width:"4ch",margin:e.spacing(1),"& .MuiInputBase-input":{textAlign:"center"}},divTable:{display:"inline-flex",width:"auto",borderLeft:"1px solid #666666",borderRight:"1px solid #666666",borderSpacing:"5px",margin:e.spacing(1)},divTableRow:{display:"table-row",width:"auto",clear:"both"},divTableCol:{display:"tableColumn",width:"auto"}}}))(w);var N=function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=n.call(this,e)).generateExercise=function(){var e=r.state,n=e.maxNumberOfRows,t=e.maxNumberOfColumns;r.props.generator(n,t).then((function(e){r.setState(Object(j.a)(Object(j.a)({},e),{},{answer:e.C.map((function(e){return e.map((function(e){return""}))})),hasExercise:!0,isGenerating:!1}))})).catch((function(e){console.log(e)}))},r.onChangeHandler=function(e,n,t){var a=parseInt(t);Number.isInteger(a)&&(t=a);var s=function(e,n,t,r){return e.map((function(e,a){return e.map((function(e,s){return a===n&&s===t?r:e}))}))}(r.state.answer,e,n,t);r.setState({answer:s})},r.handleSubmit=function(e){e.preventDefault(),r.setState({isGenerating:!0},r.generateExercise)},r.state={maxNumberOfRows:3,maxNumberOfColumns:3,hasExercise:!1,isGenerating:!1,m:1,n:1,p:1,A:[[0]],B:[[0]],C:[[0]],answer:[[0]]},r}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,n=e.maxNumberOfRows,t=e.maxNumberOfColumns,r=e.A,a=e.B,s=e.C,c=e.answer,i=e.hasExercise,o=e.isGenerating,u=this.props.classes,l=function(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;++t){var r=e[t],a=n[t];if(r.length!==a.length)return!1;for(var s=0;s<r.length;++s)if(r[s]!==a[s])return!1}return!0}(s,c);return Object(y.jsx)(g.a,{maxWidth:"sm",children:Object(y.jsxs)(x.a,{className:u.paper,children:[Object(y.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(y.jsx)(v.a,{className:u.parameter,type:"number",value:n,label:"Max Rows"}),Object(y.jsx)(v.a,{className:u.parameter,type:"number",value:t,label:"Max Columns"}),Object(y.jsx)(O.a,{className:u.button,type:"submit",disabled:o,children:"New Exercise"})]}),Object(y.jsxs)("div",{className:u.exercise,children:[i?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{values:r,readOnly:!0}),Object(y.jsx)(C,{values:a,readOnly:!0}),Object(y.jsx)("span",{children:"="}),Object(y.jsx)(C,{values:c,readOnly:!1,onChange:this.onChangeHandler})]}):Object(y.jsx)(f.a,{variant:"body1",children:"Click the button to generate a new exercise"}),i?Object(y.jsx)("div",{children:l?Object(y.jsx)(f.a,{className:u.rightAnswer,variant:"body1",children:"Correct"}):Object(y.jsx)(f.a,{className:u.wrongAnswer,variant:"body1",children:"Incorrect"})}):""]})]})})}}]),t}(r.Component),A=Object(h.a)((function(e){return{paper:{height:"100vh"},button:{margin:e.spacing(1,1,0,0),float:"right"},parameter:{width:"12ch",margin:e.spacing(1)},exercise:{display:"flex",flexDirection:"row",alignItems:"center"},rightAnswer:{color:"green"},wrongAnswer:{color:"red"}}}))(N),k="\nimport random\nimport numpy as np\n\n# Make the function async so it becomes a promise in JavaScript.\nasync def generate_matmul_exercise(max_rows, max_cols):\n  m = random.randint(1, max_rows)\n  n = random.randint(1, max_cols)\n  p = random.randint(1, max_cols)\n\n  rng = np.random.default_rng()\n  A = rng.integers(low=-10, high=10, size=(m, n), dtype=np.int32)\n  B = rng.integers(low=-10, high=10, size=(n, p), dtype=np.int32)\n  C = A @ B\n\n  return {\n      'm': m,\n      'n': n,\n      'p': p,\n      'A': A,\n      'B': B,\n      'C': C\n  }    \n";function B(e){var n=e.globals.get("generate_matmul_exercise");return function(){var e=Object(u.a)(o.a.mark((function e(t,r){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t,r);case 2:return a=e.sent,s={m:a.get("m"),n:a.get("n"),p:a.get("p"),A:a.get("A").toJs().map((function(e){return Array.from(e)})),B:a.get("B").toJs().map((function(e){return Array.from(e)})),C:a.get("C").toJs().map((function(e){return Array.from(e)}))},a.destroy(),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function S(e){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.runPythonAsync(k);case 2:return t=B(n),e.abrupt("return",{generateMatmulExercise:t});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){Object(p.a)(t,e);var n=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=n.call(this,e)).state={pyodide:null,localPythonCode:null},r}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/"});case 2:return n=e.sent,e.next=5,S(n);case 5:t=e.sent,this.setState({pyodide:n,localPythonCode:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.pyodide,t=e.localPythonCode,r=this.props.classes;return null==n?Object(y.jsxs)("div",{className:r.progress,children:[Object(y.jsx)(f.a,{variant:"h2",children:"Loading Python"}),Object(y.jsx)(b.a,{})]}):Object(y.jsx)("div",{children:Object(y.jsx)(A,{generator:t.generateMatmulExercise})})}}]),t}(r.Component),P=Object(h.a)((function(e){return{progress:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}))(E),R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),s(e),c(e)}))};s.a.render(Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{}),Object(y.jsx)(P,{})]}),document.getElementById("root")),R()}},[[62,1,2]]]);
//# sourceMappingURL=main.21fe9cbc.chunk.js.map
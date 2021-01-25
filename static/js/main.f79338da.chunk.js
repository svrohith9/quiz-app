(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),a=t.n(c),s=t(15),i=t.n(s),o=t(3),u=t(4),l=t.n(u),d=t(9),b=t(2),f=t(13),j=t(5),p=t(6);function x(){var n=Object(j.a)(["\n  transition: all 0.2s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px, solid #fff;\n    color: #fff;\n  }\n"]);return x=function(){return n},n}function h(){var n=Object(j.a)(["\n  max-width: 1000px;\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n"]);return h=function(){return n},n}var O,v=p.b.div(h()),g=p.b.div(x(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #56ffa4)":!e&&t?"linear-gradient(90deg, #ff6566, #c16868)":"linear-gradient(90deg, #6eafff, #6eafff)"})),m=function(n){var e=n.question,t=n.answers,c=n.callback,a=n.userAnswer,s=n.questionNumber,i=n.totalQuestions;return Object(r.jsxs)(v,{children:[Object(r.jsxs)("p",{className:"number",children:["Question: ",s,"/",i]}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(r.jsx)("div",{children:t.map((function(n){return Object(r.jsx)(g,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(r.jsx)("button",{disabled:a,value:n,onClick:c,children:Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})};!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(O||(O={}));var w=function(){var n=Object(d.a)(l.a.mark((function n(e,t){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&category=9&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c.results.map((function(n){return Object(f.a)(Object(f.a)({},n),{},{answers:(e=[].concat(Object(o.a)(n.incorrect_answers),[n.correct_answer]),Object(o.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function y(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #fff;\n  }\n  .score {\n    color: #fff;\n    margin: 0;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    broder-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n  .start {\n    max-width: 20px;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(j.a)(["\n html{\n     height :100%;\n }\n\n body{\n     margin: 0;\n     padding: 0 20px;\n     display: flex;\n     justify-content: center;\n }\n\n * {\n     box-sizing: border-box;\n     \n}\n"]);return k=function(){return n},n}var S=Object(p.a)(k()),q=(p.b.div(y()),function(){var n=Object(c.useState)(!1),e=Object(b.a)(n,2),t=e[0],a=e[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),u=i[0],f=i[1],j=Object(c.useState)(0),p=Object(b.a)(j,2),x=p[0],h=p[1],v=Object(c.useState)([]),g=Object(b.a)(v,2),y=g[0],k=g[1],q=Object(c.useState)(0),M=Object(b.a)(q,2),N=M[0],_=M[1],A=Object(c.useState)(!0),C=Object(b.a)(A,2),I=C[0],z=C[1],E=function(){var n=Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),z(!1),n.next=4,w(10,O.MEDIUM);case 4:e=n.sent,f(e),_(0),k([]),h(0),a(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S,{}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Quiz"}),I||10===y.length?Object(r.jsx)("button",{className:"start",onClick:E,children:"start"}):null,I?null:Object(r.jsxs)("p",{className:"score",children:["Score :- ",N]}),t?Object(r.jsx)("p",{children:"Loading ..."}):null,!t&&!I&&Object(r.jsx)(m,{questionNumber:x+1,totalQuestions:10,question:u[x].question,answers:u[x].answers,userAnswer:y?y[x]:void 0,callback:function(n){if(!I){var e=n.currentTarget.value,t=u[x].correct_answer===e;t&&_((function(n){return n+1}));var r={question:u[x].question,answer:e,correct:t,correctAnswer:u[x].correct_answer};k((function(n){return[].concat(Object(o.a)(n),[r])}))}}}),I||t||y.length!==x+1||9===x?null:Object(r.jsx)("button",{className:"next",onClick:function(){var n=x+1;10===n?z(!0):h(x+1)},children:"Next"})]})]})});i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f79338da.chunk.js.map
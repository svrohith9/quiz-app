(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n(1),s=n.n(a),u=n(10),o=n.n(u),i=n(3),j=n(4),l=n.n(j),b=n(7),p=n(2),O=n(9),d=function(e){var t=e.question,n=e.answers,r=e.callback,a=e.userAnswer,s=e.questionNumber,u=e.totalQuestions;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"number",children:["Question: ",s,"/",u]}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:t}}),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("button",{disabled:a,value:e,onClick:r,children:Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})})},e)}))})]})};!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(r||(r={}));var h=function(){var e=Object(b.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(t,"&category=9&difficulty=").concat(n,"&type=multiple"),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return c=e.sent,e.abrupt("return",c.results.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{answers:(t=[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]),Object(i.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],s=t[1],u=Object(a.useState)([]),o=Object(p.a)(u,2),j=o[0],O=o[1],f=Object(a.useState)(0),x=Object(p.a)(f,2),m=x[0],v=x[1],w=Object(a.useState)([]),S=Object(p.a)(w,2),k=S[0],q=S[1],y=Object(a.useState)(0),g=Object(p.a)(y,2),M=(g[0],g[1]),N=Object(a.useState)(!0),_=Object(p.a)(N,2),A=_[0],I=_[1],E=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),I(!1),e.next=4,h(10,r.MEDIUM);case 4:t=e.sent,O(t),M(0),q([]),v(0),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Quiz"}),A||10===k.length?Object(c.jsx)("button",{className:"start",onClick:E,children:"start"}):null,A?null:Object(c.jsx)("p",{className:"score",children:"Score :-"}),n?Object(c.jsx)("p",{children:"Loading ..."}):null,!n&&!A&&Object(c.jsx)(d,{questionNumber:m+1,totalQuestions:10,question:j[m].question,answers:j[m].answers,userAnswer:k?k[m]:void 0,callback:function(e){if(!A){var t=e.currentTarget.value,n=j[m].correct_answer===t;n&&M((function(e){return e+1}));var r={question:j[m].question,answer:t,correct:n,correctAnswer:j[m].correct_answer};q((function(e){return[].concat(Object(i.a)(e),[r])}))}}}),A||n||k.length!==m+1||9===m?null:Object(c.jsx)("button",{className:"next",onClick:function(){var e=m+1;10===e?I(!0):v(m+1)},children:"Next"})]})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.676735e2.chunk.js.map
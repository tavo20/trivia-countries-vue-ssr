(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{344:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(125).default)("4e7628c3",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";r(344)},350:function(t,e,r){var c=r(124)(!1);c.push([t.i,".container[data-v-22306c19]{background:#000;height:400px;width:100%}.container .container-answers[data-v-22306c19]{display:flex;flex-direction:column;align-items:center;padding:30px;font-size:20px}.container .correct[data-v-22306c19]{color:#00ff6b;letter-spacing:3px}.container .in[data-v-22306c19]{color:tomato;letter-spacing:3px}.container .message[data-v-22306c19]{color:#fff;font-size:2rem;text-align:center;padding-top:100px}",""]),t.exports=c},359:function(t,e,r){"use strict";r.r(e);var c=r(215),n={__name:"Results",setup:function(t){return{__sfc:!0,percentage:c.store.correct>=8?85:c.store.correct>=7?78:c.store.correct>=6?70:c.store.correct>=5?67:c.store.correct>=4?54:c.store.correct>=2?30:6,store:c.store,reset:c.reset}}},o=(r(349),r(62)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("main",{staticClass:"container"},[e("div",{staticClass:"container-answers"},[e("div",{staticClass:"correct"},[t._v("\n            Correctas: "+t._s(r.store.correct)+"\n        ")]),t._v(" "),e("div",{staticClass:"in"},[t._v("\n            Incorrectas: "+t._s(r.store.mistakes)+"\n        ")])]),t._v(" "),e("div",{staticClass:"message"},[t._v("\n        You were better than "+t._s(r.percentage)+"% of all players\n    ")])])}),[],!1,null,"22306c19",null);e.default=component.exports}}]);
(function(t){function e(e){for(var s,n,r=e[0],c=e[1],u=e[2],f=0,m=[];f<r.length;f++)n=r[f],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"0510":function(t,e,a){},"0c8e":function(t,e,a){},"16b5":function(t,e,a){"use strict";a("b39c")},"4f12":function(t,e,a){},"62ba":function(t,e,a){"use strict";a("0510")},"85ec":function(t,e,a){},af80:function(t,e,a){"use strict";a("ce85")},b39c:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("Title"),a("Setting"),a("Grid")],1),a("Difficulty"),a("Finish")],1)},i=[],n=a("d4ec"),r=a("262e"),c=a("2caf"),u=a("9ab4"),l=a("60a3"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid"},t._l(t.grids,(function(e,s){return a("div",{key:s,staticClass:"row"},t._l(e,(function(e,o){return a("div",{key:o,staticClass:"col",class:{reveal:e.reveal},on:{click:function(e){t.initRevealGrid(o,s),t.checkWin()}}},[e.reveal&&e.value?a("span",{class:{bomb:"X"===e.value}},[t._v(t._s("X"===e.value?"":e.value))]):t._e()])})),0)})),0)},m=[],b=a("5530"),d=a("bee2"),v=a("2f62"),p=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(d["a"])(a,[{key:"initRevealGrid",value:function(t,e){this.revealGrid({col:t,row:e}),this.gameRunning||this.startGame()}},{key:"created",value:function(){this.setEmptyGrid()}}]),a}(l["b"]);p=Object(u["a"])([Object(l["a"])({computed:Object(b["a"])({},Object(v["c"])({grids:"grid/getGrids",gameRunning:"game/getGameState"})),methods:Object(b["a"])(Object(b["a"])({},Object(v["b"])("grid",["setEmptyGrid","revealGrid","checkWin"])),Object(v["b"])("game",["startGame"]))})],p);var g=p,h=g,y=(a("62ba"),a("2877")),O=Object(y["a"])(h,f,m,!1,null,"3755e03c",null),w=O.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"title"},[t._v("Minesweeper!")]),a("div",{staticClass:"logo"})])}],_=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);_=Object(u["a"])([l["a"]],_);var S=_,G=S,k=(a("af80"),Object(y["a"])(G,j,C,!1,null,"ede31724",null)),E=k.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-container"},[a("div",{staticClass:"btn",on:{click:t.toggleSetting}},[a("p",[t._v("Difficulty")])]),a("div",{staticClass:"game-status-container"},[a("div",{staticClass:"game-status"},[a("div",{staticClass:"header"},[t._v("Dimension")]),a("div",{staticClass:"value"},[t._v(t._s(t.columns)+" X "+t._s(t.rows))])]),a("div",{staticClass:"game-status"},[a("div",{staticClass:"header"},[t._v("Bombs")]),a("div",{staticClass:"value"},[t._v(t._s(t.bombs))])])])])},D=[],N=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);N=Object(u["a"])([Object(l["a"])({computed:Object(b["a"])({},Object(v["c"])({columns:"grid/getColumnLength",rows:"grid/getRowLength",bombs:"grid/getBombs"})),methods:Object(b["a"])({},Object(v["b"])("setting",["toggleSetting"]))})],N);var R=N,$=R,T=(a("dbc4"),Object(y["a"])($,x,D,!1,null,"58686c97",null)),P=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",class:{show:t.show}},[a("div",{staticClass:"content"},[a("h2",{staticClass:"title"},[t._v("Difficulty")]),a("div",{staticClass:"options"},t._l(t.difficulties,(function(e,s){return a("p",{key:s,staticClass:"btn difficulty",class:{active:t.difficulty===e},on:{click:function(a){return t.updateDifficulty(e)}}},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"columns"}},[t._v("Columns")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.columns,expression:"columns"}],staticClass:"form-control",attrs:{type:"text",id:"columns",placeholder:"columns",disabled:"custom"!==t.difficulty,autocomplete:"off"},domProps:{value:t.columns},on:{input:function(e){e.target.composing||(t.columns=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"rows"}},[t._v("Rows")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rows,expression:"rows"}],staticClass:"form-control",attrs:{type:"text",id:"rows",placeholder:"rows",disabled:"custom"!==t.difficulty,autocomplete:"off"},domProps:{value:t.rows},on:{input:function(e){e.target.composing||(t.rows=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bombs"}},[t._v("Bombs")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bombs,expression:"bombs"}],staticClass:"form-control",attrs:{type:"text",id:"bombs",placeholder:"bombs",disabled:"custom"!==t.difficulty,autocomplete:"off"},domProps:{value:t.bombs},on:{input:function(e){e.target.composing||(t.bombs=e.target.value)}}})])]),a("div",{staticClass:"actions"},[a("p",{staticClass:"btn",on:{click:t.toggleSetting}},[t._v(" Cancel ")]),a("p",{staticClass:"btn",on:{click:t.initSetDifficulty}},[t._v(" Start ")])])])])},A=[],B={easy:{rows:9,columns:9,bombs:10},medium:{rows:16,columns:16,bombs:40},hard:{rows:16,columns:30,bombs:99}},M=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.difficulties=["easy","medium","hard","custom"],t.rows=t.$store.state.grid.rows,t.columns=t.$store.state.grid.columns,t.bombs=t.$store.state.grid.bombs,t.difficulty=t.$store.state.grid.difficulty,t}return Object(d["a"])(a,[{key:"initSetDifficulty",value:function(){var t,e=this.difficulty;"custom"===e&&(t={columns:this.columns,rows:this.rows,bombs:this.bombs}),this.setDifficulty({difficultyType:e,updatedGameplay:t}),this.updateSettingFromStore(),this.toggleSetting(),this.stopGame()}},{key:"updateSettingFromStore",value:function(){this.rows=this.$store.state.grid.rows,this.columns=this.$store.state.grid.columns,this.bombs=this.$store.state.grid.bombs}},{key:"updateDifficulty",value:function(t){this.difficulty=t,"custom"!==t&&(this.rows=B[t].rows,this.columns=B[t].columns,this.bombs=B[t].bombs)}}]),a}(l["b"]);M=Object(u["a"])([Object(l["a"])({computed:Object(b["a"])({},Object(v["c"])({show:"setting/getDisplayStatus"})),methods:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(v["b"])("grid",["setDifficulty"])),Object(v["b"])("setting",["toggleSetting"])),Object(v["b"])("game",["stopGame"]))})],M);var W=M,X=W,F=(a("d068"),Object(y["a"])(X,L,A,!1,null,"c86da056",null)),I=F.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"title"},[t._v("Time")]),a("p",{staticClass:"timer"})])}],q=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);q=Object(u["a"])([l["a"]],q);var z=q,H=z,K=(a("16b5"),Object(y["a"])(H,J,Y,!1,null,"2a5b4510",null)),Q=K.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",class:{show:t.gameStatus===t.loseStatus||t.gameStatus===t.winStatus}},[a("div",{staticClass:"content"},[t.gameStatus===t.loseStatus?a("h2",{staticClass:"message"},[t._v("You Lose!")]):a("h2",{staticClass:"message"},[t._v("You Win!")]),a("div",{staticClass:"action"},[a("p",{staticClass:"btn",on:{click:function(e){t.hideAllCell(),t.startGame()}}},[t._v("Play Again")]),a("p",{staticClass:"btn",on:{click:function(e){t.stopGame(),t.setEmptyGrid()}}},[t._v("New Game")])])])])},V=[],Z={STOP:0,START:1,WIN:2,LOSE:3},tt=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.loseStatus=Z.LOSE,t.winStatus=Z.WIN,t}return a}(l["b"]);tt=Object(u["a"])([Object(l["a"])({computed:Object(b["a"])({},Object(v["c"])({gameStatus:"game/getGameState"})),methods:Object(b["a"])(Object(b["a"])({},Object(v["b"])("grid",["setEmptyGrid","hideAllCell"])),Object(v["b"])("game",["startGame","stopGame"]))})],tt);var et=tt,at=et,st=(a("ff5e"),Object(y["a"])(at,U,V,!1,null,"e56b10d2",null)),ot=st.exports,it=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);it=Object(u["a"])([Object(l["a"])({components:{Grid:w,Title:E,Setting:P,Difficulty:I,Timer:Q,Finish:ot}})],it);var nt=it,rt=nt,ct=(a("034f"),Object(y["a"])(rt,o,i,!1,null,null,null)),ut=ct.exports,lt=(a("a9e3"),a("2909")),ft=function(t,e){var a=t.grids,s=t.rows,o=t.columns,i=Object(lt["a"])(a),n=t.bombs;while(n){var r=Math.round(Math.random()*(o-1)),c=Math.round(Math.random()*(s-1))||1;r!==e.col&&c!==e.row&&"string"!==typeof i[c][r].value&&(i[c][r].value="X",i[c-1]&&(i[c-1][r-1]&&"number"===typeof i[c-1][r-1].value&&(i[c-1][r-1].value=Number(i[c-1][r-1].value)+1),i[c-1][r]&&"number"===typeof i[c-1][r].value&&(i[c-1][r].value=Number(i[c-1][r].value)+1),i[c-1][r+1]&&"number"===typeof i[c-1][r+1].value&&(i[c-1][r+1].value=Number(i[c-1][r+1].value)+1)),i[c+1]&&(i[c+1][r-1]&&"number"===typeof i[c+1][r-1].value&&(i[c+1][r-1].value=Number(i[c+1][r-1].value)+1),i[c+1][r]&&"number"===typeof i[c+1][r].value&&(i[c+1][r].value=Number(i[c+1][r].value)+1),i[c+1][r+1]&&"number"===typeof i[c+1][r+1].value&&(i[c+1][r+1].value=Number(i[c+1][r+1].value)+1)),i[c][r-1]&&"number"===typeof i[c][r-1].value&&(i[c][r-1].value=Number(i[c][r-1].value)+1),i[c][r+1]&&"number"===typeof i[c][r+1].value&&(i[c][r+1].value=Number(i[c][r+1].value)+1),n--)}},mt=function(t){return{topRow:t.row-1,bottomRow:t.row+1,currentRow:t.row,currentCol:t.col,leftCol:t.col-1,rightCol:t.col+1}},bt=function t(e,a){var s=mt(a),o=s.topRow,i=s.bottomRow,n=s.currentRow,r=s.leftCol,c=s.currentCol,u=s.rightCol;e[n]&&e[n][c]&&(e[n][c].reveal||"string"!==typeof e[n][c].value&&(e[n][c].reveal=!0,0===e[n][c].value&&(t(e,{row:o,col:c}),t(e,{row:i,col:c}),t(e,{row:n,col:r}),t(e,{row:n,col:u}),t(e,{row:o,col:r}),t(e,{row:o,col:u}),t(e,{row:i,col:u}),t(e,{row:i,col:r}))))},dt=function(t){for(var e=0;e<t.length;e++)for(var a=0;a<t[e].length;a++)"X"===t[e][a].value&&(t[e][a].reveal=!0)},vt=function(t){for(var e=0;e<t.length;e++)for(var a=0;a<t[e].length;a++)t[e][a].reveal=!1},pt=Object(b["a"])({grids:[[]],difficulty:"easy"},B.easy),gt={setEmptyGrid:function(t){for(var e=t.commit,a=t.state,s=a.rows,o=a.columns,i=[[]],n=0;n<s;n++){for(var r=[],c=0;c<o;c++)r.push({reveal:!1,value:0});i.push(r)}e("setEmptyGrid",i)},setDifficulty:function(t,e){var a=t.commit,s=t.dispatch,o=e.difficultyType,i=e.updatedGameplay,n="custom"===o?i:B[o];a("setDifficulty",o),a("setRowsLength",n.columns),a("setColumnsLength",n.rows),a("setBombs",n.bombs),s("setEmptyGrid")},revealGrid:function(t,e){var a=t.commit,s=t.rootState,o=t.state,i=e.col,n=e.row;s.game.status?"string"!==typeof o.grids[n][i].value?a("revealCell",{col:i,row:n}):(a("revealAllBomb"),a("loseGame",s)):(a("updateGridWithBombAndNumber",{col:i,row:n}),a("revealCell",{col:i,row:n}))},hideAllCell:function(t){var e=t.commit;e("hideAllCell")},checkWin:function(t){for(var e=t.commit,a=t.state,s=t.rootState,o=Object(lt["a"])(a.grids),i=a.bombs,n=0;n<o.length;n++)for(var r=0;r<o[n].length;r++)o[n][r].reveal||i--;i||e("winGame",s)}},ht={setEmptyGrid:function(t,e){t.grids=e},setRowsLength:function(t,e){t.columns=e},setColumnsLength:function(t,e){t.rows=e},setBombs:function(t,e){t.bombs=e},setDifficulty:function(t,e){t.difficulty=e},revealCell:function(t,e){var a=e.col,s=e.row;bt(Object(lt["a"])(t.grids),{col:a,row:s})},updateGridWithBombAndNumber:function(t,e){var a=e.col,s=e.row;ft(t,{col:a,row:s})},revealAllBomb:function(t){dt(Object(lt["a"])(t.grids))},loseGame:function(t,e){e.game.status=Z.LOSE},winGame:function(t,e){e.game.status=Z.WIN},hideAllCell:function(t){vt(Object(lt["a"])(t.grids))}},yt={getGrids:function(t){return t.grids},getColumnLength:function(t){return t.columns},getRowLength:function(t){return t.rows},getBombs:function(t){return t.bombs},getDifficulty:function(t){return t.difficulty}},Ot={namespaced:!0,state:pt,mutations:ht,actions:gt,getters:yt},wt={status:Z.STOP},jt={startGame:function(t){var e=t.commit;e("updateGameStatus",Z.START)},stopGame:function(t){var e=t.commit;e("updateGameStatus",Z.STOP)},loseGame:function(t){var e=t.commit;e("updateGameStatus",Z.LOSE)}},Ct={updateGameStatus:function(t,e){t.status=e}},_t={getGameState:function(t){return t.status}},St={namespaced:!0,state:wt,mutations:Ct,actions:jt,getters:_t},Gt=!1,kt={show:Gt},Et={toggleSetting:function(t){var e=t.commit;e("toggleSetting")}},xt={toggleSetting:function(t){t.show=!t.show}},Dt={getDisplayStatus:function(t){return t.show}},Nt={namespaced:!0,state:kt,mutations:xt,actions:Et,getters:Dt};s["a"].use(v["a"]);var Rt=!1,$t=new v["a"].Store({strict:Rt,modules:{grid:Ot,game:St,setting:Nt}});s["a"].config.productionTip=!1,new s["a"]({store:$t,render:function(t){return t(ut)}}).$mount("#app")},ce85:function(t,e,a){},d068:function(t,e,a){"use strict";a("f3b6")},dbc4:function(t,e,a){"use strict";a("4f12")},f3b6:function(t,e,a){},ff5e:function(t,e,a){"use strict";a("0c8e")}});
//# sourceMappingURL=app.d2fb382e.js.map
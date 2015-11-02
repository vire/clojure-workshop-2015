// Compiled by ClojureScript 0.0-3211 {}
goog.provide('clojure_workshop.core');
goog.require('cljs.core');
goog.require('clojure_workshop.views');
goog.require('clojure_workshop.subs');
goog.require('clojure_workshop.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
clojure_workshop.core.state = reagent.core.atom.call(null,(0));
clojure_workshop.core.component_w_state = (function clojure_workshop$core$component_w_state(){
var a = reagent.core.atom.call(null,(0));
return ((function (a){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Value of the counter is: ",cljs.core.deref.call(null,a),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (a){
return (function (){
return cljs.core.swap_BANG_.call(null,a,cljs.core.inc);
});})(a))
], null),"inc"], null)], null);
});
;})(a))
});
clojure_workshop.core.mount_root = (function clojure_workshop$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_workshop.views.smart_counter,clojure_workshop.core.state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_workshop.core.component_w_state], null),clojure_workshop.views.my_first_component,"TestName"], null),document.getElementById("app"));
});
clojure_workshop.core.init = (function clojure_workshop$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return clojure_workshop.core.mount_root.call(null);
});
goog.exportSymbol('clojure_workshop.core.init', clojure_workshop.core.init);

//# sourceMappingURL=core.js.map?rel=1446469619210
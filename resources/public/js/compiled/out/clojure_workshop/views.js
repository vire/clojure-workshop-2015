// Compiled by ClojureScript 0.0-3211 {}
goog.provide('clojure_workshop.views');
goog.require('cljs.core');
goog.require('re_frame.core');
clojure_workshop.views.smart_counter = (function clojure_workshop$views$smart_counter(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_workshop.views.dumb_counter,cljs.core.deref.call(null,state)], null);
});
clojure_workshop.views.dumb_counter = (function clojure_workshop$views$dumb_counter(count_from_props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Count: ",count_from_props], null);
});
clojure_workshop.views.main_panel = (function clojure_workshop$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello from ",cljs.core.deref.call(null,name)], null);
});
;})(name))
});
clojure_workshop.views.my_first_component = (function clojure_workshop$views$my_first_component(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is my component ",name], null);
});

//# sourceMappingURL=views.js.map?rel=1446469108669
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('clojure_workshop.core');
goog.require('cljs.core');
goog.require('clojure_workshop.views');
goog.require('clojure_workshop.subs');
goog.require('clojure_workshop.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
clojure_workshop.core.mount_root = (function clojure_workshop$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_workshop.views.main_panel], null),document.getElementById("app"));
});
clojure_workshop.core.init = (function clojure_workshop$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return clojure_workshop.core.mount_root.call(null);
});
goog.exportSymbol('clojure_workshop.core.init', clojure_workshop.core.init);

//# sourceMappingURL=core.js.map?rel=1446451736294
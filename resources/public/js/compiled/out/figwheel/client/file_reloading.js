// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29437_SHARP_,p2__29438_SHARP_){
var and__18148__auto__ = p1__29437_SHARP_;
if(cljs.core.truth_(and__18148__auto__)){
return p2__29438_SHARP_;
} else {
return and__18148__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18160__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18160__auto__){
return or__18160__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18160__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18160__auto__){
return or__18160__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18160__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29439){
var map__29440 = p__29439;
var map__29440__$1 = ((cljs.core.seq_QMARK_.call(null,map__29440))?cljs.core.apply.call(null,cljs.core.hash_map,map__29440):map__29440);
var file = cljs.core.get.call(null,map__29440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29441){
var map__29442 = p__29441;
var map__29442__$1 = ((cljs.core.seq_QMARK_.call(null,map__29442))?cljs.core.apply.call(null,cljs.core.hash_map,map__29442):map__29442);
var namespace = cljs.core.get.call(null,map__29442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29443){if((e29443 instanceof Error)){
var e = e29443;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29443;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29445 = arguments.length;
switch (G__29445) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29447,callback){
var map__29449 = p__29447;
var map__29449__$1 = ((cljs.core.seq_QMARK_.call(null,map__29449))?cljs.core.apply.call(null,cljs.core.hash_map,map__29449):map__29449);
var file_msg = map__29449__$1;
var request_url = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29449,map__29449__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29449,map__29449__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29450){
var map__29452 = p__29450;
var map__29452__$1 = ((cljs.core.seq_QMARK_.call(null,map__29452))?cljs.core.apply.call(null,cljs.core.hash_map,map__29452):map__29452);
var file_msg = map__29452__$1;
var meta_data = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18160__auto__ = meta_data;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18148__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18148__auto__){
var or__18160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto____$1)){
return or__18160__auto____$1;
} else {
var and__18148__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18148__auto____$1){
var or__18160__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18160__auto____$2){
return or__18160__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18148__auto____$1;
}
}
}
} else {
return and__18148__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29453,callback){
var map__29455 = p__29453;
var map__29455__$1 = ((cljs.core.seq_QMARK_.call(null,map__29455))?cljs.core.apply.call(null,cljs.core.hash_map,map__29455):map__29455);
var file_msg = map__29455__$1;
var namespace = cljs.core.get.call(null,map__29455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29455__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21384__auto___29542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___29542,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___29542,out){
return (function (state_29524){
var state_val_29525 = (state_29524[(1)]);
if((state_val_29525 === (7))){
var inst_29508 = (state_29524[(7)]);
var inst_29514 = (state_29524[(2)]);
var inst_29515 = cljs.core.async.put_BANG_.call(null,out,inst_29514);
var inst_29504 = inst_29508;
var state_29524__$1 = (function (){var statearr_29526 = state_29524;
(statearr_29526[(8)] = inst_29504);

(statearr_29526[(9)] = inst_29515);

return statearr_29526;
})();
var statearr_29527_29543 = state_29524__$1;
(statearr_29527_29543[(2)] = null);

(statearr_29527_29543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (6))){
var inst_29520 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
var statearr_29528_29544 = state_29524__$1;
(statearr_29528_29544[(2)] = inst_29520);

(statearr_29528_29544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (5))){
var inst_29518 = cljs.core.async.close_BANG_.call(null,out);
var state_29524__$1 = state_29524;
var statearr_29529_29545 = state_29524__$1;
(statearr_29529_29545[(2)] = inst_29518);

(statearr_29529_29545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (4))){
var inst_29507 = (state_29524[(10)]);
var inst_29512 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29507);
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29524__$1,(7),inst_29512);
} else {
if((state_val_29525 === (3))){
var inst_29522 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29524__$1,inst_29522);
} else {
if((state_val_29525 === (2))){
var inst_29507 = (state_29524[(10)]);
var inst_29504 = (state_29524[(8)]);
var inst_29507__$1 = cljs.core.nth.call(null,inst_29504,(0),null);
var inst_29508 = cljs.core.nthnext.call(null,inst_29504,(1));
var inst_29509 = (inst_29507__$1 == null);
var inst_29510 = cljs.core.not.call(null,inst_29509);
var state_29524__$1 = (function (){var statearr_29530 = state_29524;
(statearr_29530[(10)] = inst_29507__$1);

(statearr_29530[(7)] = inst_29508);

return statearr_29530;
})();
if(inst_29510){
var statearr_29531_29546 = state_29524__$1;
(statearr_29531_29546[(1)] = (4));

} else {
var statearr_29532_29547 = state_29524__$1;
(statearr_29532_29547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (1))){
var inst_29502 = cljs.core.nth.call(null,files,(0),null);
var inst_29503 = cljs.core.nthnext.call(null,files,(1));
var inst_29504 = files;
var state_29524__$1 = (function (){var statearr_29533 = state_29524;
(statearr_29533[(11)] = inst_29503);

(statearr_29533[(12)] = inst_29502);

(statearr_29533[(8)] = inst_29504);

return statearr_29533;
})();
var statearr_29534_29548 = state_29524__$1;
(statearr_29534_29548[(2)] = null);

(statearr_29534_29548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21384__auto___29542,out))
;
return ((function (switch__21322__auto__,c__21384__auto___29542,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0 = (function (){
var statearr_29538 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29538[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__);

(statearr_29538[(1)] = (1));

return statearr_29538;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1 = (function (state_29524){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29539){if((e29539 instanceof Object)){
var ex__21326__auto__ = e29539;
var statearr_29540_29549 = state_29524;
(statearr_29540_29549[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29550 = state_29524;
state_29524 = G__29550;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__ = function(state_29524){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1.call(this,state_29524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___29542,out))
})();
var state__21386__auto__ = (function (){var statearr_29541 = f__21385__auto__.call(null);
(statearr_29541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___29542);

return statearr_29541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___29542,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29551,p__29552){
var map__29555 = p__29551;
var map__29555__$1 = ((cljs.core.seq_QMARK_.call(null,map__29555))?cljs.core.apply.call(null,cljs.core.hash_map,map__29555):map__29555);
var opts = map__29555__$1;
var url_rewriter = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29556 = p__29552;
var map__29556__$1 = ((cljs.core.seq_QMARK_.call(null,map__29556))?cljs.core.apply.call(null,cljs.core.hash_map,map__29556):map__29556);
var file_msg = map__29556__$1;
var file = cljs.core.get.call(null,map__29556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29557){
var map__29560 = p__29557;
var map__29560__$1 = ((cljs.core.seq_QMARK_.call(null,map__29560))?cljs.core.apply.call(null,cljs.core.hash_map,map__29560):map__29560);
var file = cljs.core.get.call(null,map__29560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29560__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18148__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18148__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18148__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29561){var e = e29561;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29566,p__29567){
var map__29769 = p__29566;
var map__29769__$1 = ((cljs.core.seq_QMARK_.call(null,map__29769))?cljs.core.apply.call(null,cljs.core.hash_map,map__29769):map__29769);
var opts = map__29769__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29770 = p__29567;
var map__29770__$1 = ((cljs.core.seq_QMARK_.call(null,map__29770))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);
var msg = map__29770__$1;
var files = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (state_29895){
var state_val_29896 = (state_29895[(1)]);
if((state_val_29896 === (7))){
var inst_29782 = (state_29895[(7)]);
var inst_29783 = (state_29895[(8)]);
var inst_29785 = (state_29895[(9)]);
var inst_29784 = (state_29895[(10)]);
var inst_29790 = cljs.core._nth.call(null,inst_29783,inst_29785);
var inst_29791 = figwheel.client.file_reloading.eval_body.call(null,inst_29790);
var inst_29792 = (inst_29785 + (1));
var tmp29897 = inst_29782;
var tmp29898 = inst_29783;
var tmp29899 = inst_29784;
var inst_29782__$1 = tmp29897;
var inst_29783__$1 = tmp29898;
var inst_29784__$1 = tmp29899;
var inst_29785__$1 = inst_29792;
var state_29895__$1 = (function (){var statearr_29900 = state_29895;
(statearr_29900[(7)] = inst_29782__$1);

(statearr_29900[(11)] = inst_29791);

(statearr_29900[(8)] = inst_29783__$1);

(statearr_29900[(9)] = inst_29785__$1);

(statearr_29900[(10)] = inst_29784__$1);

return statearr_29900;
})();
var statearr_29901_29970 = state_29895__$1;
(statearr_29901_29970[(2)] = null);

(statearr_29901_29970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (20))){
var inst_29831 = (state_29895[(12)]);
var inst_29827 = (state_29895[(13)]);
var inst_29832 = (state_29895[(14)]);
var inst_29834 = (state_29895[(15)]);
var inst_29828 = (state_29895[(16)]);
var inst_29837 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29839 = (function (){var files_not_loaded = inst_29834;
var res = inst_29832;
var res_SINGLEQUOTE_ = inst_29831;
var files_SINGLEQUOTE_ = inst_29828;
var all_files = inst_29827;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29834,inst_29828,inst_29837,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (p__29838){
var map__29902 = p__29838;
var map__29902__$1 = ((cljs.core.seq_QMARK_.call(null,map__29902))?cljs.core.apply.call(null,cljs.core.hash_map,map__29902):map__29902);
var file = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29834,inst_29828,inst_29837,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29840 = cljs.core.map.call(null,inst_29839,inst_29832);
var inst_29841 = cljs.core.pr_str.call(null,inst_29840);
var inst_29842 = figwheel.client.utils.log.call(null,inst_29841);
var inst_29843 = (function (){var files_not_loaded = inst_29834;
var res = inst_29832;
var res_SINGLEQUOTE_ = inst_29831;
var files_SINGLEQUOTE_ = inst_29828;
var all_files = inst_29827;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29834,inst_29828,inst_29837,inst_29839,inst_29840,inst_29841,inst_29842,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29834,inst_29828,inst_29837,inst_29839,inst_29840,inst_29841,inst_29842,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29844 = setTimeout(inst_29843,(10));
var state_29895__$1 = (function (){var statearr_29903 = state_29895;
(statearr_29903[(17)] = inst_29837);

(statearr_29903[(18)] = inst_29842);

return statearr_29903;
})();
var statearr_29904_29971 = state_29895__$1;
(statearr_29904_29971[(2)] = inst_29844);

(statearr_29904_29971[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (27))){
var inst_29854 = (state_29895[(19)]);
var state_29895__$1 = state_29895;
var statearr_29905_29972 = state_29895__$1;
(statearr_29905_29972[(2)] = inst_29854);

(statearr_29905_29972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (1))){
var inst_29774 = (state_29895[(20)]);
var inst_29771 = before_jsload.call(null,files);
var inst_29772 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29773 = (function (){return ((function (inst_29774,inst_29771,inst_29772,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (p1__29562_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29562_SHARP_);
});
;})(inst_29774,inst_29771,inst_29772,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29774__$1 = cljs.core.filter.call(null,inst_29773,files);
var inst_29775 = cljs.core.not_empty.call(null,inst_29774__$1);
var state_29895__$1 = (function (){var statearr_29906 = state_29895;
(statearr_29906[(21)] = inst_29771);

(statearr_29906[(22)] = inst_29772);

(statearr_29906[(20)] = inst_29774__$1);

return statearr_29906;
})();
if(cljs.core.truth_(inst_29775)){
var statearr_29907_29973 = state_29895__$1;
(statearr_29907_29973[(1)] = (2));

} else {
var statearr_29908_29974 = state_29895__$1;
(statearr_29908_29974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (24))){
var state_29895__$1 = state_29895;
var statearr_29909_29975 = state_29895__$1;
(statearr_29909_29975[(2)] = null);

(statearr_29909_29975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (4))){
var inst_29819 = (state_29895[(2)]);
var inst_29820 = (function (){return ((function (inst_29819,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (p1__29563_SHARP_){
var and__18148__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29563_SHARP_);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29563_SHARP_));
} else {
return and__18148__auto__;
}
});
;})(inst_29819,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29821 = cljs.core.filter.call(null,inst_29820,files);
var state_29895__$1 = (function (){var statearr_29910 = state_29895;
(statearr_29910[(23)] = inst_29821);

(statearr_29910[(24)] = inst_29819);

return statearr_29910;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29911_29976 = state_29895__$1;
(statearr_29911_29976[(1)] = (16));

} else {
var statearr_29912_29977 = state_29895__$1;
(statearr_29912_29977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (15))){
var inst_29809 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29913_29978 = state_29895__$1;
(statearr_29913_29978[(2)] = inst_29809);

(statearr_29913_29978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (21))){
var state_29895__$1 = state_29895;
var statearr_29914_29979 = state_29895__$1;
(statearr_29914_29979[(2)] = null);

(statearr_29914_29979[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (31))){
var inst_29862 = (state_29895[(25)]);
var inst_29872 = (state_29895[(2)]);
var inst_29873 = cljs.core.not_empty.call(null,inst_29862);
var state_29895__$1 = (function (){var statearr_29915 = state_29895;
(statearr_29915[(26)] = inst_29872);

return statearr_29915;
})();
if(cljs.core.truth_(inst_29873)){
var statearr_29916_29980 = state_29895__$1;
(statearr_29916_29980[(1)] = (32));

} else {
var statearr_29917_29981 = state_29895__$1;
(statearr_29917_29981[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (32))){
var inst_29862 = (state_29895[(25)]);
var inst_29875 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29862);
var inst_29876 = cljs.core.pr_str.call(null,inst_29875);
var inst_29877 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29876)].join('');
var inst_29878 = figwheel.client.utils.log.call(null,inst_29877);
var state_29895__$1 = state_29895;
var statearr_29918_29982 = state_29895__$1;
(statearr_29918_29982[(2)] = inst_29878);

(statearr_29918_29982[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (33))){
var state_29895__$1 = state_29895;
var statearr_29919_29983 = state_29895__$1;
(statearr_29919_29983[(2)] = null);

(statearr_29919_29983[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (13))){
var inst_29795 = (state_29895[(27)]);
var inst_29799 = cljs.core.chunk_first.call(null,inst_29795);
var inst_29800 = cljs.core.chunk_rest.call(null,inst_29795);
var inst_29801 = cljs.core.count.call(null,inst_29799);
var inst_29782 = inst_29800;
var inst_29783 = inst_29799;
var inst_29784 = inst_29801;
var inst_29785 = (0);
var state_29895__$1 = (function (){var statearr_29920 = state_29895;
(statearr_29920[(7)] = inst_29782);

(statearr_29920[(8)] = inst_29783);

(statearr_29920[(9)] = inst_29785);

(statearr_29920[(10)] = inst_29784);

return statearr_29920;
})();
var statearr_29921_29984 = state_29895__$1;
(statearr_29921_29984[(2)] = null);

(statearr_29921_29984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (22))){
var inst_29834 = (state_29895[(15)]);
var inst_29847 = (state_29895[(2)]);
var inst_29848 = cljs.core.not_empty.call(null,inst_29834);
var state_29895__$1 = (function (){var statearr_29922 = state_29895;
(statearr_29922[(28)] = inst_29847);

return statearr_29922;
})();
if(cljs.core.truth_(inst_29848)){
var statearr_29923_29985 = state_29895__$1;
(statearr_29923_29985[(1)] = (23));

} else {
var statearr_29924_29986 = state_29895__$1;
(statearr_29924_29986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (36))){
var state_29895__$1 = state_29895;
var statearr_29925_29987 = state_29895__$1;
(statearr_29925_29987[(2)] = null);

(statearr_29925_29987[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (29))){
var inst_29863 = (state_29895[(29)]);
var inst_29866 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29863);
var inst_29867 = cljs.core.pr_str.call(null,inst_29866);
var inst_29868 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29867)].join('');
var inst_29869 = figwheel.client.utils.log.call(null,inst_29868);
var state_29895__$1 = state_29895;
var statearr_29926_29988 = state_29895__$1;
(statearr_29926_29988[(2)] = inst_29869);

(statearr_29926_29988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (6))){
var inst_29816 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29927_29989 = state_29895__$1;
(statearr_29927_29989[(2)] = inst_29816);

(statearr_29927_29989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (28))){
var inst_29863 = (state_29895[(29)]);
var inst_29860 = (state_29895[(2)]);
var inst_29861 = cljs.core.get.call(null,inst_29860,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29862 = cljs.core.get.call(null,inst_29860,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29863__$1 = cljs.core.get.call(null,inst_29860,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29864 = cljs.core.not_empty.call(null,inst_29863__$1);
var state_29895__$1 = (function (){var statearr_29928 = state_29895;
(statearr_29928[(30)] = inst_29861);

(statearr_29928[(29)] = inst_29863__$1);

(statearr_29928[(25)] = inst_29862);

return statearr_29928;
})();
if(cljs.core.truth_(inst_29864)){
var statearr_29929_29990 = state_29895__$1;
(statearr_29929_29990[(1)] = (29));

} else {
var statearr_29930_29991 = state_29895__$1;
(statearr_29930_29991[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (25))){
var inst_29893 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29895__$1,inst_29893);
} else {
if((state_val_29896 === (34))){
var inst_29861 = (state_29895[(30)]);
var inst_29881 = (state_29895[(2)]);
var inst_29882 = cljs.core.not_empty.call(null,inst_29861);
var state_29895__$1 = (function (){var statearr_29931 = state_29895;
(statearr_29931[(31)] = inst_29881);

return statearr_29931;
})();
if(cljs.core.truth_(inst_29882)){
var statearr_29932_29992 = state_29895__$1;
(statearr_29932_29992[(1)] = (35));

} else {
var statearr_29933_29993 = state_29895__$1;
(statearr_29933_29993[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (17))){
var inst_29821 = (state_29895[(23)]);
var state_29895__$1 = state_29895;
var statearr_29934_29994 = state_29895__$1;
(statearr_29934_29994[(2)] = inst_29821);

(statearr_29934_29994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (3))){
var state_29895__$1 = state_29895;
var statearr_29935_29995 = state_29895__$1;
(statearr_29935_29995[(2)] = null);

(statearr_29935_29995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (12))){
var inst_29812 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29936_29996 = state_29895__$1;
(statearr_29936_29996[(2)] = inst_29812);

(statearr_29936_29996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (2))){
var inst_29774 = (state_29895[(20)]);
var inst_29781 = cljs.core.seq.call(null,inst_29774);
var inst_29782 = inst_29781;
var inst_29783 = null;
var inst_29784 = (0);
var inst_29785 = (0);
var state_29895__$1 = (function (){var statearr_29937 = state_29895;
(statearr_29937[(7)] = inst_29782);

(statearr_29937[(8)] = inst_29783);

(statearr_29937[(9)] = inst_29785);

(statearr_29937[(10)] = inst_29784);

return statearr_29937;
})();
var statearr_29938_29997 = state_29895__$1;
(statearr_29938_29997[(2)] = null);

(statearr_29938_29997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (23))){
var inst_29831 = (state_29895[(12)]);
var inst_29827 = (state_29895[(13)]);
var inst_29832 = (state_29895[(14)]);
var inst_29854 = (state_29895[(19)]);
var inst_29834 = (state_29895[(15)]);
var inst_29828 = (state_29895[(16)]);
var inst_29850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29853 = (function (){var files_not_loaded = inst_29834;
var res = inst_29832;
var res_SINGLEQUOTE_ = inst_29831;
var files_SINGLEQUOTE_ = inst_29828;
var all_files = inst_29827;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29854,inst_29834,inst_29828,inst_29850,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (p__29852){
var map__29939 = p__29852;
var map__29939__$1 = ((cljs.core.seq_QMARK_.call(null,map__29939))?cljs.core.apply.call(null,cljs.core.hash_map,map__29939):map__29939);
var meta_data = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29854,inst_29834,inst_29828,inst_29850,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29854__$1 = cljs.core.group_by.call(null,inst_29853,inst_29834);
var inst_29855 = cljs.core.seq_QMARK_.call(null,inst_29854__$1);
var state_29895__$1 = (function (){var statearr_29940 = state_29895;
(statearr_29940[(32)] = inst_29850);

(statearr_29940[(19)] = inst_29854__$1);

return statearr_29940;
})();
if(inst_29855){
var statearr_29941_29998 = state_29895__$1;
(statearr_29941_29998[(1)] = (26));

} else {
var statearr_29942_29999 = state_29895__$1;
(statearr_29942_29999[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (35))){
var inst_29861 = (state_29895[(30)]);
var inst_29884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29861);
var inst_29885 = cljs.core.pr_str.call(null,inst_29884);
var inst_29886 = [cljs.core.str("not required: "),cljs.core.str(inst_29885)].join('');
var inst_29887 = figwheel.client.utils.log.call(null,inst_29886);
var state_29895__$1 = state_29895;
var statearr_29943_30000 = state_29895__$1;
(statearr_29943_30000[(2)] = inst_29887);

(statearr_29943_30000[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (19))){
var inst_29831 = (state_29895[(12)]);
var inst_29827 = (state_29895[(13)]);
var inst_29832 = (state_29895[(14)]);
var inst_29828 = (state_29895[(16)]);
var inst_29831__$1 = (state_29895[(2)]);
var inst_29832__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29831__$1);
var inst_29833 = (function (){var res = inst_29832__$1;
var res_SINGLEQUOTE_ = inst_29831__$1;
var files_SINGLEQUOTE_ = inst_29828;
var all_files = inst_29827;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29828,inst_29831__$1,inst_29832__$1,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (p1__29565_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29565_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29831,inst_29827,inst_29832,inst_29828,inst_29831__$1,inst_29832__$1,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29834 = cljs.core.filter.call(null,inst_29833,inst_29831__$1);
var inst_29835 = cljs.core.not_empty.call(null,inst_29832__$1);
var state_29895__$1 = (function (){var statearr_29944 = state_29895;
(statearr_29944[(12)] = inst_29831__$1);

(statearr_29944[(14)] = inst_29832__$1);

(statearr_29944[(15)] = inst_29834);

return statearr_29944;
})();
if(cljs.core.truth_(inst_29835)){
var statearr_29945_30001 = state_29895__$1;
(statearr_29945_30001[(1)] = (20));

} else {
var statearr_29946_30002 = state_29895__$1;
(statearr_29946_30002[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (11))){
var state_29895__$1 = state_29895;
var statearr_29947_30003 = state_29895__$1;
(statearr_29947_30003[(2)] = null);

(statearr_29947_30003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (9))){
var inst_29814 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29948_30004 = state_29895__$1;
(statearr_29948_30004[(2)] = inst_29814);

(statearr_29948_30004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (5))){
var inst_29785 = (state_29895[(9)]);
var inst_29784 = (state_29895[(10)]);
var inst_29787 = (inst_29785 < inst_29784);
var inst_29788 = inst_29787;
var state_29895__$1 = state_29895;
if(cljs.core.truth_(inst_29788)){
var statearr_29949_30005 = state_29895__$1;
(statearr_29949_30005[(1)] = (7));

} else {
var statearr_29950_30006 = state_29895__$1;
(statearr_29950_30006[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (14))){
var inst_29795 = (state_29895[(27)]);
var inst_29804 = cljs.core.first.call(null,inst_29795);
var inst_29805 = figwheel.client.file_reloading.eval_body.call(null,inst_29804);
var inst_29806 = cljs.core.next.call(null,inst_29795);
var inst_29782 = inst_29806;
var inst_29783 = null;
var inst_29784 = (0);
var inst_29785 = (0);
var state_29895__$1 = (function (){var statearr_29951 = state_29895;
(statearr_29951[(7)] = inst_29782);

(statearr_29951[(33)] = inst_29805);

(statearr_29951[(8)] = inst_29783);

(statearr_29951[(9)] = inst_29785);

(statearr_29951[(10)] = inst_29784);

return statearr_29951;
})();
var statearr_29952_30007 = state_29895__$1;
(statearr_29952_30007[(2)] = null);

(statearr_29952_30007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (26))){
var inst_29854 = (state_29895[(19)]);
var inst_29857 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29854);
var state_29895__$1 = state_29895;
var statearr_29953_30008 = state_29895__$1;
(statearr_29953_30008[(2)] = inst_29857);

(statearr_29953_30008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (16))){
var inst_29821 = (state_29895[(23)]);
var inst_29823 = (function (){var all_files = inst_29821;
return ((function (all_files,inst_29821,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function (p1__29564_SHARP_){
return cljs.core.update_in.call(null,p1__29564_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29821,state_val_29896,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var inst_29824 = cljs.core.map.call(null,inst_29823,inst_29821);
var state_29895__$1 = state_29895;
var statearr_29954_30009 = state_29895__$1;
(statearr_29954_30009[(2)] = inst_29824);

(statearr_29954_30009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (30))){
var state_29895__$1 = state_29895;
var statearr_29955_30010 = state_29895__$1;
(statearr_29955_30010[(2)] = null);

(statearr_29955_30010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (10))){
var inst_29795 = (state_29895[(27)]);
var inst_29797 = cljs.core.chunked_seq_QMARK_.call(null,inst_29795);
var state_29895__$1 = state_29895;
if(inst_29797){
var statearr_29956_30011 = state_29895__$1;
(statearr_29956_30011[(1)] = (13));

} else {
var statearr_29957_30012 = state_29895__$1;
(statearr_29957_30012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (18))){
var inst_29827 = (state_29895[(13)]);
var inst_29828 = (state_29895[(16)]);
var inst_29827__$1 = (state_29895[(2)]);
var inst_29828__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29827__$1);
var inst_29829 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29828__$1);
var state_29895__$1 = (function (){var statearr_29958 = state_29895;
(statearr_29958[(13)] = inst_29827__$1);

(statearr_29958[(16)] = inst_29828__$1);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29895__$1,(19),inst_29829);
} else {
if((state_val_29896 === (37))){
var inst_29890 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29959_30013 = state_29895__$1;
(statearr_29959_30013[(2)] = inst_29890);

(statearr_29959_30013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29896 === (8))){
var inst_29782 = (state_29895[(7)]);
var inst_29795 = (state_29895[(27)]);
var inst_29795__$1 = cljs.core.seq.call(null,inst_29782);
var state_29895__$1 = (function (){var statearr_29960 = state_29895;
(statearr_29960[(27)] = inst_29795__$1);

return statearr_29960;
})();
if(inst_29795__$1){
var statearr_29961_30014 = state_29895__$1;
(statearr_29961_30014[(1)] = (10));

} else {
var statearr_29962_30015 = state_29895__$1;
(statearr_29962_30015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
;
return ((function (switch__21322__auto__,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0 = (function (){
var statearr_29966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29966[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__);

(statearr_29966[(1)] = (1));

return statearr_29966;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1 = (function (state_29895){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29967){if((e29967 instanceof Object)){
var ex__21326__auto__ = e29967;
var statearr_29968_30016 = state_29895;
(statearr_29968_30016[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30017 = state_29895;
state_29895 = G__30017;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__ = function(state_29895){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1.call(this,state_29895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
})();
var state__21386__auto__ = (function (){var statearr_29969 = f__21385__auto__.call(null);
(statearr_29969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,map__29769,map__29769__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29770,map__29770__$1,msg,files))
);

return c__21384__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30020,link){
var map__30022 = p__30020;
var map__30022__$1 = ((cljs.core.seq_QMARK_.call(null,map__30022))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);
var file = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30022,map__30022__$1,file){
return (function (p1__30018_SHARP_,p2__30019_SHARP_){
if(cljs.core._EQ_.call(null,p1__30018_SHARP_,p2__30019_SHARP_)){
return p1__30018_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30022,map__30022__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30026){
var map__30027 = p__30026;
var map__30027__$1 = ((cljs.core.seq_QMARK_.call(null,map__30027))?cljs.core.apply.call(null,cljs.core.hash_map,map__30027):map__30027);
var current_url_length = cljs.core.get.call(null,map__30027__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30027__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30023_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30023_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30029 = arguments.length;
switch (G__30029) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30031){
var map__30033 = p__30031;
var map__30033__$1 = ((cljs.core.seq_QMARK_.call(null,map__30033))?cljs.core.apply.call(null,cljs.core.hash_map,map__30033):map__30033);
var f_data = map__30033__$1;
var request_url = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18160__auto__ = request_url;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30034,files_msg){
var map__30056 = p__30034;
var map__30056__$1 = ((cljs.core.seq_QMARK_.call(null,map__30056))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);
var opts = map__30056__$1;
var on_cssload = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30057_30077 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30058_30078 = null;
var count__30059_30079 = (0);
var i__30060_30080 = (0);
while(true){
if((i__30060_30080 < count__30059_30079)){
var f_30081 = cljs.core._nth.call(null,chunk__30058_30078,i__30060_30080);
figwheel.client.file_reloading.reload_css_file.call(null,f_30081);

var G__30082 = seq__30057_30077;
var G__30083 = chunk__30058_30078;
var G__30084 = count__30059_30079;
var G__30085 = (i__30060_30080 + (1));
seq__30057_30077 = G__30082;
chunk__30058_30078 = G__30083;
count__30059_30079 = G__30084;
i__30060_30080 = G__30085;
continue;
} else {
var temp__4126__auto___30086 = cljs.core.seq.call(null,seq__30057_30077);
if(temp__4126__auto___30086){
var seq__30057_30087__$1 = temp__4126__auto___30086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30057_30087__$1)){
var c__18945__auto___30088 = cljs.core.chunk_first.call(null,seq__30057_30087__$1);
var G__30089 = cljs.core.chunk_rest.call(null,seq__30057_30087__$1);
var G__30090 = c__18945__auto___30088;
var G__30091 = cljs.core.count.call(null,c__18945__auto___30088);
var G__30092 = (0);
seq__30057_30077 = G__30089;
chunk__30058_30078 = G__30090;
count__30059_30079 = G__30091;
i__30060_30080 = G__30092;
continue;
} else {
var f_30093 = cljs.core.first.call(null,seq__30057_30087__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30093);

var G__30094 = cljs.core.next.call(null,seq__30057_30087__$1);
var G__30095 = null;
var G__30096 = (0);
var G__30097 = (0);
seq__30057_30077 = G__30094;
chunk__30058_30078 = G__30095;
count__30059_30079 = G__30096;
i__30060_30080 = G__30097;
continue;
}
} else {
}
}
break;
}

var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,map__30056,map__30056__$1,opts,on_cssload){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,map__30056,map__30056__$1,opts,on_cssload){
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (2))){
var inst_30063 = (state_30067[(2)]);
var inst_30064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30065 = on_cssload.call(null,inst_30064);
var state_30067__$1 = (function (){var statearr_30069 = state_30067;
(statearr_30069[(7)] = inst_30063);

return statearr_30069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (1))){
var inst_30061 = cljs.core.async.timeout.call(null,(100));
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30067__$1,(2),inst_30061);
} else {
return null;
}
}
});})(c__21384__auto__,map__30056,map__30056__$1,opts,on_cssload))
;
return ((function (switch__21322__auto__,c__21384__auto__,map__30056,map__30056__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0 = (function (){
var statearr_30073 = [null,null,null,null,null,null,null,null];
(statearr_30073[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__);

(statearr_30073[(1)] = (1));

return statearr_30073;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1 = (function (state_30067){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_30067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e30074){if((e30074 instanceof Object)){
var ex__21326__auto__ = e30074;
var statearr_30075_30098 = state_30067;
(statearr_30075_30098[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30099 = state_30067;
state_30067 = G__30099;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,map__30056,map__30056__$1,opts,on_cssload))
})();
var state__21386__auto__ = (function (){var statearr_30076 = f__21385__auto__.call(null);
(statearr_30076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_30076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,map__30056,map__30056__$1,opts,on_cssload))
);

return c__21384__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446451741965
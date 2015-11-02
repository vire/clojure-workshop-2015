// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28383__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28384__i = 0, G__28384__a = new Array(arguments.length -  0);
while (G__28384__i < G__28384__a.length) {G__28384__a[G__28384__i] = arguments[G__28384__i + 0]; ++G__28384__i;}
  args = new cljs.core.IndexedSeq(G__28384__a,0);
} 
return G__28383__delegate.call(this,args);};
G__28383.cljs$lang$maxFixedArity = 0;
G__28383.cljs$lang$applyTo = (function (arglist__28385){
var args = cljs.core.seq(arglist__28385);
return G__28383__delegate(args);
});
G__28383.cljs$core$IFn$_invoke$arity$variadic = G__28383__delegate;
return G__28383;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28386){
var map__28388 = p__28386;
var map__28388__$1 = ((cljs.core.seq_QMARK_.call(null,map__28388))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var class$ = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18160__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18148__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18148__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18148__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21384__auto___28517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28517,ch){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28517,ch){
return (function (state_28491){
var state_val_28492 = (state_28491[(1)]);
if((state_val_28492 === (7))){
var inst_28487 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
var statearr_28493_28518 = state_28491__$1;
(statearr_28493_28518[(2)] = inst_28487);

(statearr_28493_28518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (1))){
var state_28491__$1 = state_28491;
var statearr_28494_28519 = state_28491__$1;
(statearr_28494_28519[(2)] = null);

(statearr_28494_28519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (4))){
var inst_28455 = (state_28491[(7)]);
var inst_28455__$1 = (state_28491[(2)]);
var state_28491__$1 = (function (){var statearr_28495 = state_28491;
(statearr_28495[(7)] = inst_28455__$1);

return statearr_28495;
})();
if(cljs.core.truth_(inst_28455__$1)){
var statearr_28496_28520 = state_28491__$1;
(statearr_28496_28520[(1)] = (5));

} else {
var statearr_28497_28521 = state_28491__$1;
(statearr_28497_28521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (13))){
var state_28491__$1 = state_28491;
var statearr_28498_28522 = state_28491__$1;
(statearr_28498_28522[(2)] = null);

(statearr_28498_28522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (6))){
var state_28491__$1 = state_28491;
var statearr_28499_28523 = state_28491__$1;
(statearr_28499_28523[(2)] = null);

(statearr_28499_28523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (3))){
var inst_28489 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28491__$1,inst_28489);
} else {
if((state_val_28492 === (12))){
var inst_28462 = (state_28491[(8)]);
var inst_28475 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28462);
var inst_28476 = cljs.core.first.call(null,inst_28475);
var inst_28477 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28476);
var inst_28478 = console.warn("Figwheel: Not loading code with warnings - ",inst_28477);
var state_28491__$1 = state_28491;
var statearr_28500_28524 = state_28491__$1;
(statearr_28500_28524[(2)] = inst_28478);

(statearr_28500_28524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (2))){
var state_28491__$1 = state_28491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28491__$1,(4),ch);
} else {
if((state_val_28492 === (11))){
var inst_28471 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
var statearr_28501_28525 = state_28491__$1;
(statearr_28501_28525[(2)] = inst_28471);

(statearr_28501_28525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (9))){
var inst_28461 = (state_28491[(9)]);
var inst_28473 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28461,opts);
var state_28491__$1 = state_28491;
if(cljs.core.truth_(inst_28473)){
var statearr_28502_28526 = state_28491__$1;
(statearr_28502_28526[(1)] = (12));

} else {
var statearr_28503_28527 = state_28491__$1;
(statearr_28503_28527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (5))){
var inst_28455 = (state_28491[(7)]);
var inst_28461 = (state_28491[(9)]);
var inst_28457 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28458 = (new cljs.core.PersistentArrayMap(null,2,inst_28457,null));
var inst_28459 = (new cljs.core.PersistentHashSet(null,inst_28458,null));
var inst_28460 = figwheel.client.focus_msgs.call(null,inst_28459,inst_28455);
var inst_28461__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28460);
var inst_28462 = cljs.core.first.call(null,inst_28460);
var inst_28463 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28461__$1,opts);
var state_28491__$1 = (function (){var statearr_28504 = state_28491;
(statearr_28504[(8)] = inst_28462);

(statearr_28504[(9)] = inst_28461__$1);

return statearr_28504;
})();
if(cljs.core.truth_(inst_28463)){
var statearr_28505_28528 = state_28491__$1;
(statearr_28505_28528[(1)] = (8));

} else {
var statearr_28506_28529 = state_28491__$1;
(statearr_28506_28529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (14))){
var inst_28481 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
var statearr_28507_28530 = state_28491__$1;
(statearr_28507_28530[(2)] = inst_28481);

(statearr_28507_28530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (10))){
var inst_28483 = (state_28491[(2)]);
var state_28491__$1 = (function (){var statearr_28508 = state_28491;
(statearr_28508[(10)] = inst_28483);

return statearr_28508;
})();
var statearr_28509_28531 = state_28491__$1;
(statearr_28509_28531[(2)] = null);

(statearr_28509_28531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (8))){
var inst_28462 = (state_28491[(8)]);
var inst_28465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28466 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28462);
var inst_28467 = cljs.core.async.timeout.call(null,(1000));
var inst_28468 = [inst_28466,inst_28467];
var inst_28469 = (new cljs.core.PersistentVector(null,2,(5),inst_28465,inst_28468,null));
var state_28491__$1 = state_28491;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28491__$1,(11),inst_28469);
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
});})(c__21384__auto___28517,ch))
;
return ((function (switch__21322__auto__,c__21384__auto___28517,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28513[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__);

(statearr_28513[(1)] = (1));

return statearr_28513;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1 = (function (state_28491){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28514){if((e28514 instanceof Object)){
var ex__21326__auto__ = e28514;
var statearr_28515_28532 = state_28491;
(statearr_28515_28532[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28533 = state_28491;
state_28491 = G__28533;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__ = function(state_28491){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1.call(this,state_28491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28517,ch))
})();
var state__21386__auto__ = (function (){var statearr_28516 = f__21385__auto__.call(null);
(statearr_28516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28517);

return statearr_28516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28517,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28534_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28534_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28541 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28541){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28539 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28540 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28539,_STAR_print_newline_STAR_28540,base_path_28541){
return (function() { 
var G__28542__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28543__i = 0, G__28543__a = new Array(arguments.length -  0);
while (G__28543__i < G__28543__a.length) {G__28543__a[G__28543__i] = arguments[G__28543__i + 0]; ++G__28543__i;}
  args = new cljs.core.IndexedSeq(G__28543__a,0);
} 
return G__28542__delegate.call(this,args);};
G__28542.cljs$lang$maxFixedArity = 0;
G__28542.cljs$lang$applyTo = (function (arglist__28544){
var args = cljs.core.seq(arglist__28544);
return G__28542__delegate(args);
});
G__28542.cljs$core$IFn$_invoke$arity$variadic = G__28542__delegate;
return G__28542;
})()
;})(_STAR_print_fn_STAR_28539,_STAR_print_newline_STAR_28540,base_path_28541))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28540;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28539;
}}catch (e28538){if((e28538 instanceof Error)){
var e = e28538;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28541], null));
} else {
var e = e28538;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28541))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28545){
var map__28550 = p__28545;
var map__28550__$1 = ((cljs.core.seq_QMARK_.call(null,map__28550))?cljs.core.apply.call(null,cljs.core.hash_map,map__28550):map__28550);
var opts = map__28550__$1;
var build_id = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28550,map__28550__$1,opts,build_id){
return (function (p__28551){
var vec__28552 = p__28551;
var map__28553 = cljs.core.nth.call(null,vec__28552,(0),null);
var map__28553__$1 = ((cljs.core.seq_QMARK_.call(null,map__28553))?cljs.core.apply.call(null,cljs.core.hash_map,map__28553):map__28553);
var msg = map__28553__$1;
var msg_name = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28552,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28552,map__28553,map__28553__$1,msg,msg_name,_,map__28550,map__28550__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28552,map__28553,map__28553__$1,msg,msg_name,_,map__28550,map__28550__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28550,map__28550__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28557){
var vec__28558 = p__28557;
var map__28559 = cljs.core.nth.call(null,vec__28558,(0),null);
var map__28559__$1 = ((cljs.core.seq_QMARK_.call(null,map__28559))?cljs.core.apply.call(null,cljs.core.hash_map,map__28559):map__28559);
var msg = map__28559__$1;
var msg_name = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28558,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28560){
var map__28568 = p__28560;
var map__28568__$1 = ((cljs.core.seq_QMARK_.call(null,map__28568))?cljs.core.apply.call(null,cljs.core.hash_map,map__28568):map__28568);
var on_compile_fail = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28568,map__28568__$1,on_compile_fail,on_compile_warning){
return (function (p__28569){
var vec__28570 = p__28569;
var map__28571 = cljs.core.nth.call(null,vec__28570,(0),null);
var map__28571__$1 = ((cljs.core.seq_QMARK_.call(null,map__28571))?cljs.core.apply.call(null,cljs.core.hash_map,map__28571):map__28571);
var msg = map__28571__$1;
var msg_name = cljs.core.get.call(null,map__28571__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28570,(1));
var pred__28572 = cljs.core._EQ_;
var expr__28573 = msg_name;
if(cljs.core.truth_(pred__28572.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28573))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28572.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28573))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28568,map__28568__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,msg_hist,msg_names,msg){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (7))){
var inst_28708 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28776_28817 = state_28774__$1;
(statearr_28776_28817[(2)] = inst_28708);

(statearr_28776_28817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (20))){
var inst_28736 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28736)){
var statearr_28777_28818 = state_28774__$1;
(statearr_28777_28818[(1)] = (22));

} else {
var statearr_28778_28819 = state_28774__$1;
(statearr_28778_28819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (27))){
var inst_28748 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28749 = figwheel.client.heads_up.display_warning.call(null,inst_28748);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(30),inst_28749);
} else {
if((state_val_28775 === (1))){
var inst_28696 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28696)){
var statearr_28779_28820 = state_28774__$1;
(statearr_28779_28820[(1)] = (2));

} else {
var statearr_28780_28821 = state_28774__$1;
(statearr_28780_28821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (24))){
var inst_28764 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28781_28822 = state_28774__$1;
(statearr_28781_28822[(2)] = inst_28764);

(statearr_28781_28822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var inst_28772 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
if((state_val_28775 === (15))){
var inst_28724 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28725 = figwheel.client.format_messages.call(null,inst_28724);
var inst_28726 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28727 = figwheel.client.heads_up.display_error.call(null,inst_28725,inst_28726);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(18),inst_28727);
} else {
if((state_val_28775 === (21))){
var inst_28766 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28782_28823 = state_28774__$1;
(statearr_28782_28823[(2)] = inst_28766);

(statearr_28782_28823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (31))){
var inst_28755 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(34),inst_28755);
} else {
if((state_val_28775 === (32))){
var state_28774__$1 = state_28774;
var statearr_28783_28824 = state_28774__$1;
(statearr_28783_28824[(2)] = null);

(statearr_28783_28824[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (33))){
var inst_28760 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28784_28825 = state_28774__$1;
(statearr_28784_28825[(2)] = inst_28760);

(statearr_28784_28825[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (13))){
var inst_28714 = (state_28774[(2)]);
var inst_28715 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28716 = figwheel.client.format_messages.call(null,inst_28715);
var inst_28717 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28718 = figwheel.client.heads_up.display_error.call(null,inst_28716,inst_28717);
var state_28774__$1 = (function (){var statearr_28785 = state_28774;
(statearr_28785[(7)] = inst_28714);

return statearr_28785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(14),inst_28718);
} else {
if((state_val_28775 === (22))){
var inst_28738 = figwheel.client.heads_up.clear.call(null);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(25),inst_28738);
} else {
if((state_val_28775 === (29))){
var inst_28762 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28786_28826 = state_28774__$1;
(statearr_28786_28826[(2)] = inst_28762);

(statearr_28786_28826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (6))){
var inst_28704 = figwheel.client.heads_up.clear.call(null);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(9),inst_28704);
} else {
if((state_val_28775 === (28))){
var inst_28753 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28753)){
var statearr_28787_28827 = state_28774__$1;
(statearr_28787_28827[(1)] = (31));

} else {
var statearr_28788_28828 = state_28774__$1;
(statearr_28788_28828[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (25))){
var inst_28740 = (state_28774[(2)]);
var inst_28741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28742 = figwheel.client.heads_up.display_warning.call(null,inst_28741);
var state_28774__$1 = (function (){var statearr_28789 = state_28774;
(statearr_28789[(8)] = inst_28740);

return statearr_28789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(26),inst_28742);
} else {
if((state_val_28775 === (34))){
var inst_28757 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28790_28829 = state_28774__$1;
(statearr_28790_28829[(2)] = inst_28757);

(statearr_28790_28829[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (17))){
var inst_28768 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28791_28830 = state_28774__$1;
(statearr_28791_28830[(2)] = inst_28768);

(statearr_28791_28830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28710 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28710)){
var statearr_28792_28831 = state_28774__$1;
(statearr_28792_28831[(1)] = (10));

} else {
var statearr_28793_28832 = state_28774__$1;
(statearr_28793_28832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (12))){
var inst_28770 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28794_28833 = state_28774__$1;
(statearr_28794_28833[(2)] = inst_28770);

(statearr_28794_28833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (2))){
var inst_28698 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28698)){
var statearr_28795_28834 = state_28774__$1;
(statearr_28795_28834[(1)] = (5));

} else {
var statearr_28796_28835 = state_28774__$1;
(statearr_28796_28835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (23))){
var inst_28746 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28746)){
var statearr_28797_28836 = state_28774__$1;
(statearr_28797_28836[(1)] = (27));

} else {
var statearr_28798_28837 = state_28774__$1;
(statearr_28798_28837[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (19))){
var inst_28733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28734 = figwheel.client.heads_up.append_message.call(null,inst_28733);
var state_28774__$1 = state_28774;
var statearr_28799_28838 = state_28774__$1;
(statearr_28799_28838[(2)] = inst_28734);

(statearr_28799_28838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (11))){
var inst_28722 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28722)){
var statearr_28800_28839 = state_28774__$1;
(statearr_28800_28839[(1)] = (15));

} else {
var statearr_28801_28840 = state_28774__$1;
(statearr_28801_28840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (9))){
var inst_28706 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28802_28841 = state_28774__$1;
(statearr_28802_28841[(2)] = inst_28706);

(statearr_28802_28841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (5))){
var inst_28700 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(8),inst_28700);
} else {
if((state_val_28775 === (14))){
var inst_28720 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28803_28842 = state_28774__$1;
(statearr_28803_28842[(2)] = inst_28720);

(statearr_28803_28842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (26))){
var inst_28744 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28804_28843 = state_28774__$1;
(statearr_28804_28843[(2)] = inst_28744);

(statearr_28804_28843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (16))){
var inst_28731 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28731)){
var statearr_28805_28844 = state_28774__$1;
(statearr_28805_28844[(1)] = (19));

} else {
var statearr_28806_28845 = state_28774__$1;
(statearr_28806_28845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (30))){
var inst_28751 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28807_28846 = state_28774__$1;
(statearr_28807_28846[(2)] = inst_28751);

(statearr_28807_28846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (10))){
var inst_28712 = figwheel.client.heads_up.clear.call(null);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(13),inst_28712);
} else {
if((state_val_28775 === (18))){
var inst_28729 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28808_28847 = state_28774__$1;
(statearr_28808_28847[(2)] = inst_28729);

(statearr_28808_28847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (8))){
var inst_28702 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28809_28848 = state_28774__$1;
(statearr_28809_28848[(2)] = inst_28702);

(statearr_28809_28848[(1)] = (7));


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
});})(c__21384__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21322__auto__,c__21384__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0 = (function (){
var statearr_28813 = [null,null,null,null,null,null,null,null,null];
(statearr_28813[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__);

(statearr_28813[(1)] = (1));

return statearr_28813;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1 = (function (state_28774){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28814){if((e28814 instanceof Object)){
var ex__21326__auto__ = e28814;
var statearr_28815_28849 = state_28774;
(statearr_28815_28849[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28850 = state_28774;
state_28774 = G__28850;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,msg_hist,msg_names,msg))
})();
var state__21386__auto__ = (function (){var statearr_28816 = f__21385__auto__.call(null);
(statearr_28816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,msg_hist,msg_names,msg))
);

return c__21384__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21384__auto___28913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28913,ch){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28913,ch){
return (function (state_28896){
var state_val_28897 = (state_28896[(1)]);
if((state_val_28897 === (8))){
var inst_28888 = (state_28896[(2)]);
var state_28896__$1 = (function (){var statearr_28898 = state_28896;
(statearr_28898[(7)] = inst_28888);

return statearr_28898;
})();
var statearr_28899_28914 = state_28896__$1;
(statearr_28899_28914[(2)] = null);

(statearr_28899_28914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28897 === (7))){
var inst_28892 = (state_28896[(2)]);
var state_28896__$1 = state_28896;
var statearr_28900_28915 = state_28896__$1;
(statearr_28900_28915[(2)] = inst_28892);

(statearr_28900_28915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28897 === (6))){
var state_28896__$1 = state_28896;
var statearr_28901_28916 = state_28896__$1;
(statearr_28901_28916[(2)] = null);

(statearr_28901_28916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28897 === (5))){
var inst_28884 = (state_28896[(8)]);
var inst_28886 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28884);
var state_28896__$1 = state_28896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28896__$1,(8),inst_28886);
} else {
if((state_val_28897 === (4))){
var inst_28884 = (state_28896[(8)]);
var inst_28884__$1 = (state_28896[(2)]);
var state_28896__$1 = (function (){var statearr_28902 = state_28896;
(statearr_28902[(8)] = inst_28884__$1);

return statearr_28902;
})();
if(cljs.core.truth_(inst_28884__$1)){
var statearr_28903_28917 = state_28896__$1;
(statearr_28903_28917[(1)] = (5));

} else {
var statearr_28904_28918 = state_28896__$1;
(statearr_28904_28918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28897 === (3))){
var inst_28894 = (state_28896[(2)]);
var state_28896__$1 = state_28896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28896__$1,inst_28894);
} else {
if((state_val_28897 === (2))){
var state_28896__$1 = state_28896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28896__$1,(4),ch);
} else {
if((state_val_28897 === (1))){
var state_28896__$1 = state_28896;
var statearr_28905_28919 = state_28896__$1;
(statearr_28905_28919[(2)] = null);

(statearr_28905_28919[(1)] = (2));


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
});})(c__21384__auto___28913,ch))
;
return ((function (switch__21322__auto__,c__21384__auto___28913,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28909 = [null,null,null,null,null,null,null,null,null];
(statearr_28909[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21323__auto__);

(statearr_28909[(1)] = (1));

return statearr_28909;
});
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1 = (function (state_28896){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28910){if((e28910 instanceof Object)){
var ex__21326__auto__ = e28910;
var statearr_28911_28920 = state_28896;
(statearr_28911_28920[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28921 = state_28896;
state_28896 = G__28921;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__ = function(state_28896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1.call(this,state_28896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28913,ch))
})();
var state__21386__auto__ = (function (){var statearr_28912 = f__21385__auto__.call(null);
(statearr_28912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28913);

return statearr_28912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28913,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_28942){
var state_val_28943 = (state_28942[(1)]);
if((state_val_28943 === (2))){
var inst_28939 = (state_28942[(2)]);
var inst_28940 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28942__$1 = (function (){var statearr_28944 = state_28942;
(statearr_28944[(7)] = inst_28939);

return statearr_28944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28942__$1,inst_28940);
} else {
if((state_val_28943 === (1))){
var inst_28937 = cljs.core.async.timeout.call(null,(3000));
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28942__$1,(2),inst_28937);
} else {
return null;
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28948 = [null,null,null,null,null,null,null,null];
(statearr_28948[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__);

(statearr_28948[(1)] = (1));

return statearr_28948;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1 = (function (state_28942){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28949){if((e28949 instanceof Object)){
var ex__21326__auto__ = e28949;
var statearr_28950_28952 = state_28942;
(statearr_28950_28952[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28953 = state_28942;
state_28942 = G__28953;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__ = function(state_28942){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1.call(this,state_28942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_28951 = f__21385__auto__.call(null);
(statearr_28951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_28951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28954){
var map__28960 = p__28954;
var map__28960__$1 = ((cljs.core.seq_QMARK_.call(null,map__28960))?cljs.core.apply.call(null,cljs.core.hash_map,map__28960):map__28960);
var ed = map__28960__$1;
var cause = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28961_28965 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28962_28966 = null;
var count__28963_28967 = (0);
var i__28964_28968 = (0);
while(true){
if((i__28964_28968 < count__28963_28967)){
var msg_28969 = cljs.core._nth.call(null,chunk__28962_28966,i__28964_28968);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28969);

var G__28970 = seq__28961_28965;
var G__28971 = chunk__28962_28966;
var G__28972 = count__28963_28967;
var G__28973 = (i__28964_28968 + (1));
seq__28961_28965 = G__28970;
chunk__28962_28966 = G__28971;
count__28963_28967 = G__28972;
i__28964_28968 = G__28973;
continue;
} else {
var temp__4126__auto___28974 = cljs.core.seq.call(null,seq__28961_28965);
if(temp__4126__auto___28974){
var seq__28961_28975__$1 = temp__4126__auto___28974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28961_28975__$1)){
var c__18945__auto___28976 = cljs.core.chunk_first.call(null,seq__28961_28975__$1);
var G__28977 = cljs.core.chunk_rest.call(null,seq__28961_28975__$1);
var G__28978 = c__18945__auto___28976;
var G__28979 = cljs.core.count.call(null,c__18945__auto___28976);
var G__28980 = (0);
seq__28961_28965 = G__28977;
chunk__28962_28966 = G__28978;
count__28963_28967 = G__28979;
i__28964_28968 = G__28980;
continue;
} else {
var msg_28981 = cljs.core.first.call(null,seq__28961_28975__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28981);

var G__28982 = cljs.core.next.call(null,seq__28961_28975__$1);
var G__28983 = null;
var G__28984 = (0);
var G__28985 = (0);
seq__28961_28965 = G__28982;
chunk__28962_28966 = G__28983;
count__28963_28967 = G__28984;
i__28964_28968 = G__28985;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28986){
var map__28988 = p__28986;
var map__28988__$1 = ((cljs.core.seq_QMARK_.call(null,map__28988))?cljs.core.apply.call(null,cljs.core.hash_map,map__28988):map__28988);
var w = map__28988__$1;
var message = cljs.core.get.call(null,map__28988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18148__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18148__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18148__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28995 = cljs.core.seq.call(null,plugins);
var chunk__28996 = null;
var count__28997 = (0);
var i__28998 = (0);
while(true){
if((i__28998 < count__28997)){
var vec__28999 = cljs.core._nth.call(null,chunk__28996,i__28998);
var k = cljs.core.nth.call(null,vec__28999,(0),null);
var plugin = cljs.core.nth.call(null,vec__28999,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29001 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28995,chunk__28996,count__28997,i__28998,pl_29001,vec__28999,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29001.call(null,msg_hist);
});})(seq__28995,chunk__28996,count__28997,i__28998,pl_29001,vec__28999,k,plugin))
);
} else {
}

var G__29002 = seq__28995;
var G__29003 = chunk__28996;
var G__29004 = count__28997;
var G__29005 = (i__28998 + (1));
seq__28995 = G__29002;
chunk__28996 = G__29003;
count__28997 = G__29004;
i__28998 = G__29005;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28995);
if(temp__4126__auto__){
var seq__28995__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28995__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__28995__$1);
var G__29006 = cljs.core.chunk_rest.call(null,seq__28995__$1);
var G__29007 = c__18945__auto__;
var G__29008 = cljs.core.count.call(null,c__18945__auto__);
var G__29009 = (0);
seq__28995 = G__29006;
chunk__28996 = G__29007;
count__28997 = G__29008;
i__28998 = G__29009;
continue;
} else {
var vec__29000 = cljs.core.first.call(null,seq__28995__$1);
var k = cljs.core.nth.call(null,vec__29000,(0),null);
var plugin = cljs.core.nth.call(null,vec__29000,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29010 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28995,chunk__28996,count__28997,i__28998,pl_29010,vec__29000,k,plugin,seq__28995__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29010.call(null,msg_hist);
});})(seq__28995,chunk__28996,count__28997,i__28998,pl_29010,vec__29000,k,plugin,seq__28995__$1,temp__4126__auto__))
);
} else {
}

var G__29011 = cljs.core.next.call(null,seq__28995__$1);
var G__29012 = null;
var G__29013 = (0);
var G__29014 = (0);
seq__28995 = G__29011;
chunk__28996 = G__29012;
count__28997 = G__29013;
i__28998 = G__29014;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__29016 = arguments.length;
switch (G__29016) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29019){
var map__29020 = p__29019;
var map__29020__$1 = ((cljs.core.seq_QMARK_.call(null,map__29020))?cljs.core.apply.call(null,cljs.core.hash_map,map__29020):map__29020);
var opts = map__29020__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29018){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29018));
});

//# sourceMappingURL=client.js.map?rel=1446451740953
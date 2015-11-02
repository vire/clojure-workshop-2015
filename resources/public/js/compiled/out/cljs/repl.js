// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29390_29402 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29391_29403 = null;
var count__29392_29404 = (0);
var i__29393_29405 = (0);
while(true){
if((i__29393_29405 < count__29392_29404)){
var f_29406 = cljs.core._nth.call(null,chunk__29391_29403,i__29393_29405);
cljs.core.println.call(null,"  ",f_29406);

var G__29407 = seq__29390_29402;
var G__29408 = chunk__29391_29403;
var G__29409 = count__29392_29404;
var G__29410 = (i__29393_29405 + (1));
seq__29390_29402 = G__29407;
chunk__29391_29403 = G__29408;
count__29392_29404 = G__29409;
i__29393_29405 = G__29410;
continue;
} else {
var temp__4126__auto___29411 = cljs.core.seq.call(null,seq__29390_29402);
if(temp__4126__auto___29411){
var seq__29390_29412__$1 = temp__4126__auto___29411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29390_29412__$1)){
var c__18945__auto___29413 = cljs.core.chunk_first.call(null,seq__29390_29412__$1);
var G__29414 = cljs.core.chunk_rest.call(null,seq__29390_29412__$1);
var G__29415 = c__18945__auto___29413;
var G__29416 = cljs.core.count.call(null,c__18945__auto___29413);
var G__29417 = (0);
seq__29390_29402 = G__29414;
chunk__29391_29403 = G__29415;
count__29392_29404 = G__29416;
i__29393_29405 = G__29417;
continue;
} else {
var f_29418 = cljs.core.first.call(null,seq__29390_29412__$1);
cljs.core.println.call(null,"  ",f_29418);

var G__29419 = cljs.core.next.call(null,seq__29390_29412__$1);
var G__29420 = null;
var G__29421 = (0);
var G__29422 = (0);
seq__29390_29402 = G__29419;
chunk__29391_29403 = G__29420;
count__29392_29404 = G__29421;
i__29393_29405 = G__29422;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29395 = null;
var count__29396 = (0);
var i__29397 = (0);
while(true){
if((i__29397 < count__29396)){
var vec__29398 = cljs.core._nth.call(null,chunk__29395,i__29397);
var name = cljs.core.nth.call(null,vec__29398,(0),null);
var map__29399 = cljs.core.nth.call(null,vec__29398,(1),null);
var map__29399__$1 = ((cljs.core.seq_QMARK_.call(null,map__29399))?cljs.core.apply.call(null,cljs.core.hash_map,map__29399):map__29399);
var arglists = cljs.core.get.call(null,map__29399__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29399__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29423 = seq__29394;
var G__29424 = chunk__29395;
var G__29425 = count__29396;
var G__29426 = (i__29397 + (1));
seq__29394 = G__29423;
chunk__29395 = G__29424;
count__29396 = G__29425;
i__29397 = G__29426;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29394);
if(temp__4126__auto__){
var seq__29394__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29394__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__29394__$1);
var G__29427 = cljs.core.chunk_rest.call(null,seq__29394__$1);
var G__29428 = c__18945__auto__;
var G__29429 = cljs.core.count.call(null,c__18945__auto__);
var G__29430 = (0);
seq__29394 = G__29427;
chunk__29395 = G__29428;
count__29396 = G__29429;
i__29397 = G__29430;
continue;
} else {
var vec__29400 = cljs.core.first.call(null,seq__29394__$1);
var name = cljs.core.nth.call(null,vec__29400,(0),null);
var map__29401 = cljs.core.nth.call(null,vec__29400,(1),null);
var map__29401__$1 = ((cljs.core.seq_QMARK_.call(null,map__29401))?cljs.core.apply.call(null,cljs.core.hash_map,map__29401):map__29401);
var arglists = cljs.core.get.call(null,map__29401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29431 = cljs.core.next.call(null,seq__29394__$1);
var G__29432 = null;
var G__29433 = (0);
var G__29434 = (0);
seq__29394 = G__29431;
chunk__29395 = G__29432;
count__29396 = G__29433;
i__29397 = G__29434;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1446451741571
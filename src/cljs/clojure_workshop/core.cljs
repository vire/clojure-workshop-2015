(ns clojure-workshop.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [clojure-workshop.handlers]
              [clojure-workshop.subs]
              [clojure-workshop.views :as views]))

(def state (reagent/atom 0))

(enable-console-print!)

(defn mount-root []
  (reagent/render [views/comp-with-state]
   (.getElementById js/document "app")))


(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

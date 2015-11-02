(ns clojure-workshop.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [clojure-workshop.handlers]
              [clojure-workshop.subs]
              [clojure-workshop.views :as views]))

(def state (reagent/atom 0))

(defn component-w-state []
  (let [a (reagent/atom 0)]
    (fn []
      [
       :div "Value of the counter is: " @a
       [:button {:on-click #(swap! a inc)} "inc"]
       ]
      )
    )
  )

(defn mount-root []
  (reagent/render
   [
    :div
    [views/smart-counter state]
    [component-w-state]
    views/my-first-component "TestName"]
   (.getElementById js/document "app")))


(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

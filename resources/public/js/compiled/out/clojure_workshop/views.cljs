(ns clojure-workshop.views
    (:require [re-frame.core :as re-frame]))

(defn smart-counter [state]
  [dumb-counter @state])

(defn dumb-counter [count-from-props]
  [:div "Count: " count-from-props])

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div "Hello from " @name])))

(defn my-first-component [name]
  [:div "This is my component " name])

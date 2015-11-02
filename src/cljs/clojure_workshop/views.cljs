(ns clojure-workshop.views
    (:require [re-frame.core :as re-frame]))

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div "Hello from " @name])))


(defn comp-with-state []
  (let [counter (re-frame/subscribe [:counter])]
    (fn []
      (println "Rendered")
      [:div
       "With local state Value of counter is: " @counter
       [:button {:on-click #(re-frame/dispatch [:inc-counter-by 1])} "Inc by 1" ]
       [:button {:on-click #(re-frame/dispatch [:inc-counter-by 2])} "Inc by 2" ]
       ])))

(ns clojure-workshop.handlers
    (:require [re-frame.core :as re-frame]
              [clojure-workshop.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))


(re-frame/register-handler
 :inc-counter-by
 (fn  [db [_ by]]
   (update-in db [:counter] + by)))

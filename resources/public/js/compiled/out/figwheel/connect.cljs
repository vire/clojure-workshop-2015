(ns figwheel.connect (:require [clojure-workshop.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/clojure-workshop.core.mount-root (apply js/clojure-workshop.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'clojure-workshop.core/mount-root' is missing"))), :build-id "dev"})


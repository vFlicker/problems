(def my-atom (atom 0))

(add-watch my-atom "logger"
  (fn [key variable old-state new-state]
    (println
     (format "Change state from %s to %s."
             old-state new-state))))

(swap! my-atom inc)
(swap! my-atom inc)
(swap! my-atom dec)
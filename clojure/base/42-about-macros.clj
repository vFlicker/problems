(defn print-fn [x]
    (println "Hello from fn!")
    x)

(defmacro print-macro [x]
    (println "Hello from macro!")
    x)

(print-fn (println (+ 1 2))) ; 3 Hello from fn!
(print-macro (println (+ 1 2))) ; Hello from macro! 3
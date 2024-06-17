;; (defn maps [functions, arguments_lists]
;;     (map
;;      (fn [function arguments] (map function arguments))
;;      functions, arguments_lists))


(defn maps [fs as] (map map fs as))

(println (maps [(fn [x] (* x x)) (fn [x] (+ x x))] [[1 2 3] [4 5 6]])) ; ((1 4 9) (8 10 12))
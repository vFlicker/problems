(defn increment-numbers [args]
    (map inc (filter number? args)))

(println (increment-numbers [1 2 3 "a" "b" "c"])) ; (2 3 4)
(defn say-boom [text]
    (when (= text "go") "Boom!"))

(println (say-boom "go")) ; Boom!
(println (say-boom "stop")) ; nil
(defn do-today [day-number]
    (case day-number
        (1, 2, 3, 4, 5) "work"
        (6, 7) "rest"
        "???"))

(println (do-today 1)) ; work
(println (do-today 6)) ; rest
(println (do-today 8)) ; ???
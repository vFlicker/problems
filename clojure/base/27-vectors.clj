(defn zip [vector1 vector2]
    (mapv vector vector1 vector2))

(println (zip [1 2 3] [4 5 6])) ; [[1 4] [2 5] [3 6]]
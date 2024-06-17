(defn programmer-level [points]
    (cond 
        (>= points 20) "senior"
        (>= points 10) "middle"
        (>= points 0) "junior"))

(println (programmer-level 20)) ; senior
(println (programmer-level 10)) ; middle
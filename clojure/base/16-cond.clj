(defn programmer-level [points]
    (cond 
        (>= points 20) "senior"
        (>= points 10) "middle"
        (>= points 0) "junior"))
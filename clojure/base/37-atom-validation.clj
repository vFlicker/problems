(defn vec-even? [numbers]
    (and
     (every? even? numbers)
     (not (empty? numbers))))


(println (vec-even? [])) ; false
(println (vec-even? [0 1 4 6])) ; false
(println (vec-even? [0 2 4 6])) ; true
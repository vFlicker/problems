(defn skip [n numbers]
    (if (or
         (<= n 0)
         (empty? numbers))
        numbers
        (skip (dec n) (rest numbers))))

(println (skip 2 '(1 2 3 4 5))) ; (3 4 5)
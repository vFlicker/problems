(defn leap-year? [year]
    (letfn [(divided? [dividend, divider] (zero? (rem dividend divider)))]
        (and
            (divided? year 4)
            (or
                 (not (divided? year 100))
                 (and (divided? year 100) (divided? year 400))))))
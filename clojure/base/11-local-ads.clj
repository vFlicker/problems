(defn prod-sum [a]
    (let [prod (* a a)]
        (+ prod a)))

(println (prod-sum 3)
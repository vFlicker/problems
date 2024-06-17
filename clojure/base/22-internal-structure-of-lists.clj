(defn lookup [looking-key, pairs]
    (let [found-pairs (filter
                       (fn [[key value]] (= key looking-key))
                       pairs)]
        (if (empty? found-pairs)
            false
            (first found-pairs))))

(println (lookup 2 [[1 "a"] [2 "b"] [3 "c"]])) ; [2 "b"]
(println (lookup 4 [[1 "a"] [2 "b"] [3 "c"]])) ; false


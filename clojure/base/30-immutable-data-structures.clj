(defn partiphify [numbers parts]
  (let [length (count numbers)
        size  (int (Math/ceil (/ length parts)))
        divided-vec (vec (map vec (partition-all size numbers)))
        final-vec (if (> parts length)
                      (vec (concat divided-vec (repeat (- parts length) [])))
                      divided-vec)]
    final-vec))

(println (partiphify [1 2 3 4 5 6 7 8 9 10] 3)) ; [[1 2 3 4] [5 6 7] [8 9 10]]
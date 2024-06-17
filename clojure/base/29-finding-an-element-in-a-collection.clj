(defn my-contains? [collection, element]
    (boolean
     (some
      (fn [current-element] (= current-element element))
      collection)))

(println (my-contains? [1 2 3] 2)) ; true
(println (my-contains? [1 2 3] 4)) ; false
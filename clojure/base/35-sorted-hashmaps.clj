(defn to-sorted-map [default-map]
    (into (sorted-map) default-map))

(println (to-sorted-map {:c 3, :b 2, :a 1})) ; {:a 1, :b 2, :c 3}
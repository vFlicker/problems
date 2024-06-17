(defn freq [coll]
    (reduce
     (fn [acc item]
         (let [value (inc (get acc item 0))]
             (assoc acc item value)))
     {}
     coll))

(println (freq ["a" "b" "c" "a" "a" "c" "a" "d" "b"])) ; {"a" 4, "b" 2, "c" 2, "d" 1}
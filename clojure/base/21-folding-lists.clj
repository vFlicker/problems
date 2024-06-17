;; (defn max-delta [list1 list2]
;;     (reduce
;;      max
;;      0
;;      (map
;;       (fn [pair] (Math/abs (reduce - pair)))
;;       (map (fn [arg1 arg2] (list arg1 arg2)) list1 list2))))


;; (defn max-delta [list1 list2]
;;     (reduce
;;      max
;;      0
;;      (map
;;       (fn [pair] (Math/abs (reduce - pair)))
;;       (map list list1 list2))))


(defn max-delta [list1 list2]
    (reduce
     (fn [acc [x, y]] (max acc (Math/abs (- x y))))
     0
     (map list list1 list2)))

(println (max-delta [1 2 3] [4 5 6])) ; 3

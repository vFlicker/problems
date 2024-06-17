;; (def my-xf
;;     (comp
;;      (map (fn [arg] (* arg 10)))
;;      (map (fn [arg] (/ arg 5)))
;;      (filter (fn [arg] (even? arg)))))


(def my-xf
  (comp
   (map #(* % 10))
   (map #(/ % 5))
   (filter even?)))

(println (into [] my-xf [1 2 3 4 5 6 7 8 9 10])) ; [0 2 4 6 8]
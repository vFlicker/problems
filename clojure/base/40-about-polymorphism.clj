(defn calc [first-num second-num operation]
  (let [operations-map {"+" +
                        "-" -
                        "*" *}]
  ((operations-map operation) first-num second-num)))

(defmulti my-calc (fn [[operation _ _]] operation))

(defmethod my-calc "+" [[_ first-num second-num]]
    (+ first-num second-num))

(defmethod my-calc "-" [[_ first-num second-num]]
    (- first-num second-num))

(defmethod my-calc "*" [[_ first-num second-num]]
    (* first-num second-num))

(println (my-calc ["+" 1 2])) ; 3
(println (my-calc ["-" 3 1])) ; 2
(println (my-calc ["*" 3 3])) ; 9

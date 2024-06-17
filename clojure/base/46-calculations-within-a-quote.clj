(defmacro strange-macro [coll]
    `(apply - (apply + ~coll) ~coll))

(println (strange-macro [1 2 3 4])) ; 0
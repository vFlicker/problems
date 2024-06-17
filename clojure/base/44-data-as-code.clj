(defmacro postfix-notation [[left right operator]]
    (list operator left right))

(println (postfix-notation [1 2 +])) ; 3
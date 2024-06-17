(defn number-presenter [number]
    (format
     "decimal %d octal %o hex %x upper-case hex %X"
     number number number number))

(println (number-presenter 42)) ; decimal 42 octal 52 hex 2a upper-case hex 2A
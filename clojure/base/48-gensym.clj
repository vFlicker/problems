(defmacro auto-sum [number]
    `(let [my-var# 10]
         (+ my-var# ~number)))

(println (auto-sum 1)) ; 11

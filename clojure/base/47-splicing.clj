(ns index
    (:require [clojure.string :as s]))

(defmacro strange-print [string]
    `(do
         ~@(println (s/reverse string))
         ~@(println (s/upper-case string))
         ~@(println (s/lower-case string))
         ~string))

(println (strange-print "foo"))
;; oof
;; FOO
;; foo
;; "foo"

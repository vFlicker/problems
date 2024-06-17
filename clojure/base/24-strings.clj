(ns index
    (:require [clojure.string :as s]))

(defn str-reverse [string]
    (s/reverse string))

(println (str-reverse "hello")) ; olleh
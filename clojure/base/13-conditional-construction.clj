(ns index
  (:require [clojure.string :refer [upper-case]]))

(defn sentence-type [text]
  (let [upper-case? (= (upper-case  text) text)]
    (if upper-case? "cry" "common")))
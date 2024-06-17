(ns index
  (:require [clojure.string :refer [lower-case join split]]))

(defn student-names
    ([] (map first))
    ([student] (sequence (student-names) student)))

(defn lower-case-names
    ([] (map lower-case))
    ([students] (sequence (lower-case-names) students)))

(defn slugify-names
    ([] (map #(join "-" (split % #" "))))
    ([students] (sequence (slugify-names) students)))

(def do-name-magic
    (comp
     (student-names)
     (lower-case-names)
     (slugify-names)))

(println (do-name-magic [["John Doe"] ["Jane Smith"]])) ; ("john-doe" "jane-smith")

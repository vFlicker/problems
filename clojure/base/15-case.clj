(defn humanize-permission [action]
    (case action
        "x" "execute"
        "r" "read"
        "w" "write"))

(println (humanize-permission "x")) ; execute
(println (humanize-permission "r")) ; read
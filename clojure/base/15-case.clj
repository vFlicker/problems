(defn humanize-permission [action]
    (case action
        "x" "execute"
        "r" "read"
        "w" "write"))
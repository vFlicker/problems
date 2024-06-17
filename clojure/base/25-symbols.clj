(defn next-chars [old-string]
    (letfn [(get-next-char [current-char] (char(inc(int current-char))))]
        (let [new-string (map get-next-char (seq old-string))]
            (s/join #"" new-string))))

(println (next-chars "abc")) ; bcd
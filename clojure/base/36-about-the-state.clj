(defn transit [from-accout, to-account, amount]
    (let [first-produced (swap! from-accout - amount)
          second-produced (swap! to-account + amount)]
    [first-produced second-produced]))

(println (transit (atom 100) (atom 20) 20)) ; [80 40]
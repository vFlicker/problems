(defn transit [from-accout, to-account, amount]
    (let [first-produced (send from-accout - amount)
          second-produced (send to-account + amount)]
        (await first-produced second-produced)
        [@from-accout @to-account]))

(println (transit (agent 100) (agent 20) 20)) ; [80 40]

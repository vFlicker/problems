;; (defn resolve [domains-ip, domain]
;;     (let [ip (domains-ip domain)]
;;         (if ip ip "DNS_PROBE_FINISHED_NXDOMAIN")))


(defn resolve [domains-ip domain]
  (get domains-ip domain "DNS_PROBE_FINISHED_NXDOMAIN"))

(println (resolve {
                   "rubyonrails.org" "211.116.107.5"
                   "clojure.org" "103.95.84.1"
                   "phoenixframework.org" "234.214.199.63"
                   "reactjs.org" "20.199.101.214"
                  }
                  "clojure.org"))
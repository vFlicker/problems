(defprotocol SaysSomething
  (say-something [_] "Method to say-something"))

(defrecord Human []
  SaysSomething
  (say-something [_] "Hello, World!"))

(defrecord Cat []
  SaysSomething
  (say-something [_] "Meow, World!"))

(defrecord Dog []
  SaysSomething
  (say-something [_] "Bark, World!"))

(def crow (Human.))
(def plane (Cat.))
(def dog (Dog.))

(println (say-something crow)) ; "Hello, World!"
(println (say-something plane)) ; "Meow, World!"
(println (say-something dog)) ; "Bark, World!"
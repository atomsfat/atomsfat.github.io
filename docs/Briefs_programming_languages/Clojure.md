# Clojure

**Lein**

- lein run
- lein repl

**Repl**

(load-file “”)

**Basic syntax**

---

**If**

(if boolean-form

then form

optional-else-form)

**do**

wrap multiple forms in parentheses and run each of then

(if false (do (println "success")

"Atoms")

(do (println "hello")

"some”))

**when**

Use when if you want to do multiple things when some condition is true, like the combination of **if and do**

(when true (println "success")

"Atoms" )

**nil, true, false, truthiness, equality and boolean**

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%201](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%201)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%202](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%202)

---

Naming values with

**def**

**Binding it say**

**Data structures**

---

- Are inmutable

**Number, Strings**

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%203](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%203)

**Maps**

---

{ }

Create

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%204](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%204)

get by key

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%205](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%205)

default value

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%206](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%206)

nested values **get-in**

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%207](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%207)

Map tricks **keywords as functions** 

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%208](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%208)

**Keywords**

---

look up in a map

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%209](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%209)

**Vectors**

---

- **conf** add element to the **end** of the vector

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2010](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2010)

**Lists**

---

Similar to vector but you can’t get elements using get

- it must start with a single quote
- **nth** function retrieve by index
    - nth is slower than get from vector
- **conj** add elements to beggining

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2011](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2011)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2012](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2012)

**Sets**

---

- conj add only if not duplicated
- contains? function return true if it has that key

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2013](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2013)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2014](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2014)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2015](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2015)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2016](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2016)

“It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures” -> Alan Perlis

**Functions**

---

- map
- inc

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2017](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2017)

Defining functions **defn**

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2018](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2018)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2019](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2019)

**Arity**

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2020](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2020)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2021](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2021)

**Rest parameter**

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2022](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2022)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2023](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2023)

[Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2024](Clojure%20ee2fa0d63a60427db022cb79039247ba/untitled%2024)

**Destructuring**

---

[Reactive extensions](Clojure%20ee2fa0d63a60427db022cb79039247ba/Reactive%20extensions%20d2846da16c67438db226d263e36b9a6b.md)
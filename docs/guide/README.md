---
title: Markdown
---

## [Markdown Vue guide](https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers)

## Markdown extensions available

### katex

```
$x^2 + x_2 = x^2 + x_2$
```

$x^2 + x_2 = x^2 + x_2$

```
$$x^2 + x = x^2 + x$$
```
$$x^2 + x = x^2 + x$$

---

### Task list
```
- [ ] todo
- [x] done


```

- [ ] todo
- [x] done

### Font awesome

```
Hello World! :fas-flag:
```
Hello World! :fas-flag:

---

### [Mermaid](https://mermaidjs.github.io/#/)

Markdownish syntax for generating flowcharts, sequence diagrams, class diagrams, gantt charts and git graphs.

```js
<mermaid>
stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
</mermaid>
```

<mermaid>
stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
</mermaid>

```js
<mermaid>
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
</mermaid>

```

<mermaid>
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
</mermaid>

```js
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
</mermaid>
```
<mermaid>
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
</mermaid>

```js
<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>
```
<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>

```js
graph LR
  A[Square Rect] -- Link text --> B((Circle))
  A --> C(Round Rect)
  B --> D{Rhombus}
  C --> D
</mermaid>
```
<mermaid>
graph LR
  A[Square Rect] -- Link text --> B((Circle))
  A --> C(Round Rect)
  B --> D{Rhombus}
  C --> D
</mermaid>

---


### [UML Markdown](http://plantuml.com/index)

```js
@startuml
Bob -> Alice : hello
@enduml
```

@startuml
Bob -> Alice : hello
@enduml

<br />

@startuml
@startmindmap
caption figure 1
title My super title

* <&flag>Debian
** <&globe>Ubuntu
*** Linux Mint
*** Kubuntu
*** Lubuntu
*** KDE Neon
** <&graph>LMDE
** <&pulse>SolydXK
** <&people>SteamOS
** <&star>Raspbian with a very long name
*** <s>Raspmbc</s> => OSMC
*** <s>Raspyfi</s> => Volumio

header
My super header
endheader

center footer My super footer

legend right
  Short
  legend
endlegend
@endmindmap
@enduml

```js
@startuml
node in as "input"
node p as "Pre-processing"
node fm as "Feature Mining"
node fs as "Feature Selection"
node fr as "Feature Reduction"
node m as "Modelling"
node a as "Accepted Results?"
node pp as "Post-processing"
node o as "Output"

in -> p
p ..> fm
fm ..> fs
fs ..> fr
fr ..> m
m ..> a
a ..> fm : no
a -> pp : yes
pp -> o
@enduml
```

@startuml
  node in as "input"
  node p as "Pre-processing"
  node fm as "Feature Mining"
  node fs as "Feature Selection"
  node fr as "Feature Reduction"
  node m as "Modelling"
  node a as "Accepted Results?"
  node pp as "Post-processing"
  node o as "Output"

  in -> p
  p ..> fm
  fm ..> fs
  fs ..> fr
  fr ..> m
  m ..> a
  a ..> fm : no
  a -> pp : yes
  pp -> o
@enduml

```js
@startuml
  |Required Steps|
  :"Start Assignment";
  |#AntiqueWhite|Documentation|
  :Create Git Repo/Overleaf;
  :Copy Down Questions;
  |#LightBlue|Git|
  :Initial Barebones Commit;
  |Required Steps|
  :"Answer Questions";
  :"Submit Assignment";
  |Git|
  :"Update Local Repo";
  :"Update CENG4B Notes;
  stop
@enduml
```

@startuml
|Required Steps|
:"Start Assignment";
|#AntiqueWhite|Documentation|
:Create Git Repo/Overleaf;
:Copy Down Questions;
|#LightBlue|Git|
:Initial Barebones Commit;
|Required Steps|
:"Answer Questions";
:"Submit Assignment";
|Git|
:"Update Local Repo";
:"Update CENG4B Notes;
stop
@enduml

```js
  @startuml
 (*) --> [File System ] "input.json "
  note left
  1. Read Entire File into memory
  end note
  -->[Available Memory]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
  @enduml
```

@startuml
 (*) --> [File System ] "input.json "
  note left
  1. Read Entire File into memory
  end note
  -->[Available Memory]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
@enduml


### Solidity Diagraph
@startuml
digraph foo {
  node [style=rounded]
  node1 [shape=box]
  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]
  node3 [shape=record, label="{ a | b | c }"]

  node1 -> node2 -> node3
}
@enduml

```js
@startuml
strict digraph cool {
  exists [color=blue]
  authenticate [color=blue]
  require
  create
  UserCreated
  destroy
  UserDestroyed
  get [color=blue]
  authenticate -> require
  create -> UserCreated
  destroy -> require
  destroy -> UserDestroyed
  get -> require
}
@enduml
```

@startuml
strict digraph cool {
  exists [color=blue]
  authenticate [color=blue]
  require
  create
  UserCreated
  destroy
  UserDestroyed
  get [color=blue]
  authenticate -> require
  create -> UserCreated
  destroy -> require
  destroy -> UserDestroyed
  get -> require
}
@enduml

---

---
title: Python Tips and tricks
tags:
    - Tips and tricks
    - Python
    - Data structures
---
## Strings

### Join and interpolation

```python
''.join(sorted(a))

print(f"So you are {age}, {height} tall, and {weight} heavy")
```


```python
print(f"So, you're {age} old, {height} tall and {weight} heavy.”)
print(joke_evaluation.format(hilarious))

fat_cat = """
I'll do a list
\t* Cat food
\t* Fishies
\t* Catnip\n\t* Grass
\a This is be\
"""

'hello' * 10
```

### Char operation

```python
>>> ord('a')
97
>>> chr(97)
'a'
>>> chr(ord('a') + 3)
'd'
>>>
```

### String to int

```python
int(input( ))
```


## Variables
### Multiple variable assignment


'{0:.2f}'.format(pi)

### Unpacking variables

```python
import sys
script, index = sys.argv

name_script, filename = argv
```


## Read File

```python
txt = open(filename)
txt.open()
```

## Write a File


## Iterate stuff

```python
for i in range(len(list)):
	print(list[i])

for i, j in zip(range(x), range(y)):
    print(f"{i} {j}")

for x in range(0, 5):
    print(x)
```

## Collections

### Dictionary

```python
new_dic = dict()

states = {
'Oregon': 'OR',
'Florida': 'FL',
'California': 'CA',
'New York': 'NY',
'Michigan': 'MI'
}

for key, value in states.items():

remove key
my_dict.pop('key', None)
del my_dict['key']

if key in new_dic:
    print(f"{key exist}")
```

### Ordered dict

```python
// maintains insertion order
import collections
ordered_dict = collections.OrderedDict()
```

```python
mydict = {'carl':40,
'alan':2,
'bob':1,
'danny':3}

for key in sorted(mydict):
print "%s: %s" % (key, mydict[key])

for number in reversed(sorted(map.keys())):
```

### List

```python
if not a:
print("List is empty")

len([1, 2, 3])

3 in [1, 2, 3] # => True
matches = (x for x in lst if x > 6)
a.sort()
list.append()
list.extend()
list.insert(i, x)
list.remove(x)
list.pop()
list.index()
list.count(x)
list.pop(0)
list[-1]   # Get the last element of a list

lst = [None] * 5
arr = [[0 for i in range(n)] for i in range(n)]
print(', '.join(names))
print(*names, sep = ', ')
```


### Set

```python
>>> set()
>>> A = {1, 2, 3, 4, 5}
>>> B = {4, 5, 6, 7, 8}
print(A | B) # union
print(A & B) #intersection
print(A - B) #difference
print(A ^ B) #symmetric difference

add()
clear()
copy()
difference()
pop()
remove()
all()
any()
update()   --> add [] to
```

### Pila

```python
import time
from datetime import timedelta
start_time = time.monotonic()
end_time = time.monotonic()
print(timedelta(seconds=end_time - start_time))

## Hih order Functions
### Filter 

```python
less_than_zero = list(filter(lambda x: x < 0, number_list))
```

### Map

```python
items = [1, 2, 3, 4, 5]squared = list(map(lambda x: x**2, items))
```

### Reduce

```python
from functools import reduceproduct = reduce((lambda x, y: x * y), [1, 2, 3, 4])
```

### Filter
[https://book.pythontips.com/en/latest/map_filter.html](https://book.pythontips.com/en/latest/map_filter.html)

---

## Classes

```python
class Animal(object):
pass

Instance variable
class variable
property
__slots__
```


## Simple request
```python
pip install requests
response = requests.get("http://api.open-notify.org/astros.json")
print(response.status_code)
```
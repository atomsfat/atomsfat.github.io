# Python tricks and trips



```python
python -m idlelib.idle
pip install pyreadline
```

```bash
pip install -d <some>
```

***Multiple variable assignment***

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Processs
```

'{0:.2f}'.format(pi)

**Unpacking variables**

```python
import sys
script, index = sys.argv

name_script, filename = argv
```

**String to int**

```python
int(input( ))
```

**Read files**

```python
txt = open(filename)
txt.open()
```

**String**

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

**Char operation**

```python
>>> ord('a')
97
>>> chr(97)
'a'
>>> chr(ord('a') + 3)
'd'
>>>
```

**Dictionary**

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
```

**Ordered dict**

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

**for**

```python
for i, j in zip(range(x), range(y)):
for x in range(0, s
```

**String**

```python
''.join(sorted(a))

print(f"So you are {age}, {height} tall, and {weight} heavy")
```

**List**

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

***Filter***

```python
less_than_zero = list(filter(lambda x: x < 0, number_list))
```

***Map***

```python
items = [1, 2, 3, 4, 5]squared = list(map(lambda x: x**2, items))
```

***Reduce***

```python
from functools import reduceproduct = reduce((lambda x, y: x * y), [1, 2, 3, 4])
```

[https://book.pythontips.com/en/latest/map_filter.html](https://book.pythontips.com/en/latest/map_filter.html)

***for***

```python
for i in range(len(list)):
	print(list[i])
```

**Set**

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

**pila**

```python
import time
from datetime import timedelta
start_time = time.monotonic()
end_time = time.monotonic()
print(timedelta(seconds=end_time - start_time))
```

PEP 405

**Classes**

```python
class Animal(object):
pass

Instance variable
class variable
property
__slots__
```

**Python is awesome**

- this how write psuedocode
- Iterator
- Comprehencions
- Two-way generators
- Generators
    - Accept inputs
- Decorators
- With
- Abstract Base classes
- People
    - Benjamin Peterson
    - Jessica McKellar
    - Alex gaynor

Flask Crud

[https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/#a-minimal-application](https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/#a-minimal-application)

```python
>>> from yourapplication import db
>>> db.create_all()
```

```python
pip install requests
response = requests.get("http://api.open-notify.org/astros.json")
print(response.status_code)
```


# Installation Envs python

```bash
mkdir ~/.virtualenvs
python3 -m venv ~/.virtualenvs/python3
source ~/.virtualenvs/python3/bin/activate
```

deactivate

```
conda create --name myenv
conda install nb_conda
```

Switching things

```
csnakes python=3.7.1
conda install -n myenv pip
conda update conda
open /usr/local/anaconda3/Anaconda-Navigator.app
```

[https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#deactivating-an-environment](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#deactivating-an-environment)

```
conda env list
conda activate myenv
```

**Commands**

```
pydoc input
```


conda install -c anaconda notebook

conda env remove -n ENV_NAME
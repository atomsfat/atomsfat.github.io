# Pandas

* Pandas guide

	* [https://pandas.pydata.org/pandas-docs/stable/whatsnew/v0.25.2.html](https://pandas.pydata.org/pandas-docs/stable/whatsnew/v0.25.2.html)

	* [https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)

	* [https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html#getting-started](https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html#getting-started)

	* [https://github.com/jvns/pandas-cookbook](https://github.com/jvns/pandas-cookbook)

```python
import pandas as pd

df.groupby(['Fruit','Name']).sum()
```

```
frames = [df1, df2, df3]
result = pd.concat(frames)
```

Index as colum

```python
df['index1'] = df.index
or, .reset_index:
df.reset_index(level=0, inplace=True)
```

[http://pandas-docs.github.io/pandas-docs-travis/user_guide/groupby.html](http://pandas-docs.github.io/pandas-docs-travis/user_guide/groupby.html)

```python
animals.groupby("kind").agg(
....:     min_height=('height', 'min'),
....:     max_height=('height', 'max'),
....:     average_weight=('weight', np.mean),
```

Separate row and column selection with comma

```python
so.loc[so['viewcount'] > 20000, ['creationdate', 'viewcount',
'ans_name']].head(10)
```

Multiple conditions

```python
filtered = df.loc[(df['fecha'] == date.fromisoformat("2020-01-01")) 
									& (df['currency'] == 'mxn')]
```

For each

```python
for index, row in filter.iterrows():
	print(index, row['total'])
	result.append({'currency': index, "amount":row['total'], "to_date":1})
```
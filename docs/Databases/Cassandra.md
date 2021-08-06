# Cassandra

CREATE KEYSPACE crud;

USE crud;

```sql
SHOW SCHEMA crud;
```

```sql

```

```sql
CREATE COLUMN FAMILY test_cf
```

... WITH
...DEFAULT_VALIDATION_CLASS = UTF8Type AND ...KEY_VALIDATION_CLASS = LongType AND ...COMPARATOR = UTF8Type;

**Insert**

COLUMN_FAMILY[ROW_KEY][COLUMN_NAME] = COLUMN_VALUE.

**Retrieve**

GET test_cf[1]

**Delete**

DEL test_cf[1]['2nd_column_name’];

# Drop test_cf drop column family test_cf;

# Drop keyspacedrop keyspace crud;
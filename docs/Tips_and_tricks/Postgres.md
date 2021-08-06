# Postgres

[https://www.tutorialspoint.com/postgresql/postgresql_python.htm](https://www.tutorialspoint.com/postgresql/postgresql_python.htm)

**Data types**

- Numeric
- Monetary
- Character type
- Bynary
- Date/Time
- Boolean Type
- Enumerated
- Geometric
- Network
- Bit
- Text search type
- UUID
- XML type
- JSON Type
- Array type
- Composite Types

**Create database**

```sql
createuser -P atoms
createdb -O atoms -E utf8 test_data
```

Default databases

- postgres (ok, default)
- template1 (ok, default)

```
\? help
```

**Create table**

```sql
CREATE TABLE COMPANY(
ID INT PRIMARY KEY     NOT NULL,
NAME           TEXT    NOT NULL,
AGE            INT     NOT NULL,
ADDRESS        CHAR(50),
SALARY         REAL
);
```

```
\d
\d company
```

**Alter table**

```
ALTER TABLE table_name ADD COLUMN new_column_name TYPE;
ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;
ALTER TABLE table_name ADD CHECK expression;
ALTER TABLE table_name ADD CONSTRAINT constraint_name constraint_definition;
ALTER TABLE table_name RENAME TO new_table_name;
```

**Drop**

```
DROP TABLE table_name;
```

Drop database

```
DROP DATABASE testdb
dropdb  [option...] dbname
```

**Schema like direcotories**

```
CREATE SCHEMA name;
```

## 

## Constraints

- **NOT NULL Constraint** − Ensures that a column cannot have NULL value.
- **UNIQUE Constraint** − Ensures that all values in a column are different.
- **PRIMARY Key** − Uniquely identifies each row/record in a database table.
- **FOREIGN Key** − Constrains data based on columns in other tables.
- **CHECK Constraint** − The CHECK constraint ensures that all values in a column satisfy certain conditions.
- **EXCLUSION Constraint** − The EXCLUDE constraint ensures that if any two rows are compared on the specified column(s) or expression(s) using the specified operator(s), not all of these comparisons will return TRUE.

Foreign key

```
CREATE TABLE DEPARTMENT1(
ID INT PRIMARY KEY      NOT NULL,
DEPT           CHAR(50) NOT NULL,
EMP_ID         INT      references COMPANY6(ID));
```

Check

```
CREATE TABLE COMPANY5(
ID INT PRIMARY KEY     NOT NULL,
NAME           TEXT    NOT NULL,
AGE            INT     NOT NULL,
ADDRESS        CHAR(50),
SALARY         REAL    CHECK(SALARY > 0));
```

Exclusion composed key

```
CREATE TABLE COMPANY7(
ID INT PRIMARY KEY     NOT NULL,
NAME           TEXT,
AGE            INT  ,
ADDRESS        CHAR(50),
SALARY         REAL,
EXCLUDE USING gist
(NAME WITH =,
AGE WITH <>));
```

**Dump restore**

```
pg_dump -U migration migration -f ~/Desktop/migration.sql

psql -U migration -d migration -f migration.sql

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser;
```

**t**

```
pg_ctl -D /usr/local/var/postgres restart
pg_ctl -D /usr/local/var/postgres start
pg_ctl -D /usr/local/var/postgres -l logfile start
```

**Init**

```
initdb /usr/local/var/postgres
initdb /usr/local/var/postgres -E 'UTF-8'
```

**AWS**

```
psql -h clecoreuser.cqmxosx5wx4s.us-west-2.rds.amazonaws.com -U master postgres
CREATE USER cleuser WITH PASSWORD 'M1Sup3rP4ss&';
GRANT cleuser TO master;

CREATE DATABASE cledata OWNER cleuser;
```

## Transaction

```
BEGIN;

or

BEGIN TRANSACTION;
```

Commit

```
COMMIT;

or

END TRANSACTION;
```

Rollback

```
ROLLBACK;
```

Example

```
testdb=# BEGIN;
DELETE FROM COMPANY WHERE AGE = 25;
ROLLBACK;
```
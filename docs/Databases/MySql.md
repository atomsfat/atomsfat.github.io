# MySql

ls $(brew --prefix percona-server)/

mysql -u root

```sql
mysql -u root
create database <name>

CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'tu_contrasena’;

CREATE USER bn_wordpress@'%' IDENTIFIED BY '7f74f0f6bf';

GRANT ALL PRIVILEGES ON bitnami_wordpress.* TO bn_wordpress@'%';

GRANT ALL PRIVILEGES ON [nombre de bases de datos].[nombre de tabla] TO 'nombre_usuario'@'localhost';

FLUSH PRIVILEGES;

show databases
show schemas
show tables
```

mysql -u root -p Tutorials < tut_backup.sql

/usr/local/var/mysql

[https://www.percona.com/doc/percona-xtrabackup/2.2/howtos/recipes_xbk_restore.html](https://www.percona.com/doc/percona-xtrabackup/2.2/howtos/recipes_xbk_restore.html)

**Restore percona backup**

```bash
lzop -x mysql.xbstream.full.lzo
xbstream -x < mysql.xbstream.full
mysql_install_db --verbose --user=whoami --basedir="$(brew --prefix mysql)" --datadir=/Volumes/FRH/mysql --tmpdir=/tmp
rsync -rvt --exclude 'xtrabackup_checkpoints' --exclude 'xtrabackup_logfile' ./ ../testm/base
```

**Reset  Root password**

```sql
mysqld_safe --skip-grant-tables
mysql --user=root mysql
SET PASSWORD = PASSWORD('’);
```

**/Password was changed to authentication string**

```bash
update user set Password=PASSWORD('') where user='root';
flush privileges;
exit;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
update mysql.user set Password=PASSWORD('') where user='';

update user set HOST='%' where user='root';
mysql_upgrade -u root -p --force

CREATE USER 'admin'@'%' IDENTIFIED BY 'dtrules';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;
```
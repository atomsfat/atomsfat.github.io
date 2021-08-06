# Percona

[default]

aws_access_key_id=AKIAI5HRVNWE32JYMTSQ

aws_secret_access_key=839L48T4BBcEn/MciiCeCOHfW5kKVn/iyFBYETn9

cat /etc/my_backup.cnf

https://www.digitalocean.com/community/tutorials/how-to-install-a-fresh-percona-server-or-replace-mysql

sudo chown mysql:mysql /var/lib/mysql/cherry -R

GRANT ALL PRIVILEGES ON cherry to root@localhost;

GRANT RELOAD, LOCK TABLES, REPLICATION CLIENT ON *.* TO root@localhost;

FLUSH PRIVILEGES;

export SERIAL=1

export PROJECT=cherry

export LAYER=development

export ENVIRONMENT=dev

/.aws/credentials

[default]

aws_access_key_id=AKIAIDBXQM7CRF5ALFJQ

aws_secret_access_key=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

sudo apt-key adv --keyserver keys.gnupg.net --recv-keys 1C4CBDCDCD2EFD2A

sudo apt-get update

#This not

vagrant plugin install vagrant-omnibus

vagrant plugin install vagrant-berkshelf

https://downloads.chef.io/chef-dk/

ls $(brew --prefix percona-server)/

sudo -i

service cherry stop

service solr stop

restore mysql -e production

[pick 2) master]

[pick the data of the backup you want]

[wait]

service solr start

service cherry start

username="cherry"

password=“11116249a1bac51641bd9f54c2b14dd6"inte

find . -name '[a-z]*' ! -name 'db.opt' | xargs rm

rm -rf /data/backups/mysql/*

**create backup to path**

xtrabackup --user=root --backup --target-dir=/data/backups/mysql/

rsync -avzh --delete "$PIVOTE:$PIVOTE_SOLR_DATA" "$SOLR_DATA_PATH"

chown -R ubuntu /data/backups/mysql/*

rsync -avzh --delete ubuntu@10.177.78.106:/data/backups/mysql/ /Users/tomas/workspace/gee/cms/db_backup

rm -rf /usr/local/var/mysql

rsync -avzh --delete ubuntu@10.177.78.106:/data/backups/mysql/ /usr/local/var/mysql

-avrP

chown -R mysql:mysql /var/lib/mysql

chown -R mysql:mysql /usr/local/var/mysql

chown -R mysql:mysql /usr/local/var/mysql

chown -R tomas:admin /usr/local/var/mysql

**Create a backup**

innobackupex --user=root --stream=tar ./ | bzip2 - > backup.tar.bz2

chown -R mysql:mysql /var/lib/mysql
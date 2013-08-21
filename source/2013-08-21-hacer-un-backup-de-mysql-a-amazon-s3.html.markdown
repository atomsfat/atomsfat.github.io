---
title: Hacer un backup de mysql a Amazon S3
date: 2013-08-21 16:55 UTC
categories: [Script]
tags: [Groovy, Amazon, S3, MySql]
---

#### Hacer un backup de una base de datos a Amazon S3

#### Lista de pasos:
1. Realizar un dump de la base
2. Comprimir
3. Subir a [S3](http://0.0.0.0:4567/2013/08/21/subir-archivos-a-amazon-s3-con-groovy.html "title")


#### Dumping, compressing
<script src="https://gist.github.com/atomsfat/6218618.js"></script>

#### Uploading

Revisa link del paso 3.

Agrega esta linea al script anterior
<pre>
  <code>
    groovy s3_up.groovy "bucket_name" dump-$name.bz2
  </code>
</pre>

P.D Revisa las rutas relativas, si lo ejecutas en un cron, el contexto(enviroment) es diferente, en este ejemplo la base de datos no pide password.

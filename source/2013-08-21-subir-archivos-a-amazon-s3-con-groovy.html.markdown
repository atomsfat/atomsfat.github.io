---
title: Subir archivos a Amazon S3 con Groovy
date: 2013-08-21 14:43 UTC
categories: [Script]
tags: [Groovy, Amazon, S3]
---


Subir archivos a amazon S3, un script basado en uno de [Thom Nichols](http://blog.thomnichols.org/2009/10/upload-to-s3-with-groovy "title")  y actualizado con una version mas reciente de [JetS3t library](http://jets3t.s3.amazonaws.com/downloads.html "title").

1.  Crear bucket en S3 https://console.aws.amazon.com/s3/
2.  Crear grupo y usuario en iam https://console.aws.amazon.com/iam/, verificar que la opcion de generar acces Key este selecionado.
3.  Remplazar accessKey y secretKey en el script.

<script src="https://gist.github.com/atomsfat/6273637.js"></script>


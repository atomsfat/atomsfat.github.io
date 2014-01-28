---
title: Grails JSON Marshalling bien hecho.
date: 2014-01-28 17:53 UTC
tags:
---


# Personalizar marshaller JSON en Grails

El personalizado de marshallers esta bastante documentado:

* [Customizing JSON Output in Grails with JSON Object Marshaller](http://kylewbanks.com/blog/Customizing-JSON-Grails-Object-Marshalling "title").

Básicamente consiste en los siguientes pasos:

1. Creamos un marshaller para la clase (mapa con los valores que deseamos regresar)
2. Se registra el marshaller en el BootStrap.groovy.

Definir un marshaller para una clase en el BootStrap.groovy, no se esta tan mal, pero que si necesitamos definir todo el dominio
de una aplicación.

Una posible solución:

[Custom JSON Marshalling in Grails, Done “Right”](http://compiledammit.com/2012/08/16/custom-json-marshalling-in-grails-done-right/ "title") 

En este blog crean los marshaller en archivos separados, luego en un mapa definen los beans, y en con la ayuda del archivo spring inyectan y 
registran. 

Lo cual parece demasiado. 

Mi propuesta.

1. Engordar la clase de dominio para que contenga su propio marshaller.
2. Si la clase de dominio define un marshaller, que de manera automática se registre en BootStrap.groovy.

Clase gorda con marshaller:

<script src="https://gist.github.com/atomsfat/8673440.js"></script>

Escaneo de las clases de dominio:

<script src="https://gist.github.com/atomsfat/8673594.js"></script>

Conclusiones:

* Creo que esta solución es correcta por que no es necesario modificar el BootStrap.groovy cada vez que necesitamos un marshaller.
* Si se requiere un cambio es muy fácil modificar la clase de dominio.


---
title: Apache WebProxy, y tunnelling
date: 2008-12-26 15:46 UTC
tags:
---


Los adminstradores de red siempre ponen restricciones sobre la
paginas que podemos ver desde la escuela o en el trabajo,&nbsp; tambien
puenden monitorear las paginas que visitamos, una solucion es montar un
servidor proxy en nuestra casa y conectarnos a el para poder navegar
libres, anonimamente y sin restriciones.

La idea la he sacado de este sitio.

[http://daniel.haxx.se/docs/sshproxy.html](http://daniel.haxx.se/docs/sshproxy.html)

El procedimiento esta escrito para Ubuntu aunque la idea aplica para todos las distribuciones linux.

## 1. Primero necesitaremos instalar apache.

<pre>
  sudo apt-get install apache2

</pre>

Para detener, iniciar, reinciar el servidor apache:

<pre>
  sudo /etc/init.d/apache2 stop
  sudo /etc/init.d/apache2 start
  sudo /etc/init.d/apache2 restart

</pre>

Una vez que este instalado apache ve al explorador e ingresa localhost en la barra de direcciones y da enter.
Debes de ver algo como ** It works !!! ** o una pagina que confirme que apache esta funcionando.
![](localhost_files/apache-runnig-300x188.html "apache-runnig")

## 2. Instalar el modulo proxy para apache.

<pre>
  sudo apt-get install libapache2-mod-proxy-html

</pre>

Luego hay que editar la configuracion del apache para que utilize el modulo que acabamos de instalar.

En mi caso voy a utilizar el puerto 8888 para proxear por lo que
tengo que decirle al apache que escuche en este puerto, y deshabilitar
las escuchas al puerto 443, por que este puerto lo voy a usar para el
ssh.

<pre>
  sudo gedit /etc/apache2/ports

</pre>

Y agrego listen 8888 y comento el 443, el arhivo me queda asi:

```xml

<myxml>
   <someelement>
</someelement></myxml>

```

<pre>
    # If you just change the port or add more ports here, you will likely also
    # have to change the VirtualHost statement in
    # /etc/apache2/sites-enabled/000-default
    # This is also true if you have upgraded from before 2.2.9-3 (i.e. from
    # Debian etch). See /usr/share/doc/apache2.2-common/NEWS.Debian.gz and
    # README.Debian.gz

    NameVirtualHost *:80
    Listen 80
    Listen 8888
    <ifmodule mod_ssl.c="">
        # If you add NameVirtualHost *:443 here, you will also have to change
        # the VirtualHost statement in /etc/apache2/sites-available/default-ssl
        # to &lt;VirtualHost *:443&gt;
        # Server Name Indication for SSL named virtual hosts is currently not
        # supported by MSIE on Windows XP.
        # Listen 443
    </ifmodule>

    <ifmodule mod_gnutls.c="">
       #  Listen 443
    </ifmodule>

</pre>

luego creamos un nuevo documento vacio en la siguiete ruta con el nombre "proxy"

<pre>
   /etc/apache2/sites-available

</pre>

Y ponemos lo siguiente

<pre>
    &lt;virtualhost *:8888&gt;
      ServerAdmin webmaster@localhost

      ProxyRequests On
      ProxyVia On

      #Add ports you want to be able to connect to through your proxy here
      AllowCONNECT 443 554
      #563 1863 10000
      #443   = SSL
      #563   = TLS
      #1863  = MSN Messenger
      #10000 = Webmin

      DocumentRoot /var/www/
      <directory>
              Options FollowSymLinks
              AllowOverride None

      ErrorLog /var/log/apache2/proxy-error.log
      TransferLog /var/log/apache2/proxy-transfer.log
      # Possible values include: debug, info, notice, warn, error, crit,
      # alert, emerg.
      LogLevel debug

  </directory>
</pre>

Con lo que le estamos creando un nuevo sitio proxy que va a forwadear
 el puerto 80, 443, 544, es importante que el virtual host *: 8888 sea
igual al puerto que esta escuchando apache.

Configuramos el mod_proxy en el siguiente archivo:

<pre>
    sudo gedit /etc/apache2/mods-available/proxy.conf

</pre>

Que queda de esta forma

<pre>
<ifmodule mod_proxy.c="">
        #turning ProxyRequests on and allowing proxying from all may allow
        #spammers to use your proxy to send email.

        ProxyRequests On

        &lt;Proxy *:8888&gt;
                AddDefaultCharset off
                Order deny,allow
                Deny from all

                Allow from 127.0.0.1

        # Enable/disable the handling of HTTP/1.1 "Via:" headers.
        # ("Full" adds the server version; "Block" removes all outgoing Via: headers)
        # Set to one of: Off | On | Full | Block

        ProxyVia On
</ifmodule>


</pre>

Con lo que configuramos que solo se pueda usar el proxy desde el localhost.
Activamos el mod_proxy con esta linea.

<pre>
sudo a2enmod proxy proxy_connect proxy_html proxy_http proxy_ftp

</pre>

Activamos el sitio proxy

<pre>
sudo a2ensite proxy

</pre>

Y reinciamos el rervidor:

<pre>
 sudo /etc/init.d/apache2 restart

</pre>

Ya tenemos el servidor web listo.

Nota: si tenemos algun problema sera necesario modificar el site, y
la configurcion, para esto es necesario deshabilitar tanto el site con
el mod_proxy.
Para deshabilitar el sitio proxy

<pre>
sudo a2dissite proxy

</pre>

para deshabilitar el mod_proxy:

<pre>
sudo a2dismod  proxy_connect proxy_html  proxy_ftp proxy

</pre>

Si se deshabilita el mod_proxy es necesario deshabilitar el  site
proxy, por que este depende del mod_proxy, y el apache no arrancarria.

Para averiguar si funciona puedes hacer un telnet
&lt;pre name="code" class="ruby"&gt;

<pre>
telnet localhost 8888

</pre>

Si no responde con codigo de error es por que esta bien, si ves simbolos raros esta bien.

## 3. Instalar ssh server para que te puedas conectar desde tu computadora del trabajo o de la escuela.

<pre>
sudo apt-get install openssh-server

</pre>

Como es un hecho que este bloqueado el puerto 22 que se utiliza por
default para el protocolo ssh se debe de configurar para que use el
puerto 443 usado generalmente para https.

Para hacer esto hay que modificar el siguiente archivo

<pre>
sudo gedit /etc/ssh/sshd_config

</pre>

Cambia esta linea

<pre>
  Port 22

</pre>

por

<pre>
  Port 443

</pre>

Ahora reinicia el servidor ssh.

<pre>
sudo /etc/init.d/ssh restart

</pre>

Prueba conectarte a tu maquina

<pre>
ssh 'user'@localhost -p 443

</pre>

## 4. Configurar DNS dinamico

Si no cuentas con ip estatica, sera necesario usar servicio como [no-ip.org](http://www.no-ip.com/)

Para instalarlo dirigite a la siguiente pagina no-ip.org y create una
 cuenta. Luego instala el cliente en tu maquina para que se actualize tu
 ip automaticamente.

<pre>
sudo apt-get install no-ip

</pre>

Sigue la instrucciones, los parametros por default esta bien.

Ahora comprueba si esta funcionando correctamente.

<pre>
sudo noip2 -S

</pre>

Si el cliente de no-ip no esta corriendo utiliza.

<pre>
sudo noip2

</pre>

## 5. Configurar tu maquina local

Ahora configura la maquina desde donde te vas a conectar si utilizas linux.

<pre>
 ssh -L 8888:localhost:8888 user@server.at.home -p 443

</pre>

Con Windows utiliza [putty](http://www.chiark.greenend.org.uk/%7Esgtatham/putty/download.html) o [extra-putty](http://www.extraputty.com/).

[![](localhost_files/putty1-300x289.html "putty1")](http://atoms.net84.net/wordpress/wp-content/uploads/2008/12/putty1.png)

[![](localhost_files/putty2-300x288.html "putty2")](http://atoms.net84.net/wordpress/wp-content/uploads/2008/12/putty2.png)

Necesitas configurar tu explorador para que use localhost:8080 como
proxy, para todos los protocolos , si estas utilizando windows no
recomiendo utilizar internet explorer ni chrome, utiliza firefox o
opera, por que la configuracion del proxy es mas facil.

Mas informacion:

[http://famvdploeg.com/blog/2008/01/setting-up-an-apache2-proxy-server/l](http://famvdploeg.com/blog/2008/01/setting-up-an-apache2-proxy-server/)

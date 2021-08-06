# BASH tips and tricks

[http://tldp.org/LDP/abs/html/internalvariables.html#APPREF](http://tldp.org/LDP/abs/html/internalvariables.html#APPREF)

Check result of latest command

```bash
#!/bin/bash

$0, $1 $2 positional parameter
$* all positional parameter
$@ all positional parameter , without interpretation or expansion
"${@:3}"  Descard first two arguments
```

Read file

Check result of latest command

```bash
RETVAL=$? if [ "$RETVAL" = 0 ]; then  
	echo "Successfull running $1"
else  
	echo "Error running cmd: $@"  
	exit $RETVAL 
fi
```

Test if file exist

```bash
if [ -e "PATH" ] ; then 
fi
```

Test if string

```bash
if ["$RETVAL" = 0 ]; then
  echo "Successfull running $1"
else
 echo
 "Error running cmd: $@" 
 exit $RETVAL
fi
```
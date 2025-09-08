## control de versiones

maquina del tiempo q nos muestra cómo cambia nuestro código.
no es un backup, es una herramienta que nos permita versionar (ir a la version q yo quiero) y trabajar con mas gente. 
mostrar los cambios a lo largo del tiempo.
tener trazabilidad.
antes era diferencias entre archivos porq no estaba pensado para colaborar.
navegar entre versiones (delta)

central: todo se concentraba en un lugar. si esta todo en un servidor y ese servidor se cae, se pierde todo.
distribuida: en otros servidores.

tambien existe gitlab(herramientas q sirven empresas q trabajan en la nube)

git y github son cosas diferentes.

git es el ejecutable, la herramienta de control de versiones, github es donde se almacena

el que está en local es el mismo que el de la nube cuando clono.

#### crear un repositorio
El directorio .git
Esta carpeta se crea nada más hacer git init, donde se encuentra todo lo almacenado/manipulado por
git.
```
$ git init
$ ls -F1 .git/
config description HEAD hooks/ info/ objects/ refs/ 
```

ci/cd qué voy a querer hacer con mi codigo. me aseguro que mi codigo funciona en otros dispositivos.
integracion continuo despliegue continuo
me obliga a que mi codigo sea seguro


##GIT

-herramientas para commits 
-clientes desde vs code
-github destop
-gitkraken
-sourcetree 

de normal se trabaja en la nube
estas herramientas nos permiten ver las diferentes ramas, cuales están abiertas, cuales cerradas, etc

##### repositorio

directorio donde estaran nuestros archivos. 

##### commit

un punto en la historia de git, una fotografia 

##### sha 

identificador

##### ssh 

seguridad 

git log nos sale todo el commit que se haga y el autor, es decir quien lo hizo.

un diff te dice **QUÉ** cambio realizó. Um buen commit te dice **POR QUÉ**

Sirve para tu equipo, para tu yo del futuro y para reparar bugs.

Un commit profesional sigue una estructura simple y universal. 70 caracteres.
regla: 50-72 caracteres
incluye referencia a tareas (si aplica)


trazabilidad.

convencion opcional (para mantener el historial limpio)

conventionalcommits.org/eb/v1.0.0

### git diff 

muestras las diferencias, lo que yo he añadido se verá en verde.

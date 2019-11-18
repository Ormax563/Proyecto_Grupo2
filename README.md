# Proyecto Plataformas Web

_El proyecto trata de crear un aplicacion en Node.js donde se puede observar los datos de las Suscripciones a telefonía celular móvil, publicadas por el Banco Mundial y publicar las estadísiticas de un determinado país en un año específico._

### Comandos 📋

_La apliación dispone de dos comandos. 
El primer comando es publicar. Este comando publicará las
estadísticas en una página web básica.
• --file -f: Permite establecer el path del archivo CSV que contiene los datos a analizar
• --country -c: Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.
• --year -y: Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.
El segundo comando es guardar: Este comando almacenará los resultados de las estadísticas en un archivo de texto. 
• --out -o: Establece el nombre del archivo donde se almacenrá los resultados._

• Ejecucion para publicar:
```
node app.js publicar -f datos.csv -c ECU -y 2014
```

• Ejecucion para guardar:
```
node app.js guardar -f datos.csv -c ECU -y 2014 -o f1
```

• Opciones de ejecucion para mostrar:
```
node app.js mostrar
```

• Opciones de ejecucion para guardar:
```
node app.js guardar
```

### Instalación 🔧

_En esta aplicacion se deben descargar las siguientes librerias_

_Descargar la base de datos en formato en csv: https://datos.bancomundial.org/indicador/IT.CEL.SETS _

_Instalar para leer el csv con fs_

```
npm install file-system --save
```

_Instalar yargs: _

```
npm install yargs
```

_Instalar Colors_

```
npm install colors
```

_Es primordial instalar estas librerias._

### Ejecución en Pagina Web ⌨️

_Para la ejecucion de la pagina web se debe correr el comando: publicar_

```
node app.js publicar -f API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv -c ECU -y 2014
```
_Aqui nos aparecera el siguiente url: https://127.0.0.1:3000 _
_Daremos ctrl + click para entrar en la pagina web_


## Autores ✒️

_Los desarrolladores de este programa son:_

* **Integrantes:**
** Jesús Ormaza
** Paul Alvarez
** Daniela González
** Julio Saráuz
** Diego Arias

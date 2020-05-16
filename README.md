# Primer tutorial de Angular9 by DominiCode [Canal Youtube](https://www.youtube.com/watch?v=qNGNiYYV1y0)

## Comenzando 🚀
_Para este proyecto se necesita tener instalado de forma global lo siguiente_
* **nestjs** - *npm i -g @nestjs/cli*
* **ngxs** - *npm i-g @ngxs/cli*

### Pre-requisitos
_Para la parate de UI se deja a cargo de Bootstrap, para ello se necesita instalar las siguientes dependencias_
* **npm i --save-dev bootstrap jquery @popperjs/core**
* **npm i --save-dev @ngxs/store**
* **npm install @ngxs/devtools-plugin --save-dev** [Link](https://www.ngxs.io/plugins/devtools)
* **npm i --save-dev @ngxs/logger-plugin@dev**

_Una vez instalado se debe configurar el bootstarp en la aplicación, en archivo angular.jon cambiar a:_

```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
},
```

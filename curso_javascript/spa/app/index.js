//App.js se escribio asi pq es un componente 
//en cambio index.js es file normal

import {App} from "./App.js";

const d = document;

//si ejecuto aqui App, ahi si necesitaria parentesis App()
d.addEventListener("DOMContentLoaded", App);//pero como estoy ejecutando en manejador de eventos solo ponemos App, si ponemos parentesis significaria invocacion inmediata
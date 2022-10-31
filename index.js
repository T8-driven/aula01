// const axios = require('axios');//common js
/* import axios from "axios"; //es module

const promisse = axios.get("https://pokeapi.co/api/v2/pokemon/1");
promisse.then((res) => {
  console.log(res.data.sprites);
}); */

import {somar} from './somar.js' // adicionar a extensão em arquivos externos que eu criei

console.log(somar(10,2))
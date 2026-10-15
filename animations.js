export const RETOS = [
  {id:"agua",tema:"CUIDEMOS EL AGUA",pregunta:"Cuando nos lavamos los dientes o las manos, ¿qué hacemos con la llave del agua?",start:"#29b6f6",end:"#0277bd"},
  {id:"luz",tema:"AHORREMOS LUZ",pregunta:"Salimos del cuarto y ya entra sol por la ventana. ¿Qué hacemos con la luz?",start:"#ffee58",end:"#f9a825"},
  {id:"plastico",tema:"COMPRAS SIN PLÁSTICO",pregunta:"Vamos al mercado con mamá o papá. ¿En qué llevamos las compras y el agua?",start:"#ef5350",end:"#b71c1c"},
  {id:"reciclaje",tema:"SEPAREMOS LA BASURA",pregunta:"En casa tenemos papel, cáscaras y botellas. ¿Dónde va cada cosa?",start:"#66bb6a",end:"#2e7d32"},
  {id:"comida",tema:"NO BOTEMOS COMIDA",pregunta:"Sobró comida en el plato. ¿Qué hacemos para que no se dañe?",start:"#ffa726",end:"#e65100"},
  {id:"aire",tema:"AIRE LIMPIO",pregunta:"Si el colegio queda cerca, ¿cómo podemos ir sin hacer humo?",start:"#4dd0e1",end:"#00838f"},
  {id:"arboles",tema:"CUIDEMOS LOS ÁRBOLES",pregunta:"Hace mucho calor en el patio. ¿Qué nos da el árbol?",start:"#81c784",end:"#1b5e20"},
  {id:"polinizadores",tema:"ABEJAS Y FLORES",pregunta:"En el jardín hay flores y abejas. ¿Qué buscan las abejas en las flores?",start:"#ce93d8",end:"#6a1b9a"},
  {id:"papel",tema:"USEMOS MENOS PAPEL",pregunta:"Se nos acabaron las hojas del cuaderno. ¿Cómo gastamos menos hojas?",start:"#d7ccc8",end:"#5d4037"},
  {id:"ropa",tema:"ROPA PARA COMPARTIR",pregunta:"Esta camiseta ya no nos queda. ¿Qué hacemos con ella?",start:"#f48fb1",end:"#ad1457"},
  {id:"transporte",tema:"MOVÁMONOS SIN HUMO",pregunta:"Todos los niños van al colegio. ¿Cómo podemos llegar sin que cada uno vaya en carro?",start:"#80deea",end:"#006064"},
  {id:"huerta",tema:"SEMBREMOS PLANTAS",pregunta:"Sembramos una semilla en casa. ¿Qué le damos para que crezca?",start:"#aed581",end:"#33691e"},
  {id:"basura",tema:"BARRIO LIMPIO",pregunta:"Terminamos la merienda en el parque. ¿Dónde dejamos el envoltorio?",start:"#bcaaa4",end:"#4e342e"},
  {id:"ruido",tema:"MENOS RUIDO",pregunta:"¿Qué pasa cuando ponemos la música o la tele muy fuerte en casa?",start:"#90caf9",end:"#1565c0"},
  {id:"pilas",tema:"PILAS USADAS",pregunta:"El control remoto se quedó sin pilas. ¿Dónde botamos las pilas gastadas?",start:"#b0bec5",end:"#37474f"},
  {id:"lluvia",tema:"AGUA DE LLUVIA",pregunta:"Está lloviendo y el agua cae del techo. ¿Qué podemos hacer con ella?",start:"#4fc3f7",end:"#01579b"},
  {id:"oceano",tema:"CUIDEMOS EL MAR",pregunta:"Fuimos a la playa o al río. ¿Qué cosas no debemos dejar ahí?",start:"#26c6da",end:"#004d40"},
  {id:"compost",tema:"CÁSCARAS Y PLANTAS",pregunta:"Pelamos una fruta en la cocina. ¿Qué hacemos con las cáscaras?",start:"#a1887f",end:"#3e2723"},
  {id:"sol",tema:"SECAR CON EL SOL",pregunta:"Mamá lavó la ropa y está mojada. ¿Cómo la secamos sin gastar luz?",start:"#ffd54f",end:"#ff6f00"},
  {id:"juguetes",tema:"JUGUETES QUE SE REUSAN",pregunta:"Ya no jugamos con estos juguetes. ¿Qué hacemos con ellos?",start:"#9fa8da",end:"#283593"}
];

import * as A from "./scenes-a.js";
import * as B from "./scenes-b.js";
import {at, kid} from "./kit.js";
import * as O from "./scenes-old.js";

// Agrega un niño con cuerpo a una escena ya dibujada.
const withKid = (build, x, opts) => () => build().replace(/<\/svg>\s*$/, `${at(x, 585, kid(opts))}</svg>`);

const scenes = {
  agua: A.water, luz: A.light, plastico: A.plastic, reciclaje: A.recycling, comida: A.food,
  aire: A.air, arboles: A.trees, polinizadores: B.pollinators, papel: B.paper, ropa: B.clothes,
  transporte: B.transport, huerta: B.garden, basura: B.park, ruido: B.noise, pilas: withKid(O.batteries, 430, {shirt: "#42a5f5", pants: "#37474f", hair: "#212121", style: "short", l: 4, r: -130, anim: "r", s: 1.15}),
  lluvia: withKid(O.rain, 130, {shirt: "#ffca28", pants: "#1e88e5", hair: "#6d4c41", style: "pony", l: 4, r: -130, anim: "r", s: 1.15}), oceano: O.ocean, compost: withKid(O.compost, 85, {shirt: "#ef5350", pants: "#3949ab", hair: "#4e342e", style: "curly", l: 4, r: -130, anim: "r", s: 1.15}), sol: B.solar, juguetes: O.toys
};

export function getScene(id) {
  const build = scenes[id];
  if (!build) throw new Error(`No existe una animación para el reto "${id}".`);
  return build();
}

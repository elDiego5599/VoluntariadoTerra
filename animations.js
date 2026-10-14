export const RETOS = [
  {id:"agua",tema:"CUIDEMOS EL AGUA",pregunta:"¿Qué podemos hacer para no desperdiciar agua?",start:"#29b6f6",end:"#0277bd"},
  {id:"luz",tema:"AHORREMOS LUZ",pregunta:"¿Cómo usamos menos electricidad en casa y en la escuela?",start:"#ffee58",end:"#f9a825"},
  {id:"plastico",tema:"MENOS PLÁSTICO",pregunta:"¿Qué usamos en vez de bolsas y botellas de plástico?",start:"#ef5350",end:"#b71c1c"},
  {id:"reciclaje",tema:"SEPAREMOS LA BASURA",pregunta:"¿Cómo podemos separar las cosas que vamos a botar?",start:"#66bb6a",end:"#2e7d32"},
  {id:"comida",tema:"NO BOTEMOS COMIDA",pregunta:"¿Qué podemos hacer para que no sobre tanta comida?",start:"#ffa726",end:"#e65100"},
  {id:"aire",tema:"AIRE LIMPIO",pregunta:"¿Qué ayuda a mantener limpio el aire que respiramos?",start:"#4dd0e1",end:"#00838f"},
  {id:"arboles",tema:"CUIDEMOS LOS ÁRBOLES",pregunta:"¿Por qué son importantes los árboles?",start:"#81c784",end:"#1b5e20"},
  {id:"polinizadores",tema:"ABEJAS Y FLORES",pregunta:"¿Dónde buscan alimento las abejas y las mariposas?",start:"#ce93d8",end:"#6a1b9a"},
  {id:"papel",tema:"USEMOS MENOS PAPEL",pregunta:"¿Cómo podemos usar menos papel?",start:"#d7ccc8",end:"#5d4037"},
  {id:"ropa",tema:"ROPA PARA COMPARTIR",pregunta:"¿Qué podemos hacer con la ropa que ya no nos queda?",start:"#f48fb1",end:"#ad1457"},
  {id:"transporte",tema:"MOVÁMONOS SIN HUMO",pregunta:"¿Cómo podemos viajar haciendo menos humo?",start:"#80deea",end:"#006064"},
  {id:"huerta",tema:"SEMBREMOS PLANTAS",pregunta:"¿Qué necesita una semilla para crecer?",start:"#aed581",end:"#33691e"},
  {id:"basura",tema:"BARRIO LIMPIO",pregunta:"¿Cómo cuidamos las calles y el parque?",start:"#bcaaa4",end:"#4e342e"},
  {id:"ruido",tema:"MENOS RUIDO",pregunta:"¿Qué sonidos molestan a las personas y los animales?",start:"#90caf9",end:"#1565c0"},
  {id:"pilas",tema:"PILAS USADAS",pregunta:"¿Dónde debemos llevar las pilas que ya no sirven?",start:"#b0bec5",end:"#37474f"},
  {id:"lluvia",tema:"AGUA DE LLUVIA",pregunta:"¿Qué podemos hacer con el agua de lluvia?",start:"#4fc3f7",end:"#01579b"},
  {id:"oceano",tema:"CUIDEMOS EL MAR",pregunta:"¿Qué cosas pueden hacer daño al mar y a los peces?",start:"#26c6da",end:"#004d40"},
  {id:"compost",tema:"CÁSCARAS Y PLANTAS",pregunta:"¿Qué podemos hacer con las cáscaras de frutas y verduras?",start:"#a1887f",end:"#3e2723"},
  {id:"sol",tema:"ENERGÍA DEL SOL",pregunta:"¿Cómo puede ayudarnos el sol a tener electricidad?",start:"#ffd54f",end:"#ff6f00"},
  {id:"juguetes",tema:"JUGUETES QUE SE REUSAN",pregunta:"¿Qué podemos hacer con los juguetes que ya no usamos?",start:"#9fa8da",end:"#283593"}
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
  lluvia: withKid(O.rain, 130, {shirt: "#ffca28", pants: "#1e88e5", hair: "#6d4c41", style: "pony", l: 4, r: -130, anim: "r", s: 1.15}), oceano: O.ocean, compost: withKid(O.compost, 85, {shirt: "#ef5350", pants: "#3949ab", hair: "#4e342e", style: "curly", l: 4, r: -130, anim: "r", s: 1.15}), sol: withKid(O.solar, 110, {shirt: "#66bb6a", pants: "#455a64", hair: "#212121", style: "cap", l: 4, r: -130, anim: "r", s: 1.15}), juguetes: O.toys
};

export function getScene(id) {
  const build = scenes[id];
  if (!build) throw new Error(`No existe una animación para el reto "${id}".`);
  return build();
}

import { RETOS, getScene } from "./animations.js";

const $ = selector => document.querySelector(selector);
const wheelHolder = $("#wheel-holder");
const sceneHolder = $("#scene-holder");
const experience = $("#experience");
const panel = $("#panel");
const theme = $("#el-tema");
const question = $("#el-pregunta");
const countLabel = $("#pill-count");
const counter = $("#counter");
const spinButton = $("#btn-spin");
const backButton = $("#btn-back");
const resetButton = $("#btn-reset");
const storageKey = "ruletaTerra-progreso-v1";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TAU = Math.PI * 2;
const N = RETOS.length;
const CONFETTI_COLORS = ["#ef5350", "#ffca28", "#66bb6a", "#42a5f5", "#ab47bc", "#ff7043"];
const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
const easeInOut = t => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function readProgress(){
  try{
    const value = localStorage.getItem(storageKey);
    if(value === null) return new Set();
    const ids = JSON.parse(value);
    if(!Array.isArray(ids) || !ids.every(id => typeof id === "string")){
      throw new Error("El progreso guardado tiene un formato inválido.");
    }
    return new Set(ids.filter(id => RETOS.some(reto => reto.id === id)));
  }catch(error){
    console.error("No se pudo cargar el progreso local de la ruleta.", error);
    return new Set();
  }
}

const seen = readProgress();
const slots = () => RETOS.flatMap((reto, i) => seen.has(reto.id) ? [] : [i]);
const arcOf = () => TAU / Math.max(1, slots().length);
let angle = 0;
let spin = null;          // {from, delta, t0, dur, index}
let highlight = null;     // {slot, t0}
let kick = 0;             // desviación del puntero
let lastTick = -1;
let showingResult = false;
let confetti = [];

/* ------------------------------ UI ------------------------------ */

function updateCount(){
  countLabel.textContent = `${seen.size} / ${N} retos descubiertos`;
}

function updateCompletion(){
  const done = seen.size === N;
  spinButton.disabled = done;
  spinButton.textContent = done
    ? "¡LO LOGRASTE!"
    : seen.size === 0 ? "INICIAR RULETA" : "GIRAR OTRA VEZ";
  counter.textContent = done
    ? "¡Completaste todos los retos! Eres Guardián del Planeta."
    : "Toca la ruleta o el botón para descubrir un reto ambiental.";
}

function saveProgress(){
  try{
    localStorage.setItem(storageKey, JSON.stringify([...seen]));
    return true;
  }catch(error){
    console.error("No se pudo guardar el progreso en este dispositivo.", error);
    counter.textContent = "No se pudo guardar el progreso en este dispositivo.";
    return false;
  }
}

function openResult(index){
  const reto = RETOS[index];
  seen.add(reto.id);
  const saved = saveProgress();
  updateCount();
  const left = N - seen.size;
  spinButton.disabled = left === 0;
  spinButton.textContent = left === 0 ? "¡LO LOGRASTE!" : "GIRAR OTRA VEZ";
  if(saved){
    counter.textContent = left === 0
      ? "¡Completaste todos los retos! Eres Guardián del Planeta."
      : `¡Reto descubierto! Quedan ${left} casillas.`;
  }
  theme.textContent = `${index + 1}. ${reto.tema}`;
  question.textContent = reto.pregunta;
  sceneHolder.innerHTML = getScene(reto.id);
  showingResult = true;
  experience.classList.add("has-result");
  panel.hidden = false;
  backButton.hidden = false;
  history.replaceState(null, "", `#${reto.id}`);
  highlight = null;
  buildFace();
  requestFrame();
  if(window.matchMedia("(max-width:760px)").matches){
    requestAnimationFrame(() => panel.scrollIntoView({behavior: reducedMotion ? "auto" : "smooth", block: "nearest"}));
  }
}

function closeScene(){
  showingResult = false;
  highlight = null;
  sceneHolder.innerHTML = "";
  panel.hidden = true;
  backButton.hidden = true;
  experience.classList.remove("has-result");
  history.replaceState(null, "", location.pathname + location.search);
  if(seen.size === N) angle = 0;
  updateCompletion();
  requestFrame();
}

function resetProgress(){
  try{
    localStorage.removeItem(storageKey);
  }catch(error){
    console.error("No se pudo borrar el progreso local de la ruleta.", error);
    counter.textContent = "No se pudo reiniciar el progreso en este dispositivo.";
    return;
  }
  seen.clear();
  spin = null;
  highlight = null;
  confetti = [];
  angle = 0;
  updateCount();
  closeScene();
  buildFace();
  requestFrame();
}

/* ----------------------------- RULETA ----------------------------- */

const canvas = document.createElement("canvas");
canvas.tabIndex = 0;
canvas.setAttribute("role", "button");
canvas.setAttribute("aria-label", "Ruleta con retos ambientales. Toca para girar.");
wheelHolder.append(canvas);
const ctx = canvas.getContext("2d");
let faceCanvas = null;
let size = 0;
let dpr = 1;
let raf = 0;
let lastTime = 0;

const geometry = () => {
  const k = size / 480;
  return {k, c: size / 2, R: size / 2 - 36 * k};
};

function buildFace(){
  if(!size) return;
  faceCanvas = document.createElement("canvas");
  faceCanvas.width = faceCanvas.height = Math.round(size * dpr);
  const g = faceCanvas.getContext("2d");
  g.scale(dpr, dpr);
  const {k, c, R} = geometry();
  g.translate(c, c);

  const order = slots();
  const ARC = arcOf();
  order.forEach((i, j) => {
    const reto = RETOS[i];
    const start = j * ARC;
    const end = start + ARC;
    const grad = g.createRadialGradient(0, 0, R * .1, 0, 0, R);
    grad.addColorStop(0, reto.start);
    grad.addColorStop(1, reto.end);
    g.beginPath();
    g.moveTo(0, 0);
    g.arc(0, 0, R, start, end);
    g.closePath();
    g.fillStyle = grad;
    g.fill();
    g.strokeStyle = "rgba(255,255,255,.95)";
    g.lineWidth = 2.5 * k;
    g.stroke();

    // número en una pastilla
    g.save();
    g.rotate(start + ARC / 2);
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.translate(R * (order.length > 6 ? .78 : .66), 0);
    g.rotate(Math.PI / 2);
    g.fillStyle = "#fff";
    g.beginPath();
    g.arc(0, 0, R * .085, 0, TAU);
    g.fill();
    g.fillStyle = "#17301a";
    g.font = `800 ${R * .1}px Montserrat,sans-serif`;
    g.fillText(i + 1, 0, 1);
    g.restore();
  });

  if(!order.length){
    const grad = g.createRadialGradient(0, 0, R * .1, 0, 0, R);
    grad.addColorStop(0, "#fff176");
    grad.addColorStop(1, "#43a047");
    g.beginPath();
    g.arc(0, 0, R, 0, TAU);
    g.fillStyle = grad;
    g.fill();
    g.fillStyle = "#fff";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.font = `${R * .2}px 'Luckiest Guy',Montserrat,sans-serif`;
    g.fillText("¡LO", 0, -R * .16);
    g.fillText("LOGRASTE!", 0, R * .1);
  }

  // aro de madera con luces
  g.beginPath();
  g.arc(0, 0, R + 6 * k, 0, TAU);
  g.strokeStyle = "#6d4c41";
  g.lineWidth = 13 * k;
  g.stroke();
  g.strokeStyle = "#a1887f";
  g.lineWidth = 2 * k;
  g.stroke();
  // clavijas: una en cada borde de sector, giran con la ruleta
  const pegs = Math.max(1, order.length);
  for(let j = 0; j < pegs; j++){
    const a = j * TAU / pegs;
    const px = Math.cos(a) * (R + 6 * k);
    const py = Math.sin(a) * (R + 6 * k);
    const pg = g.createRadialGradient(px - k, py - k, k * .5, px, py, 5 * k);
    pg.addColorStop(0, "#fffde7");
    pg.addColorStop(1, "#f9a825");
    g.beginPath();
    g.arc(px, py, 4.6 * k, 0, TAU);
    g.fillStyle = pg;
    g.fill();
    g.strokeStyle = "#8d6e63";
    g.lineWidth = 1.4 * k;
    g.stroke();
  }
}

function drawPointer(k, c){
  // pivote sobre el aro; la punta descansa entre las clavijas
  ctx.save();
  ctx.translate(c, 13 * k);
  ctx.rotate(kick);
  ctx.beginPath();
  ctx.moveTo(-13 * k, 0);
  ctx.quadraticCurveTo(-13 * k, 14 * k, 0, 31 * k);
  ctx.quadraticCurveTo(13 * k, 14 * k, 13 * k, 0);
  ctx.arc(0, 0, 13 * k, 0, -Math.PI, true);
  ctx.closePath();
  ctx.shadowColor = "rgba(0,0,0,.35)";
  ctx.shadowBlur = 6 * k;
  ctx.shadowOffsetY = 3 * k;
  ctx.fillStyle = "#e65100";
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.lineWidth = 3 * k;
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 5.5 * k, 0, TAU);
  ctx.fillStyle = "#ffcc80";
  ctx.fill();
  ctx.restore();
}

function draw(now){
  if(!faceCanvas) return;
  const {k, c, R} = geometry();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  ctx.fillStyle = "rgba(23,48,26,.16)";
  ctx.beginPath();
  ctx.ellipse(c, c + 12 * k, R + 14 * k, R + 14 * k, 0, 0, TAU);
  ctx.fill();

  ctx.save();
  ctx.translate(c, c);
  ctx.rotate(angle);
  ctx.drawImage(faceCanvas, -c, -c, size, size);
  if(highlight){
    const pulse = .5 + .5 * Math.sin((now - highlight.t0) / 110);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, R, highlight.slot * arcOf(), (highlight.slot + 1) * arcOf());
    ctx.closePath();
    ctx.fillStyle = `rgba(255,255,255,${.18 + .3 * pulse})`;
    ctx.fill();
    ctx.strokeStyle = "#ffeb3b";
    ctx.lineWidth = (5 + 3 * pulse) * k;
    ctx.stroke();
  }
  ctx.restore();

  // centro
  const hub = ctx.createRadialGradient(c, c - 6 * k, 3 * k, c, c, R * .2);
  hub.addColorStop(0, "#bcaaa4");
  hub.addColorStop(1, "#4e342e");
  ctx.beginPath();
  ctx.arc(c, c, R * .17, 0, TAU);
  ctx.fillStyle = hub;
  ctx.fill();
  ctx.lineWidth = 4 * k;
  ctx.strokeStyle = "#fff";
  ctx.stroke();

  drawPointer(k, c);

  for(const p of confetti){
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  }
}

function burst(){
  if(reducedMotion) return;
  const {k, c} = geometry();
  confetti = Array.from({length: 70}, () => {
    const dir = -Math.PI / 2 + (Math.random() - .5) * 2.4;
    const speed = (240 + Math.random() * 420) * k;
    return {
      x: c, y: c, vx: Math.cos(dir) * speed, vy: Math.sin(dir) * speed,
      rot: Math.random() * TAU, vr: (Math.random() - .5) * 14,
      w: (6 + Math.random() * 7) * k, h: (9 + Math.random() * 8) * k,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)], life: 1
    };
  });
}

function frame(now){
  raf = 0;
  const dt = Math.min(.05, (now - lastTime) / 1000 || .016);
  lastTime = now;
  let busy = false;

  if(spin){
    const elapsed = now - spin.t0;
    const WIND = 380;
    if(elapsed < WIND){
      angle = spin.from - .22 * easeInOut(elapsed / WIND);
    }else{
      const t = Math.min(1, (elapsed - WIND) / spin.dur);
      angle = spin.from - .22 + spin.delta * easeOutQuart(t);
      if(t >= 1){
        const index = spin.index;
        highlight = {slot: spin.slot, t0: now};
        spin = null;
        burst();
        setTimeout(() => openResult(index), reducedMotion ? 0 : 1300);
      }
    }
    // un "clic" cada vez que una púa pasa por el puntero
    const slot = Math.floor((((-Math.PI / 2 - angle) % TAU) + TAU) % TAU / arcOf());
    if(slot !== lastTick){
      if(lastTick !== -1) kick = -.4;
      lastTick = slot;
    }
    busy = true;
  }

  kick *= Math.exp(-dt * 13);
  if(Math.abs(kick) < .002) kick = 0; else busy = true;

  if(confetti.length){
    for(const p of confetti){
      p.vy += 900 * geometry().k * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      p.life -= dt * .55;
    }
    confetti = confetti.filter(p => p.life > 0);
    busy = true;
  }

  if(highlight && !showingResult) busy = true;
  draw(now);
  if(busy) raf = requestAnimationFrame(frame);
}

function requestFrame(){
  if(!raf){
    lastTime = performance.now();
    raf = requestAnimationFrame(frame);
  }
}

function startSpin(){
  if(spin || highlight || showingResult || seen.size === N) return;
  const pending = slots();
  const slot = Math.floor(Math.random() * pending.length);
  const index = pending[slot];
  const ARC = arcOf();
  const jitter = (Math.random() - .5) * ARC * .6;
  const target = -Math.PI / 2 - (slot + .5) * ARC + jitter;
  const from = angle;
  const turns = 5 + Math.floor(Math.random() * 2);
  const delta = ((target - (from - .22)) % TAU + TAU) % TAU + TAU * turns;
  spin = {from, delta, t0: performance.now(), dur: reducedMotion ? 600 : 4800 + Math.random() * 700, index, slot};
  lastTick = -1;
  spinButton.disabled = true;
  spinButton.textContent = "GIRANDO...";
  requestFrame();
}

let resizeTimer = 0;
function resize(){
  const next = Math.max(180, Math.floor(wheelHolder.clientWidth));
  const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
  if(next === size && nextDpr === dpr) return;
  size = next;
  dpr = nextDpr;
  canvas.width = canvas.height = Math.round(size * dpr);
  buildFace();
  draw(performance.now());
}

new ResizeObserver(() => {
  if(!size){ resize(); return; }
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resize, 90);
}).observe(wheelHolder);

canvas.addEventListener("click", startSpin);
canvas.addEventListener("keydown", event => {
  if(event.key === "Enter" || event.key === " "){
    event.preventDefault();
    startSpin();
  }
});
spinButton.addEventListener("click", startSpin);
backButton.addEventListener("click", closeScene);
resetButton.addEventListener("click", resetProgress);
window.addEventListener("keydown", event => {
  if(event.key === "Escape" && showingResult) closeScene();
});
document.fonts?.ready.then(() => { buildFace(); draw(performance.now()); });

updateCount();
updateCompletion();
resize();

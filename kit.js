/* Kit de dibujo SVG (lienzo 800 x 600). Un elemento animado (a-*, c-*, s-*) nunca lleva transform; se posiciona con at() en un <g> padre. */
export const at = (x, y, inner, s = 1, r = 0) =>
  `<g transform="translate(${x} ${y})${s !== 1 ? ` scale(${s})` : ""}${r ? ` rotate(${r})` : ""}">${inner}</g>`;
export const an = (cls, inner, d, dl = 0, extra = "") =>
  `<g class="${cls}" style="--d:${d}s;--dl:${dl}s;${extra}">${inner}</g>`;
export const rect = (x, y, w, h, fill, r = 0, extra = "") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`;
export const circ = (x, y, r, fill, extra = "") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" ${extra}/>`;
export const path = (d, fill, extra = "") => `<path d="${d}" fill="${fill}" ${extra}/>`;
export const line = (d, stroke, w, extra = "") =>
  `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
export const text = (x, y, str, size, fill, extra = "") =>
  `<text x="${x}" y="${y}" font-family="'Luckiest Guy',Montserrat,sans-serif" font-size="${size}" fill="${fill}" text-anchor="middle" ${extra}>${str}</text>`;

export const DROP = "M0 -22C12 -6 17 2 17 11A17 17 0 0 1 -17 11C-17 2 -12 -6 0 -22Z";

export const svg = (id, top, bottom, body) => {
  const seed = [...id].reduce((n, ch) => n + ch.charCodeAt(0), 0);
  const stars = Array.from({length: 7}, (_, k) => {
    const x = 40 + ((seed * (k + 3) * 53) % 720);
    const y = 30 + ((seed * (k + 5) * 31) % 210);
    return an("a-twinkle", at(x, y, `<path d="M0 -9L2.6 -2.6L9 0L2.6 2.6L0 9L-2.6 2.6L-9 0L-2.6 -2.6Z" fill="#fff"/>`, .5 + (k % 3) * .25), 2 + (k % 4) * .5, k * .37);
  }).join("");
  return `<svg class="scene" viewBox="0 0 800 600" role="img" aria-hidden="true">
<defs>
<linearGradient id="bg-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
<radialGradient id="sunG"><stop offset="0" stop-color="#fff9c4"/><stop offset=".6" stop-color="#ffd54f"/><stop offset="1" stop-color="#ffb300"/></radialGradient>
<linearGradient id="cloudG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#dcecf5"/></linearGradient>
<radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".62" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#1b2a3a" stop-opacity=".16"/></radialGradient>
</defs>
<rect width="800" height="600" fill="url(#bg-${id})"/>${stars}${body}<rect width="800" height="600" fill="url(#vig)" pointer-events="none"/></svg>`;
};

// Cara simpática: ojos que parpadean, mejillas y boca
export const note = (x, y, size, fill) => at(x, y, `${path("M-9 0a9 7 -20 1 0 18 0a9 7 -20 1 0 -18 0", fill)}${rect(6, -40, 4, 40, fill)}${path("M10 -40q16 6 12 22q-2 -10 -12 -12z", fill)}`, size / 40);
export const face = (x, y, s = 1, mood = "smile") => at(x, y,
  an("a-blink", `${circ(-12, 0, 6.4, "#263238")}${circ(12, 0, 6.4, "#263238")}${circ(-10, -2.6, 2.6, "#fff")}${circ(14, -2.6, 2.6, "#fff")}${circ(-14, 2, 1.2, "#fff")}${circ(10, 2, 1.2, "#fff")}`, 4.5, (x % 7) / 3) +
  circ(-22, 10, 5.5, "#ff8a80", 'opacity=".6"') + circ(22, 10, 5.5, "#ff8a80", 'opacity=".6"') +
  (mood === "smile" ? `${path("M-9 7Q0 23 9 7Z", "#7f1d1d")}${path("M-4.5 14.5Q0 11 4.5 14.5Q0 19 -4.5 14.5Z", "#ff8a80")}`
    : mood === "wow" ? `<ellipse cx="0" cy="13" rx="6" ry="7.5" fill="#7f1d1d"/>${line("M-19 -12L-7 -15M19 -12L7 -15", "#263238", 3)}`
    : mood === "sleep" ? line("M-8 12Q0 6 8 12", "#263238", 3.2)
    : `${line("M-8 15Q0 6 8 15", "#263238", 3.2)}${line("M-19 -9L-7 -13M19 -9L7 -13", "#263238", 3)}${an("a-fall", path("M0 -6C4 0 6 3 6 6A6 6 0 0 1 -6 6C-6 3 -4 0 0 -6Z", "#81d4fa"), 2.2, 0, "--y:22px")}`), s);

export const sun = (x, y, r = 46, withFace = true) => at(x, y,
  an("a-pulse", circ(0, 0, r + 30, "#fff59d", 'opacity=".38"'), 3.5) +
  an("a-spin", Array.from({length: 12}, (_, i) =>
    `<rect x="-4.5" y="${-r - 30}" width="9" height="20" rx="4.5" fill="#ffca28" transform="rotate(${i * 30})"/>`).join(""), 24) +
  circ(0, 0, r, "url(#sunG)") +
  (withFace ? face(0, 2, r / 46) : ""));

export const cloud = (x, y, s = 1, d = 9, dl = 0, fill = "url(#cloudG)") => at(x, y,
  an("a-float", `${circ(-34, 6, 26, fill)}${circ(0, -8, 34, fill)}${circ(36, 8, 24, fill)}${rect(-58, 6, 118, 26, fill, 13)}`, d, dl), s);

export const tree = (x, y, s = 1, d = 5, dl = 0) => at(x, y,
  rect(-11, -70, 22, 72, "#8d5a3b", 8) + rect(-11, -70, 8, 72, "#a06a47", 4) +
  an("a-sway o-b", `${circ(0, -105, 52, "#2e7d32")}${circ(-34, -82, 38, "#388e3c")}${circ(34, -82, 38, "#388e3c")}${circ(-8, -118, 36, "#4caf50")}${circ(-20, -128, 14, "#81c784", 'opacity=".6"')}`, d, dl), s);

export const hills = (y, c1, c2) =>
  path(`M0 ${y}Q150 ${y - 90} 300 ${y - 20}T600 ${y - 30}T800 ${y - 10}V600H0Z`, c1) +
  path(`M0 ${y}Q150 ${y - 90} 300 ${y - 20}T600 ${y - 30}T800 ${y - 10}`, "none", 'stroke="#fff" stroke-width="6" opacity=".28" stroke-linecap="round"') +
  path(`M0 ${y + 40}Q200 ${y - 30} 420 ${y + 30}T800 ${y + 20}V600H0Z`, c2);

// Pasto con florecitas que se mecen
export const meadow = (y) => [[60, 0, "#ec407a"], [210, 26, "#ffffff"], [380, 8, "#ffca28"], [560, 30, "#ab47bc"], [730, 12, "#ff7043"]].map(([x, dy, c], i) =>
  at(x, y + 22 + dy, an("a-sway o-b", `${line("M-7 0Q-8 -14 -10 -22M0 0V-26M7 0Q8 -14 10 -22", "#558b2f", 4)}${circ(0, -30, 6, c)}${circ(0, -30, 2.4, "#ffd54f")}`, 3 + i * .4, i * .3))).join("");

// Burbuja de oxígeno (la fuente no tiene subíndice)
export const o2 = (x, y, d, dl, rise = 140) => an("a-rise", at(x, y, `${circ(0, 0, 22, "#e1f5fe", 'stroke="#4fc3f7" stroke-width="3" opacity=".95"')}${text(-4, 7, "O", 20, "#0277bd")}${text(10, 12, "2", 12, "#0277bd")}`), d, dl, `--y:-${rise}px`);

// Insignia de "¡bien hecho!" con estrellitas
export const okBadge = (x, y, r = 44) => at(x, y, an("c-pop", `${circ(0, 0, r, "#66bb6a", 'stroke="#fff" stroke-width="6"')}${line(`M${-r * .4} ${r * .05}L${-r * .1} ${r * .33}L${r * .42} ${-r * .3}`, "#fff", r * .22)}${Array.from({length: 8}, (_, i) => at(Math.cos(i * Math.PI / 4) * (r + 26), Math.sin(i * Math.PI / 4) * (r + 26), `<path d="M0 -9L2.6 -2.6L9 0L2.6 2.6L0 9L-2.6 2.6L-9 0L-2.6 -2.6Z" fill="#ffd54f"/>`)).join("")}`, 6));

// Etiqueta del ciclo: primero "así no", luego "así sí"
export const phase = () => at(400, 44,
  an("c-a", `${rect(-86, -24, 172, 48, "#e53935", 24, 'stroke="#fff" stroke-width="5"')}${text(0, 11, "¡ASÍ NO!", 30, "#fff")}`, 6) +
  an("c-b", `${rect(-86, -24, 172, 48, "#43a047", 24, 'stroke="#fff" stroke-width="5"')}${text(0, 11, "¡ASÍ SÍ!", 30, "#fff")}`, 6));

export const heart = (x, y, s = 1, fill = "#ec407a") => at(x, y, path("M0 10C-30 -12 -14 -28 0 -14C14 -28 30 -12 0 10Z", fill), s);

export const bike = (body = "#00acc1", rider = true) => {
  const wheel = x => an("a-spin", `${circ(x, 0, 30, "none", 'stroke="#263238" stroke-width="6"')}${line(`M${x - 30} 0H${x + 30}M${x} -30V30M${x - 21} -21L${x + 21} 21M${x - 21} 21L${x + 21} -21`, "#78909c", 2)}`, 0.8);
  return wheel(-46) + wheel(46) +
    line("M-46 0L-12 -44L36 -44L46 0M-12 -44L8 0H-46M8 0L24 -44M24 -44L38 -64M24 -66H46", body, 7) +
    line("M-18 -50H0", "#263238", 7) +
    (rider ? at(-4, -112, an("a-wiggle o-b", `${rect(-14, 20, 30, 50, "#ff7043", 14)}${circ(0, 0, 26, "#ffcc80")}${path("M-27 -4A27 27 0 0 1 27 -4Z", "#ef5350")}${face(0, 6, .55)}${line("M10 55L32 74L26 42", "#ffcc80", 8)}`, 0.8)) : "");
};

/* ---------------- piezas nuevas ---------------- */
export const star = (x, y, s = 1, fill = "#fff59d") => at(x, y, path("M0 -12L3.4 -3.4L12 0L3.4 3.4L0 12L-3.4 3.4L-12 0L-3.4 -3.4Z", fill), s);
export const sparkle = (x, y, s = 1, d = 1.8, dl = 0, fill = "#fff59d") => an("a-twinkle", star(x, y, s, fill), d, dl);
export const shade = (x, y, rx = 40, op = .18) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * .2}" fill="#1b2a3a" opacity="${op}"/>`;

// Suelo de pasto con vetas y matitas
export const grass = (y, c1 = "#9ccc65", c2 = "#7cb342") => {
  const tufts = Array.from({length: 16}, (_, i) => {
    const x = 20 + (i * 53) % 780, yy = y + 24 + (i * 37) % (600 - y - 40);
    return line(`M${x - 8} ${yy}l4 -12l4 12M${x} ${yy}l4 -16l4 16`, "#558b2f", 3, 'opacity=".55"');
  }).join("");
  return `<defs><linearGradient id="gr${y}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>` +
    rect(0, y, 800, 600 - y, `url(#gr${y})`) + rect(0, y, 800, 8, "#fff", 0, 'opacity=".25"') + tufts;
};

// Calle con borde y rayas
export const road = (y, h = 120) =>
  rect(0, y - 14, 800, 14, "#cfd8dc") + rect(0, y, 800, h, "#546e7a") + rect(0, y, 800, 6, "#78909c") +
  line(`M0 ${y + h / 2}H800`, "#fff", 7, 'stroke-dasharray="34 26"');

// Edificio con ventanas
export const bldg = (x, y, w, h, c, win = "#e1f5fe", roof = null) => {
  const cols = Math.max(1, Math.floor((w - 12) / 26)), rows = Math.max(1, Math.floor((h - 18) / 34));
  const wins = Array.from({length: cols * rows}, (_, i) => {
    const cx = x + 10 + (i % cols) * ((w - 20) / cols) + ((w - 20) / cols - 16) / 2, cy = y + 14 + Math.floor(i / cols) * 34;
    return rect(cx, cy, 16, 20, i % 5 === 2 ? "#ffe082" : win, 3);
  }).join("");
  return rect(x, y, w, h, c, 6) + rect(x, y, w, 10, "#fff", 6, 'opacity=".25"') + (roof ? rect(x - 4, y - 8, w + 8, 12, roof, 4) : "") + wins;
};

export const cityline = (y, op = 1) => `<g opacity="${op}">` +
  [[10, 130, 70, "#b2dfdb"], [90, 90, 80, "#80cbc4"], [180, 160, 64, "#9fd8d0"], [254, 110, 90, "#b2dfdb"], [354, 170, 70, "#80cbc4"], [434, 100, 84, "#a5d6cf"], [528, 150, 66, "#b2dfdb"], [604, 120, 90, "#80cbc4"], [704, 170, 90, "#9fd8d0"]]
    .map(([x, h, w, c]) => bldg(x, y - h, w, h, c, "#e0f7fa")).join("") + `</g>`;

export const house = (x, y, s = 1, wall = "#fff3e0", roof = "#e64a19", door = "#8d6e63") => at(x, y,
  rect(-110, -110, 220, 110, wall, 8) + rect(-110, -20, 220, 20, "#000", 0, 'opacity=".06"') +
  path("M-130 -104L0 -200L130 -104Z", roof) + path("M-130 -104L0 -200L130 -104", "none", 'stroke="#fff" stroke-width="5" opacity=".25" stroke-linejoin="round"') +
  rect(60, -190, 24, 50, "#8d6e63", 4) +
  rect(-24, -80, 48, 80, door, 8) + circ(14, -40, 4, "#ffd54f") +
  rect(-98, -86, 46, 46, "#b3e5fc", 6, 'stroke="#fff" stroke-width="5"') + rect(52, -86, 46, 46, "#b3e5fc", 6, 'stroke="#fff" stroke-width="5"') +
  line("M-75 -86V-40M-98 -63H-52M75 -86V-40M52 -63H98", "#fff", 3), s);

export const bush = (x, y, s = 1, c = "#43a047") => at(x, y, `${circ(-28, -14, 26, c)}${circ(6, -24, 32, c)}${circ(38, -12, 24, c)}${rect(-52, -14, 106, 14, c, 7)}${circ(-6, -34, 14, "#fff", 'opacity=".18"')}`, s);

export const fence = (x1, x2, y, c = "#fff") => {
  let s = "";
  for(let x = x1; x <= x2; x += 36) s += rect(x, y - 54, 20, 56, c, 6) + path(`M${x} ${y - 52}L${x + 10} ${y - 66}L${x + 20} ${y - 52}Z`, c);
  return s + rect(x1 - 4, y - 38, x2 - x1 + 28, 9, c, 4) + rect(x1 - 4, y - 16, x2 - x1 + 28, 9, c, 4);
};

// Niña o niño de cuerpo entero (origen en los pies, alto aprox. 200)
export const kid = ({skin = "#ffcc80", shirt = "#42a5f5", pants = "#3949ab", hair = "#5d4037", style = "short", mood = "smile", l = 6, r = -6, anim = null, s = 1, extra = ""} = {}) => {
  const arm = (sx, rot, animate) => at(sx, -118,
    (animate ? an("a-wiggle o-t", `${rect(-8, 0, 16, 54, shirt, 8)}${circ(0, 58, 9, skin)}`, .5) : `${rect(-8, 0, 16, 54, shirt, 8)}${circ(0, 58, 9, skin)}`), 1, rot);
  const hairBack = style === "pony" ? circ(46, -168, 17, hair) + circ(52, -150, 11, hair) : style === "long" ? rect(-40, -176, 80, 70, hair, 30) : "";
  const hairTop = style === "curly" ? [-30, -10, 12, 32].map((x, i) => circ(x, -188 + (i % 2) * 6, 18, hair)).join("") + path("M-36 -164A36 36 0 0 1 36 -164Q20 -182 0 -180Q-20 -182 -36 -164Z", hair)
    : style === "cap" ? path("M-38 -166A38 38 0 0 1 38 -166Z", hair) + rect(8, -170, 46, 11, hair, 6)
    : path("M-37 -160A37 37 0 0 1 37 -160Q24 -183 4 -181Q-22 -184 -37 -160Z", hair);
  return at(0, 0, shade(0, 2, 38, .2) +
    rect(-17, -76, 15, 64, pants, 6) + rect(2, -76, 15, 64, pants, 6) +
    `<ellipse cx="-12" cy="-6" rx="17" ry="9" fill="#37474f"/><ellipse cx="14" cy="-6" rx="17" ry="9" fill="#37474f"/>` +
    arm(-28, l, anim === "l" || anim === "both") + arm(28, r, anim === "r" || anim === "both") +
    rect(-27, -130, 54, 66, shirt, 20) + rect(-27, -130, 54, 14, "#fff", 12, 'opacity=".2"') + rect(-27, -80, 54, 16, pants, 8, 'opacity=".0"') +
    rect(-6, -140, 12, 14, skin, 4) + hairBack + circ(-37, -158, 8, skin) + circ(37, -158, 8, skin) + circ(0, -160, 37, skin) +
    hairTop + face(0, -154, .95, mood) + extra, s);
};

export const bird = (c = "#ef5350") => an("a-bob", `<ellipse rx="18" ry="12" fill="${c}"/>${circ(16, -6, 9, c)}<path d="M25 -6l10 3l-10 3Z" fill="#ffb300"/>${circ(18, -8, 2, "#263238")}${an("a-flap o-b", `<path d="M-6 -4Q-16 -30 4 -26Z" fill="${c}" opacity=".8"/>`, .25)}`, .5);

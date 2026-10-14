import * as K from "./kit.js";
const {at, an, rect, circ, path, line, text, DROP, svg, face, sun, cloud, tree, hills, meadow, o2, okBadge, phase, heart, note, bike} = K;

// 8. POLINIZADORES
export const pollinators = () => {
  const flower = (x, y, c, dl) => at(x, y, `
    ${line("M0 0V150", "#388e3c", 9)}${path("M0 100Q-46 70 -52 100Q-20 120 0 100Z", "#4caf50")}${path("M0 120Q46 90 52 120Q20 140 0 120Z", "#4caf50")}
    ${an("a-sway o-b", Array.from({length: 8}, (_, i) => `<ellipse cx="0" cy="-34" rx="17" ry="30" fill="${c}" transform="rotate(${i * 45})"/>`).join("") + circ(0, 0, 24, "#ffd54f") + face(0, 2, .7), 4, dl)}`);
  return svg("polinizadores", "#f3e5f5", "#e1bee7", `
${sun(690, 90, 36, false)}${cloud(150, 100, .8, 10)}
${rect(0, 470, 800, 130, "#81c784")}${hills(470, "#a5d6a7", "#81c784")}
${meadow(520)}${flower(160, 340, "#ec407a", 0)}${flower(400, 310, "#ff7043", 1)}${flower(640, 340, "#7e57c2", .5)}
${[[200, 250], [360, 230], [610, 260], [450, 290]].map(([x, y], i) => an("a-twinkle", at(x, y, path("M0 -10L3 -3L10 0L3 3L0 10L-3 3L-10 0L-3 -3Z", "#fff59d")), 1.6, i * .4)).join("")}
<g><animateMotion dur="9s" repeatCount="indefinite" path="M160 250C260 140 330 140 400 230C470 140 560 150 640 250C520 330 280 330 160 250Z"/>
  ${an("a-bob", `${an("a-flap o-b", `<ellipse cx="-4" cy="-18" rx="11" ry="20" fill="#fff" opacity=".85"/>`, .12)}
  <ellipse rx="26" ry="18" fill="#ffca28"/>${rect(-8, -17, 7, 34, "#263238", 3)}${rect(6, -16, 7, 32, "#263238", 3)}${circ(26, -2, 11, "#ffca28")}${circ(31, -4, 3, "#263238")}${line("M26 -12Q28 -22 36 -24", "#263238", 2)}${line("M-24 0L-34 4", "#263238", 4)}`, .5)}</g>
<g><animateMotion dur="12s" repeatCount="indefinite" path="M660 180C520 80 430 120 400 200C330 260 220 130 120 200C230 300 480 340 660 180Z"/>
  ${an("a-bob", `${an("a-flap", `<path d="M0 0C-30 -50 -64 -22 -46 8C-60 34 -20 40 0 0Z" fill="#ff7043"/><path d="M0 0C30 -50 64 -22 46 8C60 34 20 40 0 0Z" fill="#ffa726"/>${circ(-34, -6, 7, "#fff", 'opacity=".8"')}${circ(34, -6, 7, "#fff", 'opacity=".8"')}`, .5)}${rect(-3, -14, 6, 32, "#5d4037", 3)}`, 1.4)}</g>
`);
};

// 9. PAPEL: dibujar por los dos lados
export const paper = () => svg("papel", "#efebe9", "#d7ccc8", `
${rect(0, 440, 800, 160, "#a1887f")}${rect(0, 440, 800, 12, "#8d6e63")}
${rect(110, 190, 580, 300, "#000", 20, 'opacity=".12" transform="translate(8 10)"')}
${rect(110, 190, 290, 300, "#fff", 16, 'stroke="#cfd8dc" stroke-width="4"')}${rect(400, 190, 290, 300, "#fff", 16, 'stroke="#cfd8dc" stroke-width="4"')}
${Array.from({length: 7}, (_, i) => line(`M135 ${240 + i * 34}H375M425 ${240 + i * 34}H665`, "#e3f2fd", 3)).join("")}
${line("M400 190V490", "#b0bec5", 6)}
${[0, 1, 2, 3, 4, 5].map(i => circ(400, 215 + i * 50, 6, "#90a4ae")).join("")}
${path("M170 400V320L255 260L340 320V400Z", "none", 'pathLength="1" stroke="#e53935" stroke-width="7" stroke-linejoin="round" stroke-dasharray="1" class="a-draw" style="--d:6s"')}
${path("M215 400V350H295V400", "none", 'pathLength="1" stroke="#1e88e5" stroke-width="7" stroke-linejoin="round" stroke-dasharray="1" class="a-draw" style="--d:6s;--dl:.4s"')}
${path("M545 290L565 340L620 345L578 378L592 432L545 402L498 432L512 378L470 345L525 340Z", "none", 'pathLength="1" stroke="#fbc02d" stroke-width="7" stroke-linejoin="round" stroke-dasharray="1" class="a-draw" style="--d:6s;--dl:1.6s"')}
${at(560, 250, an("a-wiggle o-b", `${rect(-8, -80, 16, 80, "#ffb300", 4)}${rect(-8, -92, 16, 14, "#ec407a", 4)}<path d="M-8 0H8L0 22Z" fill="#ffe0b2"/><path d="M-3 14H3L0 22Z" fill="#263238"/>${face(0, -42, .38)}`, .6))}
${an("a-twinkle", at(720, 250, path("M0 -14L4 -4L14 0L4 4L0 14L-4 4L-14 0L-4 -4Z", "#ffd54f")), 1.8)}
<g><animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path="M-60 120C200 40 380 150 560 90S840 60 880 100"/>
  <path d="M-34 0L34 -12L-34 -22L-20 -9Z" fill="#fff" stroke="#90a4ae" stroke-width="3" stroke-linejoin="round"/><path d="M-20 -9L34 -12" stroke="#90a4ae" stroke-width="3"/></g>
${okBadge(120, 150, 40)}
`);

// 10. ROPA: regalar lo que ya no nos queda
export const shirt = (c, s = 1) => at(0, 0, `${path("M-18 -30L-48 -14L-36 12L-22 4V46H22V4L36 12L48 -14L18 -30Q0 -16 -18 -30Z", c)}${path("M-18 -30Q0 -16 18 -30", "none", 'stroke="#fff" stroke-width="4" opacity=".7"')}`, s);
export const clothes = () => svg("ropa", "#fce4ec", "#f8bbd0", `
${sun(700, 90, 34, false)}${cloud(180, 90, .8, 12)}
${rect(0, 470, 800, 130, "#81c784")}${hills(470, "#a5d6a7", "#81c784")}
${rect(60, 160, 14, 320, "#8d6e63", 6)}${rect(430, 160, 14, 320, "#8d6e63", 6)}
${line("M67 180Q250 220 437 180", "#78909c", 4)}
${[["#1e88e5", 150, 198], ["#43a047", 250, 208], ["#e91e63", 350, 200]].map(([c, x, y], i) =>
  at(x, y, an("a-sway o-t", `${line("M0 -8V4", "#78909c", 4)}<g transform="translate(0 38)">${shirt(c, 1.1)}</g>${face(0, 36, .55)}`, 3 + i * .4, i * .5))).join("")}
${at(620, 470, `
  ${an("s-catch o-b", `${rect(-100, -150, 200, 150, "#ffb74d", 14)}${rect(-112, -170, 224, 30, "#fb8c00", 10)}${text(0, -62, "REGALAR", 30, "#fff")}${an("a-pulse", heart(0, -105, 1.1, "#e53935"), 1.4)}`, 5)}`)}
${an("s-dn-x", an("s-dn-y", at(150, 470, `${shirt("#ab47bc", 1.2)}${face(0, 30, .6)}`), 5), 5, 0, "--dx:410px")}
${[0, 1, 2].map(i => an("a-rise", heart(540 + i * 80, 300, .8, ["#ec407a", "#ff7043", "#ab47bc"][i]), 3.2, i * 1, "--y:-100px")).join("")}
`);

// 11. TRANSPORTE
export const transport = () => svg("transporte", "#e0f7fa", "#b2ebf2", `
${sun(90, 90, 36, false)}${cloud(450, 80, .9, 11)}
<g opacity=".55">${[[40, 220, 90], [150, 170, 110], [280, 230, 80], [380, 190, 120], [520, 240, 90], [630, 200, 110], [730, 250, 70]].map(([x, y, w]) => rect(x, y, w, 330 - y, "#80cbc4", 6)).join("")}</g>
${rect(0, 440, 800, 30, "#c8e6c9")}${rect(0, 470, 800, 130, "#607d8b")}
${line("M0 535H800", "#fff", 6, 'stroke-dasharray="28 22"')}
${an("a-drive", at(0, 505, `
  ${rect(-120, -110, 240, 100, "#ffb300", 22)}${rect(-120, -50, 240, 14, "#f57f17")}
  ${[-80, -26, 28, 82].map(x => rect(x - 22, -96, 44, 38, "#e1f5fe", 8)).join("")}
  ${[-80, 28].map(x => at(x, -76, face(0, 0, .4))).join("")}
  ${an("a-bob", `${[-80, 82].map(x => circ(x, 2, 22, "#263238")).join("")}`, .5)}
  ${circ(-80, 2, 10, "#90a4ae")}${circ(80, 2, 10, "#90a4ae")}
  ${rect(100, -80, 20, 34, "#fff59d", 6)}`), 11, 0, "--x0:-260px;--x1:1060px")}
${an("a-drive", at(0, 560, bike("#e91e63"), .85), 8, 3, "--x0:-200px;--x1:1000px")}
${[160, 240, 330].map((x, i) => at(x, 432, an("a-bob", `${rect(-10, -4, 20, 42, ["#42a5f5", "#ab47bc", "#66bb6a"][i], 8)}${circ(0, -20, 18, "#ffcc80")}${face(0, -17, .5)}`, .7, i * .2))).join("")}
`);

// 12. HUERTA: la semilla crece
export const garden = () => svg("huerta", "#fffde7", "#e8f5e9", `
${sun(110, 100, 40, true)}${cloud(480, 100, .9, 10)}
${hills(400, "#c5e1a5", "#aed581")}
${rect(120, 420, 560, 180, "#8d6e63", 10)}${rect(100, 408, 600, 26, "#6d4c41", 10)}
${[170, 280, 520, 620].map((x, i) => circ(x, 470 + (i % 2) * 20, 6, "#6d4c41")).join("")}
${an("s-seed", at(400, 424, `<ellipse rx="14" ry="9" fill="#5d4037"/>`), 8)}
${at(400, 420, `${an("s-grow o-b", `
  ${line("M0 0V-170", "#43a047", 14)}${path("M0 -50Q-70 -90 -86 -50Q-40 -26 0 -50Z", "#66bb6a")}${path("M0 -90Q70 -130 86 -90Q40 -66 0 -90Z", "#66bb6a")}`, 8)}
  ${at(0, -190, an("s-bloom", `${Array.from({length: 8}, (_, i) => `<ellipse cx="0" cy="-34" rx="17" ry="30" fill="#ec407a" transform="rotate(${i * 45})"/>`).join("")}${circ(0, 0, 26, "#ffd54f")}${face(0, 2, .75)}`, 8))}`)}
${at(220, 330, an("a-wiggle", `${rect(-40, -26, 80, 56, "#42a5f5", 12)}${rect(34, -12, 50, 12, "#1e88e5", 6, 'transform="rotate(-30 34 -6)"')}${line("M-40 -6Q-62 -40 -30 -40", "#1e88e5", 8)}${face(-2, 6, .6)}`, 2.2))}
${[0, 1, 2, 3].map(i => an("a-fall", path(DROP, "#4fc3f7"), 1.4, i * .35, "--y:90px")).map(g => at(310 + 0, 330, g)).join("")}
`);

// 13. BARRIO LIMPIO
export const park = () => svg("basura", "#e1f5fe", "#e8f5e9", `
${sun(690, 100, 38)}${cloud(220, 100, .9, 11)}
${hills(400, "#a5d6a7", "#81c784")}
${rect(0, 480, 800, 120, "#d7ccc8")}${rect(0, 470, 800, 16, "#7cb342")}
${tree(110, 480, .8, 5)}
${line("M280 440H400M280 410H400M290 440V478M390 440V478", "#6d4c41", 10)}
${at(150, 480, `${rect(-14, -80, 28, 80, "#ef5350", 10)}${circ(0, -104, 24, "#ffcc80")}${path("M-26 -112A26 26 0 0 1 26 -112Z", "#6d4c41")}${face(0, -100, .55)}${an("a-wiggle o-tl", line("M10 -66L48 -96", "#ffcc80", 10), .8)}`)}
${at(200, 380, an("s-tossx", an("s-tossy", `<g class="s-tossb">${an("a-spin", circ(0, 0, 14, "#fff", 'stroke="#90a4ae" stroke-width="3"') + line("M-6 -4L6 4M-6 4L6 -4", "#b0bec5", 2), .5)}</g>`, 4), 4, 0, "--dx:360px;--dy:-170px;--ey:44px"))}
${at(570, 480, an("s-catch o-b", `${rect(-48, -120, 96, 120, "#039be5", 14)}${rect(-58, -138, 116, 24, "#01579b", 10)}${face(0, -74, 1)}${path("M-12 -22a12 12 0 1 0 24 0a12 12 0 1 0 -24 0M-6 -22a6 6 0 1 1 12 0a6 6 0 1 1 -12 0", "#fff", 'fill-rule="evenodd"')}`, 4))}
${at(570, 280, an("s-thanks", `${circ(0, 0, 34, "#66bb6a")}${line("M-13 1L-3 11L15 -10", "#fff", 8)}`, 4))}
${[0, 1, 2].map(i => an("s-thanks", at(520 + i * 50, 320 - (i % 2) * 20, path("M0 -12L4 -4L12 0L4 4L0 12L-4 4L-12 0L-4 -4Z", "#fff59d")), 4)).join("")}
`);

// 14. RUIDO: baja el volumen
export const noise = () => svg("ruido", "#e8eaf6", "#c5cae9", `
${rect(0, 460, 800, 140, "#b0bec5")}${rect(0, 460, 800, 12, "#cfd8dc")}
${cloud(180, 100, .8, 11)}
${at(230, 460, `
  ${rect(-110, -300, 220, 300, "#37474f", 22)}${circ(0, -90, 74, "#263238")}${circ(0, -90, 44, "#546e7a")}${circ(0, -200, 32, "#263238")}${circ(0, -200, 18, "#546e7a")}
  ${an("c-a", face(0, -130, 1.2, "wow"), 6)}${an("c-b", face(0, -130, 1.2, "smile"), 6)}`)}
${an("c-a", [0, 1, 2].map(i => at(360, 370, an("s-wave o-l", `<path d="M0 -70A80 80 0 0 1 0 70" fill="none" stroke="#e53935" stroke-width="10" stroke-linecap="round"/>`, 0, 0, `--d:1s;--dl:${i * .33}s`))).join(""), 6)}
${an("c-b", at(360, 370, `<path d="M0 -26A28 28 0 0 1 0 26" fill="none" stroke="#42a5f5" stroke-width="8" stroke-linecap="round"/>`), 6)}
${an("c-a", [0, 1, 2].map(i => an("a-wiggle", note(400 + i * 60, 260 - (i % 2) * 50, 54, "#e53935"), .3, i * .1)).join(""), 6)}
${an("c-b", [0, 1].map(i => an("a-bob", note(400 + i * 80, 260, 36, "#7986cb"), 2.4, i * .5)).join(""), 6)}
${line("M520 400H760", "#6d4c41", 14)}
${at(640, 400, `
  ${an("c-a", an("a-wiggle o-b", `${circ(0, -54, 44, "#ffca28")}${path("M-44 -50Q-70 -30 -50 -10Q-30 -30 -34 -52Z", "#ffa000")}<path d="M40 -60l30 8l-30 10Z" fill="#ef6c00"/>${circ(18, -66, 6, "#263238")}${line("M-30 -90Q-60 -72 -44 -52", "#e53935", 8)}${line("M-8 -94Q-30 -110 -50 -90", "#e53935", 8)}`, .25), 6)}
  ${an("c-b", `${circ(0, -50, 44, "#ffca28")}${path("M-44 -46Q-70 -26 -50 -6Q-30 -26 -34 -48Z", "#ffa000")}<path d="M40 -54l30 8l-30 10Z" fill="#ef6c00"/>${line("M10 -62Q18 -56 26 -62", "#263238", 4)}${[0, 1, 2].map(i => an("a-rise", text(30 + i * 22, -90 - i * 16, "z", 26 + i * 6, "#3949ab"), 3, i * .8, "--y:-50px")).join("")}`, 6)}`)}
${at(360, 520, an("c-flip", `${circ(0, 0, 34, "#ffb300", 'stroke="#f57f17" stroke-width="6"')}${rect(-4, -32, 8, 28, "#263238", 4)}`, 6, 0, "--a:rotate(100deg);--b:rotate(-70deg)"))}
${text(360, 580, "VOLUMEN", 22, "#5c6bc0")}
${phase()}
`);

// 15. PILAS
export const batteries = () => {
  const bat = (c, dl) => at(150, 470, an("s-bat", an("a-hop", `${rect(-20, -56, 40, 66, "#37474f", 8)}${rect(-20, -34, 40, 30, c, 3)}${rect(-8, -68, 16, 14, "#b0bec5", 4)}${face(0, -22, .55)}`, .7, dl), 7, dl, "--dx:450px"));
  return svg("pilas", "#eceff1", "#cfd8dc", `
${rect(0, 480, 800, 120, "#81c784")}${rect(0, 480, 800, 10, "#66bb6a")}
${cloud(150, 90, .8, 12)}${sun(690, 90, 34, false)}
${bat("#f57f17", 0)}${bat("#0288d1", 2.3)}${bat("#e53935", 4.6)}
${at(600, 480, `
  ${an("a-bob o-b", `${rect(-90, -230, 180, 20, "#ffd54f", 8)}`, 1.6)}
  ${rect(-84, -210, 168, 210, "#2e7d32", 18)}${rect(-70, -190, 140, 12, "#1b5e20", 6)}
  ${rect(-60, -130, 120, 70, "#fff", 12)}${text(0, -78, "PILAS", 34, "#2e7d32")}
  ${at(0, -160, face(0, 0, 1))}`)}
${at(600, 260, an("a-bob", `${path("M-20 0H20L0 36Z", "#ffd54f")}`, 1))}
`);
};

// 16. LLUVIA: guardar agua para regar
export const rain = () => svg("lluvia", "#90a4ae", "#cfd8dc", `
${cloud(180, 90, 1.2, 12, 0, "#b0bec5")}${cloud(430, 70, 1.4, 10, 1, "#9fb0b8")}${cloud(660, 100, 1.1, 14, 2, "#b0bec5")}
${Array.from({length: 28}, (_, i) => an("a-fall", line("M0 0L-4 18", "#29b6f6", 4), 0.9 + (i % 5) * .1, (i * .37) % 1, "--y:380px")).map((g, i) => at(30 + (i * 29) % 760, 140 + (i % 4) * 14, g)).join("")}
${rect(0, 500, 800, 100, "#8bc34a")}
${path("M40 380L250 250L460 380Z", "#d84315")}${rect(70, 380, 360, 120, "#fff3e0", 6)}${rect(110, 410, 60, 90, "#8d6e63", 6)}${rect(300, 410, 90, 60, "#81d4fa", 6)}
${line("M455 378H35", "#78909c", 12)}${line("M470 378V470", "#78909c", 14)}
${at(470, 400, an("a-fall", at(0, 0, path(DROP, "#4fc3f7"), .6), 1, 0, "--y:60px"))}
${at(610, 500, `
  <clipPath id="barrel"><rect x="-70" y="-170" width="140" height="170" rx="22"/></clipPath>
  ${rect(-70, -170, 140, 170, "#e1f5fe", 22)}
  <g clip-path="url(#barrel)">${an("s-level", `${rect(-72, -170, 144, 172, "#29b6f6")}${an("a-sway", line("M-72 -170Q-36 -182 0 -170T72 -170", "#81d4fa", 8), 2)}`, 9)}</g>
  ${rect(-76, -170, 152, 18, "#0277bd", 8)}${rect(-72, -110, 144, 8, "#0277bd", 4)}${rect(-72, -50, 144, 8, "#0277bd", 4)}${face(0, -100, 1.2)}`)}
${at(720, 500, `${an("a-sway o-b", `${line("M0 0V-80", "#43a047", 8)}${path("M0 -30Q-34 -50 -40 -26Q-14 -10 0 -30Z", "#66bb6a")}${an("a-pulse", `${Array.from({length: 6}, (_, i) => `<ellipse cx="0" cy="-20" rx="9" ry="16" fill="#ff7043" transform="rotate(${i * 60})"/>`).join("")}${circ(0, 0, 11, "#ffd54f")}`, 2)}`, 4)}`)}
`);

// 17. OCÉANO
export const ocean = () => svg("oceano", "#26c6da", "#004d40", `
<polygon points="150,0 260,0 380,600 220,600" fill="#fff" opacity=".1"/><polygon points="500,0 610,0 700,600 560,600" fill="#fff" opacity=".1"/>
${rect(0, 520, 800, 80, "#e0c9a6")}<ellipse cx="190" cy="522" rx="190" ry="28" fill="#d7b98f"/>
${at(120, 525, `${[[-30, 0, 52], [8, -28, 38], [38, -2, 40], [-6, -52, 28]].map(([x, y, r]) => circ(x, y, r, "#ec407a")).join("")}`)}
${at(690, 525, `${[[-26, 0, 56], [14, -30, 40], [44, -2, 38], [-4, -56, 28]].map(([x, y, r]) => circ(x, y, r, "#ab47bc")).join("")}`)}
${[300, 480].map((x, i) => at(x, 525, an("a-sway o-b", line("M0 0Q-30 -60 0 -110Q30 -160 0 -200", i ? "#66bb6a" : "#2e7d32", 14), 3 + i, i))).join("")}
${[0, 1, 2, 3, 4].map(i => an("a-rise", circ(280 + i * 70, 500, 6 + (i % 3) * 3, "#fff", 'opacity=".8"'), 4, i * .8, "--y:-420px")).join("")}
<g><animateMotion dur="14s" repeatCount="indefinite" path="M-140 380C120 330 280 430 520 370S820 380 960 340"/>
  ${an("a-bob", `
    ${an("a-flap o-r", `<path d="M-10 -14C0 -60 40 -54 40 -22Z" fill="#66bb6a"/><path d="M-10 14C0 60 40 54 40 22Z" fill="#66bb6a"/>`, 1.2)}
    <ellipse rx="64" ry="48" fill="#2e7d32"/>${[[-20, -14], [12, -14], [-20, 16], [12, 16]].map(([x, y]) => circ(x, y, 15, "#43a047")).join("")}
    ${circ(72, 0, 28, "#66bb6a")}${face(75, 0, .72, "wow")}${path("M-64 0l-22 -8l4 8l-4 8Z", "#66bb6a")}`, 2)}</g>
<g><animateMotion dur="9s" repeatCount="indefinite" path="M900 460C700 420 520 500 300 450C160 420 0 460 -120 430"/>
  ${an("a-wiggle", `<ellipse rx="26" ry="16" fill="#ff9800"/><path d="M24 0l22 -14v28Z" fill="#ff9800"/>${rect(-4, -15, 7, 30, "#fff", 3)}${circ(-14, -3, 3.5, "#263238")}`, .6)}</g>
${[[250, 150], [520, 130], [660, 250]].map(([x, y], i) => at(x, y, an("a-bob", `
  ${i === 0 ? `${rect(-14, -30, 28, 60, "#e1f5fe", 9, 'stroke="#b3e5fc" stroke-width="3" opacity=".85"')}${rect(-8, -44, 16, 14, "#0288d1", 4)}`
    : i === 1 ? `${path("M-30 -26Q0 -50 30 -26L24 30H-24Z", "#fff", 'opacity=".8"')}${line("M-18 -26Q0 -60 18 -26", "#eceff1", 5)}`
    : `${rect(-18, -26, 36, 52, "#bdbdbd", 6)}${rect(-18, -10, 36, 12, "#e53935")}`}
  ${an("a-pulse", `${circ(0, 0, 52, "none", 'stroke="#ff5252" stroke-width="9"')}${line("M-36 -36L36 36", "#ff5252", 9)}`, 1.3, i * .3)}`, 3.4, i * .6))).join("")}
`);

// 18. COMPOST
export const compost = () => svg("compost", "#e8f5e9", "#c8e6c9", `
${sun(110, 100, 40, true)}${cloud(480, 90, .9, 12)}
${hills(420, "#aed581", "#9ccc65")}
${rect(0, 500, 800, 100, "#5d4037")}${rect(0, 500, 800, 14, "#7cb342")}
${at(300, 500, `
  ${rect(-130, -160, 260, 160, "#4e342e", 8)}
  ${rect(-120, -110, 240, 100, "#3e2723", 6)}
  ${an("a-wiggle", `<path d="M-60 -50Q-40 -70 -20 -50" fill="none" stroke="#ec407a" stroke-width="7" stroke-linecap="round"/>`, 1.6)}
  ${an("a-wiggle", `<path d="M30 -30Q50 -52 70 -30" fill="none" stroke="#f48fb1" stroke-width="7" stroke-linecap="round"/>`, 1.3, .3)}
  ${an("s-peel", `${path("M-14 -10Q0 -34 20 -14Q4 0 -14 -10Z", "#ffe082")}${path("M-14 -10Q0 -34 20 -14", "none", 'stroke="#f9a825" stroke-width="4"')}`, 7, 0)}
  ${an("s-peel", `${circ(0, 0, 16, "#e53935")}${rect(-5, -4, 10, 8, "#fff8e1", 3)}`, 7, 2.3)}
  ${an("s-peel", `${path("M-18 0Q0 -22 18 0Q0 14 -18 0Z", "#ff9800")}${line("M-10 0Q0 -8 10 0", "#e65100", 3)}`, 7, 4.6)}
  ${rect(-136, -150, 272, 40, "#6d4c41", 8)}${rect(-136, -90, 272, 36, "#6d4c41", 8)}${rect(-136, -34, 272, 34, "#6d4c41", 8)}
  ${face(0, -128, 1.2)}`)}
${at(590, 500, `
  ${rect(-70, -26, 140, 26, "#3e2723", 10)}
  ${an("s-grow o-b", `${line("M0 -10V-150", "#43a047", 12)}${path("M0 -50Q-60 -80 -72 -46Q-30 -26 0 -50Z", "#66bb6a")}${path("M0 -90Q60 -120 72 -86Q30 -66 0 -90Z", "#66bb6a")}`, 8)}
  ${at(0, -170, an("s-bloom", `${Array.from({length: 8}, (_, i) => `<ellipse cx="0" cy="-26" rx="13" ry="23" fill="#ffb300" transform="rotate(${i * 45})"/>`).join("")}${circ(0, 0, 19, "#8d6e63")}${face(0, 1, .55)}`, 8))}`)}
${at(470, 515, an("a-wiggle", line("M0 0Q10 -20 20 0T40 0", "#ec407a", 8), .9))}
`);

// 19. SOL
export const solar = () => svg("sol", "#e1f5fe", "#fff9c4", `
${sun(130, 120, 56)}
${[0, 1, 2].map(i => `<path d="M${180 + i * 20} ${150 + i * 30}L${420 + i * 18} ${290 + i * 4}" stroke="#ffca28" stroke-width="8" stroke-linecap="round" fill="none" class="s-beam" style="animation-delay:${i * .25}s"/>`).join("")}
${cloud(560, 80, .8, 12)}
${rect(0, 500, 800, 100, "#81c784")}${rect(0, 500, 800, 12, "#66bb6a")}
${rect(300, 330, 400, 175, "#fff8e1", 8)}
${path("M270 335L500 190L730 335Z", "#d84315")}
${path("M350 300L500 215L650 300L610 330H390Z", "#0d47a1", 'stroke="#64b5f6" stroke-width="4" stroke-linejoin="round"')}
${line("M390 290L420 330M450 262L480 330M520 242L540 330M590 270L580 330", "#64b5f6", 2)}${line("M370 306H640", "#64b5f6", 2)}
${an("a-twinkle", at(430, 290, path("M0 -14L4 -4L14 0L4 4L0 14L-4 4L-14 0L-4 -4Z", "#fff")), 1.8)}
${rect(330, 370, 110, 90, "#81d4fa", 8)}${line("M385 370V460M330 415H440", "#fff", 6)}
${an("c-a", circ(385, 415, 38, "#fff59d", 'opacity=".5"'), 3, 0)}
${rect(560, 400, 70, 105, "#8d6e63", 8)}${circ(612, 455, 5, "#ffd54f")}
${at(385, 415, an("a-pulse", `${circ(0, 0, 18, "#ffee58")}${face(0, 1, .4)}`, 1.4))}
<g><animateMotion dur="3s" repeatCount="indefinite" path="M470 300L470 330L400 330L400 385"/>${circ(0, 0, 9, "#ffeb3b", 'stroke="#f9a825" stroke-width="3"')}</g>
<g><animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M470 300L470 330L400 330L400 385"/>${circ(0, 0, 9, "#ffeb3b", 'stroke="#f9a825" stroke-width="3"')}</g>
${at(660, 180, an("a-bob", `${path("M10 -40L-18 4H0L-10 40L22 -6H4Z", "#ffca28", 'stroke="#f9a825" stroke-width="3"')}`, 1.6))}
`);

// 20. JUGUETES: compartir el osito
export const toys = () => {
  const kid = (x, c, hair, sad) => at(x, 480, `${rect(-30, -90, 60, 90, c, 22)}${circ(0, -116, 40, "#ffcc80")}${path(`M-42 -122A42 42 0 0 1 42 -122Q20 -150 0 -146Q-20 -150 -42 -122Z`, hair)}${face(0, -112, .85, sad ? "sad" : "smile")}${an("a-wiggle o-tl", line("M26 -80L58 -50", "#ffcc80", 12), 1.4)}`);
  return svg("juguetes", "#ede7f6", "#d1c4e9", `
${rect(0, 490, 800, 110, "#b39ddb")}${rect(0, 490, 800, 10, "#9575cd")}
${cloud(200, 90, .8, 12)}${sun(700, 90, 34, false)}
${at(400, 560, `<ellipse rx="340" ry="26" fill="#7e57c2" opacity=".35"/>`)}
${kid(130, "#42a5f5", "#5d4037", false)}${kid(670, "#ec407a", "#f9a825", true)}
${at(290, 490, `${rect(-70, -70, 140, 70, "#ffb74d", 10)}${rect(-80, -90, 160, 26, "#fb8c00", 8)}${circ(-30, -110, 20, "#e53935")}${rect(10, -126, 32, 34, "#1e88e5", 6)}${text(0, -22, "REGALAR", 22, "#fff")}`)}
${at(180, 380, an("s-tossx", an("s-tossy", an("a-wiggle", `
  ${circ(-18, -26, 11, "#8d6e63")}${circ(18, -26, 11, "#8d6e63")}${circ(0, 0, 28, "#a1887f")}${circ(0, 8, 15, "#ffcc80")}${circ(-9, -4, 3.5, "#263238")}${circ(9, -4, 3.5, "#263238")}${circ(0, 4, 4, "#263238")}`, .7), 4, 0, "--dy:-130px;--ey:38px"), 4, 0, "--dx:340px"))}
${at(560, 340, an("s-thanks", heart(0, 0, 1.4, "#e53935"), 4))}
${at(700, 300, an("s-thanks", heart(0, 0, .9, "#ec407a"), 4))}
`);
};


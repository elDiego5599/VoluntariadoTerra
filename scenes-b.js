import {at, an, rect, circ, path, line, text, DROP, svg, face, sun, cloud, tree, hills, meadow, okBadge, phase, heart, note, sparkle, shade, grass, road, bldg, cityline, bush, fence, kid, bird} from "./kit.js";

// 8. POLINIZADORES
export const pollinators = () => {
  const flower = (x, y, c, dl) => at(x, y, `
    ${line("M0 0V150", "#388e3c", 9)}${path("M0 100Q-46 70 -52 100Q-20 120 0 100Z", "#4caf50")}${path("M0 120Q46 90 52 120Q20 140 0 120Z", "#4caf50")}
    ${an("a-sway o-b", Array.from({length: 8}, (_, i) => `<ellipse cx="0" cy="-34" rx="17" ry="30" fill="${c}" transform="rotate(${i * 45})"/>`).join("") + circ(0, 0, 24, "#ffd54f") + face(0, 2, .7), 4, dl)}`);
  return svg("polinizadores", "#f3e5f5", "#e1bee7", `
${sun(690, 90, 36, false)}${cloud(150, 100, .8, 10)}${hills(440, "#c5e1a5", "#aed581")}${grass(490, "#9ccc65", "#689f38")}
${fence(20, 300, 470)}${bush(700, 480, 1.1)}${meadow(520)}
${flower(250, 330, "#ec407a", 0)}${flower(470, 310, "#ff7043", 1)}${flower(600, 350, "#7e57c2", .5)}
${at(90, 590, kid({shirt: "#42a5f5", pants: "#5d4037", hair: "#212121", style: "short", l: 4, r: -140, anim: "r", s: 1.2}))}
${[[200, 250], [360, 230], [610, 260], [450, 290]].map(([x, y], i) => sparkle(x, y, 1, 1.6, i * .4)).join("")}
<g><animateMotion dur="9s" repeatCount="indefinite" path="M200 250C260 140 330 140 400 230C470 140 560 150 640 250C520 330 280 330 200 250Z"/>
  ${an("a-bob", `${an("a-flap o-b", `<ellipse cx="-4" cy="-18" rx="11" ry="20" fill="#fff" opacity=".85"/>`, .12)}<ellipse rx="26" ry="18" fill="#ffca28"/>${rect(-8, -17, 7, 34, "#263238", 3)}${rect(6, -16, 7, 32, "#263238", 3)}${circ(26, -2, 11, "#ffca28")}${circ(31, -4, 3, "#263238")}${line("M26 -12Q28 -22 36 -24", "#263238", 2)}`, .5)}</g>
<g><animateMotion dur="12s" repeatCount="indefinite" path="M660 180C520 80 430 120 400 200C330 260 220 130 160 200C260 300 480 340 660 180Z"/>
  ${an("a-bob", `${an("a-flap", `<path d="M0 0C-30 -50 -64 -22 -46 8C-60 34 -20 40 0 0Z" fill="#ff7043"/><path d="M0 0C30 -50 64 -22 46 8C60 34 20 40 0 0Z" fill="#ffa726"/>${circ(-34, -6, 7, "#fff", 'opacity=".8"')}${circ(34, -6, 7, "#fff", 'opacity=".8"')}`, .5)}${rect(-3, -14, 6, 32, "#5d4037", 3)}`, 1.4)}</g>
`);
};

// 9. PAPEL: dibujar por los dos lados
export const paper = () => svg("papel", "#efebe9", "#d7ccc8", `
${Array.from({length: 8}, (_, i) => rect(i * 100, 0, 50, 440, "#fff", 0, 'opacity=".18"')).join("")}
${rect(60, 60, 190, 130, "#a5d6a7", 10)}${rect(70, 70, 170, 110, "#e8f5e9", 6)}${line("M90 150L130 100L160 140L190 110L220 150", "#43a047", 6)}${circ(205, 92, 10, "#ffca28")}
${rect(0, 450, 800, 150, "#a1887f")}${rect(0, 440, 800, 14, "#8d6e63")}
${rect(250, 180, 480, 280, "#000", 20, 'opacity=".12" transform="translate(8 10)"')}
${rect(250, 180, 240, 280, "#fff", 16, 'stroke="#cfd8dc" stroke-width="4"')}${rect(490, 180, 240, 280, "#fff", 16, 'stroke="#cfd8dc" stroke-width="4"')}
${Array.from({length: 7}, (_, i) => line(`M272 ${225 + i * 32}H468M512 ${225 + i * 32}H708`, "#e3f2fd", 3)).join("")}
${line("M490 180V460", "#b0bec5", 6)}${[0, 1, 2, 3, 4, 5].map(i => circ(490, 205 + i * 46, 6, "#90a4ae")).join("")}
${path("M290 410V330L360 275L430 330V410Z", "none", 'pathLength="1" stroke="#e53935" stroke-width="7" stroke-linejoin="round" stroke-dasharray="1" class="a-draw" style="--d:6s"')}
${path("M335 410V360H385V410", "none", 'pathLength="1" stroke="#1e88e5" stroke-width="7" stroke-linejoin="round" stroke-dasharray="1" class="a-draw" style="--d:6s;--dl:.4s"')}
${path("M620 270L636 315L684 318L647 346L660 392L620 366L580 392L593 346L556 318L604 315Z", "none", 'pathLength="1" stroke="#fbc02d" stroke-width="7" stroke-linejoin="round" stroke-dasharray="1" class="a-draw" style="--d:6s;--dl:1.6s"')}
${at(650, 215, an("a-wiggle o-b", `${rect(-8, -80, 16, 80, "#ffb300", 4)}${rect(-8, -92, 16, 14, "#ec407a", 4)}<path d="M-8 0H8L0 22Z" fill="#ffe0b2"/><path d="M-3 14H3L0 22Z" fill="#263238"/>`, .6))}
${at(120, 585, kid({shirt: "#ff7043", pants: "#37474f", hair: "#795548", style: "long", l: 4, r: -100, anim: "r", s: 1.25}))}
<g><animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path="M-60 120C200 40 380 150 560 90S840 60 880 100"/>
  <path d="M-34 0L34 -12L-34 -22L-20 -9Z" fill="#fff" stroke="#90a4ae" stroke-width="3" stroke-linejoin="round"/><path d="M-20 -9L34 -12" stroke="#90a4ae" stroke-width="3"/></g>
${okBadge(150, 200, 38)}
`);

// 10. ROPA: regalar lo que ya no nos queda
const shirt = (c, s = 1) => at(0, 0, `${path("M-18 -30L-48 -14L-36 12L-22 4V46H22V4L36 12L48 -14L18 -30Q0 -16 -18 -30Z", c)}${path("M-18 -30Q0 -16 18 -30", "none", 'stroke="#fff" stroke-width="4" opacity=".7"')}`, s);
export const clothes = () => svg("ropa", "#fce4ec", "#f8bbd0", `
${sun(700, 90, 34, false)}${cloud(300, 80, .8, 12)}${hills(450, "#c5e1a5", "#aed581")}${grass(480, "#9ccc65", "#7cb342")}
${rect(250, 150, 14, 330, "#8d6e63", 6)}${rect(520, 150, 14, 330, "#8d6e63", 6)}${line("M257 170Q390 215 527 170", "#78909c", 4)}
${[["#1e88e5", 310, 198], ["#43a047", 390, 208], ["#e91e63", 465, 200]].map(([c, x, y], i) =>
  at(x, y, an("a-sway o-t", `${line("M0 -8V4", "#78909c", 4)}<g transform="translate(0 38)">${shirt(c, 1.05)}</g>${face(0, 36, .5)}`, 3 + i * .4, i * .5))).join("")}
${at(660, 560, `${shade(0, 8, 110, .2)}${an("s-catch o-b", `${rect(-100, -150, 200, 150, "#ffb74d", 14)}${rect(-112, -170, 224, 30, "#fb8c00", 10)}${text(0, -62, "REGALAR", 30, "#fff")}${an("a-pulse", heart(0, -105, 1.1, "#e53935"), 1.4)}`, 5)}`)}
${at(100, 585, kid({shirt: "#26c6da", pants: "#5c6bc0", hair: "#6d4c41", style: "pony", l: 4, r: -115, anim: "r", s: 1.2}))}
${an("s-dn-x", an("s-dn-y", at(190, 470, `${shirt("#ab47bc", 1.2)}${face(0, 30, .6)}`), 5), 5, 0, "--dx:410px")}
${[0, 1, 2].map(i => an("a-rise", heart(520 + i * 80, 330, .8, ["#ec407a", "#ff7043", "#ab47bc"][i]), 3.2, i, "--y:-100px")).join("")}
`);

// 11. TRANSPORTE: bus, bici y a pie
export const transport = () => svg("transporte", "#e0f7fa", "#b2ebf2", `
${sun(90, 90, 36, false)}${cloud(450, 80, .9, 11)}
${cityline(400, .8)}${rect(0, 400, 800, 60, "#c8e6c9")}${tree(60, 440, .6, 6)}${tree(730, 440, .6, 5, 1)}
${rect(0, 440, 800, 24, "#cfd8dc")}${rect(0, 464, 800, 136, "#546e7a")}${rect(0, 464, 800, 6, "#78909c")}${line("M0 532H800", "#fff", 7, 'stroke-dasharray="34 26"')}
${rect(140, 330, 8, 112, "#78909c", 3)}${rect(110, 310, 68, 30, "#43a047", 8)}${text(144, 334, "BUS", 22, "#fff")}
${at(100, 450, kid({shirt: "#ab47bc", pants: "#3949ab", hair: "#4e342e", style: "pony", l: 4, r: -150, anim: "r", s: .85}))}
${at(200, 450, kid({shirt: "#66bb6a", pants: "#455a64", hair: "#212121", style: "short", l: 6, r: -6, s: .8}))}
${an("a-drive", at(0, 505, `
  ${shade(0, 4, 190, .22)}
  ${rect(-190, -170, 380, 150, "#ffb300", 28)}${rect(-190, -64, 380, 18, "#f57f17")}${rect(-190, -170, 380, 22, "#fff", 22, 'opacity=".25"')}
  ${[-130, -50, 30, 110].map((x, i) => rect(x - 32, -148, 64, 56, "#e1f5fe", 10) + at(x, -120, face(0, 0, .5)) + rect(x - 32, -148, 64, 14, "#fff", 8, 'opacity=".25"')).join("")}
  ${rect(150, -150, 34, 80, "#e1f5fe", 10)}${rect(170, -52, 20, 30, "#fff59d", 6)}
  ${an("a-bob", `${[-120, 112].map(x => circ(x, -6, 30, "#263238") + circ(x, -6, 13, "#90a4ae")).join("")}`, .5)}
  ${text(-30, -76, "ESCOLAR", 22, "#fff")}`), 11, 0, "--x0:-440px;--x1:1100px")}
${an("a-drive", at(0, 566, `${rect(-70, -170, 0, 0, "#000")}` + `<g>${[-46, 46].map(x => an("a-spin", `${circ(x, 0, 30, "none", 'stroke="#263238" stroke-width="6"')}${line(`M${x - 30} 0H${x + 30}M${x} -30V30`, "#78909c", 2)}`, .8)).join("")}${line("M-46 0L-12 -44L36 -44L46 0M-12 -44L8 0H-46M26 -44L38 -64M24 -66H46", "#e91e63", 7)}
  ${at(-4, -112, `${rect(-14, 20, 28, 46, "#26c6da", 14)}${circ(0, 0, 25, "#ffcc80")}${path("M-27 -4A27 27 0 0 1 27 -4Z", "#ef5350")}${face(2, 6, .55)}${line("M10 50L40 6L46 -22", "#ffcc80", 9)}${an("a-wiggle o-t", line("M-2 58L10 90L-6 118", "#3949ab", 11), .8)}`)}</g>`, .85), 8, 3, "--x0:-200px;--x1:1000px")}
`);

// 12. HUERTA: la semilla crece
export const garden = () => svg("huerta", "#fffde7", "#e8f5e9", `
${sun(110, 100, 40, true)}${cloud(480, 100, .9, 10)}${hills(400, "#c5e1a5", "#aed581")}${grass(450, "#9ccc65", "#689f38")}
${fence(560, 780, 440)}
${rect(380, 480, 380, 120, "#8d6e63", 10)}${rect(370, 470, 400, 24, "#6d4c41", 10)}${[430, 520, 620, 710].map((x, i) => circ(x, 530 + (i % 2) * 20, 6, "#6d4c41")).join("")}
${an("s-seed", at(570, 484, `<ellipse rx="14" ry="9" fill="#5d4037"/>`), 8)}
${at(570, 480, `${an("s-grow o-b", `${line("M0 0V-170", "#43a047", 14)}${path("M0 -50Q-70 -90 -86 -50Q-40 -26 0 -50Z", "#66bb6a")}${path("M0 -90Q70 -130 86 -90Q40 -66 0 -90Z", "#66bb6a")}`, 8)}${at(0, -190, an("s-bloom", `${Array.from({length: 8}, (_, i) => `<ellipse cx="0" cy="-34" rx="17" ry="30" fill="#ec407a" transform="rotate(${i * 45})"/>`).join("")}${circ(0, 0, 26, "#ffd54f")}${face(0, 2, .75)}`, 8))}`)}
${at(170, 585, kid({shirt: "#ffa726", pants: "#2e7d32", hair: "#4e342e", style: "curly", l: 4, r: -80, anim: "r", s: 1.25}))}
${at(318, 438, an("a-wiggle o-b", `${rect(-36, -24, 72, 50, "#42a5f5", 12)}${rect(30, -10, 56, 12, "#1e88e5", 6, 'transform="rotate(-25 30 -4)"')}${line("M-34 -4Q-56 -38 -26 -38", "#1e88e5", 7)}${face(-2, 4, .5)}`, 2.2))}
${[0, 1, 2, 3].map(i => at(410, 436, an("a-fall", path(DROP, "#4fc3f7"), 1.4, i * .35, "--y:60px"), .5)).join("")}
`);

// 13. BARRIO LIMPIO
export const park = () => svg("basura", "#e1f5fe", "#e8f5e9", `
${sun(690, 100, 38)}${cloud(220, 100, .9, 11)}${hills(410, "#a5d6a7", "#81c784")}${grass(470, "#9ccc65", "#7cb342")}
${rect(0, 540, 800, 60, "#d7ccc8")}${rect(0, 530, 800, 14, "#bcaaa4")}
${tree(60, 480, .9, 5)}${tree(740, 480, .8, 6, 1)}
${line("M280 470H400M280 440H400M290 470V510M390 470V510", "#6d4c41", 10)}
${at(130, 570, kid({shirt: "#ef5350", pants: "#3949ab", hair: "#6d4c41", style: "cap", l: 4, r: -125, anim: "r", s: 1.2}))}
${at(250, 400, an("s-tossx", an("s-tossy", `<g class="s-tossb">${an("a-spin", at(0, 0, circ(0, 0, 14, "#ffb74d", 'stroke="#e65100" stroke-width="3"') + line("M-8 -4L8 4M-8 4L8 -4", "#fff", 3), 2), .5)}</g>`, 4), 4, 0, "--dx:330px;--dy:-130px;--ey:70px"))}
${at(600, 570, an("s-catch o-b", `${rect(-48, -120, 96, 120, "#039be5", 14)}${rect(-58, -138, 116, 24, "#01579b", 10)}${face(0, -74, 1)}${path("M-12 -22a12 12 0 1 0 24 0a12 12 0 1 0 -24 0M-6 -22a6 6 0 1 1 12 0a6 6 0 1 1 -12 0", "#fff", 'fill-rule="evenodd"')}`, 4))}
${at(600, 350, an("s-thanks", `${circ(0, 0, 34, "#66bb6a")}${line("M-13 1L-3 11L15 -10", "#fff", 8)}`, 4))}
${[0, 1, 2].map(i => an("s-thanks", at(540 + i * 50, 390 - (i % 2) * 20, path("M0 -12L4 -4L12 0L4 4L0 12L-4 4L-12 0L-4 -4Z", "#fff59d")), 4)).join("")}
`);

// 14. RUIDO: bajamos el volumen
export const noise = () => svg("ruido", "#e8eaf6", "#c5cae9", `
${cloud(180, 100, .8, 11)}${cloud(600, 80, .7, 12, 2)}${hills(470, "#c5cae9", "#9fa8da")}${rect(0, 470, 800, 130, "#b0bec5")}${rect(0, 470, 800, 12, "#cfd8dc")}
${at(120, 540, `${shade(0, 4, 100, .2)}${rect(-90, -270, 180, 270, "#37474f", 22)}${circ(0, -80, 62, "#263238")}${circ(0, -80, 36, "#546e7a")}${circ(0, -190, 28, "#263238")}${circ(0, -190, 15, "#546e7a")}${an("c-a", face(0, -120, 1.1, "wow"), 6)}${an("c-b", face(0, -120, 1.1, "smile"), 6)}`)}
${an("c-a", [0, 1, 2].map(i => at(230, 400, an("s-wave o-l", `<path d="M0 -70A80 80 0 0 1 0 70" fill="none" stroke="#e53935" stroke-width="10" stroke-linecap="round"/>`, 0, 0, `--d:1s;--dl:${i * .33}s`))).join(""), 6)}
${an("c-b", at(230, 400, `<path d="M0 -26A28 28 0 0 1 0 26" fill="none" stroke="#42a5f5" stroke-width="8" stroke-linecap="round"/>`), 6)}
${an("c-a", [0, 1, 2].map(i => an("a-wiggle", note(260 + i * 50, 270 - (i % 2) * 50, 54, "#e53935"), .3, i * .1)).join(""), 6)}
${an("c-b", [0, 1].map(i => an("a-bob", note(270 + i * 70, 290, 36, "#7986cb"), 2.4, i * .5)).join(""), 6)}
${an("c-a", at(440, 585, kid({shirt: "#ffb300", pants: "#3949ab", hair: "#4e342e", style: "curly", mood: "wow", l: 160, r: -160, s: 1.2})), 6)}
${an("c-b", at(440, 585, kid({shirt: "#ffb300", pants: "#3949ab", hair: "#4e342e", style: "curly", mood: "smile", l: 6, r: -6, s: 1.2})), 6)}
${line("M580 420H780", "#6d4c41", 14)}${line("M770 420V560", "#6d4c41", 14)}
${at(680, 420, `
  ${an("c-a", an("a-wiggle o-b", `${circ(0, -50, 40, "#ffca28")}${path("M-40 -46Q-64 -26 -46 -8Q-28 -26 -30 -48Z", "#ffa000")}<path d="M36 -56l28 8l-28 10Z" fill="#ef6c00"/>${circ(16, -62, 6, "#263238")}${line("M-26 -86Q-56 -68 -40 -48", "#e53935", 8)}`, .25), 6)}
  ${an("c-b", `${circ(0, -46, 40, "#ffca28")}${path("M-40 -42Q-64 -22 -46 -2Q-28 -22 -30 -44Z", "#ffa000")}<path d="M36 -50l28 8l-28 10Z" fill="#ef6c00"/>${line("M8 -58Q16 -52 24 -58", "#263238", 4)}${[0, 1, 2].map(i => an("a-rise", text(30 + i * 22, -86 - i * 16, "z", 26 + i * 6, "#3949ab"), 3, i * .8, "--y:-50px")).join("")}`, 6)}`)}
${at(230, 520, an("c-flip", `${circ(0, 0, 30, "#ffb300", 'stroke="#f57f17" stroke-width="6"')}${rect(-4, -28, 8, 24, "#263238", 4)}`, 6, 0, "--a:rotate(100deg);--b:rotate(-70deg)"))}
${phase()}
`);

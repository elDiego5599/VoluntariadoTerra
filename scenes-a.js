import {at, an, rect, circ, path, line, text, DROP, svg, face, sun, cloud, tree, hills, meadow, o2, okBadge, phase, heart, sparkle, shade, grass, cityline, kid, bird} from "./kit.js";

// 1. AGUA: cerrar el grifo mientras nos cepillamos
export const water = () => svg("agua", "#d9f2fb", "#bfe6f5", `
${Array.from({length: 9}, (_, i) => line(`M${i * 100} 0V470`, "#c3e6f3", 3)).join("")}${Array.from({length: 5}, (_, i) => line(`M0 ${i * 100}H800`, "#c3e6f3", 3)).join("")}
${rect(500, 60, 250, 190, "#fff", 22, 'stroke="#90a4ae" stroke-width="8"')}${rect(512, 72, 226, 166, "#e1f5fe", 14)}
${line("M530 220L610 110M580 232L680 100", "#fff", 14, 'opacity=".55"')}${sparkle(700, 110, 1.1, 2.2)}
${rect(70, 120, 230, 12, "#8d6e63", 6)}${circ(100, 132, 6, "#5d4037")}${circ(270, 132, 6, "#5d4037")}
${path("M95 132H275V300Q185 330 95 300Z", "#ffb74d")}${path("M95 132H275V160Q185 190 95 160Z", "#fb8c00", 'opacity=".5"')}
${rect(420, 450, 380, 150, "#eceff1")}${rect(420, 450, 380, 16, "#fff")}
<ellipse cx="610" cy="452" rx="150" ry="26" fill="#b0bec5"/><ellipse cx="610" cy="456" rx="124" ry="18" fill="#90a4ae"/><ellipse cx="610" cy="470" rx="14" ry="5" fill="#455a64"/>
${an("c-a", `<ellipse cx="560" cy="458" rx="88" ry="12" fill="#4fc3f7" opacity=".85"/>${[0, 1, 2].map(i => at(560, 458, an("s-wave", `<ellipse rx="70" ry="10" fill="none" stroke="#0288d1" stroke-width="3"/>`, 0, 0, `--d:1.5s;--dl:${i * .5}s`))).join("")}`, 6)}
${line("M640 452V300Q640 252 590 252H560", "#90a4ae", 38)}${line("M640 452V300Q640 262 590 262H560", "#eceff1", 9, 'opacity=".8"')}${rect(540, 252, 38, 26, "#607d8b", 8)}
${at(640, 270, an("c-flip", `${rect(-28, -6, 56, 12, "#ef5350", 6)}${circ(-28, 0, 10, "#c62828")}${circ(28, 0, 10, "#c62828")}`, 6, 0, "--a:rotate(0deg);--b:rotate(-80deg)"))}
${at(559, 276, an("s-stream o-t", `${rect(-10, 0, 20, 178, "#4fc3f7", 10, 'opacity=".92"')}${rect(-4, 0, 5, 178, "#e1f5fe", 3, 'opacity=".8"')}`, 6) + an("c-a", [0, 1, 2].map(i => an("a-fall", at(0, 0, path(DROP, "#29b6f6"), .8), 1, i * .33, "--y:180px")).join(""), 6))}
${at(235, 585, kid({shirt: "#ab47bc", pants: "#5c6bc0", hair: "#4e342e", style: "pony", l: 8, r: -148, anim: "r", s: 1.25,
  extra: `${an("a-wiggle", `${rect(38, -176, 8, 40, "#fff", 4, 'transform="rotate(-70 42 -156)"')}${rect(42, -176, 8, 16, "#26c6da", 4, 'transform="rotate(-70 42 -156)"')}`, .35)}${circ(14, -140, 6, "#fff")}${circ(-6, -136, 5, "#fff")}${circ(22, -132, 5, "#fff")}`}))}
${at(420, 190, an("a-bob", `${at(0, 0, path(DROP, "#29b6f6"), 2.5)}${at(0, 0, path("M-6 -26Q-12 -10 -6 0", "none", 'stroke="#e1f5fe" stroke-width="3" stroke-linecap="round" opacity=".8"'), 2.5)}` +
  an("c-a", face(0, 20, 1.3, "sad"), 6) + an("c-b", face(0, 20, 1.3, "smile"), 6), 3.5))}
${okBadge(420, 330, 40)}${phase()}
`);

// 2. LUZ: apagamos la luz si entra el sol
export const light = () => svg("luz", "#ffe9bd", "#ffd9a0", `
${Array.from({length: 12}, (_, i) => rect(i * 70, 0, 35, 460, "#fff", 0, 'opacity=".12"')).join("")}
${rect(0, 450, 800, 150, "#c68f65")}${Array.from({length: 6}, (_, i) => line(`M${i * 160} 450L${i * 160 - 60} 600`, "#a1704a", 3)).join("")}${rect(0, 440, 800, 14, "#a1704a")}
${rect(60, 70, 320, 280, "#fff", 16)}${rect(78, 88, 284, 244, "#8fd8ff", 8)}
${cloud(170, 170, .6, 10)}${at(290, 210, an("a-spin", Array.from({length: 8}, (_, i) => `<rect x="-3" y="-52" width="6" height="14" rx="3" fill="#ffca28" transform="rotate(${i * 45})"/>`).join(""), 20) + circ(0, 0, 30, "#ffd54f") + face(0, 2, .55))}
${line("M220 88V332M78 210H362", "#fff", 10)}
<polygon points="78,332 362,332 470,520 170,520" fill="#fff59d" opacity=".4"/>
${at(130, 520, `${rect(-90, -80, 180, 80, "#7e57c2", 22)}${rect(-100, -120, 200, 60, "#9575cd", 26)}${rect(-100, -110, 26, 100, "#7e57c2", 12)}${rect(74, -110, 26, 100, "#7e57c2", 12)}${circ(-40, -88, 20, "#fff59d")}${circ(40, -88, 20, "#f48fb1")}`)}
${line("M600 0V150", "#455a64", 5)}${path("M545 225L568 160Q600 145 632 160L655 225Z", "#5c6bc0")}${rect(560, 222, 80, 10, "#3949ab", 5)}
${an("c-a", `${circ(600, 262, 120, "#ffee58", 'opacity=".28"')}<polygon points="552,238 648,238 740,470 460,470" fill="#fff176" opacity=".28"/>`, 6)}
${circ(600, 252, 28, "#cfd8dc")}${an("c-a", circ(600, 252, 28, "#fff176") + face(600, 254, .7, "wow"), 6)}${an("c-b", face(600, 254, .7, "sleep"), 6)}
${[0, 1, 2].map(i => an("c-b", an("a-rise", text(632 + i * 22, 250 - i * 8, "z", 30 + i * 8, "#3949ab"), 3, i * .8, "--y:-60px"), 6)).join("")}
${rect(690, 250, 62, 100, "#fff", 12, 'stroke="#b0bec5" stroke-width="5"')}${rect(704, 264, 34, 72, "#cfd8dc", 9)}
${at(721, 300, an("c-flip", `${rect(-12, -18, 24, 36, "#ef5350", 8)}`, 6, 0, "--a:translateY(-15px);--b:translateY(15px)"))}
${at(570, 585, kid({shirt: "#26a69a", pants: "#37474f", hair: "#212121", style: "short", l: 4, r: -170, anim: "r", mood: "smile", s: 1.2}))}
${okBadge(420, 160, 44)}${phase()}
`);

// 3. PLÁSTICO: bolsa de tela y botella para volver a usar
export const plastic = () => {
  const bag = (bad) => bad
    ? `${path("M-40 -110L-30 -122H30L40 -110L52 0H-52Z", "#eceff1", 'opacity=".9" stroke="#b0bec5" stroke-width="4"')}${path("M-24 -122C-24 -170 -8 -170 -8 -122M24 -122C24 -170 8 -170 8 -122", "none", 'stroke="#b0bec5" stroke-width="6"')}${line("M-30 -90L-26 -20M20 -96L28 -30", "#cfd8dc", 3)}${face(0, -62, .85, "sad")}`
    : `${line("M-26 -112C-26 -176 26 -176 26 -112", "#8d6e63", 9)}${rect(-54, -116, 108, 116, "#ffecb3", 18, 'stroke="#ffd54f" stroke-width="5"')}${path("M-14 -116C-20 -146 -6 -160 -2 -160C6 -160 16 -146 10 -116Z", "#ef6c00")}${path("M20 -116C22 -148 34 -160 42 -154C40 -138 36 -122 32 -116Z", "#43a047")}${circ(-36, -118, 15, "#e53935")}${face(0, -60, .9)}`;
  const bottle = (bad) => bad
    ? `${rect(-22, -118, 44, 118, "#e1f5fe", 16, 'stroke="#90a4ae" stroke-width="4" opacity=".9"')}${rect(-14, -140, 28, 24, "#90a4ae", 6)}${rect(-22, -74, 44, 8, "#b0bec5", 0, 'opacity=".7"')}${face(0, -46, .75, "sad")}`
    : `${rect(-24, -120, 48, 120, "#00acc1", 20)}${rect(-16, -118, 10, 108, "#4dd0e1", 5, 'opacity=".8"')}${rect(-18, -144, 36, 28, "#455a64", 8)}${face(2, -50, .85)}`;
  return svg("plastico", "#e0f2f1", "#f1f8e9", `
${sun(700, 150, 34, false)}${cloud(130, 110, .8, 12)}${hills(400, "#c5e1a5", "#aed581")}
${rect(0, 470, 800, 130, "#d7ccc8")}${Array.from({length: 9}, (_, i) => line(`M${i * 100} 470V600`, "#bcaaa4", 3)).join("")}${rect(0, 460, 800, 14, "#bcaaa4")}
${at(660, 470, `${Array.from({length: 4}, (_, i) => path(`M${-110 + i * 55} -250H${-55 + i * 55}L${-65 + i * 55} -190H${-120 + i * 55}Z`, i % 2 ? "#fff" : "#e53935")).join("")}
  ${rect(-110, -190, 8, 190, "#8d6e63", 3)}${rect(102, -190, 8, 190, "#8d6e63", 3)}${rect(-124, -80, 248, 80, "#a1887f", 8)}${rect(-124, -86, 248, 14, "#bcaaa4", 6)}
  ${circ(-80, -104, 20, "#e53935")}${circ(-34, -102, 18, "#fb8c00")}${circ(12, -104, 20, "#66bb6a")}${circ(60, -102, 18, "#ffd54f")}${circ(96, -104, 16, "#ab47bc")}`)}
${an("c-a", at(230, 585, kid({shirt: "#ffca28", pants: "#1e88e5", hair: "#6d4c41", style: "curly", mood: "sad", l: 8, r: -8, s: 1.15})), 6)}
${an("c-b", at(230, 585, kid({shirt: "#ffca28", pants: "#1e88e5", hair: "#6d4c41", style: "curly", l: 8, r: -140, anim: "r", s: 1.15})), 6)}
${an("c-a", at(380, 570, bag(true)) + at(500, 570, bottle(true)) + at(440, 340, `${circ(0, 0, 34, "#e53935", 'stroke="#fff" stroke-width="6"')}${line("M-13 -13L13 13M13 -13L-13 13", "#fff", 8)}`), 6)}
${an("c-b", at(380, 570, an("a-bob o-b", bag(false), 3)) + at(500, 570, an("a-bob o-b", bottle(false), 3.4, .5)) + [0, 1, 2].map(i => an("a-rise", heart(380 + i * 50, 380, .8, ["#ec407a", "#66bb6a", "#ffb300"][i]), 3, i * .8, "--y:-70px")).join(""), 6)}
${okBadge(440, 340, 30)}
${phase()}
`);
};

// 4. RECICLAJE: cada cosa a su contenedor
export const recycling = () => {
  const bins = [
    {x: 270, col: "#1e88e5", lid: "#0d47a1", label: "PAPEL", dl: 0, item: `${rect(-18, -22, 36, 44, "#fff", 4, 'stroke="#90a4ae" stroke-width="3"')}${line("M-10 -8H10M-10 4H10", "#90a4ae", 3)}`},
    {x: 480, col: "#43a047", lid: "#1b5e20", label: "ORGÁNICO", dl: 2, item: `${circ(0, 0, 22, "#e53935")}${line("M0 -20Q4 -34 12 -34", "#5d4037", 4)}${path("M2 -24Q16 -34 24 -22Q10 -14 2 -24Z", "#43a047")}`},
    {x: 690, col: "#fbc02d", lid: "#f57f17", label: "PLÁSTICO", dl: 4, item: `${rect(-14, -26, 28, 52, "#e1f5fe", 9, 'stroke="#0288d1" stroke-width="3"')}${rect(-8, -38, 16, 12, "#0288d1", 3)}`}
  ];
  return svg("reciclaje", "#e8f5e9", "#c8e6c9", `
${cloud(120, 80, .8, 10)}${cloud(620, 70, .7, 12, 2)}${tree(60, 430, .9, 5)}
${rect(0, 440, 800, 30, "#a5d6a7")}${rect(0, 470, 800, 130, "#b0bec5")}${rect(0, 470, 800, 10, "#cfd8dc")}${Array.from({length: 8}, (_, i) => line(`M${i * 110} 480V600`, "#9eaab0", 3)).join("")}
${bins.map(b => at(b.x, 0, `
  ${an("s-item", at(0, 270, b.item), 6, b.dl)}
  ${shade(0, 492, 88, .2)}
  ${an("s-bin o-b", `${an("s-lid o-l", rect(-88, 295, 176, 24, b.lid, 10), 6, b.dl)}${rect(-76, 310, 152, 170, b.col, 16)}${rect(-76, 310, 28, 170, "#fff", 14, 'opacity=".15"')}${rect(-62, 395, 124, 40, "#fff", 10)}${text(0, 424, b.label, b.label.length > 7 ? 21 : 25, b.lid)}${face(0, 350, .85)}${circ(-52, 482, 12, "#263238")}${circ(52, 482, 12, "#263238")}`, 6, b.dl)}`)).join("")}
${at(86, 585, kid({shirt: "#ef5350", pants: "#3949ab", hair: "#212121", style: "short", l: 4, r: -150, anim: "r", s: 1.05}))}
`);
};

// 5. COMIDA: poquito en el plato; lo que sobra va a la nevera
export const food = () => svg("comida", "#fff3e0", "#ffe0b2", `
${Array.from({length: 8}, (_, i) => line(`M${i * 100} 0V470`, "#ffd8a8", 3)).join("")}${Array.from({length: 5}, (_, i) => line(`M0 ${i * 95}H800`, "#ffd8a8", 3)).join("")}
${rect(70, 80, 190, 150, "#fff", 14)}${rect(82, 92, 166, 126, "#b3e5fc", 8)}${line("M165 92V218M82 155H248", "#fff", 7)}${sun(200, 140, 24, false)}
${rect(0, 470, 800, 130, "#d7ccc8")}${rect(0, 470, 800, 12, "#bcaaa4")}
${rect(520, 120, 220, 350, "#90a4ae", 18)}${rect(534, 134, 192, 322, "#eceff1", 10)}${rect(534, 280, 192, 8, "#b0bec5")}${rect(534, 380, 192, 8, "#b0bec5")}
${circ(580, 235, 22, "#e53935")}${circ(620, 245, 20, "#43a047")}${circ(660, 235, 22, "#ffb300")}${circ(580, 335, 22, "#8bc34a")}${circ(660, 340, 22, "#ff7043")}
${an("s-fridge o-l", `${rect(520, 120, 220, 350, "#b0bec5", 18, 'stroke="#78909c" stroke-width="4"')}${rect(712, 250, 10, 70, "#546e7a", 5)}${face(620, 220, 1.3)}`, 6)}
${at(250, 470, kid({shirt: "#66bb6a", pants: "#455a64", hair: "#795548", style: "pony", l: 18, r: -18, mood: "smile", s: 1.2}))}
${rect(80, 400, 340, 22, "#8d6e63", 8)}${rect(100, 420, 18, 80, "#6d4c41", 4)}${rect(382, 420, 18, 80, "#6d4c41", 4)}
${at(250, 398, `<ellipse cx="0" cy="8" rx="120" ry="20" fill="#000" opacity=".1"/><ellipse cx="0" cy="0" rx="120" ry="24" fill="#fff"/><ellipse cx="0" cy="-2" rx="86" ry="15" fill="#f5f5f5"/>${an("a-pulse", `${circ(-22, -8, 13, "#e53935")}${circ(6, -12, 12, "#43a047")}${circ(28, -4, 11, "#ffb300")}`, 2.4)}`)}
${at(360, 396, an("s-box", `${rect(-36, -30, 72, 38, "#e1f5fe", 9, 'stroke="#4fc3f7" stroke-width="4"')}${rect(-42, -42, 84, 16, "#66bb6a", 8)}`, 6))}
${okBadge(170, 300, 38)}${phase()}
`);

// 6. AIRE: ir en bici y plantar árboles
const bikeKid = (body) => {
  const wheel = x => an("a-spin", `${circ(x, 0, 32, "none", 'stroke="#263238" stroke-width="6"')}${line(`M${x - 32} 0H${x + 32}M${x} -32V32M${x - 22} -22L${x + 22} 22M${x - 22} 22L${x + 22} -22`, "#78909c", 2)}`, 0.8);
  return wheel(-50) + wheel(50) + line("M-50 0L-14 -50L40 -50L50 0M-14 -50L8 0H-50M8 0L26 -50M26 -50L40 -74M24 -76H48", body, 7) + line("M-20 -56H0", "#263238", 7) +
    at(-6, -118, `${rect(-17, 16, 34, 52, "#ff7043", 16)}${circ(0, 0, 28, "#ffcc80")}${path("M-30 -6A30 30 0 0 1 30 -6Z", "#fdd835")}${rect(-30, -8, 60, 8, "#f9a825", 4)}${face(2, 8, .6)}${line("M12 40L44 -2L54 -34", "#ffcc80", 10)}${an("a-wiggle o-t", line("M-4 64L10 98L-6 128", "#3949ab", 12), .8)}`);
};
export const air = () => svg("aire", "#b2ebf2", "#e0f7fa", `
${sun(110, 100, 40, false)}${cloud(420, 90, .9, 11)}${cloud(650, 140, .6, 9, 3)}
${cityline(420, .7)}${hills(430, "#a5d6a7", "#81c784")}
${rect(0, 470, 800, 130, "#607d8b")}${rect(0, 458, 800, 14, "#7cb342")}${line("M0 545H800", "#fff", 6, 'stroke-dasharray="26 22"')}
${tree(110, 470, .95, 5)}${tree(420, 470, 1, 6, 1)}${tree(710, 470, .9, 5, 2)}
${[[110, 0], [420, 1.2], [710, 2.2]].map(([x, dl]) => o2(x + 24, 330, 4, dl, 150)).join("")}
${an("a-drive", at(0, 525, bikeKid("#00acc1")), 9, 0, "--x0:-150px;--x1:960px")}
${[[300, 150], [560, 120]].map(([x, y], i) => at(x, y, an("a-float", bird("#ffa726"), 9, i * 2), .7)).join("")}
`);

// 7. ÁRBOLES
export const trees = () => svg("arboles", "#b3e5fc", "#e8f5e9", `
${sun(670, 100, 42)}${cloud(150, 100, .9, 12)}${hills(420, "#aed581", "#7cb342")}${grass(480, "#8bc34a", "#689f38")}
<ellipse cx="400" cy="490" rx="200" ry="26" fill="#000" opacity=".14"/>${meadow(500)}
${rect(362, 270, 76, 220, "#8d5a3b", 26)}${rect(362, 270, 24, 220, "#a06a47", 12)}${path("M330 490Q372 450 372 420H428Q428 450 470 490Z", "#8d5a3b")}${face(400, 392, 1.5)}
${an("a-sway o-b", `${circ(400, 215, 130, "#2e7d32")}${circ(305, 270, 85, "#388e3c")}${circ(495, 270, 85, "#388e3c")}${circ(390, 150, 90, "#4caf50")}${circ(480, 190, 70, "#43a047")}${circ(350, 130, 30, "#81c784", 'opacity=".5"')}
  ${[[330, 230], [470, 250], [400, 160], [440, 300], [350, 300]].map(([x, y], i) => an("a-bob", circ(x, y, 15, "#e53935") + path(`M${x} ${y - 14}q6 -12 14 -12`, "none", 'stroke="#5d4037" stroke-width="3"'), 2.4, i * .4)).join("")}`, 5)}
${[0, 1, 2, 3].map(i => at(300 + i * 70, 230 + (i % 2) * 30, an("a-fall", path("M0 0Q12 -14 24 0Q12 14 0 0Z", "#66bb6a"), 5, i * 1.3, "--y:240px"))).join("")}
${[[330, 190, 0], [480, 160, 1.4], [560, 280, 2.8]].map(([x, y, dl]) => o2(x, y, 4.5, dl, 120)).join("")}
<g><animateMotion dur="9s" repeatCount="indefinite" path="M-40 130C200 40 420 220 840 100"/>${bird("#ef5350")}</g>
${at(660, 585, kid({shirt: "#ffb300", pants: "#3949ab", hair: "#212121", style: "cap", l: 6, r: -150, anim: "r", s: 1.2}))}
${at(150, 585, kid({shirt: "#ec407a", pants: "#455a64", hair: "#4e342e", style: "pony", l: 150, r: -6, anim: "l", s: 1.1}))}
`);

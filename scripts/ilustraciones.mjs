import { mkdirSync, writeFileSync } from 'node:fs'

const dir = new URL('../src/assets/img/', import.meta.url)
mkdirSync(dir, { recursive: true })

const cielo = (id = 'cielo') => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ec8ea"/><stop offset=".55" stop-color="#d7eef8"/><stop offset="1" stop-color="#fdf3df"/></linearGradient>`

function nubes(op = 0.8) {
  const grupos = [
    [140, 70, 1],
    [430, 48, 0.8],
    [680, 86, 0.7],
  ]
  return grupos
    .map(
      ([x, y, s]) => `<g fill="#fff" opacity="${op}" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="16" rx="62" ry="18"/><circle cx="-28" cy="6" r="20"/><circle cx="4" cy="-4" r="26"/><circle cx="32" cy="8" r="16"/></g>`,
    )
    .join('')
}

function arbol(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="8" width="8" height="36" fill="#5b3a1f"/><circle cx="0" cy="0" r="22" fill="#2f7640"/><circle cx="-16" cy="10" r="16" fill="#2a6b3a"/><circle cx="16" cy="10" r="16" fill="#2a6b3a"/><circle cx="0" cy="14" r="18" fill="#26703c"/><circle cx="-6" cy="-4" r="10" fill="#4f9d5c"/></g>`
}

function palma(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0,70 Q8,20 2,-10" stroke="#6b4a2a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M2,-10 Q-28,-28 -62,8 Q-18,-8 2,-10Z" fill="#1f5a2a"/><path d="M2,-10 Q-8,-48 8,-78 Q8,-36 2,-10Z" fill="#2f7a3b"/><path d="M2,-10 Q28,-46 58,-62 Q22,-28 2,-10Z" fill="#1f5a2a"/><path d="M2,-10 Q40,-18 78,6 Q28,-2 2,-10Z" fill="#2f7a3b"/><path d="M2,-10 Q18,8 48,28 Q16,8 2,-10Z" fill="#1f5a2a"/></g>`
}

function casa(x, y, w, h, muro = '#f7e2c4', techo = '#c2502a') {
  const puerta = w * 0.22
  return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${muro}"/><rect x="${x + w * 0.55}" y="${y}" width="${w * 0.45}" height="${h}" fill="#000" opacity=".06"/><path d="M${x - w * 0.08},${y} L${x + w / 2},${y - h * 0.55} L${x + w * 1.08},${y}Z" fill="${techo}"/><rect x="${x + w * 0.12}" y="${y + h * 0.28}" width="${w * 0.22}" height="${h * 0.28}" fill="#8ecae6"/><rect x="${x + w * 0.12 + w * 0.1}" y="${y + h * 0.28}" width="2" height="${h * 0.28}" fill="#fff"/><rect x="${x + w / 2 - puerta / 2}" y="${y + h * 0.48}" width="${puerta}" height="${h * 0.52}" rx="2" fill="#7a4a2a"/><rect x="${x + w * 0.68}" y="${y + h * 0.28}" width="${w * 0.2}" height="${h * 0.24}" fill="#8ecae6"/></g>`
}

function iglesia(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="70" y="40" width="150" height="120" fill="#f8f1e4"/>
    <rect x="150" y="40" width="70" height="120" fill="#000" opacity=".05"/>
    <path d="M58,42 L145,-20 L232,42Z" fill="#c2502a"/>
    <rect x="118" y="90" width="46" height="70" rx="23" fill="#6a3a22"/>
    <rect x="86" y="62" width="22" height="28" fill="#8ecae6"/>
    <rect x="182" y="62" width="22" height="28" fill="#8ecae6"/>
    <circle cx="145" cy="18" r="10" fill="#f4d35e"/>
    <rect x="0" y="-30" width="52" height="190" fill="#f3eadc"/>
    <rect x="28" y="-30" width="24" height="190" fill="#000" opacity=".05"/>
    <path d="M-8,-28 L26,-78 L60,-28Z" fill="#a33b22"/>
    <rect x="22" y="-92" width="8" height="18" fill="#f26b1d"/>
    <rect x="16" y="-86" width="20" height="6" fill="#f26b1d"/>
    <rect x="10" y="8" width="32" height="40" rx="16" fill="#6a3a22"/>
    <rect x="14" y="-8" width="12" height="16" fill="#8ecae6"/>
    <rect x="28" y="-8" width="12" height="16" fill="#8ecae6"/>
    <path d="M232,70 h28 v90 h-28z" fill="#efe4d2"/>
    <path d="M226,70 L246,48 L266,70Z" fill="#c2502a"/>
  </g>`
}

function papelPicado(y, ancho) {
  const colores = ['#e63946', '#f26b1d', '#ffb703', '#2a9d8f', '#6a4c93', '#e76f51']
  let d = `<path d="M0,${y} Q${ancho / 2},${y + 18} ${ancho},${y}" stroke="#5b3a1f" stroke-width="2" fill="none"/>`
  for (let i = 0; i < 12; i++) {
    const x = 20 + i * ((ancho - 40) / 11)
    const c = colores[i % colores.length]
    const alto = 34 + (i % 3) * 4
    d += `<path d="M${x},${y + 6} h32 v${alto} l-5,5 -5,-5 -6,5 -6,-5 -5,5 -5,-5z" fill="${c}" opacity=".95"/><circle cx="${x + 16}" cy="${y + 22}" r="4" fill="#fff" opacity=".55"/>`
  }
  return d
}

function cempasuchil(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><circle r="16" fill="#d9480f"/><circle r="11" fill="#f76707"/><circle r="6" fill="#ffc048"/><path d="M0,10 Q8,28 0,40" stroke="#2f7a3b" stroke-width="2" fill="none"/></g>`
}

function colinas() {
  return `<path d="M0,210 C80,180 140,230 240,200 C340,170 400,210 520,190 C640,168 700,200 800,176 L800,500 L0,500Z" fill="#9dbfb7"/>
  <path d="M0,280 C100,250 180,300 300,270 C430,236 500,290 640,255 C720,236 760,260 800,248 L800,500 L0,500Z" fill="#6ea88a"/>
  <path d="M0,360 C140,340 220,390 360,355 C500,322 600,380 800,340 L800,500 L0,500Z" fill="#3f8f52"/>
  <rect y="455" width="800" height="45" fill="#d9ccae"/>`
}

function marco(contenido, w = 800, h = 500, id = 'c') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
<defs>${cielo(id)}</defs>
<rect width="${w}" height="${h}" fill="url(#${id})"/>
${contenido}
</svg>`
}

const hero = marco(
  `${nubes(0.85)}
  <circle cx="1280" cy="150" r="54" fill="#fff4cf"/>
  <circle cx="1280" cy="150" r="120" fill="#ffe3a3" opacity=".35"/>
  <path d="M0,340 C180,280 280,400 460,330 C640,260 760,360 980,300 C1180,246 1360,340 1600,280 L1600,900 L0,900Z" fill="#9dbfb7"/>
  <path d="M0,460 C200,400 340,520 560,450 C780,380 900,500 1140,430 C1320,380 1460,460 1600,420 L1600,900 L0,900Z" fill="#6ea88a"/>
  <path d="M0,590 C220,540 380,650 620,580 C860,510 1000,640 1280,560 C1440,510 1520,580 1600,550 L1600,900 L0,900Z" fill="#3f8f52"/>
  <path d="M180,760 C420,700 560,800 860,730 C1100,680 1240,760 1600,700 L1600,900 L0,900 L0,800 C40,780 80,790 180,760Z" fill="#2f7a45"/>
  <rect y="820" width="1600" height="80" fill="#d7c6a4"/>
  ${papelPicado(28, 1600).replaceAll('M0,28', 'M0,36').replaceAll('y + 6', '')}
  ${casa(430, 560, 120, 90, '#f4d7b0', '#c2502a')}
  ${casa(580, 590, 100, 78, '#f7e7cf', '#b5452a')}
  ${casa(250, 610, 130, 96, '#fff6ea', '#d0643a')}
  ${casa(1180, 560, 140, 100, '#f3e2c8', '#a33b22')}
  ${casa(1360, 600, 110, 84, '#f8efe2', '#c2502a')}
  ${arbol(160, 640, 1.4)}
  ${arbol(700, 620, 1.1)}
  ${arbol(1280, 600, 1.2)}
  ${palma(80, 560, 1.35)}
  ${palma(1480, 540, 1.5)}
  ${palma(1040, 640, 1.1)}
  <path d="M0,860 C300,820 500,880 800,840 C1100,800 1300,870 1600,830 L1600,900 L0,900Z" fill="#1f5e36"/>
  ${cempasuchil(90, 800, 1.6)}
  ${cempasuchil(200, 830, 1.2)}
  ${cempasuchil(1480, 790, 1.7)}
  ${cempasuchil(1360, 830, 1.1)}
  ${iglesia(1020, 360, 2.05)}`,
  1600,
  900,
  'heroCielo',
)

function escenaBase(extra) {
  return `${nubes()}
  ${colinas()}
  ${papelPicado(18, 800)}
  ${arbol(70, 360, 1)}
  ${arbol(700, 350, 0.9)}
  ${palma(40, 300, 0.85)}
  ${extra}`
}

const profesionales = marco(
  escenaBase(`
  ${casa(250, 250, 300, 190, '#f7f3ea', '#c2502a')}
  <rect x="300" y="300" width="200" height="110" fill="#fffaf3"/>
  <rect x="318" y="318" width="70" height="50" fill="#8ecae6"/>
  <rect x="410" y="318" width="70" height="50" fill="#8ecae6"/>
  <rect x="360" y="348" width="80" height="12" rx="6" fill="#1f6b3a" opacity=".8"/>
  <rect x="250" y="250" width="300" height="16" fill="#1f6b3a"/>
  <rect x="470" y="390" width="46" height="50" fill="#7a4a2a"/>
  <circle cx="210" cy="400" r="28" fill="#e7c2a0"/>
  <path d="M182,400 Q210,360 238,400 L248,470 H172Z" fill="#1c7ed6"/>
  <rect x="188" y="430" width="44" height="28" rx="4" fill="#f8f1e4"/>
  <path d="M198,438 h24 M198,446 h18" stroke="#1f6b3a" stroke-width="2"/>
  `),
)

const hogar = marco(
  escenaBase(`
  ${casa(180, 230, 280, 200, '#f6e7d4', '#c2502a')}
  <rect x="470" y="300" width="18" height="150" fill="#8d6e63"/>
  <rect x="500" y="250" width="16" height="200" fill="#6d4c41"/>
  <path d="M430,360 h180" stroke="#f26b1d" stroke-width="8"/>
  <rect x="560" y="330" width="70" height="50" rx="6" fill="#f4a261"/>
  <path d="M575,355 h40" stroke="#fff" stroke-width="4"/>
  <rect x="120" y="390" width="90" height="14" rx="3" fill="#5b3a1f" transform="rotate(-20 165 397)"/>
  <circle cx="640" cy="400" r="26" fill="#ffd43b"/>
  <rect x="628" y="400" width="24" height="55" fill="#5b3a1f"/>
  `),
)

const salud = marco(
  escenaBase(`
  <rect x="210" y="220" width="380" height="220" fill="#f8f9fa"/>
  <rect x="210" y="220" width="380" height="28" fill="#1f6b3a"/>
  <path d="M190,222 L400,120 L610,222Z" fill="#c2502a"/>
  <rect x="360" y="320" width="80" height="120" fill="#8ecae6"/>
  <rect x="250" y="280" width="80" height="60" fill="#8ecae6"/>
  <rect x="480" y="280" width="80" height="60" fill="#8ecae6"/>
  <g transform="translate(400,175)"><circle r="28" fill="#fff"/><rect x="-7" y="-18" width="14" height="36" fill="#e03131"/><rect x="-18" y="-7" width="36" height="14" fill="#e03131"/></g>
  <path d="M620,455 L660,360 H760 L800,455Z" fill="#fff"/>
  <path d="M620,360 H800 V378 H620Z" fill="#2b7bd6"/>
  `),
)

const belleza = marco(
  escenaBase(`
  <rect x="180" y="200" width="440" height="250" fill="#fff0f6"/>
  <rect x="180" y="200" width="440" height="26" fill="#c2255c"/>
  <path d="M160,202 L400,110 L640,202Z" fill="#a61e4d"/>
  <rect x="230" y="260" width="140" height="160" rx="70" fill="#f8d7e8"/>
  <rect x="250" y="280" width="100" height="120" fill="#e8f4fb"/>
  <circle cx="300" cy="330" r="28" fill="#e7c2a0"/>
  <path d="M272,328 Q300,300 328,328" fill="#6a4c93"/>
  <rect x="420" y="300" width="150" height="18" rx="9" fill="#f783ac"/>
  <rect x="420" y="332" width="120" height="14" rx="7" fill="#ffd6e7"/>
  <rect x="420" y="360" width="140" height="14" rx="7" fill="#e599f7"/>
  <circle cx="560" cy="250" r="16" fill="#ffd43b"/>
  `),
)

const eventos = marco(
  escenaBase(`
  <rect x="140" y="300" width="520" height="150" fill="#6b3a22"/>
  <rect x="140" y="300" width="520" height="16" fill="#8d552b"/>
  <g transform="translate(250,250)">
    <circle cx="0" cy="0" r="26" fill="#e7c2a0"/>
    <path d="M-30,-8 Q0,-36 30,-8 L24,2 Q0,-16 -24,2Z" fill="#f4e1b5"/>
    <path d="M-34,28 h68 l12,120 h-92z" fill="#f8f4ee"/>
    <path d="M-20,70 h40 v16 h-40z" fill="#1f6b3a"/>
    <path d="M20,80 Q70,40 60,140" stroke="#5b3a1f" stroke-width="6" fill="none"/>
    <ellipse cx="62" cy="146" rx="22" ry="10" fill="#c2502a"/>
  </g>
  <g transform="translate(400,255)">
    <circle cx="0" cy="0" r="26" fill="#e0b48a"/>
    <path d="M-30,-8 Q0,-36 30,-8 L24,2 Q0,-16 -24,2Z" fill="#f4e1b5"/>
    <path d="M-34,28 h68 l12,115 h-92z" fill="#fff"/>
    <path d="M-16,78 h32" stroke="#c2255c" stroke-width="8"/>
    <rect x="-6" y="40" width="8" height="90" fill="#5b3a1f"/>
    <path d="M-2,50 Q40,70 30,130" stroke="#222" stroke-width="3" fill="none"/>
  </g>
  <g transform="translate(540,250)">
    <circle cx="0" cy="0" r="26" fill="#efc8a8"/>
    <path d="M-30,-8 Q0,-36 30,-8 L24,2 Q0,-16 -24,2Z" fill="#f4e1b5"/>
    <path d="M-34,28 h68 l12,120 h-92z" fill="#f3efe6"/>
    <path d="M-18,72 h36 v10 h-36z" fill="#6a4c93"/>
    <path d="M-10,48 L40,20 L46,30 L-4,60Z" fill="#d4a017"/>
  </g>
  `),
)

const educacion = marco(
  escenaBase(`
  <rect x="160" y="200" width="480" height="250" fill="#f8f1e4"/>
  <rect x="160" y="200" width="480" height="24" fill="#5f3dc4"/>
  <path d="M140,202 L400,100 L660,202Z" fill="#6741d9"/>
  <rect x="220" y="260" width="200" height="140" fill="#e7f5ff"/>
  <path d="M240,300 h160 M240,324 h140 M240,348 h150" stroke="#1c7ed6" stroke-width="6" stroke-linecap="round"/>
  <rect x="460" y="280" width="120" height="150" rx="6" fill="#fff"/>
  <rect x="472" y="300" width="96" height="12" fill="#f26b1d"/>
  <rect x="472" y="324" width="80" height="8" fill="#dee2e6"/>
  <rect x="472" y="342" width="90" height="8" fill="#dee2e6"/>
  <circle cx="520" cy="250" r="18" fill="#ffd43b"/>
  `),
)

const alimentos = marco(
  escenaBase(`
  <rect x="180" y="250" width="420" height="180" fill="#fff6e8"/>
  <path d="M160,250 L390,140 L620,250Z" fill="#f26b1d"/>
  <rect x="230" y="290" width="140" height="90" rx="8" fill="#fff"/>
  <ellipse cx="300" cy="330" rx="40" ry="16" fill="#e8590c"/>
  <ellipse cx="300" cy="322" rx="28" ry="10" fill="#69db7c"/>
  <rect x="420" y="300" width="130" height="80" rx="8" fill="#fff3bf"/>
  <circle cx="460" cy="340" r="16" fill="#f59f00"/>
  <circle cx="500" cy="340" r="16" fill="#e03131"/>
  <circle cx="480" cy="318" r="14" fill="#2f9e44"/>
  <path d="M250,250 h300" stroke="#fff" stroke-width="8"/>
  `),
)

const transporte = marco(
  escenaBase(`
  <path d="M40,430 C200,400 300,450 500,410 C650,380 700,420 780,400" stroke="#d9c49a" stroke-width="28" fill="none" stroke-linecap="round"/>
  <g transform="translate(220,300)">
    <rect x="0" y="40" width="280" height="90" rx="16" fill="#f8f9fa"/>
    <path d="M20,40 L70,0 H230 L270,40Z" fill="#1c7ed6"/>
    <rect x="40" y="55" width="50" height="36" rx="4" fill="#d0ebff"/>
    <rect x="100" y="55" width="50" height="36" rx="4" fill="#d0ebff"/>
    <rect x="160" y="55" width="50" height="36" rx="4" fill="#d0ebff"/>
    <rect x="220" y="55" width="40" height="36" rx="4" fill="#d0ebff"/>
    <circle cx="60" cy="136" r="18" fill="#2b2118"/>
    <circle cx="220" cy="136" r="18" fill="#2b2118"/>
    <circle cx="60" cy="136" r="8" fill="#ced4da"/>
    <circle cx="220" cy="136" r="8" fill="#ced4da"/>
  </g>
  ${casa(40, 300, 90, 70)}
  `),
)

const agricultura = marco(
  escenaBase(`
  <path d="M0,430 H800 V500 H0Z" fill="#c2a36b"/>
  ${Array.from({ length: 9 }, (_, i) => {
    const x = 80 + i * 72
    return `<g transform="translate(${x} 400)"><path d="M0,0 V-70" stroke="#2f7a3b" stroke-width="4"/><path d="M0,-40 Q-16,-55 -8,-70" fill="#69db7c"/><path d="M0,-50 Q18,-62 10,-80" fill="#2f9e44"/><ellipse cx="0" cy="-78" rx="7" ry="12" fill="#f4d35e"/></g>`
  }).join('')}
  ${casa(560, 280, 150, 120, '#f4e1c4', '#c2502a')}
  `),
)

const oficios = marco(
  escenaBase(`
  <rect x="220" y="240" width="360" height="200" fill="#fff"/>
  <rect x="220" y="240" width="360" height="22" fill="#f59f00"/>
  <path d="M200,242 L400,140 L600,242Z" fill="#e67700"/>
  <rect x="280" y="300" width="90" height="70" fill="#8ecae6"/>
  <rect x="430" y="320" width="100" height="120" fill="#7a4a2a"/>
  <circle cx="160" cy="390" r="26" fill="#e7c2a0"/>
  <path d="M130,400 h60 l16,70 H114Z" fill="#1f6b3a"/>
  <rect x="120" y="360" width="80" height="10" fill="#868e96" transform="rotate(-30 160 365)"/>
  <circle cx="640" cy="360" r="22" fill="#ffd43b"/>
  <path d="M640,382 v50" stroke="#5b3a1f" stroke-width="8"/>
  `),
)

const trioFiesta = marco(
  escenaBase(`
  ${casa(80, 280, 120, 90)}
  ${casa(600, 270, 130, 100, '#fff', '#b5452a')}
  <rect x="220" y="330" width="360" height="110" fill="#6b3a22"/>
  <g transform="translate(320,250) scale(.75)">
    <circle cx="0" cy="0" r="26" fill="#e7c2a0"/>
    <path d="M-30,-8 Q0,-36 30,-8 L24,2 Q0,-16 -24,2Z" fill="#f4e1b5"/>
    <path d="M-34,28 h68 l12,120 h-92z" fill="#fff"/>
    <path d="M-18,74 h36 v12 h-36z" fill="#1f6b3a"/>
  </g>
  <g transform="translate(430,250) scale(.75)">
    <circle cx="0" cy="0" r="26" fill="#e0b48a"/>
    <path d="M-30,-8 Q0,-36 30,-8 L24,2 Q0,-16 -24,2Z" fill="#f4e1b5"/>
    <path d="M-34,28 h68 l12,120 h-92z" fill="#f8f4ee"/>
    <rect x="-4" y="40" width="8" height="80" fill="#5b3a1f"/>
  </g>
  <g transform="translate(530,250) scale(.75)">
    <circle cx="0" cy="0" r="26" fill="#efc8a8"/>
    <path d="M-30,-8 Q0,-36 30,-8 L24,2 Q0,-16 -24,2Z" fill="#f4e1b5"/>
    <path d="M-34,28 h68 l12,120 h-92z" fill="#fffaf3"/>
    <path d="M8,50 L50,24 L56,36 L14,62Z" fill="#e0b040"/>
  </g>
  ${cempasuchil(180, 450, 1.2)}
  ${cempasuchil(620, 450, 1.3)}
  `),
)

const trioEscenario = marco(
  `${nubes()}
  <rect width="800" height="500" fill="#3b1030"/>
  <rect y="0" width="800" height="220" fill="#5a1848"/>
  ${papelPicado(16, 800)}
  <rect x="80" y="280" width="640" height="160" fill="#6b3a22"/>
  <rect x="80" y="280" width="640" height="18" fill="#8d552b"/>
  <g transform="translate(220,180) scale(1.05)">
    <circle cx="0" cy="40" r="28" fill="#e7c2a0"/>
    <path d="M-34,28 Q0,-8 34,28 L28,40 Q0,16 -28,40Z" fill="#f4e1b5"/>
    <path d="M-40,78 h80 l14,130 h-108z" fill="#fff"/>
    <path d="M-22,120 h44 v14 h-44z" fill="#1f6b3a"/>
  </g>
  <g transform="translate(400,170) scale(1.05)">
    <circle cx="0" cy="40" r="28" fill="#e0b48a"/>
    <path d="M-34,28 Q0,-8 34,28 L28,40 Q0,16 -28,40Z" fill="#f6e7c1"/>
    <path d="M-40,78 h80 l14,140 h-108z" fill="#f8f4ee"/>
    <path d="M-18,130 h36" stroke="#c2255c" stroke-width="10"/>
    <rect x="-4" y="90" width="8" height="100" fill="#5b3a1f"/>
  </g>
  <g transform="translate(570,180) scale(1.05)">
    <circle cx="0" cy="40" r="28" fill="#efc8a8"/>
    <path d="M-34,28 Q0,-8 34,28 L28,40 Q0,16 -28,40Z" fill="#f4e1b5"/>
    <path d="M-40,78 h80 l14,130 h-108z" fill="#fffaf3"/>
    <path d="M-20,124 h40 v12 h-40z" fill="#6a4c93"/>
    <path d="M10,100 L70,60 L78,74 L18,114Z" fill="#e0b040"/>
  </g>
  ${cempasuchil(120, 430, 1.4)}
  ${cempasuchil(680, 430, 1.4)}`,
  800,
  500,
  'esc',
)

const trioDetalle = marco(
  `${nubes(0.5)}
  <rect y="300" width="800" height="200" fill="#6b4428"/>
  <ellipse cx="220" cy="340" rx="90" ry="28" fill="#c2502a"/>
  <rect x="205" y="160" width="16" height="190" fill="#5b3a1f"/>
  <path d="M213,180 Q300,140 280,300" stroke="#222" stroke-width="3" fill="none"/>
  <path d="M213,200 Q280,170 270,280" stroke="#222" stroke-width="2" fill="none"/>
  <rect x="430" y="150" width="18" height="200" fill="#3d2914"/>
  <path d="M448,170 Q560,120 540,250 Q500,160 448,200" fill="#e7c07a"/>
  <rect x="620" y="180" width="70" height="40" rx="8" fill="#f4e1b5"/>
  <path d="M655,180 V140" stroke="#5b3a1f" stroke-width="6"/>
  <circle cx="655" cy="130" r="16" fill="#f26b1d"/>
  ${cempasuchil(80, 420, 1.3)}
  ${cempasuchil(700, 400, 1.2)}`,
  800,
  500,
  'det',
)

const mapa = marco(
  `${nubes(0.6)}
  <rect x="60" y="70" width="680" height="380" rx="28" fill="#e7f5ff"/>
  <path d="M80,300 C180,260 240,340 340,300 C440,260 500,220 620,280 C680,310 700,340 740,320" stroke="#4dabf7" stroke-width="18" fill="none" stroke-linecap="round"/>
  <path d="M120,140 C200,180 180,240 260,260" stroke="#d8c7a6" stroke-width="14" fill="none"/>
  <path d="M300,160 H620" stroke="#d8c7a6" stroke-width="12"/>
  <path d="M460,120 V360" stroke="#d8c7a6" stroke-width="12"/>
  ${casa(150, 180, 70, 50, '#fff', '#c2502a')}
  ${casa(520, 190, 80, 56, '#fff6ea', '#b5452a')}
  <g transform="translate(430,240)"><path d="M0,70 C-28,30 -36,-10 0,-36 C36,-10 28,30 0,70Z" fill="#f26b1d"/><circle cy="-8" r="12" fill="#fff"/></g>
  ${arbol(250, 300, 0.7)}
  ${palma(640, 250, 0.7)}
  `,
  800,
  500,
  'mapa',
)

const archivos = {
  'bolsa-hero.svg': hero,
  'il-profesionales.svg': profesionales,
  'il-hogar.svg': hogar,
  'il-salud.svg': salud,
  'il-belleza.svg': belleza,
  'il-eventos.svg': eventos,
  'il-educacion.svg': educacion,
  'il-alimentos.svg': alimentos,
  'il-transporte.svg': transporte,
  'il-agricultura.svg': agricultura,
  'il-oficios.svg': oficios,
  'il-trio-fiesta.svg': trioFiesta,
  'il-trio-escenario.svg': trioEscenario,
  'il-trio-detalle.svg': trioDetalle,
  'il-mapa.svg': mapa,
}

for (const [nombre, svg] of Object.entries(archivos)) {
  writeFileSync(new URL(nombre, dir), svg)
  console.log(nombre, svg.length)
}

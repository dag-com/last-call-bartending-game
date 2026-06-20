// ============================================================================
// SVG glassware renderer (Tier 1 graphics).
// Builds realistic vector glasses with clip-path liquid, a rising fill,
// meniscus surface, ice, specular highlights, and garnishes.
// ============================================================================

const NS = "http://www.w3.org/2000/svg";
const geom = new WeakMap();
let _uid = 0;

// ---- per-template geometry ----
function tplGeometry(glass, pad) {
  const tpl = glass.tpl;
  const W = glass.w;
  const H = glass.h;
  const x0 = pad;
  const x1 = pad + W;
  const cx = pad + W / 2;
  const y0 = pad;
  const t = 7; // wall thickness

  if (tpl === "tumbler") {
    const y1 = pad + H;
    const bi = W * 0.04;
    const r = 12;
    const body = `M ${x0},${y0} L ${x1},${y0} L ${x1 - bi},${y1 - r} Q ${x1 - bi},${y1} ${x1 - bi - r},${y1} L ${x0 + bi + r},${y1} Q ${x0 + bi},${y1} ${x0 + bi},${y1 - r} Z`;
    const cavity = `M ${x0 + t},${y0 + t} L ${x1 - t},${y0 + t} L ${x1 - bi - t},${y1 - r - 2} Q ${x1 - bi - t},${y1 - t} ${x1 - bi - t - r},${y1 - t} L ${x0 + bi + t + r},${y1 - t} Q ${x0 + bi + t},${y1 - t} ${x0 + bi + t},${y1 - r - 2} Z`;
    const cavBox = { x: x0 + t, y: y0 + t, w: W - 2 * t, h: H - 2 * t };
    const ice = H > 110
      ? [{ x: cx - 26, y: y0 + H * 0.5, s: 28, rot: 14 }, { x: cx + 2, y: y0 + H * 0.62, s: 23, rot: -12 }]
      : [{ x: cx - 12, y: y0 + H * 0.55, s: 20, rot: 12 }];
    const highlights = [
      { x: x0 + W * 0.15, y: y0 + 12, w: 8, h: H - 34, rx: 4, op: 0.32, rot: 0 },
      { x: x1 - W * 0.2, y: y0 + 16, w: 4, h: H - 48, rx: 3, op: 0.16, rot: 0 },
    ];
    return { vbW: W + 2 * pad, vbH: H + 2 * pad + 14, body, cavity, cavBox, stem: "", foot: "", rimCx: cx, rimCy: y0, rimRx: W / 2 - 1, rimRy: 6, highlights, ice };
  }

  // ---- stemmed helpers ----
  const stemFoot = (bowlBottomY, stemH, footW, footH) => {
    const footCy = bowlBottomY + stemH + footH / 2;
    const stem = `<rect x="${cx - 4}" y="${bowlBottomY - 1}" width="8" height="${stemH + 2}" fill="rgba(255,255,255,0.13)"/><rect x="${cx - 1.5}" y="${bowlBottomY}" width="2" height="${stemH}" fill="rgba(255,255,255,0.30)"/>`;
    const foot = `<ellipse cx="${cx}" cy="${footCy}" rx="${footW / 2}" ry="${footH / 2}" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>`;
    const vbH = footCy + footH / 2 + pad;
    return { stem, foot, vbH };
  };

  if (tpl === "cone") {
    const apexY = y0 + H;
    const sf = stemFoot(apexY, 66, W * 0.5, 11);
    const body = `M ${x0},${y0} L ${x1},${y0} L ${cx},${apexY} Z`;
    const cavity = `M ${x0 + 9},${y0 + 8} L ${x1 - 9},${y0 + 8} L ${cx},${apexY - 9} Z`;
    const cavBox = { x: x0 + 9, y: y0 + 8, w: W - 18, h: apexY - 9 - (y0 + 8) };
    const highlights = [{ x: x0 + W * 0.3, y: y0 + 14, w: 5, h: H * 0.4, rx: 3, op: 0.14, rot: 26 }];
    return { vbW: W + 2 * pad, vbH: sf.vbH, body, cavity, cavBox, stem: sf.stem, foot: sf.foot, rimCx: cx, rimCy: y0, rimRx: W / 2 - 1, rimRy: 6, highlights, ice: [] };
  }

  if (tpl === "bowl" || tpl === "marg") {
    const bH = H;
    const by = y0 + bH;
    const sf = stemFoot(by, tpl === "marg" ? 58 : 64, W * 0.5, 11);
    const flare = tpl === "marg" ? 0.0 : 0.16;
    const body = `M ${x0},${y0} C ${x0 - 2},${y0 + bH * 0.62} ${x0 + W * (0.06 + flare)},${by} ${cx},${by} C ${x1 - W * (0.06 + flare)},${by} ${x1 + 2},${y0 + bH * 0.62} ${x1},${y0} Z`;
    const cavity = `M ${x0 + t},${y0 + t} C ${x0 + t},${y0 + bH * 0.6} ${x0 + W * (0.08 + flare)},${by - t} ${cx},${by - t} C ${x1 - W * (0.08 + flare)},${by - t} ${x1 - t},${y0 + bH * 0.6} ${x1 - t},${y0 + t} Z`;
    const cavBox = { x: x0 + t, y: y0 + t, w: W - 2 * t, h: bH - 2 * t };
    const highlights = [{ x: x0 + W * 0.16, y: y0 + 10, w: 7, h: bH * 0.6, rx: 4, op: 0.26, rot: 12 }];
    return { vbW: W + 2 * pad, vbH: sf.vbH, body, cavity, cavBox, stem: sf.stem, foot: sf.foot, rimCx: cx, rimCy: y0, rimRx: W / 2 - 1, rimRy: 6, highlights, ice: [] };
  }

  // hurricane (tulip)
  const bH = H;
  const by = y0 + bH;
  const sf = stemFoot(by, 30, W * 0.62, 11);
  const body = `M ${x0 + W * 0.18},${y0} C ${x0 - 6},${y0 + bH * 0.5} ${x0 + W * 0.08},${y0 + bH * 0.92} ${cx},${by} C ${x1 - W * 0.08},${y0 + bH * 0.92} ${x1 + 6},${y0 + bH * 0.5} ${x1 - W * 0.18},${y0} Z`;
  const cavity = `M ${x0 + W * 0.2},${y0 + t} C ${x0 + t},${y0 + bH * 0.5} ${x0 + W * 0.12},${by - t} ${cx},${by - t} C ${x1 - W * 0.12},${by - t} ${x1 - t},${y0 + bH * 0.5} ${x1 - W * 0.2},${y0 + t} Z`;
  const cavBox = { x: x0 + t, y: y0 + t, w: W - 2 * t, h: bH - 2 * t };
  const ice = [{ x: cx - 22, y: y0 + bH * 0.5, s: 24, rot: 12 }, { x: cx + 2, y: y0 + bH * 0.62, s: 20, rot: -10 }];
  const highlights = [{ x: x0 + W * 0.26, y: y0 + 12, w: 6, h: bH * 0.62, rx: 3, op: 0.24, rot: 10 }];
  return { vbW: W + 2 * pad, vbH: sf.vbH, body, cavity, cavBox, stem: sf.stem, foot: sf.foot, rimCx: cx, rimCy: y0, rimRx: W * 0.32, rimRy: 6, highlights, ice };
}

export function buildGlass(glass) {
  const uid = "lg" + _uid++;
  const pad = 16;
  const p = tplGeometry(glass, pad);
  const clipId = uid + "cav";
  const revealId = uid + "rev";
  const ggId = uid + "gg";

  const highlightMarkup = p.highlights
    .map((h) => `<rect x="${h.x}" y="${h.y}" width="${h.w}" height="${h.h}" rx="${h.rx}" fill="rgba(255,255,255,${h.op})" transform="rotate(${h.rot || 0} ${h.x + h.w / 2} ${h.y + h.h / 2})"/>`)
    .join("");

  const iceMarkup = p.ice
    .map((c) => `<g transform="rotate(${c.rot} ${c.x + c.s / 2} ${c.y + c.s / 2})"><rect x="${c.x}" y="${c.y}" width="${c.s}" height="${c.s}" rx="4" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.32)" stroke-width="1.4"/><rect x="${c.x + 3}" y="${c.y + 3}" width="${c.s * 0.34}" height="${c.s * 0.34}" rx="2" fill="rgba(255,255,255,0.28)"/></g>`)
    .join("");

  const shadowRx = p.foot ? Math.max(34, glass.w * 0.34) : Math.max(40, glass.w * 0.5);

  const svg =
`<svg class="glass-svg" viewBox="0 0 ${p.vbW} ${p.vbH}" xmlns="${NS}" preserveAspectRatio="xMidYMax meet">
  <defs>
    <linearGradient id="${ggId}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgba(255,255,255,0.22)"/>
      <stop offset="0.42" stop-color="rgba(255,255,255,0.04)"/>
      <stop offset="0.62" stop-color="rgba(255,255,255,0.05)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0.24)"/>
    </linearGradient>
    <clipPath id="${clipId}"><path d="${p.cavity}"/></clipPath>
    <clipPath id="${revealId}"><rect class="reveal-rect" x="${p.cavBox.x - 2}" y="${p.cavBox.y + p.cavBox.h}" width="${p.cavBox.w + 4}" height="0"/></clipPath>
  </defs>
  <ellipse cx="${p.rimCx}" cy="${p.vbH - 5}" rx="${shadowRx}" ry="8" fill="rgba(0,0,0,0.45)"/>
  ${p.foot}
  ${p.stem}
  <path d="${p.body}" fill="url(#${ggId})" stroke="rgba(255,255,255,0.5)" stroke-width="2.2" stroke-linejoin="round"/>
  <g clip-path="url(#${clipId})">
    <g clip-path="url(#${revealId})">
      <g class="bands"></g>
      <g class="ice">${iceMarkup}</g>
    </g>
    <ellipse class="surface" cx="${p.cavBox.x + p.cavBox.w / 2}" cy="${p.cavBox.y + p.cavBox.h}" rx="${p.cavBox.w}" ry="5" fill="rgba(255,255,255,0.38)" opacity="0"/>
  </g>
  ${highlightMarkup}
  <ellipse class="rim" cx="${p.rimCx}" cy="${p.rimCy}" rx="${p.rimRx}" ry="${p.rimRy}" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
  <g class="garnish-group"></g>
</svg>`;

  const tmp = document.createElement("div");
  tmp.innerHTML = svg.trim();
  const el = tmp.firstElementChild;
  geom.set(el, { ...p, revealId, _fill: 0, _raf: 0 });
  return el;
}

// bands: [{ color, frac }] bottom-up, frac sums to ~1. fillFrac: 0..1 of cavity height.
export function setLiquid(svg, bands, fillFrac, animate = true) {
  const s = geom.get(svg);
  if (!s) return;
  const { x, y, w, h } = s.cavBox;
  const bottom = y + h;
  const fillPx = Math.max(0, Math.min(1, fillFrac)) * h;

  const bandsG = svg.querySelector(".bands");
  bandsG.innerHTML = "";
  let acc = 0;
  bands.forEach((b) => {
    const bh = (b.frac || 0) * fillPx;
    const rect = document.createElementNS(NS, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("width", w);
    rect.setAttribute("y", bottom - acc - bh);
    rect.setAttribute("height", Math.max(0, bh));
    rect.setAttribute("fill", b.color);
    rect.style.transition = "fill .5s ease";
    bandsG.appendChild(rect);
    acc += bh;
  });

  const revealRect = svg.querySelector(".reveal-rect");
  const surface = svg.querySelector(".surface");
  const from = s._fill || 0;
  const dur = animate ? 650 : 0;
  const start = performance.now();
  cancelAnimationFrame(s._raf);
  const frame = (now) => {
    const prog = dur ? Math.min(1, (now - start) / dur) : 1;
    const eased = 1 - Math.pow(1 - prog, 3);
    const cur = from + (fillPx - from) * eased;
    revealRect.setAttribute("y", bottom - cur);
    revealRect.setAttribute("height", cur);
    if (surface) {
      surface.setAttribute("cy", bottom - cur);
      surface.setAttribute("opacity", cur > 3 ? 0.4 : 0);
    }
    if (prog < 1) s._raf = requestAnimationFrame(frame);
    else s._fill = fillPx;
  };
  s._raf = requestAnimationFrame(frame);
}

export function setGarnish(svg, gid, emoji) {
  const s = geom.get(svg);
  const g = svg.querySelector(".garnish-group");
  if (!s || !g) return;
  g.innerHTML = "";
  if (!gid || gid === "none") return;

  if (gid === "salt_rim") {
    const n = 16;
    let dots = "";
    for (let i = 0; i <= n; i++) {
      const a = Math.PI + (Math.PI * i) / n; // top half
      const px = s.rimCx + s.rimRx * Math.cos(a);
      const py = s.rimCy + s.rimRy * Math.sin(a);
      dots += `<circle cx="${px}" cy="${py}" r="2.1" fill="rgba(255,255,255,0.92)"/>`;
    }
    g.innerHTML = dots;
    return;
  }

  const text = document.createElementNS(NS, "text");
  text.setAttribute("x", s.rimCx + s.rimRx * 0.55);
  text.setAttribute("y", s.rimCy + 4);
  text.setAttribute("font-size", "30");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("class", "garnish-emoji");
  text.textContent = emoji;
  g.appendChild(text);
}

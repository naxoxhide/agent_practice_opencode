// Verificacion minima de integridad de contenido. Sin frameworks: node:assert puro.
// Node 23+ puede importar .ts directamente (type-stripping nativo) porque los
// datos solo usan `import type` hacia @/types/content, que se elimina en runtime.
import assert from "node:assert/strict";
import { members } from "../src/data/members.ts";
import { subunits } from "../src/data/subunits.ts";
import { timeline } from "../src/data/timeline.ts";

let checks = 0;
function check(condition, message) {
  checks += 1;
  assert.ok(condition, message);
}

// --- Integrantes ---
const memberIds = new Set();
const memberSlugs = new Set();
const memberNumbers = new Set();
for (const member of members) {
  check(!memberIds.has(member.id), `id de integrante duplicado: ${member.id}`);
  memberIds.add(member.id);

  check(!memberSlugs.has(member.slug), `slug de integrante duplicado: ${member.slug}`);
  memberSlugs.add(member.slug);

  check(!memberNumbers.has(member.number), `numero S${member.number} duplicado (${member.id})`);
  memberNumbers.add(member.number);

  check(/^[a-z0-9-]+$/.test(member.slug), `slug invalido: ${member.slug}`);
  check(!Number.isNaN(Date.parse(member.debutDate)), `fecha invalida en ${member.id}`);
  check(member.subunitIds.length > 0, `${member.id} no pertenece a ninguna sub-unidad`);
}
check(members.length === 24, `se esperaban 24 integrantes, hay ${members.length}`);
check(
  [...memberNumbers].sort((a, b) => a - b).every((n, i) => n === i + 1),
  "los numeros S1-S24 no son correlativos sin huecos"
);

// --- Sub-unidades ---
const subunitIds = new Set(subunits.map((s) => s.id));
check(subunitIds.size === subunits.length, "hay ids de sub-unidad duplicados");

for (const subunit of subunits) {
  check(!Number.isNaN(Date.parse(subunit.debutDate)), `fecha invalida en sub-unidad ${subunit.id}`);
  check(subunit.memberIds.length > 0, `sub-unidad ${subunit.id} no tiene integrantes`);
  for (const memberId of subunit.memberIds) {
    check(memberIds.has(memberId), `sub-unidad ${subunit.id} referencia integrante inexistente: ${memberId}`);
  }
}

// Cruce inverso: cada subunitId que aparece en members.ts debe existir en subunits.ts
for (const member of members) {
  for (const subunitId of member.subunitIds) {
    check(
      subunitIds.has(subunitId),
      `${member.id} referencia una sub-unidad inexistente: ${subunitId}`
    );
  }
}

// --- Timeline ---
const timelineIds = new Set();
const youtubeIdShape = /^[\w-]{11}$/;
for (const entry of timeline) {
  check(!timelineIds.has(entry.id), `id de timeline duplicado: ${entry.id}`);
  timelineIds.add(entry.id);

  if (entry.kind === "milestone") {
    check(!Number.isNaN(Date.parse(entry.date)), `fecha invalida en timeline: ${entry.id}`);
    if (entry.subunitId) {
      check(subunitIds.has(entry.subunitId), `timeline ${entry.id} referencia sub-unidad inexistente: ${entry.subunitId}`);
    }
    if (entry.youtubeId) {
      check(youtubeIdShape.test(entry.youtubeId), `youtubeId con formato invalido en ${entry.id}: ${entry.youtubeId}`);
    }
  }
}

const milestoneDates = timeline.filter((e) => e.kind === "milestone").map((e) => e.date);
const sortedDates = [...milestoneDates].sort();
check(
  JSON.stringify(milestoneDates) === JSON.stringify(sortedDates),
  "los milestones del timeline no estan en orden cronologico"
);

console.log(`check-content: ${checks} verificaciones OK`);

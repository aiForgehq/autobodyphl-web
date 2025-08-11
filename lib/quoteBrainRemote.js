// lib/quoteBrainRemote.js
const QUOTE_BRAIN_URL = "https://raw.githubusercontent.com/aiForgehq/autobodyphl-web/main/quote_brain.json";

// tiny cache so we don't hammer GitHub
let cache = { data: null, expiresAt: 0 };
const TTL_MS = 5 * 60 * 1000;

async function fetchBrain() {
  const res = await fetch(QUOTE_BRAIN_URL, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error(`Failed to fetch Quote Brain: ${res.status} ${res.statusText}`);
  return await res.json();
}

function validateBrain(json) {
  if (!json?.meta || !json?.panel_paint_base || !json?.intake_flow) {
    throw new Error("quote_brain.json missing required keys: meta, panel_paint_base, intake_flow");
  }
  return json;
}

export async function getBrain() {
  const now = Date.now();
  if (cache.data && cache.expiresAt > now) return cache.data;
  const brain = validateBrain(await fetchBrain());
  cache = { data: brain, expiresAt: now + TTL_MS };
  return brain;
}

export async function systemPrompt() {
  const b = await getBrain();
  return [
    `You are ${b.meta?.brand || "Collision Club"}’s Quote Brain.`,
    `JSON loaded (${b.meta?.version || "unknown"}). Follow it literally.`,
    `Booking-first intake. Panel-first quoting. BCC for panel jobs. Taxes/fees. Rounding to $${b.rounding?.nearest || 5}.`,
    `Hidden-damage protocol. Repair vs replace. OEM vs aftermarket. ADAS. SRS. Frame/Mech/Aluminum rates. Insurance flow.`,
    `Only show a prelim range on simple single-panel visible damage. Otherwise push booking.`,
    `Never quote full vehicle unless explicitly requested. Insurance: no dollar quote.`,
    `One question at a time using intake_flow. Output keys: agent_action, next_state, items, summary, cta.`
  ].join("\n");
}
// lib/quoteBrainRemote.js
const QUOTE_BRAIN_URL = "https://raw.githubusercontent.com/aiForgehq/autobodyphl-web/main/quote_brain.json";

// 5-minute in-memory cache so we don't ping GitHub on every request
let cache = { data: null, expiresAt: 0 };
const TTL_MS = 5 * 60 * 1000;

async function fetchBrain() {
  const res = await fetch(QUOTE_BRAIN_URL, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error(`Failed to fetch Quote Brain: ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (!json?.meta || !json?.panel_paint_base || !json?.intake_flow) {
    throw new Error("quote_brain.json missing required keys: meta, panel_paint_base, intake_flow");
  }
  return json;
}

export async function getBrain() {
  const now = Date.now();
  if (cache.data && cache.expiresAt > now) return cache.data;
  const brain = await fetchBrain();
  cache = { data: brain, expiresAt: now + TTL_MS };
  return brain;
}

export async function systemPrompt() {
  const b = await getBrain();
  return [
    `You are ${b.meta?.brand || "Collision Club"}’s Quote Brain.`,
    `JSON loaded (${b.meta?.version || "unknown"}). Follow it literally.`,
    `Booking-first intake. Panel-first quoting. BCC for panel jobs. Taxes/fees. Rounding to $${b.rounding?.nearest || 5}.`,
    `Hidden-damage protocol. Repair vs replace. OEM vs aftermarket. ADAS. SRS. Frame/Mech/Aluminum rates. Insurance flow.`,
    `Only show a prelim range on simple single-panel visible damage. Otherwise push booking.`,
    `Never quote full vehicle unless explicitly requested. Insurance: no dollar quote.`,
    `One question at a time using intake_flow. Output keys: agent_action, next_state, items, summary, cta.`
  ].join("\n");
}

export async function firstMessage() {
  return { agent_action: "ask", next_state: "greet", summary: "Hey, I’m Collision Club. What’s going on with the car?" };
}


export async function firstMessage() {
  return { agent_action: "ask", next_state: "greet", summary: "Hey, I’m Collision Club. What’s going on with the car?" };
}
add quoteBrainRemote loader for pulling json from github

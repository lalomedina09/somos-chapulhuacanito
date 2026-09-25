export function normalize(value) {
  return String(value)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

export function matchesQuery(query, ...parts) {
  const q = normalize(query).trim();
  if (!q) return true;
  return normalize(parts.filter(Boolean).join(' ')).includes(q);
}

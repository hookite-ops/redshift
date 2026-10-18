// 랭크전 — a rating (RP) that climbs with wins and drops with losses; the opponent gets stronger with it,
// so every match is close to your limit. Saved with the other records on this device.
export const TIERS = [
  { id: 'bronze', name: '브론즈', min: 0, color: '#b0763f' },
  { id: 'silver', name: '실버', min: 1100, color: '#9aa3ad' },
  { id: 'gold', name: '골드', min: 1250, color: '#e0a800' },
  { id: 'plat', name: '플래티넘', min: 1400, color: '#19b7a8' },
  { id: 'diamond', name: '다이아', min: 1550, color: '#4b8dff' },
  { id: 'master', name: '마스터', min: 1700, color: '#a24bff' },
  { id: 'redshift', name: '레드시프트', min: 1850, color: '#ff4f14' },
];
export function tierOf(r) { let t = TIERS[0]; for (const x of TIERS) if (r >= x.min) t = x; return t; }
export function nextTier(r) { return TIERS.find(x => x.min > r) || null; }

export function rankState(records) {
  if (!records.rank) records.rank = { r: 1000, games: 0, wins: 0, streak: 0, best: 1000 };
  return records.rank;
}

// who you face at this rating: script bots at the bottom, the learned AI from 플래티넘 up
export function opponentFor(r) {
  if (r < 1100) return { skill: 'normal', motor: 'normal', label: '보통' };
  if (r < 1250) return { skill: 'hard', motor: 'hard', label: '어려움' };
  if (r < 1400) return { skill: 'max', motor: 'max', label: '최강' };
  if (r < 1550) return { skill: 'ai', motor: 'hard', label: '학습 AI' };
  return { skill: 'ai', motor: 'max', label: r >= 1700 ? '학습 AI · 풀파워' : '학습 AI' };
}

// result of one ranked 1V1 (first to 5): returns { delta, before, after, promoted, demoted }
export function applyResult(rs, myKills, theirKills) {
  const before = rs.r, win = myKills > theirKills, margin = Math.abs(myKills - theirKills);
  let delta;
  if (win) { rs.streak = Math.max(1, rs.streak + 1); delta = 22 + margin * 4 + Math.min(4, rs.streak - 1) * 4; }
  else if (myKills === theirKills) { delta = 0; }
  else { rs.streak = Math.min(-1, rs.streak - 1); delta = -(18 + margin * 3); if (before < 1100) delta = Math.round(delta * 0.6); }
  rs.r = Math.max(0, before + delta); rs.games++; if (win) rs.wins++;
  rs.best = Math.max(rs.best, rs.r);
  const t0 = tierOf(before), t1 = tierOf(rs.r);
  return { delta, before, after: rs.r, win, promoted: t1.min > t0.min ? t1 : null, demoted: t1.min < t0.min ? t1 : null };
}

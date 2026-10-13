// One skill per loadout, on Q (or F). Bots pick theirs by personality.
export const SKILLS = {
  reflect: { id: 'reflect', name: '반사막', desc: '0.6초 동안 날아오는 원반·구체·충격파를 되받아침', cd: 7, dur: 0.6 },
  overdrive: { id: 'overdrive', name: '오버드라이브', desc: '4초간 더 빨리 달리고 대시 무한 · 원반 +25% 속도', cd: 13, dur: 4 },
  gravity: { id: 'gravity', name: '중력탄', desc: '떨어진 곳으로 적을 1.4초간 끌어당김', cd: 9, dur: 1.4 },
  heal: { id: 'heal', name: '재생', desc: '즉시 체력 +35, 2초간 추가 회복', cd: 14, dur: 2 },
};

// light, friendly chatter — bots talk a little like people in a lobby
export const CHAT = {
  start: ['ㅎㅇ', '가보자고', '잘 부탁~', '손 풀고 옴', '오늘 컨디션 좋음', '살살 해줘요'],
  kill: ['ㅋㅋ', '나이스', '잡았다', '깔끔', '이게 되네', '오케이'],
  bank: ['쿠션 봤냐ㅋㅋ', '벽 맞고 들어감', '각 나왔지'],
  slam: ['순간이동 맛 어때', '뒤에 있었지롱', '쾅'],
  death: ['아 ㅋㅋ', '인정', '와 그걸 맞히네', '다음엔 안 봐줌', '방심했다', '잘하네'],
  reflected: ['?', '반사 실화냐', '아 그거 있었지'],
  streak: ['3연속~', '막을 사람?', '오늘 좀 되는 날'],
  retreat: ['피 없다 빠짐', '잠깐만', '후퇴!'],
  win: ['gg', 'gg wp', '재밌었다'],
  lose: ['gg', 'gg 잘하시네', '한 판 더?'],
};
export const pick = arr => arr[(Math.random() * arr.length) | 0];

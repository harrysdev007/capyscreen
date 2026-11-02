// Shared subject gate for every source, suggestions, and the local library.
export const CAPY_RE = /\b(capybaras?|capys?|capibaras?|capivaras?|carpinchos?|chig[uü]iros?|chig[uü]ires?|ronsocos?|hydrochoerus|coconut dogs?)\b|капибар[а-яё]*|カピバラ|水豚/i;
export function capySearchTerms(q='',page=1) {
  const variants=['capybara','capy','capivara','carpincho','капибара','coconut dog'];
  const more=['capibara','chiguiro','chiguire','ronsoco','カピバラ','水豚'];
  if(!q.trim()) return page===1 ? variants : [...variants.slice(0,2),...more];
  const detail=q.replace(CAPY_RE,'').trim();
  return [...new Set([capyQuery(q),...variants.slice(0,3).map(s=>`${s} ${detail}`.trim())])];
}
export function isCapy(item) {
  const text = [item.title,item.description,item.body,item.text,...(item.tags || [])].filter(Boolean).join(' ');
  const community = /^(?:r\/|c\/)(?:capybara|capybaras|capybaramemes|capymemes)(?:$|@)/i.test(item.path || '');
  return community || CAPY_RE.test(text);
}
export function capyQuery(q='') { return CAPY_RE.test(q) ? q.trim() : ('capybara '+q.trim()).trim(); }
export const CAPY_SEEDS = [
  {
    "id": "capy-seed-1",
    "source": "lemmy",
    "kind": "image",
    "title": "Wholesome capybaras are friends with everyone",
    "body": "Wholesome capybaras are friends with everyone",
    "image": "assets/capy/capy-1.png",
    "thumb": "assets/capy/capy-1.png",
    "url": "https://lemmy.world/post/15072612",
    "site": "lemmy.world",
    "path": "Capy classics",
    "tags": [
      "capybara",
      "capy",
      "meme"
    ],
    "created": 0,
    "score": 0,
    "nsfw": false
  },
  {
    "id": "capy-seed-2",
    "source": "lemmy",
    "kind": "image",
    "title": "Capybara love",
    "body": "Capybara love",
    "image": "assets/capy/capy-2.jpeg",
    "thumb": "assets/capy/capy-2.jpeg",
    "url": "https://lemmy.world/post/42175412",
    "site": "lemmy.world",
    "path": "Capy classics",
    "tags": [
      "capybara",
      "capy",
      "meme"
    ],
    "created": 0,
    "score": 0,
    "nsfw": false
  },
  {
    "id": "capy-seed-3",
    "source": "lemmy",
    "kind": "image",
    "title": "Capybaras rule",
    "body": "Capybaras rule",
    "image": "assets/capy/capy-3.webp",
    "thumb": "assets/capy/capy-3.webp",
    "url": "https://lemmy.dbzer0.com/post/73447303",
    "site": "lemmy.dbzer0.com",
    "path": "Capy classics",
    "tags": [
      "capybara",
      "capy",
      "meme"
    ],
    "created": 0,
    "score": 0,
    "nsfw": false
  },
  {
    "id": "capy-seed-4",
    "source": "lemmy",
    "kind": "image",
    "title": "Capybara birthday cake rule",
    "body": "Capybara birthday cake rule",
    "image": "assets/capy/capy-4.webp",
    "thumb": "assets/capy/capy-4.webp",
    "url": "https://lemmy.dbzer0.com/post/66239842",
    "site": "lemmy.dbzer0.com",
    "path": "Capy classics",
    "tags": [
      "capybara",
      "capy",
      "meme"
    ],
    "created": 0,
    "score": 0,
    "nsfw": false
  }
];

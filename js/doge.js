// One policy shared by search, suggestions and the private collection.
export const DOGE_RE = /\b(doge(?:coin)?|cheems|kabosu|swole doge|buff doge)\b/i;
export function isDoge(item) {
  const text = [item.title, item.description, item.body, item.text, ...(item.tags || [])].filter(Boolean).join(' ');
  const character = /\b(cheems|kabosu|shiba|swole doge|buff doge|dogelore|doge memes?)\b/i.test(text);
  const community = /^(?:r\/|c\/)(?:doge|dogememes|dogelore|cheems)(?:$|@)/i.test(item.path || '');
  return character || community || DOGE_RE.test(text);
}
export function dogeQuery(q = '') {
  return DOGE_RE.test(q) ? q.trim() : `doge ${q.trim()}`.trim();
}
export const DOGE_TEMPLATES = [
  { id: 'imgflip:8072285', title: 'Doge', image: 'assets/doge/classic-doge.jpg', width: 620, height: 620, captionUrl: 'https://imgflip.com/memegenerator/8072285', tags: ['doge', 'classic', 'wow', 'reaction'] },
  { id: 'imgflip:247375501', title: 'Buff Doge vs. Cheems', image: 'assets/doge/buff-doge-cheems.png', width: 937, height: 720, captionUrl: 'https://imgflip.com/memegenerator/247375501', tags: ['doge', 'cheems', 'buff', 'comparison'] },
].map(item => ({ ...item, source: 'imgflip', kind: 'template', thumb: item.image, url: item.captionUrl, site: 'imgflip.com', path: 'Doge classics', body: 'Curated Doge meme template', score: 0, created: 0, nsfw: false }));

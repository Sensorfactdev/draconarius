module.exports = x => (Array.isArray(x) && (x.length === 0 ? true : !x.filter(el => typeof el !== 'string').length));

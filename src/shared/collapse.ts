const collapse = (stem, sep, obj) => (map, key) => {
    const prop = stem ? stem + sep + key : key;
    const value = obj[key];
    
    if(typeof value === 'function') {
        map[prop] = value;
    } else if (typeof value === 'object' && value !== null) {
        map = Object.keys(value).reduce(collapse(prop, sep, value), map);
    }
    
    return map;
}

export default collapse
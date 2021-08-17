const obj = { a: { b: { c: { d:{ e: 1}}}}}

function get(obj, properties, defaultValue) {
  properties
    .split('.')
    .forEach((key) => {
    obj = obj[key]
  })
  
  return obj!==undefined?obj:defaultValue
}

function r_get(obj, properties, defaultValue) {
  let paths = properties.split('.')
  const current = paths[0]
  paths = paths.slice(1)
  
  if(paths.length===0){
    return obj[current]
    
  } else if (obj[current]!==undefined) {
    return r_get(obj[current], paths.join('.'), defaultValue)
  
  } else {
    return defaultValue
  }
}


let result = r_get(obj, 'a.b.c.d.e', 0)
console.log(result)
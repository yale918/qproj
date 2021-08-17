const obj = {
  a:{b:{c:{d:{e:1}}}}
}

get(obj,'a.b.c.d.e')

function get(obj,property){

  
  
  return get(obj)
}






console.log(obj.a)
/*
const test = {
  a:"text"
}
console.log(test)
//console.log(JSON.parse(test))
*/


//console.log(get(obj,'a.b.c.d.e',0))
/*
let count = 0
get(obj,'a.b.c.d.e',0)

function get(obj,properties,defaultValue){
  if(!properties) {
    console.log(properties)
    return 0
  }
  let props = properties.split('.')
  let prop = props[0]
  console.log("prop: ",prop)
  console.log("props: ",props)
  //let temp = props.join('')
  //console.log("temp:",temp)
  console.log(props.length)
  if(props.length == 1){
    console.log("final: ",prop)
    return 0
  } 
  props.shift()
  //console.log(props)
  //console.log(count)
  //count++
  console.log(props)
  const target = props.join('.')
  return get(obj, target)
}


*/

/*
const arr = "abcde"
const arr1 = arr.split('')

console.log(arr1)

arr1.shift()

console.log(arr1.join('.'))
*/
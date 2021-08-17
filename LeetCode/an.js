let n = 10
let d = 1
let a1 = 1
let target = a1
let counter =1

let arr = []

for(let x=1;x<=n;x++){
	arr.push(x)
  //console.log(x)
  
  if(x===target){
    console.log(arr)
    target += counter+d
    //console.log("*****")
    counter = 0
    arr=[]
  }
  counter ++
}
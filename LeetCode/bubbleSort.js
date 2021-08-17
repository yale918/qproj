const stringReverse = (target)=>{
  console.log("******  string reverse algo. ******")
  console.log("排序前: ", target)

  let str = target.split('')
  let length = str.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {

      const flag = str[j]
      str[j] = str[j + 1]
      str[j + 1] = flag

    }
  }
  console.log("排序後: ",str.join(''))
}
stringReverse('elephant')


const bubbleSort = (arr)=>{
  console.log("******  bubble sort algo. ******")
  console.log("排序前: ",arr)
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
      if(arr[j]>arr[j+1]){
        const flag = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = flag
        //console.log(arr)
        //return
      }
    }
  }
  console.log("排序後: ",arr)
}
bubbleSort([133,5,77,22,13,6,85,54,11])


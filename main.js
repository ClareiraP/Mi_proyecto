const a=[1,2,3,8,9,10]
const arrfind=a.find((value)=> value>7)
console.log("Find",arrfind)

const auxArr=[1,2,3,4,5]
const arrFilter=auxArr.filter((value) =>{
    return value>3
})
console.log ("Filter",arrFilter)

const auxArr2=["hola","como","estas"]

auxArr2.forEach((value,index,arr)=> console.log(value,index,arr))


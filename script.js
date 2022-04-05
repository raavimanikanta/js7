var  array=[1,2,3,4,5]
var  NewArray=array.filter((result)=>
    result>1
)
console.log(NewArray)

// Output:[2,3,4,5]

var ArrayReduce=[20,30,40,50]
var ArrayReduce1=ArrayReduce.reduce((acc,curr)=>
          acc+curr 
,10);
console.log(ArrayReduce1)


var arraySome=[1,2,3,4,5]
var ArraySome1=arraySome.some(result=>result>1)
console.log(ArraySome1)

var arraySome=[1,2,3,4,5]
var ArraySome1=arraySome.every(result=>result>1)
console.log(ArraySome1)


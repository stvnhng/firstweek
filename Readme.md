var i = 0
while (i < 10 )
{console.log(i)
i++}

for (var a = 10; a > 0; a-=2){
  console.log(a)
}

mergeArray([1, 2, 3], [2, 30, 1])

function mergeArray (a,b){
  b.forEach(function(element){
    if (a.includes (element) == false){
    a.push(element) }
  }
)
console.log(a)
}

mergeArray([1, 2, 3], [2, 30, 1])



//Pre-fill
var array1 = []
function fillarray(a,b){
array1 = Array(a).fill(b)
console.log(array1)
}
fillarray(6,0)

//cleanfunction

var arrayblah = []
function cleanfunction(aa){
  //aa is place holder (parameter)
 aa.forEach(function(element){
   //you can only use forEach on the aa array. element in a forEach is each item in the array at a time.
   if (element == null){
   }
    else if (element == 0 ){
    }
    else {
    arrayblah.push(element)
    }
  })
  return arrayblah
 }
cleanfunction([58, '', 'abcd', true, null, false, 0])

//SumTarget
var array = [25,25,10]//[10,20,10,40,50,60,70]
var numPairs = []
function findPair( sum , numberArray ){
  //make an array to store our indices
  //take first element in number array
  numberArray.forEach(function(element, index){
    //multiply that number by each number in the array, start at index + 1 to avoid self counting
    for ( i = index + 1; i < numberArray.length; i++){
      //if sum of pair is requested sum
      if (element + numberArray[i] == sum ){
        //put the pair of indices into our numPair array
        numPairs.push([index, i])
        //show array within loop
      }
    }
  })
}
findPair(50, array)
console.log(numPairs)


var array = [10,20,10,40,50,60,70]
var numPairs = []
function findPair( sum , numberArray ){
  //make an array to store our indices
  //take first element in number array
  numberArray.forEach(function(element1, index1){
    //multiply that number by each number in the array
    numberArray.forEach(function(element2, index2){
      //if sum of pair is requested sum
      if (element1 + element2 == sum ){
        //put the pair of indices into our numPair array
        numPairs.push([index1, index2])
        //show array within loop
      }
    })
  })
}
findPair(50, array)
console.log(numPairs)
// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

//write a function with one array as the argument
// Each object has its own two properties
// us find() to test if the result=W
//return year when the win occured if at all-- if not undefined

function superbowlWin(array) {

  let x = array.find(obj => {
      return obj.result === "W"
  })

  if(x){
      return x.year
  }
}

//
// record.find(superbowlWin)


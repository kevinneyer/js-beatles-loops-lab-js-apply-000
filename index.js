// add solution here
function theBeatlesPlay(){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var empty = []
  
   for ( let i=0; i<4; i++){empty.push(`${musicians[i]} plays ${instruments[i]}`)}
   return empty
}

var facts =[ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
  
var lenFacts= ["He was the last Beatle to learn to drive!!!",
  "He was never a vegetarian!!!",
  "He was a choir boy and boy scout!!!",
  "He hated the sound of his own voice!!!"]


function johnLennonFacts(facts){
  while(facts.length < 4){return lenFacts}
  
}

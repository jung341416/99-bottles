
function bottleSong(num) {
  // Write your code here!\
  let lyrics = "";
  for (let i = num; i >= 0; i--) { 
    if (i > 2) {
    lyrics = `${i} bottles of beer on the Wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.`;
    } else if (i === 2){
    lyrics = `${i} bottles of beer on the Wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottle of beer on the wall.`;
    } else if (i === 1) {
    lyrics =  `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.`;
    } else {
    lyrics = `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
    console.log(lyrics);
  
};
}

bottleSong(10);

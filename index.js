 class WordSearch {
   constructor(letterGrid) {
     this.letterGrid = letterGrid;
   }

   find(words) {
     // TO-DO: Implement searching for specific words in the letterGrid
     const grid = this.letterGrid;
     const gridLength = grid[0].length
     const gridHeight = grid.length
     let line = '';
     for (let i = 0; i < gridLength; i++) {
       line += grid[i]
     }
     let start = 0;
     let end = 0;
     console.log(line);
     let x = line.indexOf('a', 0)
     let y = line.indexOf('a', 10)
     console.log(x);
     console.log(y);
     words.forEach(word => {
       let stop = false;

       while (stop == false) {
         for (let i = 0; i < word.length; i++) {

         }

         stop = true;
       }

     });

   }
 }
 new WordSearch(['sodso', 'sldsa', 'sadfr', 'fresj', 'rudsp']).find(['ad']);

function printDiamond(n) {
    console.log("Printing Diamond");
    for (let i = 1; i <= n; i++) {
        let str = "#";
        let space = " ";
        console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
    }
    for (let i = n; i >= 1; i--) {
        let str = "#";
        let space = " ";
        console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
    }
}
printDiamond(5);



function makeLine(size) {
    //console.log("Printing Line");
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  console.log(makeLine(5));



  
function makeSquare(size) {
    console.log("Printing Square");
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size) + '\n';
    }
    return square.slice(0, -1);
}
console.log(makeSquare(5));



  
function makeRectangle(width, height) {
    console.log("Printing Rectangle");
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));


function makeDownwardStairs(height) {
    console.log("Printing Downstairs");
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));


  function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }
    for (let i = 0; i < numChars; i++) {
        spaceLine += "#";
    }
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }
    return spaceLine;
}
console.log(makeSpaceLine(3, 5));



function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
console.log(makeIsoscelesTriangle(5));
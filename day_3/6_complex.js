// complexity
// data simple
let name = "Jacob";

// one dimensional array
let fullName = ["Jacob", "Tran"];

// multi-dimensional Array

// two dimensional Array
//[ [] ]; // list of lists
let tictactoe = [];

//
// _|_|_
// _|_|_
//  | |

// first row
// _|_|_

let row = [null, null, null];
// let row = ["X", "O", "X"];

let row1 = [null, null, null];
let row2 = [null, null, null];
let row3 = [null, null, null];

let tictactoe = [
  row1,
  row2,
  row3
];

// [ [] ]

let tictactoe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// 2 indexes
// tictactoe[row][col]; // the entire first row
tictactoe[1][1] = "X"; // the entire first row
tictactoe[0][0] = "O";
tictactoe[0][2] = "X";
tictactoe[2][0] = "O";
tictactoe[1][0] = "X";
tictactoe[1][2] = "O";
tictactoe[2][1] = "X";
tictactoe[0][1] = "O";
tictactoe[2][2] = "X";


// row1[];

// [
//   ["O", "O", "X"],
//   ["X", "X", "O"],
//   ["O", "X", "X"]
// ];

// tictactoe[1] == row 2
// row2[1] == column 2

// three dimensions
// [ [ [] ] ]

// rubix cube
// has 6 sides
//    _
//  _|_|_
// |_|_|_|
//   |_|
//   |_|

// each side has a 3x3 grid
// _|_|_
// _|_|_
//  | |

let rubixCube = [];

let side1 = [];
let side2 = [];
let side3 = [];
let side4 = [];
let side5 = [];
let side6 = [];

let row1 = [];
let row2 = [];
let row3 = [];

rubixCube[side][row][col] = "blue";

// fourth dimension???
// [ [ [ [] ] ] ]
// time, state, timestamp, history








//

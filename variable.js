// const(再代入できない変数を宣言) 変数名 = 初期値;
const bookA = "JavaScript Primer",
      bookCategory = "プログラミング";

// let(再代入可能な変数を宣言、また初期値を指定しない変数も定義可能)
let bookB = "JavaScript Primer";
let bookC;
// 初期値未設定は自動的に`undefined`という値になる
bookB = "JavaScript Primer";

let count = 0;
count = 1;
count = 2;
count = 3;

// var 値の再代入が可能な変数
var bookD = "JavaScript Primer";

var bookE;
bookE = "JavaScript Primer";
bookE = "新しいタイトル";

/*
letと違い、varは同じ名前の変数を再定義できてしまう。
これは意図せずに同じ変数名で定義してもエラーとならずに、値を上書きしてしまう。
一方、letやcountは同じ名前の変数を再定義しようとすると、構文エラー（SyntaxError）が発生。
そのため、間違えて変数を二重に定義してしまうというミスを防ぐことができる。
*/
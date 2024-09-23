/*
演算子
演算子の対象のことを被演算子（オペランド）という。

二項演算子とオペランドの関係
左オペランド 演算子 右オペランド
*/
1 + 2;

// 1つのオペランドを取る演算子を単項演算子という
let num = 1;
num++;
++num;

// プラス演算子
console.log(1 + 1);
console.log(10 + 0.5);

// 文字列結合演算子
const value = "文字列" + "結合";
console.log(value);

// マイナス演算子
console.log(1 - 1);
console.log(10 - 0.5);

// 乗算演算子
console.log(2 * 8);
console.log(10 * 0.5);

// 徐算演算子、ただし任意の数値を0で除算した結果はInfinityになる
console.log(8 / 2);
console.log(10 / 0.5);
console.log(10 / 0);

// 剰余演算子
console.log(8 % 2);
console.log(9 % 2);
console.log(10 % 0.5);
console.log(10 % 4.5);

// べき乗演算子、Math.powメソッドも同様の結果を出す
console.log(2 ** 4);
console.log(Math.pow(2, 4));

//　単項演算子、1つのオペランドを受け取り処理する演算子
console.log(+1)
console.log(+"1")
// 数値でない文字列はNaN(Not-a-Number)、Number.isNaNメソッドを使うことでNaNの判定も可能
console.log(+"文字列")
// console.log(NaN === NaN);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));

console.log(-1)
console.log(-(-1));
console.log(-"1");
console.log(-"文字列");

// インクリメント演算子、オペランドの数値を+1する演算子
let num1 = 1;
num1++;
console.log(num1);
/* 
インクリメント演算子は配置場所で評価の順番が変化
後置インクリメント演算子（num++）
1.numの評価結果を返す
2.numに対して+1する

前置インクリメント演算子(++num)
1.numに対して+1する
2.numの評価結果を返す
*/
let x = 1;
console.log(x++);
console.log(x);

console.log(++x);
console.log(x);

// デクリメント演算子、
num--;
console.log(num);
// 後置デクリメント演算子
console.log(x--);
console.log(x);
// 前置デクリメント演算子
let y = 1;
console.log(--y);
console.log(y);

// 比較演算子

// 暗黙的な型変換と明示的な型変換
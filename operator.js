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
/*
厳密等価演算子
左右の2つのオペランドを比較
空のオブジェクトリテラル({})同士を比較すると、オブジェクトリテラルは新しいオブジェクトを作成する。
そのため、異なるオブジェクトを参照する変数を===で比較するとfalseを返す。
*/
console.log(1 === 1);
console.log(1 === "1");

const objA = {};
const objB = {};
console.log(objA === objB);
console.log(objA === objA);

// 厳密不等化演算子
console.log(1 !== 1);
console.log(1 !== "1");

/*
等価演算子
2つのオペランドを比較する。同じデータ型なら厳密等価演算子と同じ結果になる。
オペランド同士が異なる型の値であった場合は、 同じ型となるように暗黙的な型変換をしてから比較する。
暗黙的な型変換が行われる等価演算子の使用は避けるべき。
代わりに、厳密等価演算子を使い、異なる型を比較したい場合は明示的に型を合わせるべき。
*/
console.log(1 == "1");
console.log(1 == "01");
// 真偽値を数値に変換してから比較
console.log(0 == false);
// nullの比較はfalseを返す
console.log(0 == null);
// nullとundefinedの比較は常にtrueを返す
console.log(null == undefined);

// 要復習
const operand = undefined; /* または null */
// === では2つの値と比較しないといけない
if (operand === null || operand === undefined) {
    console.log("valueがnullまたはundefinedである場合の処理");
}
// == では null と比較するだけでよい
if (operand == null) {
    console.log("valueがnullまたはundefinedである場合の処理");
}

// 不等価演算子
console.log(1 != 1);
console.log("str" != "str");
console.log("JavaScript" != "ECMAScript");
console.log(true != true);
// オブジェクトは参照が一致していないならtrueを返す
console.log(objA != objB);
console.log(objA != objA);
console.log(1 != "1");
console.log(0 != false);
console.log(0 != null);
console.log(null != undefined);



// 暗黙的な型変換と明示的な型変換
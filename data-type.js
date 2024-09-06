/*
プリミティブ型（基本型）
  真偽値（Boolean）: trueまたはfalseのデータ型
  数値（Number）: 42 や 3.14159 などの数値のデータ型
  巨大な整数（BigInt）: ES2020から追加された9007199254740992nなどの任意精度の整数のデータ型
  文字列（String）: "JavaScript" などの文字列のデータ型
  undefined: 値が未定義であることを意味するデータ型
  null: 値が存在しないことを意味するデータ型
  シンボル（Symbol）: ES2015から追加された一意で不変な値のデータ型

オブジェクト（複合型）
  プリミティブ型以外のデータ
  オブジェクト、配列、関数、クラス、正規表現、Dateなど
*/

// typeofでデータ型を調べることができる
console.log(typeof 11);
console.log(typeof 1234567890123456n);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof { "key": "value" });
console.log(typeof function() {});

/*
下記のものはリテラル表現（数値や文字列を直接に記述した定数）がある
真偽値
数値
BigInt
文字列
null
オブジェクト
配列
正規表現
*/

true;
false;

// 2.8.10.16進数が整数リテラルで使用可能
// 0bから始まる2進数
console.log(0b1111);
console.log(905);
// 0oから始まる8進数
console.log(0o777);
// 0xから始まる16進数
console.log(0x30A2);

// 浮動小数点数
console.log(.123);
// e 指数(exponent) この場合2×10の8乗、10進数で表すと200000000
console.log(2e8);

/*
BigInt
倍精度浮動小数 最大値は2^53-1（2の53乗から1引いた値9007199254740991）
BigInt この数値リテラルで安全に表せる最大の数値はNumber.MAX_SAFE_INTEGERとして定義
数値リテラルは倍精度浮動小数（64ビット）で数値を扱うのに対して、BigIntでは任意の精度の整数を扱える。
そのため、BigIntでは2^53-1（9007199254740991）よりも大きな整数を正しく表現可能。
BigIntリテラルは、数値の後ろにnをつける。
*/
console.log(Number.MAX_SAFE_INTEGER);
console.log(1n);
console.log(9007199254740992n);

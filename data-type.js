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

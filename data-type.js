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

/*
Numeric Separators
桁が大きくなると読み間違えが発生する可能性がある。
そのため数値リテラル内の区切り文字として_を追加できる。
数値リテラルである整数、浮動小数点、BigIntのリテラル内でのみ利用可能。
*/
console.log(1_000_000_000_000);

// String 同じ記号で囲んだ内容を文字列として扱う。
console.log("文字列");
console.log('文字列');
console.log(`文字列`);

// 文字列の中に同じ記号が出現した場合は、 \'のように\（バックスラッシュ）を使ってエスケープする必要。
console.log('8 o\'clock');
console.log("8 o'clock");

// 改行はエラーが発生する。改行記号のエスケープシーケンス（\n）を使うことで複数行の文字列を書くことができる。
console.log("複数行の\n文字列を\n入れたい");

// バッククウォート(`)で囲むと改行した文字列も表示できる。
console.log(`複数行の
文字列を
入れたい`);

// 変数値の入れ込みも可能
const str = "文字列";
console.log(`これは${str}です`);
console.log(`This is \`code\``);

/* undefinedはリテラルではなく、グローバル変数で、undefinedという値を持っているだけ
undefinedはただのグローバル変数であるため、同じundefinedという名前のローカル変数を宣言できる。
参照 https://jsprimer.net/basic/data-type/

function fn(){
    const undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
    console.log(undefined); // => "独自の未定義値"}
fn();
*/

// nullリテラル 「値がない」ということを表現する値
const foo = null;
console.log(foo);

/*
オブジェクトリテラル {}の中にオブジェクトを作成する。
オブジェクトの作成と同時に中身を定義が可能。
オブジェクトのキーと値を:で区切って、作成と初期化が同時に行える。
またオブジェクトのプロパティ名を.（ドット）でつないで参照する方法と、 []（ブラケット）で参照する方法がある。
ただし、ドット記法ではプロパティ名が変数名と同じく識別子である必要がある。
*/
const obj = {
    "key": "value"
};

// ブラケット記法
console.log(obj["key"]);

// ドット記法
console.log(obj.key);

// 下記のように"123"はプロパティ名が識別子ではないので、ドット記法は使えない
const object = {
    "123": "value"
};
console.log(object["123"]);

// 配列リテラル
const emptyArray = [];
const number = [1, 2, 3];
const array = ["index:0", "index:1", "index:2"];
console.log(array[0]);
console.log(array[1]);

// 正規表現リテラル /（スラッシュ）と/（スラッシュ）で正規表現のパターン文字列を囲む
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
console.log(numberRegExp.test("123"));

/*
プリミティブ型とオブジェクト
基本的にリテラルで表現するが、Boolean、Number、Stringはそれぞれオブジェクトとして表現する方法もある。（ラッパーオブジェクト）
勉強中、また追記する。
*/

// 出力がconsole.log()じゃないとできない理由を調べる



// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
//let x  = document.querySelector('p#result');

let n = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let dd = document.querySelector('button#blue');
dd.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
let A = document.querySelector('input[name="shimei"]')
let yoso = A.value;
let B  = document.querySelector('span#kaisu');
B.textContent = kaisu+'回目の予想:';
let C = document.querySelector('span#answer');
C.textContent = yoso;



  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  if (kaisu < 5){
    let A = document.querySelector('span#kaisu');
    A.textContent = kaisu+'回目の予想:';
  if (yoso == kotae){
    let cc = document.querySelector('p#result');
    cc.textContent="正解ですおめでとう！";
  }else if (yoso < kotae){
    let cc = document.querySelector('p#result');
    cc.textContent="間違え答えはもっと大きいですよ";
  }else {
    let cc = document.querySelector('p#result');
    cc.textContent="間違え答えはもっと小さいですよ";
  }
  kaisu = kaisu + 1;
} else{
  let cc = document.querySelector('p#result');
  cc.textContent = ("答えは" + kotae + "でした。すでにゲームは終わっています。");
    kaisu = kaisu + 1;
}


  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
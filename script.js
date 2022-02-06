// ペーストボタン
const btn_paste = document.querySelector('#js-paste');
// ペースト対象となるテキストエリア
const paste_target = document.querySelector('#target');

btn_paste.addEventListener('click', () => {
  const result = pasteText((text) => {
    paste_target.value = text;
    location.href = "https://www.tiktok.com/@" + text
  });
});

const pasteText = (callback) => {
  // 閲覧しているブラウザが「navigator.clipboard」に
  // 対応しているか確認
  if(navigator.clipboard){
    // クリップボードにあるテキストを読み込み
    navigator.clipboard.readText().then((text) => {
      // 読み込んだテキストを操作
      callback(text);
    });
    return true;
  } else {
    return false;
  }
}
// https://www.tiktok.com/@

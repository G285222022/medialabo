//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let p4 = document.querySelector('h2#ex42');
let p5 = document.createElement('p')
p5.textContent = '写真表と緯度経度のページです'
p5.style.textEmphasis = 'sesame green'
p4.insertAdjacentElement('afterend', p5);
// 練習4-3 写真表作成プログラム
let img = document.createElement('img');
img.setAttribute('src', 'taro.png');
let p = document.createElement('p');
p.insertAdjacentElement('beforeend', img);
let div = document.querySelector('div#phototable');
div.insertAdjacentElement('beforeend',p);
img = document.createElement('img');
img.setAttribute('src', 'jiro.png');
p = document.createElement('p');
p.insertAdjacentElement('beforeend', img);
div = document.querySelector('div#phototable');
div.insertAdjacentElement('beforeend',p);
img = document.createElement('img');
img.setAttribute('src', 'hanako.png');
p = document.createElement('p');
p.insertAdjacentElement('beforeend', img);
div = document.querySelector('div#phototable');
div.insertAdjacentElement('beforeend',p);
// 練習4-4 箇条書き削除プログラム
p2 = document.querySelectorAll('ul#location > li');
p2[0].remove();
p2[1].remove();
p2[2].remove();
// 練習4-5 箇条書き追加プログラム
let p3 = document.querySelector('ul#location');
let n4 = [{},{},{},{},{},{},{},{},{},{}];
for(let n = 0;n<n4.length;n++){   
    n4[n] = document.createElement('li');
    n4[n].textContent = data[n].name +'... 緯度：' +data[n].lat + ',経度' + data[n].lng;   
    p3.insertAdjacentElement('beforeend',n4[n]);
}
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.weather[0].description);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.name);



let a = document.querySelector('#btn');
  a.addEventListener('click',sendRequest);
  
  function sendRequest(){
    let s = document.querySelector('select#kunimei');
    let idx = s.selectedIndex;  
  
    let os = s.querySelectorAll('option');  
    let o = os.item(idx);       
    let id = o.getAttribute('id');
    let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
  
    axios.get(url)
          .then(showResult)   
          .catch(showError)   
          .then(finish);      
  }
  
  function showResult(resp) {
    let data = resp.data;
  
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    console.log(data);
    console.log(data.x);
  
    let toshi =document.querySelector('caption.toshi');
    toshi.textContent = data.name;
    let lat =document.querySelector('td.lat');
    lat.textContent = data.coord.lat;
    let lon = document.querySelector('td.lon');
    lon.textContent = data.coord.lon;
    let weather = document.querySelector('td.weather');
    weather.textContent = data.weather[0].description;
    let temp_min = document.querySelector('td.temp_min');
    temp_min.textContent = data.main.temp_min;
    let temp_max = document.querySelector('td.temp_max');
    temp_max.textContent = data.main.temp_max;
    let humidity = document.querySelector('td.humidity');
    humidity.textContent = data.main.humidity;
    let speed = document.querySelector('td.speed');
    speed.textContent = data.wind.speed;
    let deg = document.querySelector('td.deg');
    deg.textContent = data.wind.deg;
  }
  
  function showError(err) {
    console.log(err);
  }
  
  function finish() {
    console.log('Ajax 通信が終わりました');
  }
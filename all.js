function sendData() {
  var data = {
    "name": "John Doe",
    "email": "johndoe@example.com"
  };

  // 發送 JSON 資料至 Google Apps Script
  axios.post('https://script.google.com/macros/s/AKfycbx0Bg2xOC62txEsOElc9Vcntx9fV9b4XraGRfdWAieP1FrdGgX_uC04kUXW4xJWkFv5/exec', data)
    .then(function (response) {
      console.log('Data sent successfully');
      // 在此可以處理成功傳送後的動作
    })
    .catch(function (error) {
      console.error('Error sending data:', error);
      // 在此可以處理錯誤的情況
    });
}
function sendData() {
  var data = {
    "name": "John Doe",
    "email": "johndoe@example.com"
  };

  // 發送 JSON 資料至 Google Apps Script
  axios.post('https://script.google.com/macros/s/AKfycbxzAAWt_K4sWg04B9f-3JYUB6peLXORcoUn7y6v9Ifo4Up15DyGurLL0Fn6V_KJEmO-Vg/exec', data)
    .then(function (response) {
      console.log('Data sent successfully');
      // 在此可以處理成功傳送後的動作
    })
    .catch(function (error) {
      console.error('Error sending data:', error);
      // 在此可以處理錯誤的情況
    });
}
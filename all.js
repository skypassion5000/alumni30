$(document).ready(function() {
  $('#data-form').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    
    // AJAX 請求傳送資料至 Google Apps Script
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycby5pBj7mw-am0P8QNQOY2LCyWMAJNH8jxngpDpMR7o-puMRnrR1VTdLAM1opsTNNw42Bw/exec', // 填入你的 Google Apps Script 網址
      method: 'GET',
      data: formData,
      success: function(response) {
        console.log('Data sent successfully');
        // 在此可以處理成功傳送後的動作
      },
      error: function(error) {
        console.error('Error sending data:', error);
        // 在此可以處理錯誤的情況
      }
    });
  });
});
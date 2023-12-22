$(document).ready(function() {
  $('#data-form').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData,"formData");
    
    // AJAX 請求傳送資料至 Google Apps Script
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycby5pBj7mw-am0P8QNQOY2LCyWMAJNH8jxngpDpMR7o-puMRnrR1VTdLAM1opsTNNw42Bw/exec', // 填入你的 Google Apps Script 網址
      method: 'GET',
      data: formData,
      success: function(response) {
        console.log('Data sent successfully');
        // 在此可以處理成功傳送後的動作
        redirectToPaymentPage();
      },
      error: function(error) {
        console.error('Error sending data:', error);
        // 在此可以處理錯誤的情況
      }
    });
  });
});
function redirectToPaymentPage() {
  var htm = `
      <form id="registerForm2" accept-charset="ISO-8859-1" action ="https://payment.nsysu.edu.tw/rcvserv/rcv.asp" method="post">
        <input type="hidden" name="paytype" value="3361">
        <input type="hidden" name="uname" value="姓名test">
        <input type="hidden" name="email" value="test@gmail.com">
        <input type="hidden" name="uid" value="33612024002"> 
        <input type="hidden" name="amount" value=12000>
        <input type="hidden" name="TRPayType" value="2">
        <input type="hidden" name="reg_failpage" value="https://payment.nsysu.edu.tw/olprs/reg_failpage.asp">
        <input type="hidden" name="atm_succpage"
        value="https://payment.nsysu.edu.tw/olprs/atm_succpage.asp">
        <input type="hidden" name="atm_failpage"
        value="https://payment.nsysu.edu.tw/olprs/atm_failpage.asp">
        <script type="text/javascript">
          document.getElementById("registerForm2").submit();
        </script>
      </form>
    `
  $("body").append(htm);
}
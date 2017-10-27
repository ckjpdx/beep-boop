function beepBoop(userNum){
  var noGood = "That's not a good number, Jerry!";
  if (userNum >= 0) {
    String(userNum);
    var regexOne = /1/g;
    var regexZero = /0/g;
    if (regexOne.test(userNum)) {
      return "Boop!";
    }
  }
  return noGood;
};

$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var userNum = $('#user-input').val();
    var userResult = beepBoop(userNum);
    $('#display-div').text(userResult);
  });
});

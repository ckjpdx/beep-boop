function beepBoop(userNum){
  var results;
  if (userNum < 0) {
    results = "That's not a good number, Jerry!";
  } else if (userNum >= 0) {
    results = userNum;
  }
  return results;
};

$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var userNum = $('#user-input').val();
    var userResult = beepBoop(userNum);
    $('#display-div').text(userResult);
  });
});

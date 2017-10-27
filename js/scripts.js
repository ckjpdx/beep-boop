function beepBoop(userNum){
  var noGood = "That's not a good number, Jim!";
  if (userNum > 0) {
    var returnArray = [];
    var regexOne = /1/g;
    var regexZero = /0/g;
    for (var i = 0; i < userNum; i++) {
      var iString = String(i); // get string version of i for regex tests
      if (!(i % 3)) {
        returnArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (regexOne.test(iString)) {
        returnArray.push("Boop!");
      } else if (regexZero.test(iString)) {
        returnArray.push("Beep!");
      } else {
        returnArray.push(i);
      }
    } // end for loop
    return returnArray;
  } // end if number
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

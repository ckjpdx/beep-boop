function beepBoop(userNum){
  if (userNum >= 1) {
    var returnArray = [];
    var regexOne = /1/g;
    var regexZero = /0/g;
    for (var i = 1; i <= userNum; i++) {
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
    // returnArray = returnArray.join(" ");
    return returnArray;
  } // end if number
  return false;
};

$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    $('#display-ul').empty();
    var userNum = $('#user-input').val();
    if (!(beepBoop(userNum))) {
      $('#display-ul').text("He's dead, Jim.");
    } else {
      beepBoop(userNum).forEach(function(each) {
        $('#display-ul').append('<li>' + each + '</li>');
      }); // end for each
    } // end if false / else
  }); // end form submit
}); // end doc ready

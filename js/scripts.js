function beepBoop(userNum){
  var noGood = "That's not a good number, Jim!";
  if (userNum >= 0) {
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
    console.log(returnArray);
    return returnArray;
  } // end if number
  return noGood;
};

$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var userNum = $('#user-input').val();
    var returnArray = beepBoop(userNum);
    console.log(returnArray);
    returnArray.forEach(function(each) {
      $('#display-ul').append('<li>' + each + '</li>');
    }); // end for each
  }); // end form submit
}); // end doc ready

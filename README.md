# Beep-Boop
_by Chris Johnson_  
This exam project demonstrates usage of arrays and loops.
## Install
### Git instructions:
1. Open Git/Git-Bash
2. Clone project from https://github.com/noodlebrains/beep-boop.git
3. Open up project:
    * Navigate console to directory and open with editor
    * Navigate to folder in OS GUI and open index.html
## Specs
The program will check to see if the user has inputted a number of at least 1. If not, the backend logic will return false and a message will appear saying "He's dead, Jim." Otherwise, the backend logic will continue if the input is a number of at least 1 and generate a count from 1 to the number given. If the current count increment is divisible by 3 the backend logic will return a string (ie "I'm sorry, Dave...") instead of that number. If the current count contains a 1 in its composition the backend logic will return the string "Boop!". Likewise, if the current count has a 0 in it, it will return "Beep!". The process ends when the user's number is reached, at which point the results are displayed.
### Examples of Input / Output:
> User inputs anything other than a number that's greater or equal to 1 --> display "He's dead, Jim."
---
> Counter reaches a number divisible by 3  --> replace number with string "I'm sorry, Dave. I'm afraid I can't do that."
---
> Counter reaches a number containing: 1 --> replace number with string "Boop!"
---
> Counter reaches a number containing: 0 --> replace number with string "Beep!"
---
> Counter reaches a number that doesn't meet any of the other specs --> display the number.
---
> 3 --> "Boop!", "2", "I'm sorry, Dave..."
### Contact
[Chris Johnson aka noodlebrains](https://github.com/noodlebrains)
### License
This project is open source

# part-of-speech-application

# Description
 - interactive activity using React.js, node.js, and Express.js that helps the students practice categorizing a set of words according to their part of speech
 
 # Installation (for client and server)
 ```node
 npm i
 npm start
 ```

# Usage
*ClinetSide
 - first you start with the landing page to start your test
 - after clicking start you will redirected to questionnaire page , you choose an answer then an indicator appeares if right or wrong
 - every question need to click next button to navigate to next one 
 - after finishig 10 questions a button to show score and rank appeares instead of next button
 - when displaying your result there is an option to take the quiz again
 *ServerSide
  - end point to handle request from clint side to responde with words of questionnaire
  - function to randomize words
  - end point receives the score and responses with rank

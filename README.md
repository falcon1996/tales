
## Application is hosted [Here](https://wordsort.herokuapp.com/)
* ## Heroku applications sleep whenever there is no oncoming traffic for about 30 minutes, therefore user might have to refresh the application a couple of times if the application does not work in the first attempt.


* [App](https://github.com/falcon1996/tales/blob/master/words-app/src/App.js) component is loaded first, which sends an API call to a backend route, which provides it with the file content using the callback.

* It further splits this file and calculates the occurrence of each word in linear time complexity.

* [ [key, freqMap[key]] , .. ] DS is created and is further sorted for all the occurring words in descending order of frequency.

* This DS is stored in a component state and is further passed as a prop to [Data](https://github.com/falcon1996/tales/blob/master/words-app/src/Input.js) component.

* It accepts the user input number and slices the incoming array as a prop accordingly. It further displays the word and its frequency in a tabular form utilizing react-bootstrap.

* On entering a value and pressing submit, a request is sent to the Node-Express backend.

* In the backend [server.js](https://github.com/falcon1996/tales/blob/master/server.js), fetches the file hosted at [TTT](http://terriblytinytales.com/test.txt) and utilizing CORS sends it back as a response field.

* Libraries and plugins used: isomorphic-fetch, react, react-bootstrap, express, body-parser, cors.


* #### Testing of count and sort functionality: 

*  ![Test image 1](https://github.com/falcon1996/tales/blob/master/test/test.PNG) 
*  ![Test image 2](https://github.com/falcon1996/tales/blob/master/test/1.PNG) 
*  ![Test image 3](https://github.com/falcon1996/tales/blob/master/test/2.PNG) 
*  ![Test image 4](https://github.com/falcon1996/tales/blob/master/test/3.PNG) 
*  ![Test image 5](https://github.com/falcon1996/tales/blob/master/test/4.PNG) 
*  ![Test image 5](https://github.com/falcon1996/tales/blob/master/test/5.PNG)  *For empty string or file with no sentences*

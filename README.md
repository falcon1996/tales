
* [App](https://github.com/falcon1996/tales/blob/master/words-app/src/App.js) component is loaded first, which sends an API call to a backend route, which provides it with the file content using the callback.

* It furthur splits this file and calculates the occurance of each word in linear time complexity.

* [ [key, freqMap[key]] , .. ] DS is created and is furthur sorted for all the occuring words in descending order of frequency.

* This DS is stored in a component state and is furthur passed as a prop to [Data](https://github.com/falcon1996/tales/blob/master/words-app/src/Input.js) component.

* It accepts the user input number and slices the incoming array as a prop accordingly. It furthur displays the word and it's frequency in a tabular form utilizing react-bootstrap.

* On entering a value and pressing submit, a request is sent to the Node-Express backend.

* In the backend [server.js](https://github.com/falcon1996/tales/blob/master/server.js), fetchs the file hosted at [TTT](http://terriblytinytales.com/test.txt) and utilizing CORS sends it back as a response field.

* Libraries and plugins used: isomorphic-fetch, react, react-bootstrap, express, body-parser, cors.


### Application is hosted [Here](https://wordsort.herokuapp.com/)
* #### Heroku applications sleep whenever there is no incoming traffic for about 30 minutes, therefore user might have to refresh the application a couple of times, if the application does not work in the first attempt.
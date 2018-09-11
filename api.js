//API Keys and the API URLS
const rootUrl = 'https://api.imgur.com/3/image'
const clarifaiURL = 'https://api.clarifai.com'
const apiKey = 'cba079ce0cb8d4c'
const clariKey = 'a42c67e74eeb4b2abe5d356d829356cd'
const giphyKey = 'dMMkmIojDZHrAyvm4S5R6sZUgj8IfA6X'
const giphyURL = "https://api.giphy.com/v1/gifs/translate?api_key=dMMkmIojDZHrAyvm4S5R6sZUgj8IfA6X&s="

const Clarifai = require('clarifai');
//Create new Clarifai App to call the API Clarifai
const appClarifai = new Clarifai.App({
 apiKey: clariKey
});
process.nextTick = setImmediate;

//API Call to Imgur
export const callAPI = {
    //Parameter is a base64 from Picture
    post (base64) {
      //Make Form Data to send to API
      let formdata = new FormData();
      formdata.append("image", base64)
      formdata.append("type", 'base64')
      //Call API and Fetch answer into response.json and return it
      return fetch(rootUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Client-ID ' + apiKey,
        },
        contentType: 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        body: formdata
      })
      //Return Json with response
      .then((response) => {
        return response.json()
      })
    },
    //API Call to delete Image on Imgur
    delete (deletehash) {
      return fetch(rootUrl+"{{"+deletehash+"}}", {
        headers: {
          'Authorization': 'Client-ID ' + apiKey,
        },
      })
    }
}

//API Call to Clarifai to regnozie Picture
export const clarifaiCall = {
  //Needs Imgur URL as Parameter
  call (imageUrl) {
    //Call API
    return appClarifai.models.predict(Clarifai.GENERAL_MODEL, imageUrl).then(
    //Choose the first three words and add them to Array
    function(response) {
      let result = response.outputs[0].data.concepts
      //Amount of Words
      let numberOfWords = 3
      let words = []
      for (let i = 0; i < numberOfWords; i++ ) {
        words.push(result[i].name)
      }
      //Return Words 
      return words
    },
    function(err) {
      console.log(err)
    }
  )
  }
}
//API to call GIF
export const getGIF = {
  //needs the three words as parameter
  call (words) {
    return fetch(giphyURL+words.join('+'), {
      method: 'GET'
    }).then((response) => {
      return response.json()
    })
  }
}
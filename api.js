const rootUrl = 'https://api.imgur.com/3/image'
const clarifaiURL = 'https://api.clarifai.com'
const apiKey = 'cba079ce0cb8d4c'
const clariKey = 'a42c67e74eeb4b2abe5d356d829356cd'
const giphyKey = 'dMMkmIojDZHrAyvm4S5R6sZUgj8IfA6X'
const giphyURL = "https://api.giphy.com/v1/gifs/translate?api_key=dMMkmIojDZHrAyvm4S5R6sZUgj8IfA6X&s="

const Clarifai = require('clarifai');

const appClarifai = new Clarifai.App({
 apiKey: clariKey
});
process.nextTick = setImmediate;


export const callAPI = {
    post (base64) {
      //Make form Data to send to API
      let formdata = new FormData();
      formdata.append("image", base64)
      formdata.append("type", 'base64')

      return fetch(rootUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Client-ID ' + apiKey,
        },
        contentType: 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        body: formdata
      })
      .then((response) => {
        return response.json()
      })
    },
    delete (deletehash) {
      return fetch(rootUrl+"{{"+deletehash+"}}", {
        headers: {
          'Authorization': 'Client-ID ' + apiKey,
        },
      })
    }
}

export const clarifaiCall = {
  call (imageUrl) {
    return appClarifai.models.predict(Clarifai.GENERAL_MODEL, imageUrl).then(
    function(response) {
      let result = response.outputs[0].data.concepts
      let numberOfWords = 3
      let words = []
      for (let i = 0; i < numberOfWords; i++ ) {
        words.push(result[i].name)
      }
      return words
    },
    function(err) {
      console.log(err)
      // there was an error
    }
  )
  }
}

export const getGIF = {
  call (words) {
    return fetch(giphyURL+words.join('+'), {
      method: 'GET'
    }).then((response) => {
      return response.json()
    })
  }
}
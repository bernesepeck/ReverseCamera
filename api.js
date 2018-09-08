const rootUrl = 'https://api.imgur.com/3/image'
const clarifaiURL = 'https://api.clarifai.com'
const apiKey = 'cba079ce0cb8d4c'
const clariKey = 'a42c67e74eeb4b2abe5d356d829356cd'

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
    }
}

export const clarifaiCall = {
  call (imageUrl) {
    appClarifai.models.predict(Clarifai.GENERAL_MODEL, imageUrl).then(
    function(response) {
      let result = response.outputs[0].data.concepts
      let numberOfWords = 4
      let words = []
      for (let i = 0; i < numberOfWords; i++ ) {
        words.push(result[i].name)
      }
      return words
    },
    function(err) {
      // there was an error
    }
  )
  }
}
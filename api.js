const rootUrl = 'https://api.imgur.com/3/image'
const apiKey = 'cba079ce0cb8d4c'


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
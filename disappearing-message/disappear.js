const imageInput = document.getElementById('image-input')
const messageInput = document.getElementById('message-input')
const generateBtn = document.getElementById('generate-btn')
const url = document.getElementById('url')

generateBtn.onclick = function() {
  const longUrl =
    window.location.host +
    '/disappearing-message/message.html?img=' +
    encodeURIComponent(imageInput.value) +
    '&msg=' +
    encodeURIComponent(messageInput.value)

  axios.get('https://api.rebrandly.com/v1/links/new', {
    params: {
      apikey: '26c156a2a67a4df88a1af89b51cf2226',
      destination: 'http://' + longUrl
    }
  })
  .then(result => {
    console.log(result)
    const shortUrl = result.data.shortUrl
    const id = result.data.id

    url.innerHTML = `<a href="http://${shortUrl}">${shortUrl}</a>`

    axios.post(`https://api.rebrandly.com/v1/links/${id}`, {
      apikey: '26c156a2a67a4df88a1af89b51cf2226',
      title: 'anything',
      destination: 'http://' + longUrl + `&id=${id}`
    })

  })
}














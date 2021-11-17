const fetch = require('node-fetch')
const { default: Axios } = require('axios')
const fs = require('fs')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

const uptotele = async (media) => new Promise(async (resolve, reject) => {
	try {
		let { ext } = await fromBuffer(media)
		console.log('Uploading image to server telegra.ph')
		let form = new FormData()
		form.append('file', media, 'tmp' + ext)
		await fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: form
		})
		.then(res => res.json())
		.then(res => {
			if (res.error) return reject(res.error)
			resolve('https://telegra.ph' + res[0].src)
			console.log('ok success')
		})
		.catch(err => reject(err))
	} catch (e) {
		return console.log(e)
	}
})
const uploadFile = async (buffer) => {
  const { ext } = await fromBuffer(buffer) || {}
  let form = new FormData
  form.append('file', buffer, 'tmp' + ext)
  let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
  return json.link
}

const RESTfulAPI = async (inp) => {
  let form = new FormData
  let buffers = inp
  if (!Array.isArray(inp)) buffers = [inp]
  for (let buffer of buffers) {
    form.append('file', buffer)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.text()
  try {
    json = JSON.parse(json)
    if (!Array.isArray(inp)) return json.files[0].url
    return json.files.map(res => res.url)
  } catch (e) {
    throw json
  }
}

const uploadImages = (buffData, type) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = fromBuffer(buffData)
        const filePath = 'stik' + ext
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to server telegra.ph')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) return reject(res.error)
                resolve('https://telegra.ph' + res[0].src)
            })
            .then(() => fs.unlinkSync(filePath))
            .catch(err => reject(err))
        })
    })
}
exports.RESTfulAPI = RESTfulAPI
exports.uploadImages = uploadImages
exports.uptotele = uptotele
exports.uploadFile = uploadFile
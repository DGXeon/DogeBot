const toMs = require('ms')
const ms = require('parse-ms')
const fs = require("fs")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))

const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('2m') }
    afk.push(obj)
    fs.writeFileSync('./lib/off.json', JSON.stringify(afk))
}


const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./lib/off.json', JSON.stringify(_dir))
        }
    }, 1000)
}


const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {
 sleep,
 isAfk,
 cekafk,
 addafk
}
const fs = require('fs')
const toMs = require('ms')

/**
 * Add reminder to user.
 * @param {string} userId 
 * @param {string} message 
 * @param {number} time 
 * @param {object} _dir 
 */
const addReminder = (userId, message, type, time, _dir) => {
    const obj = { id: userId, msg: message, type: type, time: Date.now() + toMs(time) }
    _dir.push(obj)
    fs.writeFileSync('./database/reminder.json', JSON.stringify(_dir))
}

/**
 * Get reminder.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {number}
 */
const getReminderTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if(_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

/**
 * Get reminder message.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {string}
 */
const getReminderMsg = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].msg
    }
}


const getReminderType = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].type
    }
}

/**
 * Get position of reminder.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {number}
 */
const getReminderPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addReminder,
    getReminderTime,
    getReminderMsg,
    getReminderType,
    getReminderPosition
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserContactSchema = new Schema({
    ip: {
        type: String,
    },
    userEmail: {
        type: String,
    },
    userInfo: {
        type: String,
    },
    os: {
        type: String,
    },
    browser: {
        type: String,
    },
    mobile: {
        type: String,
    },
    engineVersion: {
        type: String,
    },
    getUA: {
        type: String,
    },
    deviceType: {
        type: String,
    },
    time: { type: Date, default: Date.now }
})

const UserContact = mongoose.model('UserContact', UserContactSchema, "usercontacts");
module.exports = UserContact;

// const newData = {
//     userEmail: userEmail,
//     userInfo: userInfo,
//     os: rdd.osName + ' ' + rdd.osVersion,
//     browser: rdd.browserName + ' ' + rdd.fullBrowserVersion,
//     mobile: rdd.mobileVendor + ' ' + rdd.mobileModel,
//     engineVersion: rdd.engineVersion,
//     getUA: rdd.getUA,
//     deviceType: rdd.deviceType,
// }
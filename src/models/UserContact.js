const mongoose = require('mongoose')
const Schema = mongoose.Schema


const geoDataSchema = new Schema({
    country_code: {
        type: String,
    },
    country_name: {
        type: String,
    },
    city: {
        type: String,
    },
    postal: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    IPv4: {
        type: String,
    },
    state: {
        type: String,
    },
});

const UserContactSchema = new Schema({
    ip: {
        type: String,
    },
    geoData: {
        type: geoDataSchema,
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
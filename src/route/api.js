const express = require("express");
const router = express.Router();
const UserContact = require('../models/UserContact');


router.post('/save-user-contact', (req, res) => {
    const newdata = req.body;
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const newContact = new UserContact(newdata);
    newContact.ip = ip;
    newContact.save().then((data) => {
        console.log(`[User Contact!] <${data.time}> ${data.userEmail}: [${data.userInfo}] from ${data.ip}`);
        res.json("OK");
    }).catch(function (error) {
        console.log("[Error] " + error);
        res.json("ERR");
    })
});

module.exports = router;
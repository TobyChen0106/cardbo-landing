const express = require("express");
const router = express.Router();
const UserContact = require('../models/UserContact');

router.post('/save-user-contact', (req, res) => {
    const newdata = req.body;
    const newContact = new UserContact(newdata);
    newContact.save().then((data) => {
        console.log(`[User Contact!] <${data.time}> ${data.userEmail}: ${data.userInfo}`);
        res.json("OK");
    }).catch(function (error) {
        console.log("[Error] " + error);
        res.json("ERR");
    })
});

module.exports = router;
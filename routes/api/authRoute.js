const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const auth = require("../../middelware/auth");
const User = require("../../models/User");

// @route  GET  api/auth
// @desc   Load user
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({msg: 'Server error'})
  }
});

// @route  POST  api/auth
// @desc   Login user
// @access Public
router.post('/', [
    check('email', 'Please enter a valis Email').isEmail(),
    check('password', 'Password is required').exists()
] , async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    };

    try {
        const {email, password} = req.body;

        // Search for user by email
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({errors: [{msg:'Invalid Credentials'}]})
        };

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]})
        };

        // Generate jwt token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
            if(err) throw err;
            res.json({token})
        })


    } catch (err) {
        console.error(err.message)
        res.status(500).json({msg: 'Server error'})
    }
})


module.exports = router;

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    avatar: String,
    password: { type: String, select: false },
    signUpDate: { type: Date, default: Date.now() },
    lastLogin : Date
})

UserSchema.pre('save' , function(next) {
    var user = this; 
    if ( !user.isModified("password") )
        return next();
    
    bcrypt.genSalt(10, (error, salt) => {
        if ( error )
            return next();
        
        bcrypt.hash( user.password , salt, null, (error, hash) => {
            if ( error )
                return next();

            user.password = hash;
            return next();
        })
    })
})

module.exports = mongoose.model('User' , UserSchema);
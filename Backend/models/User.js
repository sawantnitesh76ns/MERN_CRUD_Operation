const mongose = require("mongoose")

const userProfile = mongose.Schema({
    firstname: {
        type: mongose.Schema.Types.String,
    },
    lastname: {
        type: mongose.Schema.Types.String,
    },
    emailaddress: {
        type: mongose.Schema.Types.String,
    },
    description: {
        type: mongose.Schema.Types.String,
    }
});

module.exports = mongose.model('userdetails', userProfile);

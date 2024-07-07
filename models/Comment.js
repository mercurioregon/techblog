const {DataTypes} = require ("sequelize")
const sequelize = require("../config/connection")
const Comment = sequelize.define("Comment", {
    comment: {
        type: DataTypes.STRING, 
        allowNull : false,
       
    },

    username: {
        type: DataTypes.STRING, 
        allowNull : false,
        unique: true
    },

})
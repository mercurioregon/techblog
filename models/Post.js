
const {DataTypes} = require ("sequelize")
const sequelize = require("../config/connection")
const Post = sequelize.define("Post", {
    comment: {
        type: DataTypes.STRING, 
        allowNull : false,
       
    },

    username: {
        type: DataTypes.STRING, 
        allowNull : false,
        unique: true
    },

    addnewcomment: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },


})
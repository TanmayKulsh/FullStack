import {Sequelize} from "sequelize";
import db from "../config/Database";

const {DataTypes} = Sequelize;

const User = db.define('user',{
    name: DataTypes.STRING,
    email: DataTypes.String,
    gender: DataTypes.String
},{
    freezeTableName:true
});

export default User;

(async() => {
    await db.sync();
})();
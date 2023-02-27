const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')
class Absensi extends Model { } 

Absensi.init({
    status_nip: {
        type: DataTypes.INTEGER,
    },
        status: {
            type: DataTypes.ENUM('in', 'out')
        }
}, {
    sequelize,
    model: 'Absensi'
})

module.exports = Absensi
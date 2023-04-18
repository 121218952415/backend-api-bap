const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Note = sequelize.define("Note", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  completionStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  deliveryDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  comments: { 
    type: DataTypes.STRING,
    allowNull: true 
    },
  tags: { 
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true },
},{
  timestamps: false
});

module.exports = Note;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("./FieldsAndServicesDatabase");

console.log(2);
class Services extends Model {}
Services.init(
  {
    service_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    field_ID: DataTypes.INTEGER,
  },
  { sequelize, modelName: "Services", timestamps: false }
);

module.exports = Services;

//Importing Required Packages
const { Op } = require('sequelize');
//Importing Sequelize Models
const Facilities = require('../Models/Facilities');
const Rooms = require('../Models/Rooms');


module.exports = {
//Get all Rooms
async getAllRooms(lang)
{
    if(lang==='ar')
    result =  await Rooms.findAll({attributes: [['room_ID','id'],['arabic_name','name'],'availability','facility_ID'] });
else  if(lang==='en')
    result =  await Rooms.findAll({attributes: [['room_ID','id'],['english_name','name'],'availability','facility_ID']});
     if(result!=null)
        return result;
    else
        result="Not found.";
},

//Get Room by ID
async getRoomsByID(id,lang)
{
    if(lang==='ar')
    result =  await Rooms.findAll({attributes: [['room_ID','id'],['arabic_name','name'],'availability','facility_ID'],where:{room_ID:id} });
else  if(lang==='en')
    result =  await Rooms.findAll({attributes: [['room_ID','id'],['english_name','name'],'availability','facility_ID'],where:{room_ID:id} });
 
    if(result!=null)
        return result;
    else
        result="Not found.";
},
}

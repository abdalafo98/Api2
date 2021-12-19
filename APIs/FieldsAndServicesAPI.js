//Importing Required Packages
const { Op } = require('sequelize');
//Importing Sequelize Models
const Specialities = require('../Models/Specialities');
const SubSpecialities = require('../Models/SubSpecialities');
const Services = require('../Services');
const SubServices = require('../Models/SubServices');

module.exports = {
//Get all Specialities
async getAllSpecialities(lang)
{
    var result;
    if(lang==='ar')
        result =  await Specialities.findAll({attributes: [['speciality_ID','id'],['arabic_name','name'],'field_ID']});
    else  if(lang==='en')
        result =  await Specialities.findAll({attributes: [['speciality_ID','id'],['english_name','name'],'field_ID']});
    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get Speciality by ID
async getSpecialityByID(id,lang)
{
    console.log(id);
    var result;
    if(lang==='ar')
        result =  await Specialities.findOne({attributes: [['speciality_ID','id'],['arabic_name','name'],'field_ID'],where:{speciality_ID:id}});
    else  if(lang==='en')
        result =  await Specialities.findOne({attributes: [['speciality_ID','id'],['english_name','name'],'field_ID'],where:{speciality_ID:id}});
    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get all SubSpecialities
async getAllSubSpecialities(lang)
{
    var result;
    if(lang==='ar')
        result =  await SubSpecialities.findAll({attributes: [['sub_speciality_ID','id'],['arabic_name','name'],'speciality_ID'] });
    else  if(lang==='en')
        result =  await SubSpecialities.findAll({attributes: [['sub_speciality_ID','id'],['english_name','name'],'speciality_ID'] });

    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get SubSpeciality by ID
async getSubSpecialityByID(id,lang)
{
    var result;
    if(lang==='ar')
    result =  await SubSpecialities.findAll({attributes: [['sub_speciality_ID','id'],['arabic_name','name'],'speciality_ID'],where:{sub_speciality_ID:id} });
else  if(lang==='en')
    result =  await SubSpecialities.findAll({attributes: [['sub_speciality_ID','id'],['english_name','name'],'speciality_ID'],where:{sub_speciality_ID:id} });

    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get SubSpeciality by Speciality ID
async getSubSpecialityBySpecialityID(id,lang)
{
    var result;
    if(lang==='ar')
        result =  await SubSpecialities.findAll({attributes: [['sub_speciality_ID','id'],['arabic_name','name'],'speciality_ID'],where:{speciality_ID:id} });
    else  if(lang==='en')
        result =  await SubSpecialities.findAll({attributes: [['sub_speciality_ID','id'],['english_name','name'],'speciality_ID'],where:{speciality_ID:id} });

    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get all Services
async getAllServices(lang)
{
    var result;
    if(lang==='ar')
        result =  await Services.findAll({attributes: [['service_ID','id'],['arabic_name','name'],'field_ID']});
    else  if(lang==='en')
        result =  await Services.findAll({attributes: [['service_ID','id'],['english_name','name'],'field_ID']});
    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get Service by ID
async getServiceByID(id,lang)
{
    var result;
    if(lang==='ar')
        result =  await Services.findAll({attributes: [['service_ID','id'],['arabic_name','name'],'field_ID'] ,where:{service_ID:id}});
    else  if(lang==='en')
        result =  await Services.findAll({attributes: [['service_ID','id'],['english_name','name'],'field_ID'],where:{service_ID:id}});
    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get all SubServices
async getAllSubServices(lang)
{
    var result;
    if(lang==='ar')
        result =  await SubServices.findAll({attributes: [['sub_service_ID','id'],['arabic_name','name'],'service_ID'] });
    else  if(lang==='en')
        result =  await SubServices.findAll({attributes: [['sub_service_ID','id'],['english_name','name'],'service_ID'] });

    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get SubService by ID
async getSubServiceByID(id,lang)
{
    var result;
    if(lang==='ar')
    result =  await SubServices.findAll({attributes: [['sub_service_ID','id'],['arabic_name','name'],'service_ID'],where:{sub_service_ID:id} });
else  if(lang==='en')
    result =  await SubServices.findAll({attributes: [['sub_service_ID','id'],['english_name','name'],'service_ID'],where:{sub_service_ID:id} });

    if(result!=null) 
        return result;
    else
        return "Not found.";
},

//Get SubService by Service ID
async getSubServiceByServiceID(id,lang)
{
    var result;
    if(lang==='ar')
        result =  await SubServices.findAll({attributes: [['sub_service_ID','id'],['arabic_name','name'],'service_ID'],where:{service_ID:id} });
    else  if(lang==='en')
        result =  await SubServices.findAll({attributes: [['sub_service_ID','id'],['english_name','name'],'service_ID'],where:{service_ID:id} });

    if(result!=null) 
        return result;
    else
        return "Not found.";
}
}

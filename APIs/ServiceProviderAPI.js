//Importing Required Packages
const { Op } = require('sequelize');
//Importing Sequelize Models
const Providers = require('../Models/Providers');
const Specialities = require('../Models/Specialities');


module.exports = {
//Get all providers by filter
async getAllProvidersByFilter(filter,lang)
{
    var result,provider_speciality;
    provider_speciality =  await Specialities.findOne({where:{
        [Op.or]: [{arabic_name:{[Op.like]:'%' + filter +'%'}},
                 {english_name:{[Op.like]:'%' + filter +'%'}}]
        }});
    if(provider_speciality!=null) 
        if(lang==='ar')
            result = await Providers.findAll({attributes: [
                ['provider_id','id'],['arabic_name','name'],'national_ID','country', 'city', 'phone_number',
                'email','date_of_birth','address','speciality_ID'],where:{speciality_ID:provider_speciality.speciality_ID}});
        else if(lang==='en')
            result = await Providers.findAll({attributes: [['provider_id','id'],['english_name','name'],'national_ID','country', 'city', 'phone_number',
            'email','date_of_birth','address','speciality_ID'],where:{speciality_ID:provider_speciality.speciality_ID}});
    if(result!=null)
        return result;
    else
        result="Not found.";
},

//Get provider by filter & ID
async getProvidersByFilterAndID(filter,id,lang)
{
    var result,provider_speciality;
    provider_speciality =  await Specialities.findOne({where:{
        [Op.or]: [{arabic_name:{[Op.like]:'%' + filter +'%'}},
                 {english_name:{[Op.like]:'%' + filter +'%'}}]
        }});
    if(provider_speciality!=null) 
    if(lang==='ar')
        result = await Providers.findAll({attributes: [['provider_id','id'],['arabic_name','name'],'national_ID','country', 'city', 'phone_number',
        'email','date_of_birth','address','speciality_ID'],where:{speciality_ID:provider_speciality.speciality_ID, provider_ID:id}});
    else if(lang==='en')
        result = await Providers.findAll({attributes: [['provider_id','id'],['english_name','name'],'national_ID','country', 'city', 'phone_number',
        'email','date_of_birth','address','speciality_ID'],where:{speciality_ID:provider_speciality.speciality_ID, provider_ID:id}});
    if(result!=null)
        return result;
    else
        result="Not found.";
}
}

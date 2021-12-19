//Importing Required Packages
const { Op } = require('sequelize');
//Importing Sequelize Models
const Providers = require('./Models/Providers');
const Services = require('./Services');
const Appointments = require('./Models/Appointments');
const Specialities = require('./Models/Specialities');
const Rooms = require('./Models/Rooms');
const moment = require ('moment');

module.exports = {
//Get all Appointments 
async getAllAppointments(lang)
{
    var result =  await Appointments.findAll();
    if(result!=null)
        return result;
    else
        result="Not found.";
},

//Get weekly providers appointments by filter 
async getProvidersWeeklyAppointments(filter,weekStartDate,lang)
{
    var result,provider_speciality;
    provider_speciality =  await Specialities.findOne({where:{
        [Op.or]: [{arabic_name:{[Op.like]:'%' + filter +'%'}},
                 {english_name:{[Op.like]:'%' + filter +'%'}}]
        }});
    if(provider_speciality!=null) 
    {
        const providers = await Providers.findAll({where:{speciality_ID:provider_speciality.speciality_ID}});
        const weekDays ={},weeklyAppointments ={};
        weeklyAppointments["appointments"] = [];
        var appointmentDate,startDate=new Date(weekStartDate);
        for (let i=0;i<providers.length;i++)
        {
            weekDays["week"] = [];
        for (let j = 0; j < 7; j++) {
            appointmentDate = moment(startDate).format('YYYY-MM-DD');
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,first_provider_ID:providers[i].provider_ID}});
            startDate.setDate(startDate.getDate() + 1);
            weekDays["week"].push({"date":appointmentDate,"appointments":result});
        }
        weeklyAppointments["appointments"].push({"id":providers[i].provider_ID,"week":weekDays["week"]});
    }
    if(weeklyAppointments!=null)
        return weeklyAppointments;
    else
    return "Not found.";
}
},

//Get daily providers appointments by filter 
async getProvidersDailyAppointments(filter,appointmentDate,lang)
{
    var result,provider_speciality;
    provider_speciality =  await Specialities.findOne({where:{
        [Op.or]: [{arabic_name:{[Op.like]:'%' + filter +'%'}},
                 {english_name:{[Op.like]:'%' + filter +'%'}}]
        }});
    if(provider_speciality!=null) 
    {
        const providers = await Providers.findAll({where:{speciality_ID:provider_speciality.speciality_ID}});
        const dailyAppointments ={};
        dailyAppointments["appointments"] = [];
        for (let i=0;i<providers.length;i++)
        {
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,first_provider_ID:providers[i].provider_ID}});
            dailyAppointments["appointments"].push({"id":providers[i].provider_ID,"appointments":result});
        }
    if(dailyAppointments!=null)
        return dailyAppointments;
    else
    return "Not found.";
}
},

//Get weekly service appointments
async getServicesWeeklyAppointments(weekStartDate,lang)
{
    var services,result;
    services =  await Services.findAll();
    const weekDays ={},weeklyAppointments ={};
    weeklyAppointments["appointments"] = [];
    var appointmentDate,startDate=new Date(weekStartDate);
    for (let i=0;i<services.length;i++)
    {
        weekDays["week"] = [];
        for (let j = 0; j < 7; j++) {
            appointmentDate = moment(startDate).format('YYYY-MM-DD');
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,service_ID:services[i].service_ID}});
            startDate.setDate(startDate.getDate() + 1);
            weekDays["week"].push({"date":appointmentDate,"appointments":result});
        }
        weeklyAppointments["appointments"].push({"id":services[i].service_ID,"week":weekDays["week"]});
    }
    if(weeklyAppointments!=null)
        return weeklyAppointments;
    else
    return "Not found.";
},

//Get daily service appointments
async getServicesDailyAppointments(appointmentDate,lang)
{
    var services,result;
    services =  await Services.findAll();
    const dailyAppointments ={};
    dailyAppointments["appointments"] = [];
    for (let i=0;i<services.length;i++)
    {
        result = await Appointments.findAll({where:{appointment_Date:appointmentDate,service_ID:services[i].service_ID}});
        dailyAppointments["appointments"].push({"id":services[i].service_ID,"appointments":result});
    }
    if(dailyAppointments!=null)
        return dailyAppointments;
    else
    return "Not found.";
},

//Get weekly room appointments
async getRoomsWeeklyAppointments(weekStartDate,lang)
{
    var rooms,result;
    rooms =  await Rooms.findAll();
    const weekDays ={},weeklyAppointments ={};
    weeklyAppointments["appointments"] = [];
    var appointmentDate,startDate=new Date(weekStartDate);
    for (let i=0;i<rooms.length;i++)
    {
        weekDays["week"] = [];
        for (let j = 0; j < 7; j++) {
            appointmentDate = moment(startDate).format('YYYY-MM-DD');
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,service_ID:rooms[i].room_ID}});
            startDate.setDate(startDate.getDate() + 1);
            weekDays["week"].push({"date":appointmentDate,"appointments":result});
        }
        weeklyAppointments["appointments"].push({"id":rooms[i].room_ID,"week":weekDays["week"]});
    }
    if(weeklyAppointments!=null)
        return weeklyAppointments;
    else
    return "Not found.";
},

//Get daily room appointments
async getRoomsDailyAppointments(appointmentDate,lang)
{
    var rooms,result;
    rooms =  await Rooms.findAll();
    const dailyAppointments ={};
    dailyAppointments["appointments"] = [];
    for (let i=0;i<rooms.length;i++)
    {
        result = await Appointments.findAll({where:{appointment_Date:appointmentDate,service_ID:rooms[i].room_ID}});
        dailyAppointments["appointments"].push({"id":rooms[i].room_ID,"appointments":result});
    }
    if(dailyAppointments!=null)
        return dailyAppointments;
    else
    return "Not found.";
},

//Get weekly providers appointments by ID 
async getProvidersWeeklyAppointmentsByID(filter,weekStartDate,id,lang)
{
    var result,provider_speciality;
    provider_speciality =  await Specialities.findOne({where:{
        [Op.or]: [{arabic_name:{[Op.like]:'%' + filter +'%'}},
                 {english_name:{[Op.like]:'%' + filter +'%'}}]
        }});
    if(provider_speciality!=null) 
    {
        const providers = await Providers.findOne({where:{provider_ID:id,speciality_ID:provider_speciality.speciality_ID}});
        const weekDays ={},weeklyAppointments ={};
        weeklyAppointments["appointments"] = [];
        var appointmentDate,startDate=new Date(weekStartDate);
        if (providers!=null)
        {
            weekDays["week"] = [];
        for (let j = 0; j < 7; j++) {
            appointmentDate = moment(startDate).format('YYYY-MM-DD');
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,first_provider_ID:providers.provider_ID}});
            startDate.setDate(startDate.getDate() + 1);
            weekDays["week"].push({"date":appointmentDate,"appointments":result});
        }
        weeklyAppointments["appointments"].push({"id":providers.provider_ID,"week":weekDays["week"]});
    }
    if(weeklyAppointments!=null)
        return weeklyAppointments;
    else
    return "Not found.";
}
},

//Get daily providers appointments by ID 
async getProvidersDailyAppointmentsByID(filter,appointmentDate,id,lang)
{
    var result,provider_speciality;
    provider_speciality =  await Specialities.findOne({where:{
        [Op.or]: [{arabic_name:{[Op.like]:'%' + filter +'%'}},
                 {english_name:{[Op.like]:'%' + filter +'%'}}]
        }});
    if(provider_speciality!=null) 
    {
        const providers = await Providers.findOne({where:{provider_ID:id,speciality_ID:provider_speciality.speciality_ID}});
        const dailyAppointments ={};
        dailyAppointments["appointments"] = [];
        if (providers!=null)
        {
            console.log("providers ",providers)
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,first_provider_ID:providers.provider_ID}});
            dailyAppointments["appointments"].push({"id":providers.provider_ID,"appointments":result});
    }
    if(dailyAppointments!=null)
        return dailyAppointments;
    else
    return "Not found.";
}
},

//Get weekly service appointments by ID
async getServicesWeeklyAppointmentsByID(weekStartDate,id,lang)
{
    console.log(1);
    var services,result;
    services =  await Services.findOne({where:{service_ID:id}});
    
    const weekDays ={},weeklyAppointments ={};
    weeklyAppointments["appointments"] = [];
    var appointmentDate,startDate=new Date(weekStartDate);
    if (services!=null)
    {
        weekDays["week"] = [];
        for (let j = 0; j < 7; j++) {
            appointmentDate = moment(startDate).format('YYYY-MM-DD');
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,service_ID:services.service_ID}});
            startDate.setDate(startDate.getDate() + 1);
            weekDays["week"].push({"date":appointmentDate,"appointments":result});
        }
        weeklyAppointments["appointments"].push({"id":services.service_ID,"week":weekDays["week"]});
    }
    if(weeklyAppointments!=null)
        return weeklyAppointments;
    else
    return "Not found.";
},

//Get daily service appointments by ID
async getServicesDailyAppointmentsByID(appointmentDate,id,lang)
{
    var services,result;
    services =  await Services.findOne({where:{service_ID:id}});
    const dailyAppointments ={};
    dailyAppointments["appointments"] = [];
    if (services!=null)
    {
        result = await Appointments.findAll({where:{appointment_Date:appointmentDate,service_ID:services.service_ID}});
        dailyAppointments["appointments"].push({"id":services.service_ID,"appointments":result});
    }
    if(dailyAppointments!=null)
        return dailyAppointments;
    else
    return "Not found.";
},

//Get weekly room appointments by ID
async getRoomsWeeklyAppointmentsByID(weekStartDate,id,lang)
{
    var rooms,result;
    rooms =  await Rooms.findOne({where:{room_ID:id}});
    const weekDays ={},weeklyAppointments ={};
    weeklyAppointments["appointments"] = [];
    var appointmentDate,startDate=new Date(weekStartDate);
    if(rooms!=null)
    {
        weekDays["week"] = [];
        for (let j = 0; j < 7; j++) {
            appointmentDate = moment(startDate).format('YYYY-MM-DD');
            result = await Appointments.findAll({where:{appointment_Date:appointmentDate,room_ID:rooms.room_ID}});
            startDate.setDate(startDate.getDate() + 1);
            weekDays["week"].push({"date":appointmentDate,"appointments":result});
        }
        weeklyAppointments["appointments"].push({"id":rooms.room_ID,"week":weekDays["week"]});
    }
    if(weeklyAppointments!=null)
        return weeklyAppointments;
    else
    return "Not found.";
},

//Get weekly room appointments by ID
async getRoomsDailyAppointmentsByID(appointmentDate,id,lang)
{
    var rooms,result;
    rooms =  await Rooms.findOne({where:{room_ID:id}});
    const dailyAppointments ={};
    dailyAppointments["appointments"] = [];
    if(rooms!=null)
    {
        result = await Appointments.findAll({where:{appointment_Date:appointmentDate,room_ID:rooms.room_ID}});
        dailyAppointments["appointments"].push({"id":rooms.room_ID,"appointments":result});
    }
    if(dailyAppointments!=null)
        return dailyAppointments;
    else
    return "Not found.";
}
}

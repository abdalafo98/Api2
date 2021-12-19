//Importing Required Packages
const express = require('express');
const moment = require('moment');
const cors = require('cors');
const ServiceProviderAPI = require('./APIs/ServiceProviderAPI')
const FieldsAndServicesAPI = require('./APIs/FieldsAndServicesAPI')
const FacilitiesAPI = require('./APIs/FacilitiesAPI')
const AppointmentsAPI = require('./AppointmentsAPI')


const app = express();
app.use(express.json());
app.use(cors());

app.get('/providers/:lang/:filter', async (req, res) => {
    res.send(await ServiceProviderAPI.getAllProvidersByFilter(req.params.filter,req.params.lang));});

app.get('/providers/:lang/:filter/:id', async (req, res) => {
    res.send(await ServiceProviderAPI.getProvidersByFilterAndID(req.params.filter,req.params.id,req.params.lang));});

app.get('/specialities/:lang', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getAllSpecialities(req.params.lang));});

app.get('/specialities/:lang/:id', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getSpecialityByID(req.params.id,req.params.lang));});

app.get('/subspecialities/:lang', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getAllSubSpecialities(req.params.lang));});

app.get('/subspecialities/:lang/:id', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getSubSpecialityByID(req.params.id,req.params.lang));});

app.get('/specialities/subspecialities/:lang/:id', async (req, res) => {
        res.send(await FieldsAndServicesAPI.getSubSpecialityBySpecialityID(req.params.id,req.params.lang));});

app.get('/services/:lang', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getAllServices(req.params.lang));});
        
app.get('/services/:lang/:id', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getServiceByID(req.params.id,req.params.lang));});
        
app.get('/subservices/:lang', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getAllSubServices(req.params.lang));});
        
app.get('/subservices/:lang/:id', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getSubServiceByID(req.params.id,req.params.lang));});
        
app.get('/services/subservices/:lang/:id', async (req, res) => {
    res.send(await FieldsAndServicesAPI.getSubServiceByServiceID(req.params.id,req.params.lang));});

app.get('/rooms/:lang', async (req, res) => {
    res.send(await FacilitiesAPI.getAllRooms(req.params.lang));});

app.get('/rooms/:lang/:id', async (req, res) => {
        res.send(await FacilitiesAPI.getRoomsByID(req.params.id,req.params.lang));});

app.get('/appointments/:lang', async (req, res) => {
    res.send(await AppointmentsAPI.getAllAppointments(req.params.lang));});

app.get('/providersWeeklyAppointments/:lang/:filter/:startDate', async (req, res) => {
    res.send(await AppointmentsAPI.getProvidersWeeklyAppointments(req.params.filter,req.params.startDate,req.params.lang));});

app.get('/servicesWeeklyAppointments/:lang/:startDate', async (req, res) => {
    res.send(await AppointmentsAPI.getServicesWeeklyAppointments(req.params.startDate,req.params.lang));});

app.get('/roomsWeeklyAppointments/:lang/:startDate', async (req, res) => {
    res.send(await AppointmentsAPI.getRoomsWeeklyAppointments(req.params.startDate,req.params.lang));});  
 
app.get('/providersWeeklyAppointments/:lang/:filter/:startDate/:id', async (req, res) => {
    res.send(await AppointmentsAPI.getProvidersWeeklyAppointmentsByID(req.params.filter,req.params.startDate,req.params.id,req.params.lang));});
    
app.get('/servicesWeeklyAppointments/:lang/:startDate/:id', async (req, res) => {
    res.send(await AppointmentsAPI.getServicesWeeklyAppointmentsByID(req.params.startDate,req.params.id,req.params.lang));});
    
app.get('/roomsWeeklyAppointments/:lang/:startDate/:id', async (req, res) => {
    res.send(await AppointmentsAPI.getRoomsWeeklyAppointmentsByID(req.params.startDate,req.params.id,req.params.lang));});  

app.get('/providersDailyAppointments/:lang/:filter/:startDate', async (req, res) => {
    res.send(await AppointmentsAPI.getProvidersDailyAppointments(req.params.filter,req.params.startDate,req.params.id,req.params.lang));});  
    
app.get('/servicesDailyAppointments/:lang/:startDate', async (req, res) => {
    res.send(await AppointmentsAPI.getServicesDailyAppointments(req.params.startDate,req.params.lang));});    

app.get('/roomsDailyAppointments/:lang/:startDate', async (req, res) => {
    res.send(await AppointmentsAPI.getRoomsDailyAppointments(req.params.startDate,req.params.lang));});    

app.get('/providersDailyAppointments/:lang/:filter/:startDate/:id', async (req, res) => {
    res.send(await AppointmentsAPI.getProvidersDailyAppointmentsByID(req.params.filter,req.params.startDate,req.params.id,req.params.lang));});
    
app.get('/servicesDailyAppointments/:lang/:startDate/:id', async (req, res) => {
    res.send(await AppointmentsAPI.getServicesDailyAppointmentsByID(req.params.startDate,req.params.id,req.params.lang));});
        
app.get('/roomsDailyAppointments/:lang/:startDate/:id', async (req, res) => {
    res.send(await AppointmentsAPI.getRoomsDailyAppointmentsByID(req.params.startDate,req.params.id,req.params.lang));});  
    
        
app.listen(8000);

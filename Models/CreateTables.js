const sequelizeProviders = require('../Database/ServiceProvidersDatabase');
const Providers = require('./Providers');
const ProvidersSpecialities = require('./ProvidersSpecialities');
const ProvidersSubSpecialities = require('./ProvidersSubSpecialities');
sequelizeProviders.sync({ force: false }).then();

const sequelizeFieldsAndServicesDatabase = require('../FieldsAndServicesDatabase');
const Specialities = require('./Specialities');
const SubSpeciality = require('./SubSpecialities');
const Services = require('../Services');
const SubServices = require('./SubServices');
const Fields = require('./Fields');
sequelizeFieldsAndServicesDatabase.sync({ force: false }).then();

const sequelizeFacilitiesDatabase = require('../Database/FacilitiesDatabase');
const Facilities = require('./Facilities');
const Rooms = require('./Rooms');
sequelizeFacilitiesDatabase.sync({ force: false }).then();

const sequelizeAppointmentsDatabase = require('../Database/AppointmentsDatabase');
const Appointments = require('./Appointments');
const AppointmentsServices = require('./AppointmentsServices');
const AppointmentsStatus = require('./AppointmentsStatus');
sequelizeAppointmentsDatabase.sync({ force: false }).then();

const sequelizeConsumersDatabase = require('../Database/ConsumersDatabase');
const Consumers = require('./Consumers');
sequelizeConsumersDatabase.sync({ force: false }).then();

const sequelizeNotificationsDatabase = require('../Database/NotificationsDatabase');
const Notifications = require('./Notifications');
sequelizeNotificationsDatabase.sync({ force: false }).then();

const sequelizeTasksDatabase = require('../Database/TasksDatabase');
const SharedTasks = require('./SharedTasks');
const UserTasks = require('./UserTasks');
sequelizeTasksDatabase.sync({ force: false }).then();
var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var bodyParser = require('body-parser');

// ! วิธีเก็บไฟล์ 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/application', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

const Application = new mongoose.Schema({
    appy_date: Date,
    position:String,
    depertment:String,
    file:String,
    photo:String,
    files:String,
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    referrer:{
        ref_name:String,
        ref_depertment:String,
        ref_phone:Number,
    },
    name:String,
    age:Number,
    nationality:String,
    ethnicity:String,
    religion:String,
    birth_date:Date,
    id_card_number:String,
    id_card_issus_place:String,
    id_card_back:String,
    social_security_number:Number,
    social_security_hospital:String,    
    contact_detail:{
        current_address: {
            address_line: String,
            sub_district: String,
            district: String,
            province: String,
            postal_code: String,
        },
        permanent_address: {
            address_line: String,
            sub_district: String,
            district: String,
            province: String,
            postal_code: String,
        },
        phone: { type: String, unique: true, default:0 },
        mobile_phone: { type: String, unique: true, default:0 },
    },
    marital_status:String,
    spouse_name: { type: String, default: null },
    spouse_nationality: { type: String, default: null },
    spouse_occupation: { type: String, default: null },
    spouse_workplace: { type: String, default: null },
    spouse_phone: { type: Number, default: 0 },
    spoue_mobilephone: { type: Number, default: 0 },
    childen_count:  { type: Number, default: 0 },
    children_studying: { type: Number, default: 0 },
    child_birth:[{ type: Date }], // มาดูอีกที
    parent:{
        father:{
            father_name:String,
            father_age:Number,
            father_occupation:String,
        }
    },
    education_history: [
        {
            degree: String,
            institution_name: String,
            location:String,
            study_period:Date,
        },
    ],
    work_experience:[{
        company_name: String,
        address: String,
        position: String,
        responsibilities: String,
        salary: Number,
        start_year: { type: Number },
        end_year: { type: Number },
        years_worked: { type: Number },
        reason_for_leaving: String
    }],
    bank:{
        bank_name: { type: String, default: null },
        account_number: { type: String, default: null }
    },
    emergency_contact:{
        emergency_name:String,
        emergency_phone_number: String,
        emergency_parent_phone: String,
        emergency_sibling_phone: String,
        emergency_relative_phone: String
    },
    special_skills:{
        driving_license: {
            license_number: String,
            motorcycle: { type: Boolean, default: false },
            car: { type: Boolean, default: false },
            expiry_date: Date,
            license_type: { type: String, enum: ['Temporary', 'Permanent'] }
          },
          willing_to_travel: { type: Boolean, default: false },
          reason_for_travel: String
    },    
});

// Create a new application
router.post('/', async (req, res) => {
    try {
      const application = new Application(req.body);
      await application.save();
      res.status(201).send(application);
    } catch (error) {
      res.status(400).send(error);
    }
  }),
  
  // Get all applications
  router.get('/', async (req, res) => {
    try {
      const applications = await Application.find();
      res.status(200).send(applications);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Get application by ID
  router.get('/:id', async (req, res) => {
    try {
      const application = await Application.findById(req.params.id);
      if (!application) {
        return res.status(404).send();
      }
      res.status(200).send(application);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Update application by ID
  router.patch('/:id', async (req, res) => {
    try {
      const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!application) {
        return res.status(404).send();
      }
      res.status(200).send(application);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete application by ID
  router.delete('/:id', async (req, res) => {
    try {
      const application = await Application.findByIdAndDelete(req.params.id);
      if (!application) {
        return res.status(404).send();
      }
      res.status(200).send(application);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  module.exports = router;

var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var bodyParser = require('body-parser');
var Application = require('../Models/Application')
const multer = require('multer');
const path = require('path');
// ! วิธีเก็บไฟล์ 

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/application', { 
    //useNewUrlParser: true, useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));


// Create a new application
router.post('/', async (req, res) => {
    try {
      const application = new Application(req.body);
      await application.save();
      res.status(201).send(application);
      console.log('ok,you have succeeded')
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
  router.put('/:id', async (req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true, runValidators: true }
        );
        
        if (!application) {  
            return res.status(404).send({ message: 'Application not found' });
        }
        
        res.status(200).send(application);
    } catch (error) {
        res.status(400).send({ error: error.message });
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

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // ระบุโฟลเดอร์ที่จะบันทึกไฟล์
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // กำหนดชื่อไฟล์ใหม่
    }
});

const upload = multer({ storage: storage });

    router.post('/upload/photo', upload.single('photo'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('Please upload a file');
    }
    const applicationId = req.body.applicationId; // รับ applicationId จากคำขอ
    Application.findByIdAndUpdate(applicationId, { photoName: file.originalname }, (err, doc) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send('File uploaded successfully');
    });
});

  module.exports = router;

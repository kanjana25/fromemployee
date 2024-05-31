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
        cb(null,'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage: storage });

    router.post('/upload/photo', upload.single('photo'),async (req, res) => {
    try {
    const file = req.file;
    if (!file) {
        return res.status(400).send('Please upload a file');
    }
    const applicationId = req.body.applicationId; 
    const update = { image: {
      filename: file.filename,
      path: file.path.replace(/\\/g, '/'),
      size: file.size,
      uploadDateImage: Date.now()
  }};
    
  const updatedApplication = await Application.findByIdAndUpdate(applicationId, update, { new: true });
  if (!updatedApplication) {
      return res.status(404).send('Application not found');
  }

  res.status(200).send(updatedApplication);
} catch (error) {
  res.status(500).send(error);
}
});

const uploads = multer({ storage: storage }).array('file', 10);

router.post('/upload/file', uploads, async (req, res) => {
  try {
      const files = req.files;
      console.log('Files:', files);  // ตรวจสอบว่าไฟล์ถูกอัพโหลดหรือไม่

      if (!files || files.length === 0) {
          return res.status(400).send('Please upload at least one file');
      }

      const applicationId = req.body.applicationId;
      console.log('Application ID:', applicationId);  // ตรวจสอบค่า applicationId

      if (!applicationId) {
          return res.status(400).send('Please provide an application ID');
      }

      const filesData = files.map(file => ({
          filename: file.originalname,
          path: file.path.replace(/\\/g, '/'),
          size: file.size,
          uploadDateFile: Date.now()
      }));

      console.log('Files Data:', filesData);  // ตรวจสอบค่า filesData

      const updatedApplication = await Application.findByIdAndUpdate(
          applicationId, 
          { $push: { file: { $each: filesData } } }, 
          { new: true }
      );

      if (!updatedApplication) {
          return res.status(404).send('Application not found');
      }

      res.status(201).send(updatedApplication);
      console.log('Files uploaded successfully');
  } catch (error) {
      console.error('Error uploading files:', error);
      res.status(400).send(error);
  }
});


  module.exports = router;

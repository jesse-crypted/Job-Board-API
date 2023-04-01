// Require the mongoose library
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a new mongoose schema for a Job
const jobSchema = new Schema({
  title: { type: String, required: [true, 'A job must have a title'] },
  description: {
    type: String,
    required: [true, 'A job must have a description'],
  },
  location: { type: String, required: [true, 'A job must have a location'] },
  salary: { type: Number, required: [true, 'A job must have a salary'] },
  employer: { type: String, required: [true, 'A job must have an employer'] },
  applicants: [id],
});

// create a new Mongoose model based on the Job schema
const Job = mongoose.model('Job', jobSchema);

// exports the Job model to make it accessibl to other parts of the application
module.exports = Job;

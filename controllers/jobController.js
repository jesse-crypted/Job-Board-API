const Job = require('./../models/jobModel');

exports.getAllJob = async (req, res) => {
  try {
    // get all jobs using the find all method
    const jobs = await Job.find();

    res.status(200).json({
      status: 'Success',
      length: jobs.length,
      data: { jobs },
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

// Handler to get a job through the request.params id
exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Controller to handle Job creating through the request body
exports.createJob = async (req, res) => {
  try {
    const newUser = await Job.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json({
      status: 'Success',
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

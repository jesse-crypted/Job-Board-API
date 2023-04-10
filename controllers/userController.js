const User = require('./../models/userModel');

exports.getAllUser = async (req, res) => {
  try {
    // get all users using the find all method
    const users = await User.find();

    res.status(200).json({
      status: 'Success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const express = require('express');
const router = express.Router();
const comfig = require('config');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator/check');

//@route        GET api/user
//@desc         get all users
//@access       public
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.header('Access-Control-Allow-Origin', '*');
    res.send({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route        POST api/user
//@desc         register user
//@access       public
router.post(
  '/',
  [
    check('firstname', 'first name is required').not().isEmpty(),
    check('lastname', 'last name is required').not().isEmpty(),
    check('emailaddress', 'email is required').not().isEmpty().isEmail(),
  ],
  async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.message });
    }
    const { firstname, lastname, emailaddress, description } = req.body;
    try {
      let user = await User.findOne({ emailaddress });
      if (user) {
        return res
          .status(400)
          .json({ error: [{ msg: 'User Is already present' }] });
      }

      user = new User({
        firstname,
        lastname,
        emailaddress,
        description,
      });

      await user.save();
      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route        PUT api/user/:user_id
//@desc         update user details
//@access       public
router.put(
  '/:user_id',
  [
    check('firstname', 'first name is required').not().isEmpty(),
    check('lastname', 'last name is required').not().isEmpty(),
    check('emailaddress', 'email is required').not().isEmpty().isEmail(),
  ],
  async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.message });
    }
    const { firstname, lastname, emailaddress, description } = req.body;
    try {
      // const userDetails ({
      //     firstname,
      //     lastname,
      //     emailaddress,
      //     description
      // });
      const userFields = {};
      if (firstname) userFields.firstname = firstname;
      if (lastname) userFields.lastname = lastname;
      if (emailaddress) userFields.emailaddress = emailaddress;
      if (description) userFields.description = description;

      let user = await User.findOne({ _id: req.params.user_id });
      if (user) {
        user = await User.findByIdAndUpdate(
          { _id: req.params.user_id },
          { $set: userFields },
          { new: true }
        );
      }

      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route        DELETE api/user/:user_id
//@desc         Delete User
//@access       public
router.delete('/:user_id', async (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin', '*');
    const users = await User.findByIdAndDelete({ _id: req.params.user_id });
    res.send('User Deleted Successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

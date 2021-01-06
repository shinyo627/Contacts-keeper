const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send(`Get a user's all contacts`);
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route   PUT api/contacts:id
// @desc    Update/Edit a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update/Edit contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/', (req, res) => {
  res.send('Delete a contact');
});

// export Route
module.exports = router;

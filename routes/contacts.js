const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validation = require('../middleware/validate');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validation.saveContact, contactsController.createNewContact);

router.put('/:id', validation.saveContact, contactsController.editContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;

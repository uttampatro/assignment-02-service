const express = require('express');
const { creatingUser, getAllUser, deletingUser, updatingUser } = require('../controllers/users');

const router = express.Router();

router.post('/createUser', creatingUser);
router.get('/getUserList', getAllUser);
router.delete('/deleteUser/:id', deletingUser);
router.put('/updateUser/:id', updatingUser);



module.exports = router;

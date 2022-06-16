const express = require('express')
const router = express.Router()
const controller = require('../controllers/banking-controller')

router.post('/banking/addCustomer',controller.create)

router.get('/banking/getAllCustomers',controller.getAll)
router.get('/banking/getById/:id',controller.getById)
router.put('/banking/updateById/:id',controller.updateById)
router.get('/banking/deleteById/:id',controller.deleteById)
module.exports = router

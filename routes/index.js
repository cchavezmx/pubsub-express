const express = require('express')
const router = express.Router()

router.use(express.urlencoded({ extended: true }))
router.use(express.json({ extended: true }))

const { Controllers } = require('../controllers')

// router.post('/api/v1/pubsub', Controllers.creteMessage)
router.get('/api/v1/pubsub', Controllers.getMessage)
router.post('/api/v1/subscriptions', Controllers.subscription)

module.exports = router
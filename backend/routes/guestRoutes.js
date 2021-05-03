const guestRouter = require('express').Router()
const authMiddleWare = require('../middlewares/authenication')
const guestController = require('../controllers/guestController')
const notFound = require('./404')

guestRouter.use(authMiddleWare.isAuth)
guestRouter.get('/', guestController.getGuestList)
guestRouter.get('/:id', guestController.getGuest)
guestRouter.post('/', guestController.createGuest)
guestRouter.put('/:id', guestController.updateGuest)
guestRouter.delete('/:id', guestController.deleteGuest)
guestRouter.use(notFound);
module.exports = guestRouter
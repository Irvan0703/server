const router = require('express').Router();
const { police_check } = require('../../middleware');
const deliveryAddressController = require('./controller');

router.post('/delivery-dddresses',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
);
router.get('/delivery-dddresses',
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.index
);
router.put('/delivery-dddresses/:id',deliveryAddressController.update);
router.delete('/delivery-dddresses/:id',deliveryAddressController.destroy);

module.exports = router;
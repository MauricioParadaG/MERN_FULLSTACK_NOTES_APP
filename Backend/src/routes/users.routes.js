const {Router} = require('express');
const router = Router();

router.route('/api/users')
    .get((req,res) => res.send('Users Routes'))

module.exports = router;
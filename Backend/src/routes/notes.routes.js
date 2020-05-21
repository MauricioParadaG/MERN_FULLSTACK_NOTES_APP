const { Router } = require('express');
const router = Router();

router.route('/api/notes')
    .get((req,res) => res.send('Notes Routes'))
  //  .post()

    /*
router.route('/api/notes/:id')
    .get()
    .put()
    .delete()
*/

module.exports = router;
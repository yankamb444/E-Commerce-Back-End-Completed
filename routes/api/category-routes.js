const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');
const {
  findOne
} = require('../../models/Product');

// The `/api/categories` endpoint

// .create() 
//  read: .findAll(), .findOne() <~ similar to select  
// .update()
// delete .destroy()
router.get('/', async (req, res) => {
  console.log("dfshafhdio;fahiofaifdfi;oseoa");
  // find all categories
  // be sure to include its associated Products

  try {
    const data = await Category.findAll({
      include: [Product]
    })
    res.json(data);
  } catch (err) {
    res.json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    }).then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(data => res.json(data))
    .catch(err => res.json(err));
});

// put request
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data))
    .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
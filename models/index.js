// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - these are the associations: product belongs to category since a category has many products BUT a product can only go in ONE category EX product of basketball belongs to the category of sports but the basketball product is just a basketball while the sports category can have baseballs, archery, track, etc. 

// In this case the category_id is how the product and category are linked 
Product.belongsTo(Category, {
  foreignKey: "category_id"
})


// Categories have many Products
Category.hasMany(Product)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
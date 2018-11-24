var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');

exports.addBulkCart = function(req, res) {
  //   console.log(req.body.products);
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');
      userId = req.body.products[0].userId;
      db.collection('carts')
        .find({
          userId: req.body.products[0].userId
        })
        .toArray(function(err, docs) {
          if (err) {
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            if (docs && docs.length == 0) {
              db.collection('carts').insertMany(req.body.products, function(
                err,
                docs
              ) {
                if (err) {
                  return res
                    .status(400)
                    .json({ message: 'Something Wrong Happened' });
                } else {
                  res.json(docs);
                }
              });
            } else {
              // res.json(docs);
              let cartDBArray = docs;
              let products = req.body.products;
              let productArray = [];
              let notAdded = 0;
              let added = 0;
              addedArray = [];
              notAddedArray = [];
              products.forEach(product => {
                let productFound = false;
                cartDBArray.forEach(prod => {
                  if (
                    prod.productId == product.productId
                  ) {
                    productFound = true;
                    let newQty =
                      Number(prod.productQuantity) +
                      Number(product.productQuantity);
                    //   console.log(newQty, prod.maxQty);
                    if (Number(newQty <= Number(prod.maxQty))) {
                      added += 1;
                      prod.productQuantity = newQty;
                    } else {
                      notAdded += 1;
                    }

                    if(addedArray.indexOf(prod.productId) == -1) {
                        productArray.push(prod);
                        addedArray.push(prod.productId);
                    }
                  }
                  cartDBArray.forEach(function(prod) {
                    if (addedArray.indexOf(prod.productId) == -1) {
                      productArray.push(prod);
                      addedArray.push(prod.productId);
                    }
                  });

                  products.forEach(function(prod) {
                    if (addedArray.indexOf(prod.productId) == -1) {
                      added += 1;
                      productArray.push(prod);
                      addedArray.push(prod.productId);
                    }
                  });
                });
              });

              db.collection('carts').deleteMany(
                {
                  userId: userId
                },
                function(err, docs) {
                  if (err) {
                    return res
                      .status(400)
                      .json({ message: 'Something Wrong Happened' });
                  } else {
                    // console.log(docs.deletedCount);
                    console.log(productArray);
                    db.collection('carts').insertMany(productArray, function(
                      err,
                      docs
                    ) {
                      if (err) {
                        return res.json({
                          message: 'Something Wrong Happened'
                        });
                      } else {
                        res.json({
                          docs: docs,
                          added: added,
                          notAdded: notAdded
                        });
                      }
                    });
                  }
                }
              );
            }
          }
        });
    }
  });
};

exports.getCartItems = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      var db = client.db('powerprogrammer');
      userId = req.body.userId;
      db.collection('carts')
        .find({
          userId: userId
        })
        .toArray(function(err, docs) {
          if (err) {
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            res.json(docs);
          }
        });
    }
  });
};

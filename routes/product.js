const express = require("express");
const connection = require("../connection");

const router = express.Router();

router.post("/create", (req, res, next) => {
    let product = req.body;
    query = "INSERT INTO product (name,description,price) values (?,?,?)";
    connection.query(query, [product.name, product.description, product.price], (err, result) => {
        if (err) {
           return res.status(500).json({
                error: err
            });
        } else {
            return res.status(200).json({
                message: "Product created successfully"
            });
        }
    });
});

router.get("/read", (req, res, next) => {
    let query = "SELECT * FROM product";
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            return res.status(200).json({
                products: result

            });
        }
    });
});


router.put("/update/:id", (req, res, next) => {
    let product = req.body;
    let id = req.params.id;

    //check if product exists
    let checkQuery = `SELECT * FROM product WHERE id = ${id}`;
    connection
        .query
        (checkQuery, [id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                if (result.length == 0) {
                    return res.status(404).json({
                        message: "Product not found"
                    });
                }
            }
        });
            
    let query = "UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?"; 
    connection
        .query  
        (query, [product.name, product.description, product.price,id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                return res.status(200).json({
                    message: "Product updated successfully"
                });
            }
        });
});


router.delete("/delete/:id", (req, res, next) => {
    let id = req.params.id;
    let query = "DELETE FROM product WHERE id = ?";
    connection
        .query
        (query, [id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                return res.status(200).json({
                    message: "Product deleted successfully"
                });
            }
        });
});

module.exports = router;

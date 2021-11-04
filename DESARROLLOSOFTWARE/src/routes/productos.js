const express = require("express");
const router = express.Router("colors");
var colors = require("colors");

const mysqlConnection = require("../database");

router.get("/productos", (red, res) => {
    mysqlConnection.query("SELECT * FROM productos", (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log("".red , err);
        }
    });
});

router.get('/productos/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM productos WHERE id_producto=?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(''.red ,err);
        }
    });
});

router.post('/productos', (req, res) => {
    const {descripcion, valor_unitario} = req.body;
    mysqlConnection.query('INSERT INTO productos (descripcion, valor_unitario) VALUES (?,?)', [descripcion, valor_unitario], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'User insert'});
        }else{
            console.log(''.red , err);
        }
    });
});

router.put('/productos/:id', (req, res) => {
    const {id} = req.params;
    const {descripcion, valor_unitario} = req.body;
    mysqlConnection.query('UPDATE productos SET descripcion=?, valor_unitario=? WHERE id_producto=?', [descripcion, valor_unitario, id], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'User update'});
        }else{
            console.log(''.red, err);
        }
    });
});

router.delete('/productos/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM productos WHERE id_producto=?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'User delete'});
        }else{
            console.log(''.red , err);
        }
    });
});

module.exports = router;
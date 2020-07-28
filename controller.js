let response = require('./res');
let connection = require('./conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM dokter', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello cuyy, meh ngopo?", res)
};

exports.findUsers = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM dokter where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var nama = req.body.nama;
    var keahlian = req.body.keahlian;

    connection.query('INSERT INTO dokter (nama, keahlian) values (?,?)',
    [ nama, keahlian ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var user_id = req.body.user_id;
    var nama = req.body.nama;
    var keahlian = req.body.keahlian;

    connection.query('UPDATE dokter SET nama = ?, keahlian = ? WHERE id = ?',
    [ nama, keahlian, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    var user_id = req.body.user_id;

    connection.query('DELETE FROM dokter WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};
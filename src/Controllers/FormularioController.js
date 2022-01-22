const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Formulario', (err, Formulario) => {
            if (err) {
                res.json(err);
            }
            res.render('Formulario', {
                data: Formulario
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Formulario set ?', [data], (err, Formulario) => {
            res.redirect('/')
        });
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Formulario WHERE id = ?', [id], (err, Formulario) => {
            res.render('Edit_Formulario', {
                data: Formulario[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newFormulario = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Formulario set ? WHERE id = ?', [newFormulario, id], (err, Formulario) => {
            res.redirect('/')
        });
    })
};


controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Formulario WHERE id = ?', [id], (err, Formulario) => {
            res.redirect('/');
        });
    })
};

controller.update_status = (req, res) => {
    const { id } = req.params;
    const newFormulario = req.body;

    if (req.body.status == "true") {
        newFormulario.status = false;

    } else {
        newFormulario.status = true;

    }

    req.getConnection((err, conn) => {
        conn.query('UPDATE Formulario set ? WHERE id = ?', [newFormulario, id], (err, Formulario) => {
            res.redirect('/')
        });
    })
};

module.exports = controller;
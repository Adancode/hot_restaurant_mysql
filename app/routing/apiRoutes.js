var connection = require("../config/connection.js");

module.exports = function(app) {
    // API GET Requests with MySQL queries within.
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the database)
    // ---------------------------------------------------------------------------

    app.get("/api/tables", function(req, res) {

        connection.query("SELECT * FROM tables", function(err, data) {
            if (err)
                throw err;

            res.send(data);
        });

    });

    app.get("/api/waitlist", function(req, res) {

        connection.query("SELECT * FROM waiting_list", function(err, data) {
            if (err)
                throw err;

            res.send(data);
        });

    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate table in the databse.
    // ---------------------------------------------------------------------------

    app.post("/api/tables", function(req, res) {

        connection.query("SELECT * FROM tables", function(err, data) {
            if (err)
                throw err;

            if (data.length < 5) {

                connection.query("INSERT INTO tables SET ?", {
                    customerName: req.body.customerName,
                    customerEmail: req.body.customerEmail,
                    customerID: req.body.customerID,
                    phoneNumber: req.body.phoneNumber
                }, function(err, data) {
                    res.send(data);
                });

            } else {
                //console.log("triggering else statement");
                connection.query("INSERT INTO waiting_list SET ?", {
                    customerName: req.body.customerName,
                    customerEmail: req.body.customerEmail,
                    customerID: req.body.customerID,
                    phoneNumber: req.body.phoneNumber
                }, function(err, data) {
                    res.send();
                });

            }
        });

    });

    // Here is code to delete the contents of every table in the database when the "clear tables" link is clicked, which sends a get request to api/clear, which then redirects the user to /tables after the tables in the database are emptied out.

    app.post("/api/clear", function(req, res) {

        connection.query("TRUNCATE TABLE tables", function(err, data) {
            if (err)
                throw err;
            }
        );

        connection.query("TRUNCATE TABLE waiting_list", function(err, data) {
            if (err)
                throw err;
            }
        );

    });

};

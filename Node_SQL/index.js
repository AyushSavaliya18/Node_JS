const express = require("express")
const path = require("path");
const con = require("./DB/database.js")
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"));

app.get("/signup", (req, res) => {
    res.render("signup"); // Render the signup.ejs file
});

// Handle form submission
app.post("/signup", (req, res) => {
    const { email, password } = req.body;

    // Insert user into database
    const query = "INSERT INTO login (email, password) VALUES (?, ?)";
    con.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Database insertion error:", err);

            // Handle duplicate email error
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).send("Email already registered.");
            }

            return res.status(500).send("Internal Server Error");
        }

        // Success response
        res.redirect("/student");
    });
});

app.get("/all_login_User", async function (req, res) {
    con.connect(function (err) {
        if (err) {
            // console.error("Database connection failed: " + err.stack);
            return res.status(500).send("Database connection failed");
        }
        con.query("SELECT * FROM login", function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
        });
    });
});

app.post("/login", function (req, res) {
    const { email, password } = req.body;

    if (!password || !email) {
        return res.status(400).send("Email and Password are required");
    }

    con.connect(function (err) {
        if (err) {
            // console.error("Database connection failed: " + err.stack);
            return res.status(500).send("Database connection failed");
        }

        // console.log("Connected!");
        // const sql = "INSERT INTO login ( email, password) VALUES ('"+email+"','"+password+"')";
        // const sql = "INSERT INTO login ( email, password) VALUES (?,?)";
        const sql = "INSERT INTO login ( email, password) VALUES ?";

        const value = [[email, password]];

        con.query(sql, [value], function (err) {
            if (err) {
                // console.error("Error inserting record: " + err.stack);
                return res.status(500).send("Error inserting record");
            }
            // console.log("1 record inserted");
            // console.log(result);
            res.send("Record inserted successfully");
            // res, redirect("/student.ejs")
        });
    }
    );
});

app.put("/loginUpdate", function (req, res) {
    const { id, email, password } = req.body;

    if (!id || !email || !password) {
        return res.status(400).send("ID, Email, and Password are required");
    }

    const sql = "UPDATE login SET email = ?, password = ? WHERE id = ?";
    const values = [email, password, id];

    con.query(sql, values, function (err, result) {
        if (err) {
            // console.error("Error updating record: " + err.stack);
            return res.status(500).send("Error updating record");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("Record not found");
        }
        // console.log("1 record updated");
        res.status(200).send("Record updated successfully");
    });
});

app.delete("/loginDataDelete", function (req, res) {
    const { id } = req.body;

    if (!id) {
        return res.status(400).send("ID is required");
    }

    const sql = "DELETE FROM login WHERE id = ?";
    const values = [id];

    con.query(sql, values, function (err, result) {
        if (err) {
            // console.error("Error deleting record: " + err.stack);
            return res.status(500).send("Error deleting record");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("Record not found");
        }
        // console.log("1 record deleted");
        res.status(200).send("Record deleted successfully");
    });
});

app.get('/student', function (req, res) {
    con.connect(function (error) {
        if (error) console.log(error)

        const sql = "SELECT * FROM login";

        con.query(sql, function (error, result) {
            if (error) console.log(error)
            // console.log(result)
            res.render(__dirname + "/student.ejs", { student: result })
        })
        // con.end();
    })
})

app.get("/delete-Student", function (req, res) {
    con.connect(function (error) {
        if (error) console.log(error)

        const sql = "DELETE FROM login WHERE id = ?";

        const id = req.query.id;

        con.query(sql, [id], function (error, result) {
            if (error) console.log(error)

            res.redirect("/student")
        })
    })
})

app.get("/update-student", function (req, res) {
    con.connect(function (error) {
        if (error) console.log(error)

        const sql = "SELECT * FROM login WHERE id = ?";

        const id = req.query.id;

        con.query(sql, [id], function (error, result) {
            if (error) console.log(error)

            res.render(__dirname + "/update_student.ejs", { student: result })
        })
        // con.end();
    })
})

app.post("/update-student", function (req, res) {
    const { id, email, password } = req.body;

    if (!id || !email || !password) {
        return res.status(400).send("ID, Email, and Password are required");
    }

    const sql = "UPDATE login SET email = ?, password = ? WHERE id = ?";
    const values = [email, password, id];

    con.query(sql, values, function (err, result) {
        if (err) {
            // console.error("Error updating record: " + err.stack);
            return res.status(500).send("Error updating record");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("Record not found");
        }
        // console.log("1 record updated");
        // res.status(200).send("Record updated successfully");
        res.redirect("/student")
    });
    // con.end();
});

app.get("/search-student", function (req, res) {
    con.connect(function (error) {
        if (error) console.log(error)

        const sql = "SELECT * FROM login";

        con.query(sql, function (error, result) {
            if (error) console.log(error)
            // console.log(result)
            res.render(__dirname + "/search_student.ejs", { student: result })
        })
        // con.end();
    })
})

app.get("/search", function (req, res) {
    var email = req.query.email;
    var password = req.query.password

    con.connect(function (error) {
        if (error) console.log(error);;

        // var sql = " SELECT * from login whear email LIKE '%" + email + "%' AND password LIKE '%" + password + "%' ";
        var sql = "SELECT * FROM login WHERE email LIKE ? AND password LIKE ?";
        var values = ['%' + email + '%', '%' + password + '%'];

        con.query(sql, values, function (error, result) {
            if (error) console.log(error);

            res.render(__dirname + "/search_student.ejs", { student: result })
        })
    })

})

app.listen(3000, () => {
    console.log("DB Connected...");
})
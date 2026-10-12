import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const employees = [
    {
        id: 1,
        name: "Tejas",
        role: "Developer"
    },
    {
        id: 2,
        name: "Rahul",
        role: "Tester"
    },
    {
        id: 3,
        name: "Amit",
        role: "HR"
    }
];

app.get("/api/employees", (req, res) => {
    res.json(employees);
});


app.post("/api/employees", (req, res) => {
    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        role: req.body.role
    };

    employees.push(employee);

    res.status(201).json(employee);
});

app.get("/api/employees/:id", (req, res) => {

    const id = Number(req.params.id);

    const employee = employees.find(
        employee => employee.id === id
    );

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.json(employee);
});

app.delete("/api/employee/:id", (req, res) => {

    employees.pop(employees[req.id]);

})

const departments = [
    {
        id: 1,
        name: "IT"
    },
    {
        id: 2,
        name: "HR"
    },
    {
        id: 3,
        name: "Developer"
    }
]

app.get("/api/departments", (req, res) => {
    res.json(departments)
})


app.post("/api/departments", (req, res) => {
    const department = {
        id: departments.length + 1,
        name: req.body.name,
    };

    deparments.push(department);

    res.status(201).json(department);
});

app.get("/api/departments/:id", (req, res) => {

    const id = Number(req.params.id);

    const department = departments.find(
        department => department.id === id
    );

    if (!department) {
        return res.status(404).json({
            message: "Department not found"
        });
    }

    res.json(department);
});


app.put("/api/departments/:id", (req, res) => {

    const id = Number(req.params.id);

    const department = deparments.find(
        department => department.id === id
    )

    if (!department) {
        return res.status(404).json({
            message: "Department not found"
        });
    }

    department.name = req.body.name;
    return res.json(department);
})

app.delete("/api/departments/:id", (req, res) => {

    const id = Number(req.params.id)

    const department = departments.find(
        department => department.id === id
    )

    if (!department) {
        return res.status(404).json({
            message: "Department not found"
        });
    }

    const remaining = departments.filter(
        department => department.id !== id
    );


    return res.json(remaining);



})

const users = [];


app.post("/api/register", (req, res) => {


    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    users.push(newUser);

    res.status(201).json(newUser);

})

app.post("/api/login", (req, res) => {

    const { email, password } = req.body;


    console.log("Login email:", req.body.email);
    console.log("Users in memory:", users.length);

    const user = users.find(
        user => user.email === email && user.password === password
    )

    if (!user) {
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }

    return res.json(user);

})



app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
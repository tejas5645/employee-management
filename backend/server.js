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


app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
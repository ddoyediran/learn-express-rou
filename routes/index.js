const express = require("express");

const router = express.Router();

const users = [];

let id = 1;

// // GET all the users
// router.get("/users", (req, res) => {
//   return res.json(users);
// });

// // GET a single user
// router.get("/users/:id", (req, res) => {
//   const user = users.find((val) => val.id === Number(req.params.id));
//   return res.json(user);
// });

// // POST user to the array
// router.post("/users", (req, res) => {
//   users.push({
//     name: req.body.name,
//     id: req.body.id,
//   });

//   return res.json({ message: "User created" });
// });

// // EDIT a particular user
// router.patch("/users/:id", (req, res) => {
//   const user = users.find((val) => val.id === Number(req.params.id));
//   user.name = req.body.name;
//   return res.json({ message: "User updated" });
// });

// // DELETE a user
// router.delete("/users/:id", (req, res) => {
//   const userIndex = users.findIndex((val) => val.id === Number(req.params.id));
//   users.splice(userIndex, 1);
//   return res.json({ message: "User deleted" });
// });

/// Alternative ///
router
  .route("")
  .get((req, res) => {
    return res.json(users);
  })
  .post((req, res) => {
    users.push({
      name: req.body.name,
      id: ++id,
    });
    return res.json({ message: "User created" });
  });

router
  .route("/:id")
  .get((req, res) => {
    const user = user.find((val) => {
      val.id === Number(req.params.id);
    });
    return res.json(user);
  })
  .patch((req, res) => {
    const user = users.find((val) => {
      val.id === Number(req.params.id);
    });
    user.name = req.body.name;
    return res.json({ message: "User data updated" });
  })
  .delete((req, res) => {
    const userIndex = users.findIndex((val) => {
      val.id === Number(req.params.id);
    });
    users.splice(userIndex, 1);
    return res.json({ message: "User data deleted" });
  });

module.exports = router;

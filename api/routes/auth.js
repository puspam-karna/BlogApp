const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register new user
router.post("/register", async (req, res) => {
  //get new user of User format
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user); //save new user
  } catch (error) {
    res.status(500).json(error);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("username missmatch!!");
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("password missmatch");
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

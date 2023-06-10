const { use } = require("../routes/user.route");
const User = require("./../models/user");
exports.get = async (req,res)=>{
    try {
        const rs = await User.find({});
        res.render("user/list",{
            users: rs
        })
    } catch (error) {
        res.send(error);
    }
};
exports.create_user = (req,res)=>{
    res.render("user/create");
};

exports.save_user = async (req,res)=>{
   
    const data = req.body;
    const user = new User(data);
    try {
        await user.save();
        res.redirect("/users/");
    } catch (error) {
        res.send(error);
    }
   
};
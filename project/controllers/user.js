const User = require("../models/user");

async function handleGetAllUsers(req, res) 
{
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
     const user = await User.findById(req.params.id);
     return res.json(user);
}

async function handleUpdateUser(req, res) {
    await User.findByIdAndUpdate(req.params.id, {lastName: "wadhwa ji"});
    return res.json({msg: "success"});
}

async function handleDeleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({msg: "deleted"});
}

async function handleCreateUser(req, res) {
    const body = req.body;
    if(!body ||!body.first_name ||!body.last_name || !body.email ||!body.gender || !body.job_title){
         return res.status(400).json({msg: "All feilds are required!!"});
    }
 
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        gender: body.gender,
        email: body.email,
        jobTitle: body.job_title
    });
 
    console.log(result);
 
    return res.status(200).json({msg: "Success"});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUser,
    handleDeleteUser,
    handleCreateUser
}
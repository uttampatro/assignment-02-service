const User = require('../entity/User');

const createUser = async ({ name, phoneNumber, email, hobbies }) => {
    const user = new User({
        name,
        phoneNumber,
        email,
        hobbies,
    });
    await user.save();
    return user;
};

const fetchAllUser = async () => {
    const movies = await User.find();
    return movies;
};

const deleteUser = async _id => {
    const user = await User.findByIdAndDelete(_id);
    return user;
};

const updateUser = async (_id, { name, phoneNumber, email, hobbies }) => {
    const user = await User.findByIdAndUpdate(_id);

    user.name = name || user.name;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.email = email || user.email;
    user.hobbies = hobbies || user.hobbies;
    await user.save();
    return user;
};

module.exports = { createUser, fetchAllUser, deleteUser, updateUser };

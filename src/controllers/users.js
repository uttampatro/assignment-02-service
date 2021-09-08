const {
    createUser,
    fetchAllUser,
    deleteUser,
    updateUser,
} = require('../services/userService');

const creatingUser = async (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const phoneNumber = req.body.phoneNumber;
        const email = req.body.email;
        const hobbies = req.body.hobbies;
        const user = await createUser({
            name,
            phoneNumber,
            email,
            hobbies,
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const userList = await fetchAllUser();
        return res.json(userList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await deleteUser({
            _id: id,
        });
        return res.json('delete user successfully');
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const updatingUser = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const phoneNumber = req.body.phoneNumber;
        const email = req.body.email;
        const hobbies = req.body.hobbies;
        const user = await updateUser(
            { _id: id },
            { name, phoneNumber, email, hobbies }
        );

        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = { creatingUser, getAllUser, deletingUser, updatingUser };

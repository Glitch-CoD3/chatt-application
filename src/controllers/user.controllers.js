import { User } from '../models/users.model.js'

const userSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const avatar = req.file;
        if (!avatar) {
            return res.status(400).json({
                message: "Avatar image is required"
            });
        }

        const user = await User.create(
            {
                name,
                email,
                password,
                avatar: avatar.path
            }
        )

        user.save();

        return res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Signup failed"
        });
    }
};



const userLogin = async (req, res) => {

    try {
        res.render('userLogin', {
            title: "Login Chatt - Application"
        })
    } catch (error) {

    }
}

const getAllUsers = async (req, res) => {

    try {
        res.render('userLogin', {
            title: "Login Chatt - Application"
        })
    } catch (error) {

    }
}

const getUsersById = async (req, res) => {

    try {
        res.render('userLogin', {
            title: "Login Chatt - Application"
        })
    } catch (error) {

    }
}


export {
    userSignUp,
    userLogin,
    getAllUsers,
    getUsersById
}
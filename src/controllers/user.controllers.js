import { User } from '../models/users.model.js'
import bcrypt from 'bcrypt';

const hashedPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}


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

        //check if user already exists
        const existedUser = await User.findOne({ email }).select('-password');
        if (existedUser) {
            return res.status(409).json({
                message: "User with this email already exists"
            });
        }


        const Hashpassword = hashedPassword(password);

        const user = await User.create(
            {
                name,
                email,
                password: Hashpassword,
                avatar: avatar.path
            }
        )

        user.save();

        const createdUser = await User.findOne({ email }).select("-password");

        if (!createdUser) {
            throw new ApiError(500, "User registration failed, try again!");
        }

        // Success response

        return res.render('userLogin', {
            title: "login Chatt-Application"
        })

        // return res.status(201).json({
        //     message: "User registered successfully",
        //     user:createdUser
        // });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Signup failed"
        });
    }
};



const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // remove password safely
        const userData = user.toObject();
        delete userData.password;


        // Success response
        return res.status(200).render('home', {
            user: userData
        })



    } catch (error) {
        return res.status(500).json({
            message: error.message || "Login failed"
        });
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
const userSignUp = async(req, res)=>{

    try {
        res.render('userSignup',{
            title:"login Chatt-Application"
        })
    } catch (error) {
        throw new ApiError (400, "Wrong userLogin")
    }
}


const userLogin = async(req, res)=>{

    try {
        res.render('userLogin', {
            title:"Login Chatt - Application"
        })
    } catch (error) {
        
    }
}

const getAllUsers = async(req, res)=>{

    try {
        res.render('userLogin', {
            title:"Login Chatt - Application"
        })
    } catch (error) {
        
    }
}
const getUsersById = async(req, res)=>{

    try {
        res.render('userLogin', {
            title:"Login Chatt - Application"
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
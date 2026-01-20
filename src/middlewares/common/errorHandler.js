//404 not found error handler

import createHttpError from "http-errors";

export const notFoundHandler = (req, res, next)=>{
    next(
        createHttpError(404, "Content not found!")
    )
}


//default error handler
export const errorHandler= (err, req, res, next)=>{
    res.locals.error= process.env.NODE_ENV== 'development' ? err: {message: err.message};
    res.status(err.status || 500)
    

    if(!res.locals.html){
        //html response
        res.render("notFoundError", {
            title: 'Error Page'
        })
    }
    else{
        //json response
        res.json(res.locals.error)
    }
}

class AppErorr extends Error{
    constructor(message,statusCode){
        super(message)

        this.statusCode = statusCode || 500
        this.status = `${this.statusCode}`.startsWith('4')?"fail":"error"
        this.isOprational = true

        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = AppErorr
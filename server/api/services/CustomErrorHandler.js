class CustomErrorHandler extends Error{
    constructor(status,msg){
        this.status = status
        this.message = msg 
    }

    static notExist(message){
        return new CustomErrorHandler(409,message)
    }
}

module.exports = CustomErrorHandler
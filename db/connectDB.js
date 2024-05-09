import mongoose from "mongoose";


function connectToDB (url){
    return mongoose.connect(url)
}

export default connectToDB
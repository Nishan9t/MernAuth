const mongoose =require('mongoose');

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{

        mongoose.connect(process.env.DB,connectionParams);
        console.log("connected db successfully")

    }catch(err){
        console.log(err);
        console.log("db not connected")

    }
}
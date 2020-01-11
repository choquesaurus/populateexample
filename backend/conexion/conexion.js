require('dotenv').config();
import mongoose from 'mongoose';
export default mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(data=>console.log('db is running')).catch(err=>console.error(err));
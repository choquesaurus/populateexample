import mongoose,{Schema} from 'mongoose';
export default mongoose.model('libro',new Schema({
    nombre:String,
    edicion:String,
    author:{type:Schema.Types.ObjectId,ref:'author'}
},{collection:'libro'}));
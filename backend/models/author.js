import mongoose,{Schema} from 'mongoose';
export default mongoose.model('author',new Schema({
    nombre:String,
    apellido:String,
    libro:[{type:Schema.Types.ObjectId,ref:'libro'}]
},{collection:'author'}));
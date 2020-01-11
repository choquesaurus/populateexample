import {Router}from 'express';
import author from '../models/author';
import libro from '../models/libro';
import {mongoose} from 'mongoose';
const router=Router();


router.post('/savelibro',async(req,res)=>{
    const {nombre,edicion,author:autor}=req.body; 
    
    new libro({
      nombre,
      edicion,
      author:autor   
     }).save().then(async data => {
        const {author:authorid,_id} = data;
        await author.updateOne({_id:authorid},{
            $push:{
                libro:{
                    $each:[_id]
                }
            }
        });
        res.send({message:'libro agregado'});
     })
});
router.get('/findlibro/:name',async (req,res)=>{
    
    res.send(await libro.findOne({nombre:req.params.name})
    .populate('author','nombre'))
})
router.get('/author',async(req,res)=>{
    
    res.send(await author.findOne({nombre:'Daniel'}).populate('libro'));
})


// router.get('/api',(req,resp,next)=>{
//     resp.send({message:"hello"});
// });
// router.get('/listar',async (req,res,next)=>{
//     const {precio} =await products.findById('5e1542661c9d4400001d2bd7');
//     const total=await parseFloat(precio)+80;  
    
//     res.send(await orders);

// });

// router.get('/list/orders',async(req,res,next)=>{    
//     const data=await orders.find().populate('product').exec();
//     res.send({data});
// })
// router.get('/cotizar/:id',async(req,res,next)=>{
//         res.send(await orders.find().populate('products'));
// });
export default router;
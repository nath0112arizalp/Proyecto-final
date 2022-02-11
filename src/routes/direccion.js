const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')


const imagen = require('../models/images')

const storage = multer.diskStorage({
    destination:path.join(__dirname , '../public'),
    filename:(req,file,cb)=>{cb(null,file.originalname)}
})
const upload = multer({ storage, dest: path.join(__dirname , 'public')}).single('img');

router.get('/data', async (req ,res)=>{
    const buscar = await imagen.find();
    res.json(buscar);
})
router.get('/',async(req,res)=>{
    const buscar= await  imagen.find();
    res.render("index")
})
router.post('/',upload,(req,res)=>{
   
    const img = new imagen(req.file)
    img.save()
    res.redirect("/")
})

router.delete('/:id',async (req,res)=>{

   
   const imagencita = await imagen.findById(req.params.id);
   await imagen.findByIdAndDelete(req.params.id)
   res.json({ imagen: 'borrada'})
   
   })

module.exports= router;
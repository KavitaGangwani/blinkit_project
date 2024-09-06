const prodModel = require('./../models/product.js');


const addprod = async (req, res) => {

    let data = req.body;
    // console.log(req.files, data)
    let images = []
    let prodImage
    (req.files).forEach((v,i)=>{
        if(v.fieldname === 'images'){
            images.push(v.filename)
        }
        if(v.fieldname === 'prodImg'){
            prodImage = v.filename
        }

    })

    const newProd = new prodModel({
    prodName :data.prodName,
    price:data.price,
    category:data.category,
    subcategory:data.subcategory,
    quantity :data.quantity,
    supplier:data.supplier,
    prodDesc : data.prodDesc,
    prodImg : prodImage,
    images: images,
    prodStatus : data.prodStatus
    })
  
    try {

        const response = await newProd.save()
        console.log(response)
        res.status(200).json({ status: true, message: 'add product api' })

    } catch (error) {

        res.status(500).json({ status: false, message: 'Something went wrong' })

    }


}

const viewProd =  async (req, res) => {

    try {

        prod = await prodModel.find().populate('category').populate('subcategory').populate('supplier');

        const finprods = prod.map((element, index) => (

            {
                ...element._doc, prodImg: `${req.protocol}://${req.get('host')}/uploads/${element.prodImg}`,
                images: (element.images).map((v,i)=>(

                    `${req.protocol}://${req.get('host')}/uploads/${v}`

                ))
                
            }
        ))

        res.status(200).json({ status: true, message: 'view products', data: finprods })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

   

}

const byProdName = async (req, res) => {

    let prodName = req.params.prodName
    console.log(req.params.prodName)

    try {

        const prod = await prodModel.findOne({ prodName: prodName }).populate('category').populate('subcategory').populate('supplier')

        let finprods = {
            ...prod._doc, prodImg: `${req.protocol}://${req.get('host')}/uploads/${prod.prodImg}`,
            images: (prod.images).map((v,i)=>(

                `${req.protocol}://${req.get('host')}/uploads/${v}`

            ))
            
        }


        
        

        res.status(200).json({ status: true, message: 'view prod by name', data: finprods })


    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}

const prodTrue = async (req, res) => {


    try {
        const categories = await categoryModel.find({ categoryStatus: true })
        res.status(200).json({ status: true, message: 'view category', data: categories })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}
const updateProd = async(req,res)=>{
    const id = req.params
    let data = req.body;
    // console.log(req.files, data)
    let images = []
    let prodImage
    (req.files).forEach((v,i)=>{
        if(v.fieldname === 'images'){
            images.push(v.filename)
        }
        if(v.fieldname === 'prodImg'){
            prodImage = v.filename
        }

    })


    try {
        const prod = await prodModel.updateOne(id,
          { $set:{  prodName :data.prodName,
            price:data.price,
            category:data.category,
            subcategory:data.subcategory,
            quantity :data.quantity,
            supplier:data.supplier,
            prodDesc : data.prodDesc,
            prodImg : prodImage,
            images: images,
            prodStatus : data.prodStatus
            }
          }
        )
        res.status(200).json({ status: true, message: 'updated product', data: prod})
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong'})
    }
   
}

const deleteProd = async(req,res)=>{
    const id = req.params
    console.log(id.id)
   


    try {
        const categories = await categoryModel.findByIdAndDelete(id.id)
        const subcategories = await subcategoryModel.deleteMany({categoryName:id.id})
        const prods = await prodModel.deleteMany({category:{_id:id.id}})
        
        res.status(200).json({ status: true, message: 'deleted category', data: categories ,subdata:subcategories,prod :prods })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong'})
    }
   
}
module.exports = {addprod,viewProd, byProdName, prodTrue,updateProd,deleteProd}
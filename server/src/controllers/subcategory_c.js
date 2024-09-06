const subcategoryModel = require('./../models/subcat.js');
const prodModel = require('./../models/product.js');



const addSubCat = async (req, res) => {
    let data = req.body
    console.log(data, 'req');

    const newSubCat = new subcategoryModel({
        categoryName: data.categoryName,
        Subcategory: data.Subcategory,
        SubcategoryStatus: data.SubcategoryStatus
    })
    console.log(newSubCat)
    try {
        const response = await newSubCat.save();
        console.log('Save response:', response);


        res.status(200).json({ status: true, message: 'Subcategory added successfully', response });
    } catch (error) {
        console.error('Error saving subcategory:', error);

        if (error.code === 11000) { // Duplicate key error code
            res.status(400).json({ status: false, message: 'Duplicate entry detected. Subcategory already exists.' });
        } else {
            res.status(500).json({ status: false, message: 'Something went wrong', error: error.message });
        }
    }
}

const viewSubCat =  async (req, res) => {
    let product = {}

    try {

        subcat = await subcategoryModel.find().populate('categoryName');
        prod = await prodModel.find().populate('subcategory')

       prod.forEach((v,i)=>{

        let newProd = {
            ...v._doc, prodImg: `${req.protocol}://${req.get('host')}/uploads/${v.prodImg}`,
            images: (v.images).map((v,i)=>(

                `${req.protocol}://${req.get('host')}/uploads/${v}`

            ))
            
       } 
      

            subcat.forEach((element, index) => {

                if (newProd.subcategory.Subcategory === element.Subcategory) {


                    if (!product[index]) {
                        product[index] = []
                    }

                    



                    product[index].push(newProd)

                    

                }
            })
        })

        const finalSub = subcat.map((cat, index) => (

            {
                ...cat._doc, products : product[index] || []
            }
        ))


        res.status(200).json({ status: true, message: 'view sub category', data: finalSub })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }
 

}

const SubCatbyCat =  async (req, res) => {
    const catId = req.params.byCat

    try {

        cat = await subcategoryModel.find({categoryName:catId})


        res.status(200).json({ status: true, message: 'view sub category', data: cat })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}

const SubCatbySub =  async (req, res) => {
    const sub = req.params.bySub
    console.log(sub)

    try {

        cat = await subcategoryModel.findOne({Subcategory:sub})


        res.status(200).json({ status: true, message: 'view sub category by uts name', data: cat })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}

const updateSubCat = async(req,res)=>{
    const subname = req.params
    const data = req.body
    console.log(subname)
   


    try {
        const subcategories = await subcategoryModel.findOneAndUpdate({Subcategory:subname.subname},
           {$set:  {categoryName: data.categoryName,
            Subcategory: data.Subcategory,
            SubcategoryStatus: data.SubcategoryStatus}
        } 
              
    )
        
        res.status(200).json({ status: true, message: 'updated subcategory', data: subcategories})
    } catch (error) {

        res.status(500).json({ status: false, message: 'Something went wrong'})
    }
   
}

const deleteSubCat = async(req,res)=>{
    const subname = req.params
    console.log(subname)
   


    try {
        const subcategories = await subcategoryModel.findOneAndDelete({Subcategory:subname.subname})
        const prods = await prodModel.deleteMany({category:{categoryName:subname.subname}})
        
        
        res.status(200).json({ status: true, message: 'deleted category', data: subcategories, prod:prods })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong'})
    }
   
}
module.exports= {addSubCat,viewSubCat,SubCatbyCat,updateSubCat,deleteSubCat,SubCatbySub}
const categoryModel = require('./../models/category.js');
const subcategoryModel = require('./../models/subcat.js');
const prodModel = require('./../models/product.js');


let subCat = {};
let subcategory = [];
let products =[]
let product = {}


const addCat = async (req, res) => {

    let data = req.body;
    console.log(req.file, data)
    let categoryImage = req.file.filename



    const newCat = new categoryModel({
        categoryName: data.categoryName,
        categoryImage,
        categoryStatus: data.categoryStatus === 'true',



    })
    try {

        const response = await newCat.save()
        console.log(response)

        res.status(200).json({ status: true, message: 'add category api' })

    } catch (error) {

        res.status(500).json({ status: false, message: 'Something went wrong' })

    }



}

const viewCat =  async (req, res) => {

    try {

        const categories = await categoryModel.find()

        cat = await subcategoryModel.find().populate('categoryName')
        prod = await prodModel.find().populate('category')

        cat.forEach((s, i) => {


            let catmap = categories.forEach((element, index) => {


                //     const categoryName = s.categoryName?.categoryName;
                // if (!categoryName) {
                //     console.error(`subcategory with _id ${s._id} has undefined categoryName`);
                //     return; // Skip if categoryName is undefined
                // }
                // console.log( s.categoryName.categoryName)

                if (element.categoryName === s.categoryName.categoryName) {

                    if (!subCat[index]) {
                        subCat[index] = []
                    }
                    subCat[index].push(s.Subcategory)


                }
            })


        })

        prod.forEach((s, i) => {
            
            let newProd = {
                ...s._doc, prodImg: `${req.protocol}://${req.get('host')}/uploads/${s.prodImg}`,
                images: (s.images).map((v,i)=>(

                    `${req.protocol}://${req.get('host')}/uploads/${v}`

                ))
                
           } 
        

            let catmap = categories.forEach((element, index) => {

                if (element.categoryName === newProd.category.categoryName) {

                    if (!product[index]) {
                        product[index] = []
                    }
                    product[index].push(newProd)
                }
            })


        })

        const fincategories = categories.map((cat, index) => (

            {
                ...cat._doc, categoryImage: `${req.protocol}://${req.get('host')}/uploads/${cat.categoryImage}`,
                subcategories: subCat[index] || [],
                products : product[index] || []
                
            }
        ))



        res.status(200).json({ status: true, message: 'view category', data: fincategories })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

    subCat = {}
    product ={}

}

const byCatName = async (req, res) => {

    let catName = req.params.catName
    // console.log(req.params.catName)

    try {

        const categories = await categoryModel.findOne({ categoryName: catName })


        cat = await subcategoryModel.find().populate('categoryName')
        prod = await prodModel.find().populate('category')

        cat.map((v, i) => {

            if (v.categoryName.categoryName === categories.categoryName) {

                let x = subcategory.push(v.Subcategory)

            }

        })
        prod.map((s, i) => {
            let newProd = {
                ...s._doc, prodImg: `${req.protocol}://${req.get('host')}/uploads/${s.prodImg}`,
                images: (s.images).map((v,i)=>(

                    `${req.protocol}://${req.get('host')}/uploads/${v}`

                ))
                
           } 

            if (newProd.category.categoryName === categories.categoryName) {

                let x = products.push(newProd)

            }

        })
       
        let fincategories = { ...categories._doc, subcategories: subcategory,
                                                  products:products
         }


        subcategory = [],
        products = []
        


        res.status(200).json({ status: true, message: 'view category', data: fincategories })


    } catch (error) {
        // console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}

const byCatId = async (req, res) => {
    

    let catId = req.params.catId
    

    try {

        const categories = await categoryModel.findById(catId)


        cat = await subcategoryModel.find().populate('categoryName')
        prod = await

        cat.map((v, i) => {

            if (v.categoryName.categoryName === categories.categoryName) {

                // let obj = {}
                // if(!obj[v._id]){
                //     obj[v.id] = v.Subcategory
                // }
                // console.log(obj)
                let x = subcategory.push(v.Subcategory)

            }

        })
        // console.log(subcategory)
        let fincategories = { ...categories._doc, subcategories: subcategory,
             categoryImage: `${req.protocol}://${req.get('host')}/uploads/${categories.categoryImage}`
        }


        subcategory = []
      


        res.status(200).json({ status: true, message: 'view category', data: fincategories })


    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong whattttt' })
    }

}


const catTrue = async (req, res) => {


    try {
        const categories = await categoryModel.find({ categoryStatus: true })
        res.status(200).json({ status: true, message: 'view category', data: categories })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}

const updateCat = async(req,res)=>{
    const id = req.params
    let data = req.body;
    // console.log(id, data,req.file)
    
    let categoryImage = req.file.filename


    try {
        const categories = await categoryModel.updateOne(id,
          { $set:{ categoryName: data.categoryName,
            categoryImage,
            categoryStatus: data.categoryStatus === 'true'}
          }
        )
        res.status(200).json({ status: true, message: 'updated category', data: categories})
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong'})
    }
   
}
const deleteCat = async(req,res)=>{
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


module.exports = {addCat,viewCat, byCatName, catTrue,byCatId,updateCat,deleteCat }
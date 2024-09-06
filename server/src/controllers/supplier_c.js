const supplierModel = require('./../models/supplier.js');
const prodModel = require('./../models/product.js');


let products = []

const addSupplier = async (req, res) => {

    let data = req.body;
    console.log(data)
    
    
    const newSup= new supplierModel ({
        supplierName : data.supplier ,
        supStatus: data.supplierStatus
    })
    // console.log(newSup)
    try {

        const response = await newSup.save()
        console.log(response)

        res.status(200).json({ status: true, message: 'add supplier api' })

    } catch (error) {

        res.status(500).json({ status: false, message: 'Something went wrong' })

    }

}

const viewSupp = async (req, res) => {
    let product = {}

    try {

        supplier = await supplierModel.find()
        prod = await prodModel.find().populate('supplier')

       prod.forEach((v,i)=>{
        // console.log(v)

        let newProd = {
            ...v._doc, prodImg: `${req.protocol}://${req.get('host')}/uploads/${v.prodImg}`,
            images: (v.images).map((v,i)=>(

                `${req.protocol}://${req.get('host')}/uploads/${v}`

            ))
            
       } 

            supplier.forEach((element, index) => {

                if (newProd.supplier.supplierName === element.supplierName) {

                    

                    if (!product[index]) {
                        product[index] = []
                    }

                    



                    product[index].push(newProd)

                    

                }
            })
        })

        const finalSup = supplier.map((cat, index) => (

            {
                ...cat._doc, products : product[index] || []
            }
        ))


        res.status(200).json({ status: true, message: 'view supplier', data: finalSup })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }
 
}

const viewSupName = async (req, res) => {

        let supName = req.params.supName
       
    
        try {
    
            const supplier = await supplierModel.findOne({ supplierName: supName })
          
    
    
            prods = await prodModel.find().populate('supplier')
    
            prods.map((v, i) => {
               
                if (v.supplier.supplierName === supplier.supplierName) {
                  
                    let x = products.push(v)
    
                }
    
            })
       
            let finsupplier = { ...supplier._doc, products: products }
    
    
           products = []
    
    
            res.status(200).json({ status: true, message: 'view category', data: finsupplier })
    
    
        } catch (error) {
            res.status(500).json({ status: false, message: 'Something went wrong' })
        }
    
    }

const viewSupTrue =  async (req, res) => {

    try {
        const suppliers = await supplierModel.find({ supStatus: true })
        res.status(200).json({ status: true, message: 'view spplier by status true', data: suppliers })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong' })
    }

}

module.exports = {addSupplier,viewSupp,viewSupName,viewSupTrue}
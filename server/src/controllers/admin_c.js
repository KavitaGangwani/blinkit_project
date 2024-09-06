const adminModel = require('./../models/admin');


const adminLogin = async (req, res) => {
    // const data = req.body;
    const { admin_name, password } = req.body;
    // console.log(admin_name, password)

    // we have to check that the data entered by admin is same as present in database
    // we use try catch and make the function as async function

    try {
        // finding in model matching with database key to key in the schema(destructured object key)
        const userData = await adminModel.find({ admin: admin_name });
        // console.log(userData);
        console.log('api called')

        // in case there is no such user
        if (userData.length === 0) {
            return res.status(404).json({
                status: false,
                message: "user not found"

            })
        }
        // matching with the password
        if (userData[0].password !== password) {
            return res.status(501).json({
                status: false,
                message: "password doesnt match"

            })
        }
        res.status(200).json({
            status: true,
            message: "user found/pass matched log in successful "

        })


    } catch (err) {
        res.status(500).json({
            status: false,
            message: 'internal server error'
        })

    }

}

module.exports = adminLogin
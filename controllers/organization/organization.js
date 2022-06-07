const { getAllDAO } = require("./dao")

module.exports = {
    async getAllOrganizations(req,res){
        await getAllDAO()
        .then(result=>{
            return res.status(200).json({
                organizations:result
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:'Internal server error'
            })
        })
    }
}
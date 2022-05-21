const { createMemberDAO } = require("./dao");

module.exports = {
    async createMember(req,res){
        const name = req.body.name;
        if(!name && typeof name !== 'string' ) 
        {
            return res.status(400).json({
                ok:false,
                menssage:"Name is required or type invalid!"
            })
        }
        const receivedMember = {
            name:req.body.name,
            image:req.body.image
        }
        const memberCreated = await createMemberDAO(receivedMember);
        return res.status(201).json({
            user:memberCreated
        })
    }
}
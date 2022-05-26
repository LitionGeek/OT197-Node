const db = require("../../models");

module.exports = {
    async createMemberDAO(member) {
        await db.Members.create(member);
    },
    async deleteMemberDAO(memberID){
        return await db.Members.destroy({
            where:{id:memberID}
        }
    )},
    async getMemberDAO(id){
        return await db.Members.findOne({
            where:{id}
        })
    },
    async getMembersDAO(){
        return await db.Members.findAll();
    }
}
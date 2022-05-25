const { validateNameMember } = require("../../middlewares/validationsMembers");
const { getMemberDAO, deleteMemberDAO, createMemberDAO } = require("./dao");

module.exports = {
    async createMember(req, res) {
        const receivedMember = {
            name: req.body.name,
            image: req.body.image
        }
        const memberCreated = await createMemberDAO(receivedMember);
        return res.status(201).json({
            user: memberCreated
        })
    },
    async deleteMember(req, res) {
        try {
            const memberID = await getMemberDAO(req.params.id);
            if (!memberID) {
                return res.status(404).json({
                    message: "Member not exist"
                });
            }
            await deleteMemberDAO(memberID);
            return res.status(200).json({
                menssage: "Member Deleted"
            })
        } catch (error) {
            return res.status(500).json({
                menssage: error
            })
        }
    },
    async getMember(req, res) {
        const memberID = await getMemberDAO(req.params.id);
        if (!memberID) return res.status(404).json({
            message: "Member not found"
        });

    }
}
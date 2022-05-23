const { getMemberDAO, deleteMemberDAO, createMemberDAO, getMembersDAO } = require("./dao");

module.exports = {
    async createMember(req, res) {
        const name = req.body.name;
        if (!name && typeof name !== 'string') {
            return res.status(400).json({
                ok: false,
                menssage: "Name is required or type invalid!"
            })
        }
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
        const memberID = await getMemberDAO(req.params.id);
        console.log("memberID ", memberID)
        if (!memberID) {
            return res.status(404).json({
                message: "Member not exist"
            });
        }
        try {
            await deleteMemberDAO(memberID);
            return res.status(200).json({
                menssage: "Member Deleted"
            })
        } catch (error) {
            return res.status(500).json({
                menssage: "Internal server error"
            })
        }
    },
    async getMember(req, res) {
        const memberID = await getMemberDAO(req.params.id);
        if (!memberID) return res.status(404).json({
            message: "Member not found"
        });

    },
    async getMembers(req, res) {
        try {
            const members = await getMembersDAO();
            if (members) {
                return res.status(200).json({
                    members
                })
            }
        } catch (error) {
            return res.status(500).json({
                menssage: error
            })
        }
    }
}
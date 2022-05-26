const { getMemberDAO, deleteMemberDAO, createMemberDAO, getMembersDAO } = require("./dao");

module.exports = {
    async createMember(req, res) {
        const receivedMember = {
            name: req.body.name,
            image: req.body.image
        }
        try {
            const memberCreated = await createMemberDAO(receivedMember);
            return res.status(201).json({
                user: memberCreated
            })
        } catch (error) {
            return res.status(500).json({
                message: error
            })
        }
    },
    async deleteMember(req, res) {
        try {
            const member = await getMemberDAO(req.params.id);
            const deleted = await deleteMemberDAO(member.id);
            return res.status(200).json({
                message: "Member Deleted"
            });
        } catch (error) {
            return res.status(404).json({
                message: "Member not exist"
            });
        }
    },
    async getMember(req, res) {
        try {
            const member = await getMemberDAO(req.params.id);
            if (!memberID) {
                return res.status(404).json({
                    message: "Member not found"
                });
            }
            return res.status(200).json({
                member
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },
    async getAllMembers(req, res) {
        try {
            const members = await getMembersDAO();
            return res.status(200).json({
                members
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
}
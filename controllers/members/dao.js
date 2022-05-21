const db = require("../../models");

module.exports = {
    async createMemberDAO(member) {
        await db.Members.create(member);
    }
}
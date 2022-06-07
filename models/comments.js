const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Comments.belongsTo(models.User, {
                as: 'users',
            })
            Comments.belongsTo(models.News, { as: 'news', })
        }
    }
    Comments.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        newsId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Comments',
        paranoid: true,
        timestamps: true
    })
    return Comments
}
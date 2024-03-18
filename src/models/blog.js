'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Blog extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Blog.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            slug: DataTypes.STRING,
            image: DataTypes.STRING,
            thumbnail: DataTypes.STRING,
            isApproved: DataTypes.BOOLEAN,
            publishedAt: DataTypes.STRING,
            isPublished: DataTypes.BOOLEAN,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Blog',
        },
    );
    return Blog;
};
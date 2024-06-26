'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Banner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Banner.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            alt: DataTypes.STRING,
            ctaTitle: DataTypes.STRING,
            linkTo: DataTypes.STRING,
            priority: DataTypes.INTEGER,
            style: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Banner',
        },
    );
    return Banner;
};

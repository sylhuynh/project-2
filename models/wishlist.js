module.exports = function(sequelize, DataTypes) {
  const Wishlist = sequelize.define(
    "Wishlist",
    {
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      countryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      wishlistStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      visitedStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }
    // {
    //   freezeTableName: true
    // }
  );

  Wishlist.associate = function(models) {
    Wishlist.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Wishlist;
};

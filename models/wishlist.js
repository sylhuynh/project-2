module.exports = function(sequelize, DataTypes) {
  const Wishlist = sequelize.define(
    "Wishlist",
    {
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
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

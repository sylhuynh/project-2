module.exports = function(sequelize, DataTypes) {
  const Visited = sequelize.define(
    "Visited",
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

  Visited.associate = function(models) {
    Visited.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Visited;
};

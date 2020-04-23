module.exports = function(sequelize, DataTypes) {
  const Visited = sequelize.define(
    "Visited",
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

  return Visited;
};

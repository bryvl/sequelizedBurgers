module.exports = function(sequelize, DataTypes){
    // Model definition using sequelize
    var Customer = sequelize.define('Customer',{
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    Customer.associate = function(models){
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        });
      }
    return Customer;
  }
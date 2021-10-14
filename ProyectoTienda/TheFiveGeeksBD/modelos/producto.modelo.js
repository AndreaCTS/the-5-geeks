module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("Producto", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.TYNYINT
      }
    });
  
    return Producto;
  };
module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    ipAddress: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Customers', 
			[
				{
					full_name: 'Fahmi Nur',
					username: 'fahmi',
					email: 'fahmi@gmail.com',
					phone_number: '0813111222',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					full_name: 'Suci Puji',
					username: 'suci',
					email: 'suci@gmail.com',
					phone_number: '0856333444',
					createdAt: new Date(),
          			updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Customers', null, {});
  }
};

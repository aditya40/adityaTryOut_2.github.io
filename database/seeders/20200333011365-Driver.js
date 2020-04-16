'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Drivers', 
			[
				{
					full_name: 'Andika Prihartono',
					phone_number: '08131234321',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					full_name: 'Hilal Helmi',
					phone_number: '0859206255',
					createdAt: new Date(),
          			updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers', null, {});
  }
};

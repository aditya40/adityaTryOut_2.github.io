'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', 
			[
				{
					name: 'HP Spectre x360',
					price: 10954000,
					description: 'CPU: 10th-generation Intel Core i5 – i7 | Graphics: Intel Iris Plus Graphics | RAM: 8GB – 16GB | Screen: 13.3" FHD (1920 x 1080) IPS BrightView micro-edge WLED-backlit multitouch – 13.3" diagonal 4K (3840 x 2160) UWVA BrightView micro-edge AMOLED multitouch | Storage: 256GB – 2TB SSD',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Huawei MateBook 13',
					price: 8500000,
					description: 'CPU: 8th generation Intel Core i5 – i7 | Graphics: Intel UHD Graphics 620 , Nvidia GeForce MX150 2GB GDDR5 | RAM: 8GB | Screen: 13-inch 1440p (2,160 x 1,440) | Storage: 256GB - 512GB SSD',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Acer Swift 3',
					price: 8695000,
					description: 'CPU: up to Intel Core i7-8565U | Graphics: Nvidia GeForce MX150, Intel HD Graphics 620 or AMD Radeon Vega 8 | RAM: 4GB – 8GB | Screen: 14-inch FHD (1,920 x 1,080) ComfyView IPS – 15.6" Full HD (1920 x 1080) | Storage: 128GB – 1 TB HDD, 16 GB Intel Optane Memory',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'MacBook Pro',
					price: 13500000,
					description: 'CPU: 9th-generation Intel Core i7 – i9 | Graphics: AMD Radeon Pro 5300M – Radeon Pro 5500M | RAM: 16GB – 64GB | Screen: 16-inch Retina display with True Tone | Storage: 512GB – 8TB SSD',
					createdAt: new Date(),
          			updatedAt: new Date()
				}
			], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

import AppConstants from './constants/AppConstants';
 const parkings = [
	{
		id: 0,
		places: [
			{
				id: 0,
				type: AppConstants.TRUCK_PLACE,
				name: 'TRUCK PLACE',
				all: 2,
				free: 2,
				busy: 0
			},
			{
				id: 1,
				type: AppConstants.DISABLED_PLACE,
				name: 'DISABLED PLACE',
				all: 1,
				free: 1,
				busy: 0
			},
			{
				id: 2,
				type: AppConstants.STANDART_PLACE,
				name: 'STANDART PLACE',
				all: 3,
				free: 3,
				busy: 0
			}
		]
	}
];
export default parkings;
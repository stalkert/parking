import AppConstants from './constants/AppConstants';
export default const parkings = [
	{
		id: 0,
		truckPlace: {
			all: 2,
			free: 2,
			busy: 0
		},
		disabledPlace:{
			all: 1,
			free: 1,
			busy: 0
		},
		standartPlace:{
			all: 3,
			free: 3,
			busy: 0
		},
		places:[
			{
				id:0,
				type: AppConstants.TRUCK_PLACE,
				free: true
			},
			{
				id:1,
				type: AppConstants.TRUCK_PLACE,
				free: true
			},
			{
				id:2,
				type: AppConstants.DISABLED_PLACE,
				free: true
			},
			{
				id:3,
				type: AppConstants.STANDART_PLACE,
				free: true
			},
			{
				id:4,
				type: AppConstants.STANDART_PLACE,
				free: true
			},
			{
				id:5,
				type: AppConstants.STANDART_PLACE,
				free: true
			}
		]

	}
];
import React from 'react';
import AppConstants from '../constants/AppConstants';

export default class ParkCar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:this.props.data,
			checkedCarType: null
		}
		this.showFreePlaces = this.showFreePlaces.bind(this);
	}
	showFreePlaces(e){
		console.log(e.target.value);
	}
	render(){
		return (
				<div>
					<h2>Park car</h2>
					<h3> Choose type of your car</h3>
					<select onChange={this.showFreePlaces}>
						<option value={AppConstants.TRUCK}>Truck</option>
						<option value={AppConstants.DISABLED}>Disabled</option>
						<option value={AppConstants.STANDART}>Standart</option>
					</select>
				</div>
				);
	}
}
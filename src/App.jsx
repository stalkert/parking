import React from 'react';
import Parking from './components/Parking';
import ParkCar from './components/ParkCar';
import AddNewParking from './components/AddNewParking';
import schema from './schema';
import parkings from './parkings';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: parkings
		}
		this.addNewParking = this.addNewParking.bind(this);
	}
	addNewParking(parking){
		debugger;
		const data = [...this.state.data, parking];
		this.setState({data});
	}
	render(){
		const parkingCount = this.state.data.length > 0 ? this.state.data.length : 0;
	    return (
	    	<div>
	    		<Parking data={this.state.data} />
	    		<AddNewParking lastIndex={parkingCount} onAdd={this.addNewParking} schema={schema} />
	    		<ParkCar data={this.state.data} />
	    	</div>
	    );
	}
}

export default App;

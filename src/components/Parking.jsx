import React from 'react';


export default class Parking extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:this.props.data
		}
	}
	render(){
		return (
			<table>
				<thead>
					<tr>
						<th>Parking</th>
						<th>Type place</th>
						<th>All</th>
						<th>Free</th>
						<th>Busy</th>
					</tr>
				</thead>
				<tbody>
				{ 
					this.state.data.map( item => {
						return (
						<tr key={item.id}>
							<td>
							{item.id}
							</td>
							<td>
								<tr><td>TRUCK PLACE</td></tr>
								<tr><td>DISABLED PLACE</td></tr>
								<tr><td>STANDART PLACE</td></tr>
							</td>
							<td>
								<tr><td>{item.truckPlace.all}</td></tr>
								<tr><td>{item.disabledPlace.all}</td></tr>
								<tr><td>{item.standartPlace.all}</td></tr>
							</td>
							<td>
								<tr><td>{item.truckPlace.free}</td></tr>
								<tr><td>{item.disabledPlace.free}</td></tr>
								<tr><td>{item.standartPlace.free}</td></tr>
							</td>
							<td>
								<tr><td>{item.truckPlace.busy}</td></tr>
								<tr><td>{item.disabledPlace.busy}</td></tr>
								<tr><td>{item.standartPlace.busy}</td></tr>
							</td>
						</tr>	
							);
					})
				}

				</tbody>
			</table>
			);
	}
}
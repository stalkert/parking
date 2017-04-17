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
						<th className="w200-ta-l">Type place</th>
						<th className="w50-ta-c">All</th>
						<th className="w50-ta-c">Free</th>
						<th className="w50-ta-c">Busy</th>
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
										<td colSpan={4}>
											{ item.places.map( (place, idx) => {
												return (
													<tr key={idx}>
														<td className="w200-ta-l">{place.name}</td>
														<td className="w50-ta-c">{place.all}</td>
														<td className="w50-ta-c">{place.free}</td>
														<td className="w50-ta-c">{place.busy}</td>
													</tr>
													)
												})
											}
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
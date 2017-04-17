import React from 'react';


class AddNewParking extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			schema: this.props.schema
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(id, e){
		const value = parseInt(e.target.value);
		const schema = this.state.schema.map(typePlace => {
							if(typePlace.id !== id ){
								return typePlace;
							}
							return Object.assign({}, typePlace, 
								{'all':value,
								 'free':value,
								 'busy': 0
								  });
						});
		this.setState({schema});
	}
	handleSubmit(e){
		e.preventDefault();
		debugger;
		const parking = {
			id : this.props.lastIndex,
			places: this.state.schema
		}
		this.props.onAdd(parking);
		this.setState({schema:this.props.schema});
	}
	render(){
		return (

				<form onSubmit={this.handleSubmit}>
					<h3> Add new parking </h3>
					{
						this.state.schema.map(typePlace => {
							return (
								<div key={typePlace.id}>
									<h4 >
										{typePlace.name}
									</h4>
									<input className="w300" id={typePlace.type} 
									type="number"
									value={this.state.schema[typePlace.id].all}
									onChange={this.handleChange.bind(this,typePlace.id)}
									 placeholder={`Input number of ${typePlace.name.toLowerCase()} places.`}/>
								</div>	
								);
						})
					}
					<input type="submit" value="Add"/>
				</form>
			);
	}
}
export default AddNewParking;
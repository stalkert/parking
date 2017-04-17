import React from 'react';
import Parking from './components/Parking'

function App(props) {

    return (
    	<Parking data={props.data} />
    );
}

export default App;

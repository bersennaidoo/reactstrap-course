import React from 'react';

class VehicleDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={selectedVehicle: ""}
    }

    render(){
        const { selectedVehicle } = this.props.match.params;
        const selectedVehicleData = window.data.filter((vehicle) => vehicle.detailKey === selectedVehicle)[0];

    return (<div>
    <p>This is the vehicle detail screen for {this.state.selectedVehicle}</p>
        <p>{selectedVehicleData.caption}</p></div>
    )
    }
}

export default VehicleDetail;
import React, { useLayoutEffect } from 'react';
import './BusinessList.css';
import  Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div class="BusinessList">
                 {this.props.businesses.map(business => {
                     return (
                        <Business business={this.props.businesses}/>
                     )
                 })}
                
            </div>
        )
    }
}

export default BusinessList;
import React from 'react';
import './BusinessList.css';
import  Business from '../Business/Business';



class BusinessList extends React.Component {
    render() {
        const listOfBusinesses = this.props.searchYelp;
        return (
            <div class="BusinessList">
                 {listOfBusinesses.map(business => {
                     return (
                        <Business business={business}/>
                     )
                 })}
                
            </div>
        )
    }
}

export default BusinessList;
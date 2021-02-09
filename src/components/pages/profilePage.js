import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class profilePage extends Component
{

    static propTypes = {
        
    };


    render() {
        return (
            <div>
                  Profile Page  
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(profilePage);

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class loginPage extends Component
{

    static propTypes = {
        
    };


    render() {
        return (
            <div>
                Login Page
                    
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(loginPage);

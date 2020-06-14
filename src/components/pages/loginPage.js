import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../items/forms/LoginForm';


class loginPage extends Component
{

    static propTypes = {
        
    };


    render() {
        return (
            <div>
                <LoginForm
                
                />    
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(loginPage);

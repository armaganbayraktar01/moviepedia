import React, { Component } from 'react';
import { connect } from 'react-redux';



class adminPage extends Component
{

    static propTypes = {
        
    };


    render() {
        return (
            <div>
admin
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(adminPage);

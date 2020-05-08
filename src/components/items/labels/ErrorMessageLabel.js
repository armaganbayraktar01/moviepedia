import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';


const ErrorMessageLabel = props => {
    return (
        <div>
            <Message negative>
                <Message.Header>{props.errorTitle}</Message.Header>
                <p>{props.errorDesc}</p>
            </Message>
        </div>
    );
};


ErrorMessageLabel.propTypes = {
    errorTitle: PropTypes.string.isRequired,
    errorDesc: PropTypes.string.isRequired
};

export default ErrorMessageLabel;
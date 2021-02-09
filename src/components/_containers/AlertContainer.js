import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'semantic-ui-react';


const AlertContainer  = ({ alertProps }) => {
    return (
        <div>

                {
                    alertProps.message && 
                    (
                        alertProps.type === "success" ?
                        (                     
                            <Message success                                      
                                content={alertProps.message}
                            />
                        ) : 
                        (                     
                            <Message error                                      
                                content={alertProps.message}
                            />
                        )

                    )
                }

        </div>
    );
};


AlertContainer.propTypes = {
    alertProps:PropTypes.object.isRequired    
};

export default AlertContainer;


import React from 'react';

/** Components */
import { Message } from 'semantic-ui-react';



export const listEmptyMessage = 
(
    <Message error                                      
        content="There are no movies yet"
    />
);


export const disconnectMessage = 
(
    <Message error                                      
        content="Disconnect Server. Failed to retrieve data."
    />
);
import React from 'react';
import PropTypes from 'prop-types';

/** Semantic UI */
import { Grid } from 'semantic-ui-react';

/** Components */
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';
import { ClockLoader } from 'react-spinners';

/** Components */
import PersonCard from '../cards/personCard';


/** Body */
const PersonsList  =  ({ personsReducerProps })  => {

    const listEmptyMessage = 
    (
        <ErrorMessageLabel
            errorTitle="Ooops"
            errorDesc="There are no persons yet"        
        />
    );
 
    const loader = 
    (
        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={personsReducerProps.fetching}
                size={50}
            />
        }
        </Grid>
    );

    const personCardContent = 
    (
        
        <Grid stackable centered columns={"4"}>   
        {
            personsReducerProps.personsReducerList.map(
                personListData => 
                <PersonCard
                    key = { personListData._id }
                    personListDataProps = { personListData }
                    //deleteMovieProps = { onDeleteMovieSubmitProps }
                />
            )
        }
        </Grid>
    );

    const displayCardContent = 
    (
        <div>
            {
                personsReducerProps.error.response 
                ?
                    <ErrorMessageLabel
                        errorTitle="Disconnect Server"
                        errorDesc="Failed to retrieve data. Please try again later."        
                    />
                : personCardContent 
            }   
        </div>
    ); 


    return (
        <div>
            {
                personsReducerProps.personsReducerList.length === 0 ? 
                (
                    personsReducerProps.fetching ? loader :  listEmptyMessage
                ) : displayCardContent
                       
            }    

        </div>
    );
};


PersonsList.propTypes = {
    personsReducerProps: PropTypes.shape({
        personsReducerList: PropTypes.array.isRequired
    }).isRequired
};

export default PersonsList;

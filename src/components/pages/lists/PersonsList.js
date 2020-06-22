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
const PersonsList  =  ({ personsReducerProps, starOptionsProps, directorOptionsProps, onDeletePersonSubmitProps, pageUrlLastIndexProps })  => {
    
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
const personCardContent = pageUrlLastIndexProps && pageUrlLastIndexProps === "directors" ?     
    (
        <Grid stackable centered columns={"4"}>   
        {
            /** LİST director */
            directorOptionsProps.map( 
                personListData => 
                <PersonCard
                    key = { personListData._id }
                    personListDataProps = { personListData }
                    deletePersonProps = { onDeletePersonSubmitProps }
                /> 
            )
        }
        </Grid>

    ) :
    (
        <Grid stackable centered columns={"4"}>   
        {
            

            starOptionsProps.map(
                personListData => 
                <PersonCard
                    key = { personListData._id }
                    personListDataProps = { personListData }
                    deletePersonProps = { onDeletePersonSubmitProps }
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

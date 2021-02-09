import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Components */
import { Container, Grid } from 'semantic-ui-react';
import PersonCard from './pageComponents/personCard';

/** Helpers */
import { listEmptyMessage, disconnectMessage } from '../../_helpers/alertMessage';

/** React-Spinners */
import { ClockLoader } from 'react-spinners';

/** Actions */
import { personsAction } from '../../_core/_actions/personsAction';
import { alertActions } from '../../_core/_actions/alertAction';



export default function PersonsPage(props)
{   
    /** page url */
    const { url } = props.match; 
    const url2 = url.split('#').pop().split('?').pop();
    const pageUrlLastIndex = url2.substring(url2.lastIndexOf('/') + 1);

    /** Dispatch */
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(personsAction.fetchPersons())

    }, [dispatch]);

    /** State */

    const convert = (arr) => {

        return arr.map(item => item.value)
    }

    const { personsList, error, fetching } = useSelector(state => state.personsReducer);
    const starList = personsList.filter( item => convert(item.jobs).indexOf("director") );
    const directorList = personsList.filter( item => convert(item.jobs).indexOf("actor") && convert(item.jobs).indexOf("actress") );
    const user = useSelector(state => state.authReducer.user ? state.authReducer.user : {} );
    const adminStatus = user.user_role === "1" ? true : false;
    


    /** Handles */
    const handleDeletePerson = (personId) => {
        dispatch(personsAction.onDeletePerson(personId));
        dispatch(alertActions.success("Delete is person."));
        dispatch(personsAction.fetchPersons());
    }

    /** Components */
     const loader = 
    (

        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={fetching}
                size={50}
            />
        }
        </Grid>

    );
    

    const content =
    ( 
        <Grid stackable centered columns={"4"}>   
        {
            pageUrlLastIndex && pageUrlLastIndex === "directors" ? 
            (           
                directorList.map( person => 
                (
                    <PersonCard 
                        data={person}
                        handleDeletePerson = { () => handleDeletePerson(person._id) }
                        adminStatus = { adminStatus }
                    />

                ))
            ) :
            (            
                starList.map( person => 
                (
                    <PersonCard 
                        data = {person}
                        handleDeletePerson = { () => handleDeletePerson(person._id) }
                        adminStatus = { adminStatus }
                    />

                ))
            )
        }
        </Grid>
    );
    

    return (
      

        <div>
            <Container style={{ marginTop: '3em', marginBottom: '2em', minHeight: '25em' }}> 
            {

                ( error.response ? disconnectMessage : (fetching ? loader : ( personsList.length !== 0 ? content : listEmptyMessage ) ) )
   
            }
            </Container>
        </div>

    );

}
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/** Actions */
import { personsAction } from '../../_core/_actions/personsAction';

/** React-Spinners */
import { ClockLoader } from 'react-spinners';

/** Components */
import { Container, Grid } from 'semantic-ui-react';

import PersonDetail from './pageComponents/personDetail';



export const PersonDetailPage = (props) =>
{
    const dispatch = useDispatch();

    const { _id } = props.match.params;

    const { personsList } = useSelector(state => state.personsReducer);
    const personData = personsList.find( item => item._id === _id)

    console.log(personData)

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => 
    {
        if ( !personData && _id ) {
            dispatch(personsAction.FetchPersonDetail(_id))
            
        }
        setIsLoading(false)

    }, [personData, _id, dispatch ]);


    const loader = 
    (
        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={isLoading}
                size={50}
            />
        }
        </Grid>

    );

    const content = (
        <PersonDetail
            personData={ personData }
        />
    )

    return (

        <div>
            <Container style={{ minHeight: '25em' }}>
            {
                isLoading ? loader : content
            }
            </Container>
        </div>
    )
}
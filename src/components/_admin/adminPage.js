import React from 'react';

/** Config */
import { navbarMenus } from '../../config/config';

/** Components */
import { Container, Tab } from 'semantic-ui-react';

import { AddMoviePage } from './addMoviePage';
import AddPersonPage from './addPersonPage';

export const AdminPage = (props) => 
{
    const { match } = props; 
    const { addmoviepage, addpersonpage } = navbarMenus;
       

    const panes = [
        {
          menuItem: addmoviepage.title,
          render: () => <Tab.Pane attached={true}><AddMoviePage match={match}/></Tab.Pane>,
        },
        {
          menuItem: addpersonpage.title,
          render: () => <Tab.Pane attached={true}><AddPersonPage match={match}/></Tab.Pane>,
        },
      ]


    return (
        <div>
            <Container style={{ marginTop: '3em', marginBottom: '2em', minHeight: '25em' }}> 
                <Tab
                    menu={{ inverted: false, attached: true, tabular: true }}
                    panes={panes}
                />
            </Container>
        </div>
    )
}
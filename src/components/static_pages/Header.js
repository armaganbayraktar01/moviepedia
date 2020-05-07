import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

/** Components */
import { Menu, Container, Image } from 'semantic-ui-react';

/** Configration */
import { siteMeta, navbarMenus } from '../../config/config';


class Header extends Component
{
    render()
    {
        const header = (
            <div>
                <Menu fixed='top' inverted>
                    <Container>

                        <Menu.Item as={ Link } to={navbarMenus.homepage.path} exact="true">
                            <Image size='mini' src={ siteMeta.logo } style={{ marginRight: '1.5em' }} />
                            { siteMeta.title }
                        </Menu.Item>
                        
                        <Menu.Item as={ NavLink } to={navbarMenus.moviespage.path} exact>
                            { navbarMenus.moviespage.title }
                        </Menu.Item>

                    </Container>
                </Menu>
            </div>
        )

        return (
            <div>
                { header }                    
            </div>
        );
    }
}


export default Header;

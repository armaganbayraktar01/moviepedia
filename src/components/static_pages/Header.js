import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

/** Components */
import { Menu, Container, Image } from 'semantic-ui-react';

/** Configration */
import { siteMeta, navbarMenus } from '../../config/config';


class Header extends Component
{

    render()
    {

    
    console.log(this.props.currentUser)

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

                        <Menu.Item as={ NavLink } to={navbarMenus.addmoviepage.path}>
                            { navbarMenus.addmoviepage.title }
                        </Menu.Item>

                        <Menu.Item as={ NavLink } to={navbarMenus.directorspage.path} exact>
                            { navbarMenus.directorspage.title }
                        </Menu.Item>
                        
                        <Menu.Item as={ NavLink } to={navbarMenus.castpage.path} exact>
                            { navbarMenus.castpage.title }
                        </Menu.Item>

                        <Menu.Item as={ NavLink } to={navbarMenus.addpersonpage.path}>
                            { navbarMenus.addpersonpage.title }
                        </Menu.Item>

                        <Menu.Item>
                            
                        </Menu.Item>
                                                
                        <Menu.Item as={ Link } to={navbarMenus.loginpage.path} position='right'>
                            { navbarMenus.loginpage.title }
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


export default connect(null, null)(Header);

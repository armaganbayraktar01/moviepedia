import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Image
} from 'semantic-ui-react';

/** Config */
import { siteMeta, navbarMenus } from '../../config/config';
import { getWidth } from '../../_helpers/helpers';

/** Actions */
import { authAction } from '../../_core/_actions/authAction';


class MobileContainer extends Component 
{

    state = {
        sidebarOpened: false,
        loginStatus: false,
        adminStatus: false,
        currentUser: {}
    }

    componentDidMount() {

      const { loginStatus, user } = this.props.authReducer;

      if (user) {

          this.setState({
              loginStatus: loginStatus,
              adminStatus: user.user_role === "1" ? true : false,
              currentUser: user,
          })
      }
    }


    UNSAFE_componentWillReceiveProps(nextProps) {

      const { loginStatus, user } = nextProps.authReducer;

      if (user) {

          this.setState({
              loginStatus: loginStatus,
              adminStatus: user.user_role === "1" ? true : false,
              currentUser: user
          })

      }
    } 
    
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: (this.state.sidebarOpened === false ? true : false) })
    
    onLogoutHandle = (event) => {
        event.preventDefault();
        this.props.onLogout();
        
        this.setState({
            sidebarOpened: false,
            loginStatus: false,
            adminStatus: false,
            currentUser: {}
        })
    }
  
    render() 
    {
        const { children } = this.props
        const { sidebarOpened, loginStatus, adminStatus, currentUser } = this.state;
        const avatar = 'https://react.semantic-ui.com/images/wireframe/square-image.png';
        
        const {adminpage, profilepage, loginpage, registerpage, homepage, moviespage, directorspage, castpage } = navbarMenus;
        

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >

 

                    <Menu inverted pointing>

                        <Menu.Item as={ Link } to={ homepage.path} exact="true">
                            <Image size='mini' src={ siteMeta.logo } style={{ marginRight: '1.5em' }} />
                            { siteMeta.title }
                         </Menu.Item>

                        <Menu.Item  onClick={this.handleToggle}>
                            <Icon name='sidebar' />
                        </Menu.Item>

                        {
                            loginStatus ? 
                            (

                                <Menu.Item as={ Link } to={ profilepage.path} position='right'>
                                    <Image size='mini' src={ currentUser.user_picture ? currentUser.user_picture : avatar } avatar style={{ marginRight: '0.5em' }} />
                                    { currentUser.user_fullname }
                                </Menu.Item>
                                    
    
                            ) : 
                            (
                                <Menu.Item position='right'>

                                    <Menu.Item as={ Link } to={ loginpage.path}>
                                        { navbarMenus.loginpage.title }
                                    </Menu.Item>

                                    <Menu.Item as={ Link } to={ registerpage.path}>
                                        { navbarMenus.registerpage.title }
                                    </Menu.Item>
                            
                                </Menu.Item>
                            )
                        }

                    </Menu>

                    <Sidebar.Pushable dimmed={sidebarOpened.toString()}>

                        <Sidebar
                            as={Menu}
                            animation='push'
                            icon='labeled'
                            inverted
                            onHide={this.handleSidebarHide}
                            vertical
                            visible={sidebarOpened}
                            width='thin'
                        >
                            {
                                <Menu.Item>

                                    <Menu.Item as={ Link } to={ moviespage.path} exact="true">
                                        <Icon size="tiny" name='film'/>{ navbarMenus.moviespage.title }
                                    </Menu.Item>

                                    <Menu.Item as={ Link } to={ directorspage.path} exact="true">
                                        <Icon size="tiny" name='bullhorn'/>{ navbarMenus.directorspage.title }
                                    </Menu.Item>

                                    <Menu.Item as={ Link } to={ castpage.path} exact="true">
                                        <Icon size="tiny" name='star'/>{ navbarMenus.castpage.title }
                                    </Menu.Item>

                                </Menu.Item>

                            }
                            {
                                loginStatus && adminStatus && 
                                (
                                    <Menu.Item>
                                        <Menu.Item as={ Link } to={ adminpage.path} exact="true">
                                            <Icon size="tiny" name='dashboard'/>{ navbarMenus.adminpage.title }
                                        </Menu.Item>

                                    </Menu.Item>

                                )
                            }
                            {
                                loginStatus &&
                                (
                                    <Menu.Item as={ Link } to={ loginpage.path} onClick={ this.onLogoutHandle } exact="true">
                                        <Icon name='x'/>Logout
                                    </Menu.Item>
                                )
                            }

                        </Sidebar>

                        {/* BODY AREA */}

                        <Sidebar.Pusher>

                             <Segment basic>

                                { children }

                            </Segment>

                        </Sidebar.Pusher>

                    </Sidebar.Pushable>

            </Responsive>
        )
    }

}
  
MobileContainer.propTypes = {
    children: PropTypes.node,
    authReducer: PropTypes.object.isRequired
}

const mapStateToProps = ({ authReducer }) => {
  return {
      authReducer            
  }
};

const mapDispatchToProps = {
  onLogout: authAction.onLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
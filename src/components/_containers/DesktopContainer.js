import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Container, Menu, Responsive, Segment, Visibility, Dropdown, Image } from 'semantic-ui-react';

/** Config */
import { siteMeta, navbarMenus } from '../../config/config';
import { getWidth } from '../../_helpers/helpers';

/** Actions */
import { authAction } from '../../_core/_actions/authAction';


class DesktopContainer extends Component {
  
    state = {
        fixed: false,
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
  
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    onLogoutHandle = (event) => {
      event.preventDefault();
      this.props.onLogout();
      
      this.setState({
          loginStatus: false,
          adminStatus: false,
          currentUser: {}
      })
    }
  
    render() 
    {

      
      const { children } = this.props;
      const { fixed, loginStatus, adminStatus, currentUser } = this.state;
      const avatar = 'https://react.semantic-ui.com/images/wireframe/square-image.png';

      const {adminpage, profilepage, loginpage, registerpage, homepage, moviespage, directorspage, castpage } = navbarMenus;
        
      return (



        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: '5em' , padding: '0em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
              >
                  <Container>
                      <Menu.Item>
                        
                            <Image size='mini' src={ siteMeta.logo } />

                            <Menu.Item as={ Link } to={homepage.path} exact="true">                              
                                { siteMeta.title }
                            </Menu.Item>

                            <Menu.Item as={ Link } to={moviespage.path} exact="true">
                                { moviespage.title }
                            </Menu.Item>

                            <Menu.Item as={ Link } to={directorspage.path} exact="true">
                                { directorspage.title }
                            </Menu.Item>

                            <Menu.Item as={ Link } to={castpage.path} exact="true">
                                { castpage.title }
                            </Menu.Item>

                        </Menu.Item>                      

                        {
                            loginStatus ?
                            (

                                <Menu.Item position='right'>

                                    <Image size='mini' src={ currentUser.user_picture ? currentUser.user_picture : avatar } avatar/>
                                    <Dropdown item simple text={ currentUser.user_fullname } >                                     

                                        <Dropdown.Menu>
                                            
                                            <Dropdown.Item as={ Link } to={profilepage.path}>
                                                { profilepage.title }
                                            </Dropdown.Item>
                                        
                                            {                         
                                                adminStatus && 
                                                (
                                                <Dropdown.Divider />
                                                )
                                            }

                                            {                         
                                                adminStatus && 
                                                (
                                                    <Dropdown.Item as={ Link } to={adminpage.path}>
                                                    { adminpage.title }
                                                    </Dropdown.Item>

                                                )
                                            }

                                            <Dropdown.Divider />                                        

                                            <Dropdown.Item as={ Link } to={loginpage.path}  onClick={ this.onLogoutHandle }>
                                                Logout
                                            </Dropdown.Item>

                                        </Dropdown.Menu>

                                    </Dropdown>
                            
                                </Menu.Item>
    

                            ) : (
                            
                                <Menu.Item position='right'>
                                    <Menu.Item as={ Link } to={loginpage.path}>
                                        { loginpage.title }
                                    </Menu.Item>

                                    <Menu.Item as={ Link } to={registerpage.path}>
                                        { registerpage.title }
                                    </Menu.Item>
                                </Menu.Item>
                            )
                        }

                  </Container>

              </Menu>


              {/* <HomepageHeading /> */}


            </Segment>
          </Visibility>
  
          {children}
          
        </Responsive>
      )
    }
}
  
DesktopContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DesktopContainer);

import siteLogo from '../logo.svg';
import loginPage from '../components/_login/loginPage';
import registerPage from '../components/_register/registerPage';
import profilePage from '../components/pages/profilePage';
import { AdminPage } from '../components/_admin/adminPage';

import homePage from '../components/_api/homePage';
import moviesPage from '../components/_api/moviesPage';
import { MovieDetailPage } from '../components/_api/movieDetailPage';
import personsPage from '../components/_api/personsPage';
import { PersonDetailPage } from '../components/_api/personDetailPage';
// import addMoviePage from '../components/_admin/addMoviePage';
// import addPersonPage from '../components/_admin/addPersonPage';

import { AddMoviePage } from '../components/_admin/addMoviePage';
import addPersonPage from '../components/_admin/addPersonPage';

export const siteMeta = {
    title: 'Moviepedia',
    logo: siteLogo,
    desc: 'Watched Movies...',
    keyw: 'movie, film, cinema',
    author: 'Armağan Bayraktar'
};

export const navbarMenus = {
    loginpage: {
        title: 'Login',
        path: '/login',
        component: loginPage
    },
    registerpage: {
        title: 'Register',
        path: '/register',
        component: registerPage
    },
    profilepage: {
        title: 'Profile',
        path: '/profile',
        component: profilePage
    },
    adminpage: {
        title: 'Dashboard',
        path: '/dashboard',
        component: AdminPage
    },
    homepage: {
        title: 'Home',
        path: '/',
        component: homePage
    },

    moviespage: {
        title: 'Movies',
        path: '/api/movies',
        component: moviesPage
    },
    moviedetailpage: {
        title: 'Movies',
        path: '/api/movie/:_id',
        component: MovieDetailPage
    },
    addmoviepage: {
        title: 'Add Movie',
        path: '/dashboard/movie/add',
        component: AddMoviePage
    },
    editmoviepage: {
        title: 'Edit Movie',
        path: '/dashboard/movie/edit/:_id',
        component: AddMoviePage
    },
    castpage: {
        title: 'Stars',
        path: '/api/persons/stars',
        component: personsPage
    },
    directorspage: {
        title: 'Directors',
        path: '/api/persons/directors',
        component: personsPage
    },

    persondetailpage: {
        title: 'Persons',
        path: '/api/person/:_id',
        component: PersonDetailPage
    },
    addpersonpage: {
        title: 'Add Person',
        path: '/dashboard/person/add',
        component: addPersonPage
    },
    editpersonpage: {
        title: 'Edit Person',
        path: '/dashboard/person/edit/:_id',
        component: addPersonPage
    },

}
import siteLogo from '../logo.svg';
import adminPage from '../components/pages/adminPage';
import loginPage from '../components/pages/loginPage';
import homePage from '../components/pages/homePage';
import moviesPage from '../components/pages/moviesPage';
import movieDetailPage from '../components/pages/movieDetailPage';
import addMoviePage from '../components/pages/addMoviePage';
import personsPage from '../components/pages/personsPage';
import personDetailPage from '../components/pages/personDetailPage';
import addPersonPage from '../components/pages/addPersonPage';

export const siteMeta = {
    title: 'Moviepedia',
    logo: siteLogo,
    desc: 'Watched Movies...',
    keyw: 'movie, film, cinema',
    author: 'Armağan Bayraktar'
};

export const navbarMenus = {
    adminpage: {
        title: 'Admin',
        path: '/dashboard',
        component: adminPage
    },
    loginpage: {
        title: 'Login',
        path: '/login',
        component: loginPage
    },
    homepage: {
        title: 'Home',
        path: '/',
        component: homePage
    },
    moviespage: {
        title: 'Movies',
        path: '/movies',
        component: moviesPage
    },
    moviedetailpage: {
        title: 'Movies',
        path: '/movie/:_id',
        component: movieDetailPage
    },
    addmoviepage: {
        title: 'Add Movie',
        path: '/dashboard/movie/add',
        component: addMoviePage
    },
    editmoviepage: {
        title: 'Edit Movie',
        path: '/dashboard/movie/edit/:_id',
        component: addMoviePage
    },
    castpage: {
        title: 'Stars',
        path: '/persons/stars',
        component: personsPage
    },
    directorspage: {
        title: 'Directors',
        path: '/persons/directors',
        component: personsPage
    },

    persondetailpage: {
        title: 'Persons',
        path: '/person/:_id',
        component: personDetailPage
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
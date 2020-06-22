import siteLogo from '../logo.svg';
import adminPage from '../components/pages/adminPage';
import homePage from '../components/pages/homePage';
import moviesPage from '../components/pages/moviesPage';
import movieDetailPage from '../components/pages/movieDetailPage';
import addMoviePage from '../components/pages/addMoviePage';
import personsPage from '../components/pages/personsPage';
import personDetailPage from '../components/pages/personDetailPage';

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
        path: '/movies/addmovie',
        component: addMoviePage
    },
    editmoviepage: {
        title: 'Edit Movie',
        path: '/movied/:_id',
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
    }
}
import siteLogo from '../logo.svg';
import homePage from '../components/pages/homePage';
import moviesPage from '../components/pages/moviesPage';

export const siteMeta = {
    title: 'Moviepedia',
    logo: siteLogo,
    desc: 'Watched Movies...',
    keyw: 'movie, film, cinema',
    author: 'Armağan Bayraktar'
};

export const navbarMenus = {

    homepage: {
        title: 'Home',
        path: '/',
        component: homePage
    },
    moviespage: {
        title: 'Movies',
        path: '/movies',
        component: moviesPage
    }
}
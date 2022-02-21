

import Routes from './Routes';

export default function GetHeaderTitle(route) {
    const routeName = route.name;
    console.log('routeName', routeName)
    switch (routeName) {

        case Routes.Home:
            return 'Home';

      

        default:
            return '';
    }
}
import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Tiles = Loadable({
  loader: () => import('./views/Tiles/Tiles'),
  loading: Loading,
});
/*123*/
const Forms = Loadable({
  loader: () => import('./views/Forms/Forms'),
  loading: Loading,
});
const Libraries = Loadable({
  loader: () => import('./views/Libraries/Libraries'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Zoetis', component: DefaultLayout },
  { path: '/libraries', name: 'Libraries', component: Libraries },
  { path: '/tiles', exact: true, name: 'Libraries / Forms / Tiles', component: Tiles },
  { path: '/forms', exact: true, name: 'Libraries / Forms', component: Forms }
];

export default routes;
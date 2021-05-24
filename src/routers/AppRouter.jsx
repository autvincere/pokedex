import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Pokemons from '../components/Pokemons'
// import Favorites from '../components/Favorites'
//import Search from '../components/Search'
import Layout from '../components/Layout'
import Loader from '../components/Loader';

const Search = lazy(() => import('../components/Search'))
const Favorites = lazy(() => import('../components/Favorites'))

export const AppRouter = () => {
     return (
          <BrowserRouter>
               <Layout>
                    <Switch>
                         <Suspense fallback={
                              <div>
                                   <Loader />
                              </div>
                         }>
                              <Route exact path='/favorites' component={Favorites} />
                              <Route exact path='/search' component={Search} />
                              <Route exact path='/pokemons' component={Pokemons} />
                              <Route exact path='/'>
                                   <Redirect to='/pokemons' />
                              </Route>
                              {/* <Route exact path='*'> <h1>404 not found</h1> </Route> */}
                         </Suspense>
                    </Switch>
               </Layout>
          </BrowserRouter>
     )
}

// export default AppRouter

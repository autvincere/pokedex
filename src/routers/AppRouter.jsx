import React from 'react'
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom'
import Favorites from '../components/Favorites'
import Pokemons from '../components/Pokemons'
import Search from '../components/Search'
import Layout from '../components/Layout'

export const AppRouter = () => {
     return (
          <BrowserRouter>
               <Layout>
                    <Switch>
                         <Route exact path='/favorites' component={Favorites} />
                         <Route exact path='/search' component={Search} />
                         <Route exact path='/pokemons' component={Pokemons} />
                         <Route exact path='/'>
                              <Redirect to='/pokemons' />
                         </Route>
                         <Route exact path='*'> <h1>404 not found</h1> </Route>
                    </Switch>
               </Layout>
          </BrowserRouter>
     )
}

// export default AppRouter

import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import Favorites from '../components/Favorites'
import Pokemons from '../components/Pokemons'
import Layout from '../components/Layout'

export const AppRouter = () => {
     return (
          <BrowserRouter>
               <Layout>
                    <Switch>
                        <Route exact path='/favorites' component={Favorites} />
                         {/* <Route exact path='/buscador' component={Pokemons} /> */}
                         <Route exact path='/' component={Pokemons} />
                         <Route exact path='*'> <h1>404 not found</h1> </Route>
                    </Switch>
               </Layout>
          </BrowserRouter>
     )
}

// export default AppRouter

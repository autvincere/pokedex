import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Favorites from '../components/Favorites'
import Pokemons from '../components/Pokemons'
import Layout from '../components/Layout'

export const AppRouter = () => {
     return (
          <BrowserRouter>
               <Layout>
                    <Switch>
                         <Route exact path='/favorites' component={Favorites} />
                         <Route exact path='/' component={Pokemons} />
                    </Switch>
               </Layout>
          </BrowserRouter>
     )
}

// export default AppRouter

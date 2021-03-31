import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getInfoCard } from '../actions/poke'



const DisponibilizadorPokemon = ({ url, name }) => {

     const dispatch = useDispatch();
 
      useEffect(()=> {
           const fetchData = () => {
                dispatch(getInfoCard(url))
           }
           fetchData()
      }, [dispatch,url])
     return (
          <>
               
          </>
     )
}

export default DisponibilizadorPokemon

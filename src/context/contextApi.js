import React, { createContext, useState,useEffect } from 'react'
import {fetchfromurl} from '../Utils/api'


export const Context = createContext();


export const AppContext = (props) =>{
    const {loading, setLoading}= useState(false);
    const {SearchResults, setSearchResults}= useState(false);
    const {Selectcategories, setSelectcategories}= useState("New");
    const {Mobilemenu, setMobilemenu}= useState(false);

    const fetchselectedcat = (query) =>{
        // setLoading(true)
        fetchfromurl(`search/?q=${query}`).then((res)=>{
          console.log(res); 
        //   setSearchResults(res); 
          setLoading(false);
        })
}

    useEffect(()=>{
        fetchselectedcat(Selectcategories)
    },[Selectcategories])

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            SearchResults,
            setSearchResults,
            setMobilemenu,
            Mobilemenu,Selectcategories,
            setSelectcategories
        }}>
            {props.Children}
        </Context.Provider>
    )
}
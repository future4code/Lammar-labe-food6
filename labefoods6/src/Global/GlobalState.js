import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props) =>{
    const [addProduto, setAddProduto]=useState([])
    const [isLoading, setIsLoading]=useState(false)


    const data ={addProduto, setAddProduto, isLoading, setIsLoading}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}
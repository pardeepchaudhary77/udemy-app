import app from "../../firebase/Config"

export const createUser = (data) => async(dispatch) => {
    const res = "asd" 
    try{
        dispatch({
            type: "CREATE_USER",
            payload: res
        }) 
    }catch(error){
        console.log(error)
    }
}
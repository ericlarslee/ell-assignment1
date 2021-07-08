import axios from "axios"


export async function getProfileData(){
    try{
        const response = await axios.get('https://randomuser.me/api/?results=50');
        
        if (response.status ===200){
            return response.data;
        }
    }
    catch(error){
        console.log("Error: ", error)
    }
}
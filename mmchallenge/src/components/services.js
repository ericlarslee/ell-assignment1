import axios from "axios";

//I noticed about an hour in that there was the directive to generate pseudo-random names, username, and age, but have not rectified this yet

//get random user info from randomuser.me
export async function getProfileData(){
    try{
        const response = await axios.get('https://randomuser.me/api/?results=100');
        
        if (response.status ===200){
            return response.data;
        }
    }
    catch(error){
        console.log("Error: ", error)
    }
}
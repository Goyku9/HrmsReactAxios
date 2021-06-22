import axios from 'axios';

export default class JobHunterService{
  
     getJobHunters(){
         return axios.get("http://localhost:8080/api/jobhunters/getall")
     }


}
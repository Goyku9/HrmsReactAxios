import axios from "axios";

export default class StafferService{

  getStaffers(){

     return axios.get('http://localhost:8080/api/staffers/getall')
  }




}
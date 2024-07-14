import axios from "axios";



const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    console.log(handle)
    let res = await this.request(`companies/${handle}`);
    console.log(res.company)
    return res.company;
  }

  /**Get All Companies */
  static async getAllCompanies(params){
    for(let key in params){
      if(params[`${key}`] === ''){
        params[`${key}`] = null
      }
    }
   
    try{

    
    let res = await this.request(`companies/`, params);
    return res;
    }catch(err){
    
      return{'error':err}
    }
  }


  /**Get All Jobs */
  static async getAllJobs(params){
    for(let key in params){
      if(params[`${key}`] === ''){
        params[`${key}`] = null
      }
    }
    try{
      let res = await this.request(`jobs/`, params)
      return res
    }catch(err){
      return{'error':err}
    }
    
  }

  static async applyToJob(username, jobId, method){
    console.log(username, jobId, method)
    try{let res = await this.request(`users/${username}/jobs/${jobId}/`,{data:{username:username, jobId:jobId}}, method=method);
    return res
        }catch(err){
          console.log(err)
          return {'error':err}
        }
  }

  // obviously, you'll add a lot here ...
  static async registerUser(params){
    try{
    let res = await this.request(`auth/register/`, params,"post");
    return res
  }catch(err){
    console.log(err)
    return {"error":err}
  }

  }

  static async loginUser(params){
    try{
      let res = await this.request(`auth/token/`, params, "post");
      console.log(params)
      
      return res
    }catch(err){
      console.log(err)
      return err
    }
    
  }

  static async getUser(username){
    
    let res = await this.request(`users/${username}/`);
    return res
  }


  static async updateUser(username,params){
   
    let res = await this.request(`users/${username}`, params, "patch");
    return res
  }
  
  


}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi;
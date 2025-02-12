import conf from "../conf";

import { Client, Account, ID } from "appwrite";

//  APPWRITE DOCUMENTATION - APPWRITE DOCUMENTATION FOR LOGIN AND ALL
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);
        this.account = new Account(this.client);
    }

    // just a service ki account bnn jaye
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email,password,name);
            if(userAccount){
                // cal another mthd
                return this.login({email, password}); 
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }
    async login({email, password}){
        try{
            return  await this.account.createEmailSession( email,password);
            
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            throw error;
        }
        return null;
    }

    async logout(){
        try{
           await this.account.deleteSessions('current');
        }catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
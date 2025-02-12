import conf from "../conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
      
    constructor(){
         this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectid);
                this.account = new Account(this.client);
                this.databases = new Databases(this.client);
                this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                // doc id 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service: createPost error");
        }
    }

    async updatePost(slug, {title,  content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                  
                }
            );
        } catch (error) {
            console.log("error")
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

            )
            return true;
        } catch (error) {
            console.log("error");
            return false;
        }
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("error at getPost");
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active") ] ){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
         console.log("error at get Posts");
          return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error at uploading");
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketid,
                fileId
            )
            return true;
        } catch (error) {
            console.log("error while del");
            return false;
        }
    }

   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketid,
        fileId
    )
   }


}

const service = new Service()

export default service;

const conf={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectid : String(import.meta.env.VITE_PROJECT_ID),
    appwriteDATABASEid : String(import.meta.env.VITE_DATABASE_ID),
    appwriteCOLLECTIONid: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBUCKET_ID: String(import.meta.env.VITE_BUCKET_ID),

}

export default conf;
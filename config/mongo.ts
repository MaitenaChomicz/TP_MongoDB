import mongoose from "mongoose"
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectDB = async () => {
    try{
        await mongoose.connect(URI_DB)
        console.log("Conectado correctamente :)")
    } catch (error) {
        console.log("Problemas para conectarse :(", error)
    }
    
}

export { connectDB }
import mongoose from "mongoose"
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""
console.log(URI_DB)

const connectDB = async () => {
    try{
        await mongoose.connect(URI_DB)
        console.log("Conectado correctamente :)")
    } catch (error) {
        console.log("Problemas para conectarse :(")
    }
    
}

export { connectDB }
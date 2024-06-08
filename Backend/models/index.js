const mongoose = require("mongoose");
const uri = "mongodb+srv://Rohan:1311@ecommerce.tjxcq8n.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };
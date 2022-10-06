require('dotenv').config(); //importo vbles de ambiente
module.exports={
    PORT :process.env.PORT || 5000,
    NOMBRE: process.env.NOMBRE,
    ENVIRONMENT: process.env.ENVIRONMENT,
    DB_NAME:process.env.DB_NAME,
    DB_USERNAME:process.env.DB_USERNAME,
    DB_PASSWORD:process.env.DB_PASSWORD
}

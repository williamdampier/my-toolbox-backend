const express = require('express')
const app = express()
const sequelize = require('./src/db')
const userRouter = require('./src/api/routes/user.routes')

require('dotenv').config()
app.use(express.json())
app.use('/api', userRouter)
const PORT = process.env.PORT || 5001


app.get('/', (req, res) => {
    res.send("Hello there")
})


async function startApp() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        await sequelize.sync();
        console.log("All models were synchronized successfully.");

        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

startApp()
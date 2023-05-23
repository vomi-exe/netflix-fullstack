const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const listRouter = require('./routes/lists');


dotenv.config();


main().then(() => console.log("DB connection succesfull"));
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);


app.listen(8800, () => {
    console.log('Backend Server is running');
})
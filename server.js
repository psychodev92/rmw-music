import mongoose from 'mongoose';
import connectDB from './backend/config/db.js';
import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './backend/routes/userRoute.js';

//connect database
mongoose
    .connect(
        'mongodb+srv://rmw-admin:H3llN4h92@cluster0.1cfplcz.mongodb.net/rmw_music?retryWrites=true&w=majority',
    )
    .then(result => {
        //dotenv config
        dotenv.config();

        const app = express();

        //Creating API for user
        app.use('/api/users', userRoutes);

        const PORT = process.env.PORT || 5000;
        // Express js listen method to run project on http://localhost:5000
        app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
    })
    .catch(err => {
        console.log(err);
    });

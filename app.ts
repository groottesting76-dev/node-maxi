import express from 'express';
import bodyParser from 'body-parser';
import feedRoutes from './routes/feed.js';
// import { mongoConnect } from './utils/mongoDatabase.js';
import { mongooseConnect } from './utils/mongooseDatabase.js'
import type { Request, Response, NextFunction } from 'express';
import type AppError from './utils/app_error.js';
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from './routes/auth.js';
import isAuth from './middleware/is_auth.js';
import { Server } from 'socket.io';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
const privateKey = fs.readFileSync("server.key");
const certificate = fs.readFileSync("server.cert");

app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));

// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(path.join(process.cwd(), 'dist', 'images')));


app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes
app.use("/feed", feedRoutes)
app.use("/auth", authRoutes)


// Error handling
app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
    const code = error.statusCode;
    res.status(500).json({
        message: error.message,
        from: 'error handling middleware'
    });
});

// mongoConnect(() => {
//     app.listen(3000);
// });

mongooseConnect().then(() => {
    const server = https.createServer({ key: privateKey, cert: certificate, }, app).listen(3000);
    const socketIo = new Server(server);
    socketIo.on('connection', socket => {

        console.log("socket conected");
    });

});

import { validationResult } from "express-validator";
// import { getDb } from "../utils/mongoDatabase.js";
import { PostModelSchema } from "../model/post.js";
import AppError from './../utils/app_error.js';
import fs from 'fs';
import { User } from "../model/user.js";
const getPosts = (req, res, next) => {
    console.log(req.userId);
    User.find()
        .then(posts => {
        res.status(200).json(posts);
    })
        .catch(err => {
        next(err);
    });
};
const createPosts = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(422).json({
            message: "Validation failed, entered data is incorrect.",
            errors: error.array()
        });
    }
    console.log(req.body);
    const { title, content } = req.body;
    // const db = getDb();
    // if (db) {
    //     const post = {
    //         title: title,
    //         content: content,
    //         creator: {
    //             name: "Maximilian"
    //         },
    //         createdAt: new Date()
    //     };
    //     db.collection("posts").insertOne(post).then(result => {
    //         res.status(201).json({
    //             "message": "Post created successfully!",
    //             posts: [{ "title": title, "content": content, "createdAt": new Date() }]
    //         });
    //     }).catch(err => {
    //         res.status(400).json({
    //             "message": "Post created Faild"
    //         });
    //         console.error("Error creating post:", err);
    //     });
    // }
    const post = new PostModelSchema({
        title: title,
        content: content,
        creator: {
            name: "Maximilian"
        },
        createdAt: new Date()
    });
    post.save().then(result => {
        console.log("Inserted OK", result);
        res.status(201).json({
            "message": "Post created successfully!",
            posts: [result]
        });
    }).catch(err => {
        next(new AppError(err, 500));
    });
};
const uploadedImage = (req, res, next) => {
    console.log("Image data", req.file);
    res.status(201).json({
        message: " Image uploaded successfully!"
    });
};
const downloadFile = (req, res, next) => {
    fs.readFile(`download/${req.params.fileName}`, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "File download failed!"
            });
        }
        else {
            res
                .setHeader('Content-Disposition', `attachment; filename=${req.params.fileName}`)
                .send(data);
        }
    });
};
const downloadFileAsStream = (req, res, next) => {
    const file = fs.createReadStream(`download/${req.params.fileName}`);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${req.params.fileName}`);
    file.pipe(res);
};
export { getPosts, createPosts, uploadedImage, downloadFile, downloadFileAsStream };
//# sourceMappingURL=feed.js.map
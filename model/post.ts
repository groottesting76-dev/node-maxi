import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        creator: {
            name: {
                type: String,
                required: true
            }
        },
        createdAt: {
            type: Date,
            required: true
        }

    }, { timestamps: true }
);

const PostModelSchema = model("Post", postSchema);

export { PostModelSchema }
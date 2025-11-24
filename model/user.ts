import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });


const User = model('User', userSchema);

export { User };

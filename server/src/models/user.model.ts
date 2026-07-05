import mongoose, {Schema} from "mongoose";
import type {Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone?: string;
    created_at: Date;
}

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be at least 2 characters long"],
        maxLength: [50, "Name must be at most 50 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters long"]
    },
    phone: {
        type: String,
        trim: true,
        default: null,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
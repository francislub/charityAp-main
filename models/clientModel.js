import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
    },
    number: {
        type: String,
        required: [true, 'Please provide your number'],
        trim: true,
    },
    service: {
        type: String,
        required: [true, 'Please select a service'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Please provide your message'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const ozohClient = mongoose.models.ozohClient || mongoose.model('ozohClient', clientSchema);

export default ozohClient;

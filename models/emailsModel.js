import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    newsemail: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const ozohEmailsClient = mongoose.models.ozohEmailsClient || mongoose.model('ozohEmailsClient', clientSchema);

export default ozohEmailsClient;

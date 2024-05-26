import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      studentID: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
        min: 0,
      },
      ekibiina: {
        type: String,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      parentStatus: {
        type: String,
        required: true,
      },
      levelOfNeed: {
        type: String,
        required: true,
      },
      yearsLeftToGraduate: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
export const Child = mongoose.models.Child || mongoose.model("Child", childSchema);
// export default mongoose.model('Child', childSchema);
// Check if the model already exists before defining it
// const Child = mongoose.models.Child || mongoose.model('Child', childSchema);
// export default Child;
// module.exports = Child;


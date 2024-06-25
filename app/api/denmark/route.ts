import { connect } from "../../../dbConfig/dbConfig";
import ChapterDenmarkModel from '../../../models/chapter-denmark';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'GET') {
    try {
      const chapters = await ChapterDenmarkModel.find().populate('creator');
      res.status(200).json(chapters);
      console.log(chapters);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching chapters' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

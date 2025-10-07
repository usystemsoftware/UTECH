import Keyword from "../models/Keyword.js";

// Get all keywords
export const getKeywords = async (req, res) => {
  try {
    const keywords = await Keyword.find();
    res.json(keywords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new keyword
export const createKeyword = async (req, res) => {
  try {
    const keyword = new Keyword(req.body);
    const savedKeyword = await keyword.save();
    res.status(201).json(savedKeyword);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

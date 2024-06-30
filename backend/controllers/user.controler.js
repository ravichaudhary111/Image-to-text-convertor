const Image = require('../model/image');
const tesseract = require('tesseract.js');

const extractBoldWords = (text) => {
  // Implement bold words extraction logic
  return text.match(/\b(\w+)\b/g).filter(word => word === word.toUpperCase());
};

exports.uploadImage = async (req, res) => {
  try {
    const { path } = req.file;
    const image = req.file.buffer.toString('base64');
    
    const { data: { text } } = await tesseract.recognize(path);
    const boldWords = extractBoldWords(text);
    
    const newImage = new Image({
      image,
      text,
      boldWords,
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

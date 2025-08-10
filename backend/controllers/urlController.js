const shortid = require('shortid');
const Url = require('../models/Url');

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortCode = shortid.generate();

  try {
    let url = await Url.findOne({ originalUrl });

    if (url) {
      return res.json(url);
    }

    url = new Url({
      originalUrl,
      shortCode,
    });
    console.log('Attempting to save new URL:', url);

    await url.save();
    res.status(201).json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};


exports.redirectToOriginal = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortcode });

    if (url) {
      url.visits++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find({});
    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};
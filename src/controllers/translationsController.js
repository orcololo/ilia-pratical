const Translations = require('../models/translations');

exports.getTranslationById = async (req, res) => {
  const { id } = req.params;
  const { data } = req;
  try {
    const isTranslationOnDb = await Translations.findOne({ id });
    if (!isTranslationOnDb) {
      const translations = await Translations.create(data);
      return res.status(201).json(translations);
    }
    return res.status(200).json(isTranslationOnDb);
  } catch (error) {
    return error;
  }
};

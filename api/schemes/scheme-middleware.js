const Scheme = require("./scheme-model");
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const scheme = await Scheme.findById(id);
    if (!scheme) {
      res.status(404).json({ message: `scheme with scheme_id ${id} not found` });
    } else {
      req.scheme = scheme;
      next();
    }
  } catch (err) {
    next(err);
  }

}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme } = req.body;
  if (scheme.scheme_name.isNull()) {
    res.status(400).json({ message: `invalid scheme_name` });
  } next()
};



/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { instructions, step_number } = req.body;
  if ((instructions === undefined) || (typeof step_number === NaN || step_number < 1)) {
    res.status(400).json({ message: `invalid step` });
  } next();
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}

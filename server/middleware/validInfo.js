// Author: Pranjal Jain
// This code checks for missing field in user request comming from login and
// registration pages.
module.exports = (req, res, next) => {
  // eslint-disable-next-line max-len
  const {first_name, last_name, email, contact_number, password, security_question, security_answer} = req.body;

  // eslint-disable-next-line require-jsdoc
  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === '/register') {
    // eslint-disable-next-line max-len
    if (![first_name, last_name, email, contact_number, password, security_question, security_answer].every(Boolean)) {
      return res.status(401).json('Missing Fields');
    } else if (!validEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    } else if (!validEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  }

  next();
};

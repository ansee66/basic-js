const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let domain = email;
  if (domain.indexOf("@") === -1) {
    return domain;
  } else {
    domain = domain.slice(domain.indexOf("@") + 1);
    return getEmailDomain(domain);
  }
}

module.exports = {
  getEmailDomain
};

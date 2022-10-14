const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};
  
  domains.map(domain => {
    let splitDomains = domain.split('.');

    for (let i = (splitDomains.length - 1); i >= 0; i--) {
      if (i !== (splitDomains.length - 1)) {
        splitDomains[i] = splitDomains[i + 1] + '.' + splitDomains[i];
      } else {
        splitDomains[i] = '.' + splitDomains[i];
      }
    }

    splitDomains.map(item => {
      if (result.hasOwnProperty(item)) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    })
  })

  return result;
}

module.exports = {
  getDNSStats
};

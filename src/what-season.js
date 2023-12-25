const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (!date) {
		return 'Unable to determine the time of year!'
	}

	if (Object.getOwnPropertyNames(date).length !== 0) {
		throw new Error('Invalid date!');
	} 
	
	if (!(date instanceof Date)) {
		throw new Error('Invalid date!');
	}
	
  const monthNumber = JSON.stringify(date).split('-')[1];

	if (monthNumber === '01' || monthNumber === '02' || monthNumber === '12') {
		return 'winter'
	}
	if (monthNumber === '03' || monthNumber === '04' || monthNumber === '05') {
		return 'spring';
	}
	if (monthNumber === '06' || monthNumber === '07' || monthNumber === '08') {
		return 'summer'
	}
	if (monthNumber === '09' || monthNumber === '10' || monthNumber === '11') {
		return 'autumn'
	}
}

module.exports = {
  getSeason
};



module.exports = function(position, user ,ar) {
	console.log(position, user , ar);
	// after detected oder call the 

	var a = ar.push(user)

	console.log('to return array', a)
	

	return a
}
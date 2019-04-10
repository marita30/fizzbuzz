function FizzBuzz() {

}

FizzBuzz.prototype.play = function(number) {
	if (this._isDivisibleBY(15, number)) {
		return 'FizzBuzz';
	} else if (this._isDivisibleBY(5, number)) {
		return 'Buzz';
	} else if (this._isDivisibleBY(3, number)) {
		return 'Fizz';
	} else {
		return number;
	}
}

FizzBuzz.prototype._isDivisibleBY = function(divisor, number) {
	return number % divisor === 0;
}
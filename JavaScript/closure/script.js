// example 1
function counterWrapper() {
	let count = 0;
	return function () {
		// count = count++; // this will give 0 every time
		count++;
		console.log(count);
	};
}

const updateCount = counterWrapper();
// updateCount(); // output:1
// updateCount(); // output:2
// updateCount(); // output:3

// example 2

function CartCounter() {
	let _count = 0;
	function updateCount(val) {
		_count += val;
	}

	return {
		increment() {
			updateCount(1);
		},
		decrement() {
			updateCount(-1);
		},
		value() {
			return _count;
		},
	};
}

const cartvalue = CartCounter();

cartvalue.increment();
cartvalue.increment();
cartvalue.increment();
cartvalue.decrement();
// console.log("cart value:", cartvalue.value());

// example 3 useState clone

function useState(initial) {
	let _state = initial;
	function setState(value) {
		_state = value;
	}
	function getState() {
		return _state;
	}

	return [getState, setState];
}

function Counter() {
	const [count, setCount] = useState(0);

	return {
		click() {
			setCount(count() + 1);
		},
		render() {
			console.log("value:", count());
		},
	};
}

const counter = Counter();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();

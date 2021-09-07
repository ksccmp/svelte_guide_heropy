<script>
	let count = 0;

	$: double = count * 2;

	$: {
		console.log(count);
		console.log(double);
	}

	$: count, log();

	$: count, (() => {
		console.log('iife: Heropy!');
	})();

	$: if(count > 0) {
		console.log('if: ', double);
	}

	$: for(let i=0; i<3; i++) {
		count;
		console.log('for: ', i);
	}

	$: switch(count) {
		case 1:
			console.log('switch: 1');
			break;

		default:
			console.log('switch: default');
	}

	$: {
		const scope1 = () => {
			console.log('scope1');

			const scope2 = () => {
				console.log('scope2');

				const scope3 = () => {
					console.log('scope3', count);
				}

				scope3();
			}

			scope2();
		}

		scope1();
	}

	const log = () => {
		console.log('fn: Heropy!');
	}

	const assign = () => {
		count++;
	}
</script>

<main>
	<button on:click={assign}>assign</button>
</main>
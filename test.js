import test from 'ava';
import alfyTest from 'alfy-test';

test(async () => {
	const alfy = alfyTest();
	await alfy.config.set('token', '97332e0456ea562156851c38848cc42b0092ba48c5ed4ddccab63b8ecd16ef8c');
	const result = await alfy('Rainbow');
	await console.error(result);
	return result;
	// t.deepEqual(result, [
	// 	{
	// 		title: 'Unicorn',
	// 		subtitle: 'Rainbow'
	// 	}
	// ]);
});

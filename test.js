import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	console.log(alfy.config);
	await alfy.config.set('token', '97332e0456ea562156851c38848cc42b0092ba48c5ed4ddccab63b8ecd16ef8c');
	console.log(alfy.config.get('token'));
	const result = await alfy('Rainbow');
	console.log(t);
	console.log(result);
	// t.deepEqual(result, [
	// 	{
	// 		title: 'Unicorn',
	// 		subtitle: 'Rainbow'
	// 	}
	// ]);
});

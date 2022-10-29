import React from 'react';
import { number } from '../node_modules/node-test-pckg/dist/main';
import { IStuff } from '../node_modules/node-test-pckg/dist/stuff/stuff';
import { Class } from '../node_modules/node-test-pckg/dist/main';

function App() {
	const test = number;
	const anotherTest: IStuff = { first: 'Nice', second: 'Test' };
	/** This class init */
	const person = new Class('jake');
	console.log(test);
	return (
		<>
			<p>
				{anotherTest.first} {anotherTest.second}, {`${person.name}${test}`}
			</p>
		</>
	);
}

export default App;

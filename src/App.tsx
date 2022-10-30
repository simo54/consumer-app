import React from 'react';
import { number } from '../node_modules/node-test-pckg/dist/main';
import { IStuff } from '../node_modules/node-test-pckg/dist/stuff/stuff';
import { Class } from '../node_modules/node-test-pckg/dist/main';

function App() {
	const test = number;
	const anotherTest: IStuff = { first: 'Nice', second: 'Test' };
	const person = new Class('jake');
	return (
		<>
			<p>
				{anotherTest.first} {anotherTest.second}, {`${person.name}${test}`}
			</p>
		</>
	);
}

export default App;

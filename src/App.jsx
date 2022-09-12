import React from 'react';
// import './App.css';
import Test1 from './TestPage/Test1';
import Test2 from './TestPage/Test2';
import Test3 from './TestPage/Test3';

//seperate component is good for performance
function App() {
	return (
		<div className="container">
			<h1 className="text-center py-4">Welcome to Resly Coding Challenge</h1>

			<div>
				<p>
					<strong>Instructions</strong>
				</p>
				<p>1. Please use React Hooks for all the tests.</p>
				<p>
					2. We use reactstrap as a front-end UI library. You can find the{' '}
					<a
						href="https://reactstrap.github.io/"
						target="_blank"
						rel="noreferrer"
					>
						documentation here
					</a>
				</p>
			</div>
			<Test1 />
			<Test2 />
			<Test3 />
		</div>
	);
}

export default App;

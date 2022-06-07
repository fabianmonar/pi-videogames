import React from 'react';


function About() {
	return (
		<div className='about'>
			<h1>About Videogames!</h1>
			<div>
				<h4>
					This project use information and images from the{' '}
					{<a href='https://rawg.io/apidocs'>RAWG</a>} API.
				</h4>
				<h4>
					Develop fabian monar for individual project for Henry
					Bootcamp.
				</h4>
			</div>
			
		</div>
	);
}

export default About;
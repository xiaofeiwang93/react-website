import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../asssets/img/header-bg.jpg';

//re-usable componments
import Services from '../Common/Services';
import Protfolio from '../Common/Portfolio';
import Team from '../Common/Team';

class Home extends Component {
	render() {
		return (
			<div>
				<Header
					title="Welcome To Our Studio"
					subtitle="GREAT TO MEET YOU"
					buttonText="Tell me more"
					link="/services"
					showButton={true}
					image={image}
				/>
				<Services />
				<Protfolio />
				<Team />
			</div>
		);
	}
}

export default Home;

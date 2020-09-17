import React, { Componment, Component } from 'react';
import TeamMember from '../Common/TeamMember';

import img1 from '../asssets/img/team/1.jpg';
import img2 from '../asssets/img/team/2.jpg';
import img3 from '../asssets/img/team/3.jpg';

const teamMembers = [
	{ name: 'Kay Garland', role: 'Lead Designer', image: img1 },
	{ name: 'Larry Parker', role: 'Lead Marketer', image: img2 },
	{ name: 'Diana Petersen', role: 'Lead Developer', image: img3 },
];

class Team extends Component {
	render() {
		return (
			<section class="page-section bg-light" id="team">
				<div class="container">
					<div class="text-center">
						<h2 class="section-heading text-uppercase">Our Amazing Team</h2>
						<h3 class="section-subheading text-muted">
							Lorem ipsum dolor sit amet consectetur.
						</h3>
					</div>
					<div class="row">
						{teamMembers.map((member, index) => {
							return <TeamMember {...member} key={index} />;
						})}
					</div>
					<div class="row">
						<div class="col-lg-8 mx-auto text-center">
							<p class="large text-muted">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
								eaque, laboriosam veritatis, quos non quis ad perspiciatis,
								totam corporis ea, alias ut unde.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Team;

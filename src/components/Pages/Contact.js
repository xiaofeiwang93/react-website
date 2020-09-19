import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

const fields = {
	sections: [
		[
			{
				name: 'name',
				elementName: 'input',
				type: 'text',
				placeholder: 'Your Name*',
			},
			{
				name: 'email',
				elementName: 'input',
				type: 'email',
				placeholder: 'Your Email*',
			},
			{
				name: 'phone',
				elementName: 'input',
				type: 'text',
				placeholder: 'Your Phone Number*',
			},
		],
		[
			{
				name: 'message',
				elementName: 'textarea',
				type: 'text',
				placeholder: 'Type Your Message*',
			},
		],
	],
};

class Contact extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		name: '',
	// 		email: '',
	// 		phone: '',
	// 		message: '',
	// 	};
	// }

	// submitForm = (e) => {
	// 	alert('Form Submitted');
	// };

	render() {
		return (
			<section className="page-section" id="contact">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Contact Us</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					{/* <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={(e) => this.submitForm(e)}> */}
					<form
						id="contactForm"
						name="sentMessage"
						novalidate="novalidate"
						onSubmit={this.props.handleSubmit}
					>
						<div className="row align-items-stretch mb-5">
							{fields.sections.map((section, sectionIndex) => {
								console.log('Rendering section', sectionIndex, 'with', section);
								return (
									<div className="col-md-6" key={sectionIndex}>
										{section.map((field, i) => {
											return (
												<Field
													{...field}
													key={i}
													value={this.props.values[field.name]}
													name={field.name}
													onChange={this.props.handleChange}
													onBlur={this.props.handleBlur}
													touched={this.props.touched[field.name]}
													errors={this.props.errors[field.name]}
													// value={this.state[field.name]}
													// onChange={(e) => this.setState({ [field.name]: e.target.value })}
												/>
											);
										})}
									</div>
								);
							})}
						</div>
						<div className="text-center">
							<div id="success"></div>
							<button
								className="btn btn-primary btn-xl text-uppercase"
								id="sendMessageButton"
								type="submit"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		phone: '',
		message: '',
	}),
	// validate: (values) => {
	// 	const errors = {};

	// 	Object.keys(values).map((v) => {
	// 		if (!values[v]) {
	// 			errors[v] = 'Required';
	// 		}
	// 	});

	// 	return errors;
	// },
	validationSchema: Yup.object().shape({
		name: Yup.string().min(3, 'Minimum 3 characters').required('You must give us your name.'),
		email: Yup.string().email('This is not a valid email').required('You must provide an email'),
		phone: Yup.string()
			.min(10, 'Please provide a valid phone number')
			.max(15, 'Your phone number is too long')
			.required('You must give us your phone number'),
		message: Yup.string().min(50, 'More detailed information please').required('You must proivde some message'),
	}),
	handleSubmit: (values, { setSubmitting }) => {
		alert("You've submitted the form", JSON.stringify(values));
	},
})(Contact);

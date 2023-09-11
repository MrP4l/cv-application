import { useState } from 'react'
import './App.css'
import PersonalData from './PersonalData.jsx'
import Bio from './Bio.jsx'
import EducationalExperience from './EducationalExperience.jsx'
import PracticalExperience from './PracticalExperience.jsx'
import PersonalDataOutput from './PersonalDataOutput.jsx'
import BioOutput from './BioOutput.jsx'
import EducationalExperienceOutput from './EducationalExperienceOutput.jsx'
import PracticalExperienceOutput from './PracticalExperienceOutput.jsx'

function App() {
	const [formData, setFormData] =
		useState({
			form1: { first_name: '', last_name: '', address: '', email: '', phone_number: '', birth_date: '', linkedin: '' },
			form2: { bio_text: '' },
			form3: { school_name: '', from_date: '', to_date: '' },
			form4: { company_name: '', position_title: '', from_date: '', to_date: '' },
		});
	const [outputData, setOutputData] =
		useState({
			form1: { first_name: '', last_name: '', address: '', email: '', phone_number: '', birth_date: '', linkedin: '' },
			form2: { bio_text: '' },
			form3: { school_name: '', from_date: '', to_date: '' },
			form4: { company_name: '', position_title: '', from_date: '', to_date: '' },
		});

	const buttonCallbacks = {
		submit_form1_button: () => {
			setFormData({
				...formData,
				form1: {
					first_name: '',
					last_name: '',
					address: '',
					email: '',
					phone_number: '',
					birth_date: '',
					linkedin: ''
				}
			});
		},
		edit_form1_button: () => {
			setFormData({
				...outputData,
				form1: {
					first_name: outputData.form1.first_name,
					last_name: outputData.form1.last_name,
					address: outputData.form1.address,
					email: outputData.form1.email,
					phone_number: outputData.form1.phone_number,
					birth_date: outputData.form1.birth_date,
					linkedin: outputData.form1.linkedin
				}
			});
		},
		submit_form2_button: () => {
			setFormData({ ...formData, form2: { bio_text: '' } })
		},
		edit_form2_button: () => {
			setFormData({ ...outputData, form2: { bio_text: outputData.form2.bio_text } })
		},
		submit_form3_button: () => {
			setFormData({
				...formData,
				form3: {
					school_name: '',
					from_date: '',
					to_date: ''
				}
			});
		},
		edit_form3_button: () => {
			setFormData({
				...outputData,
				form3: {
					school_name: outputData.form3.school_name,
					from_date: outputData.form3.from_date,
					to_date: outputData.form3.to_date
				}
			})
		},
		submit_form4_button: () => {
			setFormData({
				...outputData,
				form4: {
					company_name: '',
					from_date: '',
					to_date: ''
				}
			// Add the delete of the last one component created and the input fields with the values of it 
			})
		},
		edit_form4_button: () => {
			setFormData({
				...outputData,
				form4: {
					company_name: outputData.form4.company_name,
					position_title: outputData.form4.position_title,
					from_date: outputData.form4.from_date,
					to_date: outputData.form3.to_date
				}
			// Add the delete of the last one component created and the input fields with the values of it 
			})
		},

	}

	const handleClick = (e) => {
		const buttonName = e.target.name;
		const callback = buttonCallbacks[buttonName];
		if (callback) {
			callback();
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const newValue = e.target.value;

		console.log(`Handling change for ${name}: ${newValue}`);

		setFormData({
			...formData,
			form1: {
				...formData.form1,
				[name]: newValue
			},
			form2: {
				...formData.form2,
				[name]: newValue
			},
			form3: {
				...formData.form3,
				[name]: newValue
			},
			form4: {
				...formData.form4,
				[name]: newValue
			}
		});

		setOutputData({
			...outputData,
			form1: {
				...outputData.form1,
				[name]: newValue
			},
			form2: {
				...outputData.form2,
				[name]: newValue
			},
			form3: {
				...outputData.form3,
				[name]: newValue
			},
			form4: {
				...outputData.form4,
				[name]: newValue
			}
		});
	};

	return (
		<>
			<div id='container'>
				<div id='inputContainer'>
					<PersonalData formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
					<Bio formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
					<EducationalExperience formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
					<PracticalExperience formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick}/>
				</div>
				<div id='outputContainer'>
					<PersonalDataOutput outputData={outputData} />
					<BioOutput outputData={outputData} />
					<EducationalExperienceOutput outputData={outputData} />
					<PracticalExperienceOutput outputData={outputData} />
				</div>
			</div>
		</>
	)
}

export default App

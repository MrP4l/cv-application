import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
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
	const [educationalExperienceOutputs, setEducationalExperienceOutputs] = useState([]);
	const [practicalExperienceOutputs, setPracticalExperienceOutputs] = useState([]);

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
			console.log('formData:', formData);
			console.log('outputData:', outputData);
		},
		edit_form2_button: () => {
			setFormData({ ...outputData, form2: { bio_text: outputData.form2.bio_text } })
		},
		submit_form3_button: () => {
			const { school_name, from_date, to_date } = formData.form3;
			if (school_name || from_date || to_date) {

				const newEducationalExperienceOutput = (
					<EducationalExperienceOutput
						key={uuidv4()}
						outputData={formData.form3}
					/>
				);

				setEducationalExperienceOutputs((currentEducationalExperienceOutputs) => {
					return [...currentEducationalExperienceOutputs, newEducationalExperienceOutput];
				  });
			  
			//	setEducationalExperienceOutputs([
			//		...educationalExperienceOutputs,
			//		newEducationalExperienceOutput
			//	]);

				setFormData({
					...formData,
					form3: {
						school_name: '',
						from_date: '',
						to_date: ''
					}
				});

				console.log('formData:', formData);
				console.log('outputData:', outputData);
				console.log('outputData.form3:', outputData.form3);
				console.log('educationalExperienceOutputs:', educationalExperienceOutputs);
			}
		},
		edit_form3_button: () => {
			const { school_name, from_date, to_date } = outputData.form3;
			if (school_name || from_date || to_date) {
				const data = {
					school_name: outputData.form3.school_name,
					from_date: outputData.form3.from_date,
					to_date: outputData.form3.to_date
				}
				console.log('data:', data)
				setFormData({
					...outputData
				})
				console.log('educationalExperienceOutputs:', educationalExperienceOutputs);
			}
		},
		submit_form4_button: () => {
			const { company_name, position_title, from_date, to_date } = formData.form4;
			if (company_name || position_title || from_date || to_date) {
				const newPracticalExperienceOutput = (
					<PracticalExperienceOutput
						key={practicalExperienceOutputs.length}
						outputData={formData.form4}
					/>
				);
				setPracticalExperienceOutputs([
					...practicalExperienceOutputs,
					newPracticalExperienceOutput,
				]);
				setFormData({
					...outputData,
					form4: {
						company_name: '',
						from_date: '',
						to_date: ''
					}
				})
			}
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
				// Add the delete of the last one component created and fill the input fields with the values of it 
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

		if (name === 'first_name' || name === 'last_name' || name === 'address' || name === 'email' || name === 'phone_number') {
			setFormData({
				...formData,
				form1: {
					...formData.form1,
					[name]: newValue
				}
			});
			setOutputData({
				...outputData,
				form1: {
					...outputData.form1,
					[name]: newValue
				}
			});
		} else if (name === 'bio_text') {
			setFormData({
				...formData,
				form2: {
					...formData.form2,
					[name]: newValue
				}
			});
			setOutputData({
				...outputData,
				form2: {
					...outputData.form2,
					[name]: newValue
				}
			});
		} else if (name === 'school_name' || name === 'from_date' || name === 'to_date') {
			setFormData({
				...formData,
				form3: {
					...formData.form3,
					[name]: newValue
				}
			});
			setOutputData({
				...outputData,
				form3: {
					...outputData.form3,
					[name]: newValue
				}
			});
		} else if (name === 'company_name' || name === 'position_title' || name === 'from_date' || name === 'to_date') {
			setFormData({
				...formData,
				form4: {
					...formData.form4,
					[name]: newValue
				}
			});
			setOutputData({
				...outputData,
				form4: {
					...outputData.form4,
					[name]: newValue
				}
			});
		}
		console.log('formData:', formData);
		console.log('outputData:', outputData);
	};

	function removeLastItem(array) {
		if (array.length === 0) {
			return [];
		}
		const newArray = [...array];
		newArray.pop();
		return newArray;
	}
	
	return (
		<>
			<div id='container'>
				<div id='inputContainer'>
					<PersonalData formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
					<Bio formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
					<EducationalExperience formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
					<PracticalExperience formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
				</div>
				<div id='outputContainer'>
					<PersonalDataOutput outputData={outputData} />
					<BioOutput outputData={outputData} />
					{educationalExperienceOutputs.map((output, index) => (
						<div key={index}>{output}</div>
					))}
					{practicalExperienceOutputs.map((output, index) => (
						<div key={index}>{output}</div>
					))}
				</div>
			</div>
		</>
	)
}

export default App

import './PersonalData.css'

function PersonalData({ formData, handleChange, handleSubmit, handleClick }) {
    return (
        <>
            <div>
                <form className='personalData' onSubmit={handleSubmit}>
                    <h2>Personal Data</h2>
                    <label>
                        First name
                        <input
                            placeholder='First Name'
                            type='text'
                            name='first_name'
                            id='firstName'
                            onChange={handleChange}
                            value={formData.form1.first_name ?? ''}
                        />
                    </label>
                    <label>
                        Last name
                        <input
                            placeholder='Last Name'
                            name="last_name"
                            type='text'
                            id='secondName'
                            onChange={handleChange}
                            value={formData.form1.last_name ?? ''}
                            />
                    </label>
                    <label>
                        Address
                        <input
                            placeholder='Address'
                            name="address"
                            type='text'
                            id='address'
                            onChange={handleChange}
                            value={formData.form1.address ?? ''}
                            />
                    </label>
                    <label>
                        Email
                        <input
                            placeholder='Email'
                            name="email"
                            type='email'
                            id='email'
                            onChange={handleChange}
                            value={formData.form1.email ?? ''}
                            />
                    </label>
                    <label>
                        Phone Number
                        <input
                            placeholder='Phone Number'
                            name="phone_number"
                            type='tel'
                            id='phoneNumber'
                            onChange={handleChange}
                            value={formData.form1.phone_number ?? ''}
                            />
                    </label>
                    <label>
                        Birth Date
                        <input
                            placeholder='Birth Date'
                            name="birth_date"
                            type='date'
                            id='birthDate'
                            onChange={handleChange}
                            value={formData.form1.birth_date ?? ''}
                            />
                    </label>
                    <label>
                        LinkedIn
                        <input
                            placeholder='LinkedIn'
                            name="linkedin"
                            type='text'
                            id='linkedin'
                            onChange={handleChange}
                            value={formData.form1.linkedin ?? ''}
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit_form1_button"
                        id="editForm1Button"
                        onClick={handleClick}
                    > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit_form1_button"
                        id="submitForm1Button"
                        onClick={handleClick}
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )

}

export default PersonalData
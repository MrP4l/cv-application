import { useState } from 'react'
import './PersonalData.css'

function PersonalData({ firstName, lastName, address, email, phoneNumber, birthDate, linkedin, handleChange, handleSubmit }) {
    return (
        <>
            <div>
                <form className='personalData' onSubmit={handleSubmit}>
                    <h2>Personal Data</h2>
                    <label>
                        First name
                        <input
                            value={firstName}
                            placeholder='First Name'
                            type='text'
                            name='first_name'
                            id='firstName'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last name
                        <input
                            value={lastName}
                            placeholder='Last Name'
                            name="last_name"
                            type='text'
                            id='secondName'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Address
                        <input
                            value={address}
                            placeholder='Address'
                            name="address"
                            type='text'
                            id='address'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            value={email}
                            placeholder='Email'
                            name="email"
                            type='email'
                            id='email'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            value={phoneNumber}
                            placeholder='Phone Number'
                            name="phone_number"
                            type='tel'
                            id='phoneNumber'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Birth Date
                        <input
                            value={birthDate}
                            placeholder='Birth Date'
                            name="birth_date"
                            type='date'
                            id='birthDate'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        LinkedIn
                        <input
                            value={linkedin}
                            placeholder='LinkedIn'
                            name="linkedin"
                            type='text'
                            id='linkedin'
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit_button"
                        id="edit"
                    > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit_button"
                        id="submit"
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )

}

export default PersonalData
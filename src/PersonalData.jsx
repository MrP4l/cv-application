import { useState } from 'react'
import './PersonalData.css'

function PersonalData({ firstName, lastName, address, email, phoneNumber, birthDate, linkedin, handleEdit, handleSubmit }) {
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
                            name='first_Name'
                            id='firstName'
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
                        />
                    </label>
                    <label>
                        LinkedIn
                        <input
                            value={linkedin}
                            placeholder='LinkedIn'
                            name="linkedin"
                            type='text'
                            id='firstName'
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit"
                        id="edit"
                        onSubmit={handleEdit}
                    > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit"
                        id="submit"
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )

}

export default PersonalData
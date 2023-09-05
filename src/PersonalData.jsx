import { useState } from 'react'
import './PersonalData.css'

function PersonalData({ firstName, lastName, address, email, phoneNumber, birthDate, linkedin, handleSubmit }) {
    return (
        <>
            <div>
                <form className='personalData'>
                    <h2>Personal Data</h2>
                    <label>
                        First name
                        <input
                            value={firstName}
                            placeholder='First Name'
                            type='text'
                            name='first_Name'
                            id='firstName'
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
                        />
                    </label>
                    <button
                        type="submit"
                        name="submit"
                        id="submit"
                        onSubmit={handleSubmit}
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )

}

export default PersonalData
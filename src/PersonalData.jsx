import { useState } from 'react'
import './PersonalData.css'

function PersonalData({ firstName, lastName, address, email, phoneNumber, birthDate, linkedin, onChange }) {
    return (
        <>
            <form className='personalData'>
                <h2>Personal Data</h2>
                <label>
                    First name
                    <input
                        value={firstName}
                        placeholder='First Name'
                        type='text'
                        id='firstName'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Last name
                    <input
                        value={lastName}
                        placeholder='Last Name'
                        type='text'
                        id='secondName'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Address
                    <input
                        value={address}
                        placeholder='Address'
                        type='text'
                        id='address'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        value={email}
                        placeholder='Email'
                        type='email'
                        id='email'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Phone Number
                    <input
                        value={phoneNumber}
                        placeholder='Phone Number'
                        type='tel'
                        id='phoneNumber'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Birth Date
                    <input
                        value={birthDate}
                        placeholder='Birth Date'
                        type='date'
                        id='birthDate'
                        onChange={onChange}
                    />
                </label>
                <label>
                    LinkedIn
                    <input
                        value={linkedin}
                        placeholder='LinkedIn'
                        type='text'
                        id='firstName'
                        onChange={onChange}
                    />
                </label>
            </form>
        </>

    )

}

export default PersonalData
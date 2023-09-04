import { useState } from 'react'
import './PersonalData.css'

function PersonalData({ firstName, lastName, address, email, phoneNumber, birthDate, linkedin, onChange, submit }) {
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
                            name='firstName'
                            id='firstName'
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Last name
                        <input
                            value={lastName}
                            placeholder='Last Name'
                            name="lastName"
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
                            name="address"
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
                            name="email"
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
                            name="phoneNumber"
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
                            name="birthDate"
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
                            name="linkedin"
                            type='text'
                            id='firstName'
                            onChange={onChange}
                        />
                    </label>
                    <button
                        type="submit"
                        name="submit"
                        id="submit"
                        onClick={submit}
                    > Sign In
                    </button>
                </form>
            </div>

        </>
    )

}

export default PersonalData
import { useState } from 'react'
import './PersonalDataOutput.css'

function PersonalDataOutput({ firstName, lastName, address, email, phoneNumber, birthDate, linkedin }) {
    return (
        <>
            <div>
                <div id='firstName'>
                    {firstName}
                </div>
                <div id='lastName'>
                    {lastName}
                </div>
                <div id='address'>
                    {address}
                </div>
                <div id='email'>
                    {email}
                </div>
                <div id='phoneNumber'>
                    {phoneNumber}
                </div>
                <div id='birthDate'>
                    {birthDate}
                </div>
                <div id='linkedin'>
                    {linkedin}
                </div>
            </div>
        </>
    )
}

export default PersonalDataOutput
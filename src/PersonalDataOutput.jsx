import './PersonalDataOutput.css'

function PersonalDataOutput({ outputData }) {
    return (
        <>
            <div id='personalDataOutput'>
                <div id='firstName'>{outputData.form1.first_name}</div>
                <div id='lastName'>{outputData.form1.last_name}</div>
                <div id='address'>{outputData.form1.address}</div>
                <div id='email'>{outputData.form1.email}</div>
                <div id='phoneNumber'>{outputData.form1.phone_number}</div>
                <div id='birthDate'>{outputData.form1.birth_date}</div>
                <div id='linkedin'>{outputData.form1.linkedin}</div>
            </div>
        </>
    )
}

export default PersonalDataOutput
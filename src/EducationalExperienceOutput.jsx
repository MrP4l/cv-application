import './educationalExperienceOutput.css'

function EducationalExperienceOutput({ outputData }) {
    return (
        <>
            <div id='educationalExperienceOutput'>
                <div id='schoolName'>{outputData.form3.school_name}</div>
                <div id='fromDate'>{outputData.form3.from_date}</div>
                <div id='toDate'>{outputData.form3.to_date}</div>
            </div>
        </>
    )
}

export default EducationalExperienceOutput
import './educationalExperienceOutput.css'

function EducationalExperienceOutput({ outputData }) {
    return (
        <>
            <div id='educationalExperienceOutput'>
                <div id='schoolName'>{outputData.school_name}</div>
                <div id='fromDate'>{outputData.from_date}</div>
                <div id='toDate'>{outputData.to_date}</div>
            </div>
        </>
    )
}

export default EducationalExperienceOutput
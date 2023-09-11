import './PracticalExperienceOutput.css'

function PracticalExperienceOutput({ outputData }) {
    return (
        <>
            <div id='practicalExperienceOutput'>
                <div id='companyName'>{outputData.form4.company_name}</div>
                <div id='positionTitle'>{outputData.form4.position_title}</div>
                <div id='fromDate'>{outputData.form4.from_date}</div>
                <div id='toDate'>{outputData.form4.to_date}</div>
            </div>
        </>
    )
}

export default PracticalExperienceOutput
import './PracticalExperienceOutput.css'

function PracticalExperienceOutput({ outputData }) {
    return (
        <>
            <div id='practicalExperienceOutput'>
                <div id='companyName'>{outputData.company_name}</div>
                <div id='positionTitle'>{outputData.position_title}</div>
                <div id='fromDate'>{outputData.from_date}</div>
                <div id='toDate'>{outputData.to_date}</div>
            </div>
        </>
    )
}

export default PracticalExperienceOutput
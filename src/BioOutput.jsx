import './BioOutput.css'

function BioOutput({ outputData }) {
	return (
		<>
			<div id='bioOutput'>
				<div id='bio'>{outputData.form2.bio_text}</div>
			</div>
		</>
	)
}

export default BioOutput
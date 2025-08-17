import './label.css'

function Label({ label, info }) {

    return(
        <div className='label-container'>
            <label htmlFor="paragraph">{label}</label>
            <p name="paragraph">{info}</p>
        </div>
    )
}

export default Label;
import './NumberField.css'

const NumberField = (props) => {




    const type = (event) => {
        props.unchanged(event.target.value)
    }
    return (
        <div className="number-field">
            <label>{props.label}</label>
            {/* Escutando input toda vez que é alterado */}
            <input value={props.value} onChange={type} required={props.requiredField} type='number' placeholder={props.placeholder} />
        </div>

    )
};

export default NumberField
import './TextField.css'

// initial letter starts with uppercase in React//
// Use Props as an argument 
const TextField = (props) => {



    const type = (event) => {
        props.unchanged(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            {/* Escutando input toda vez que é alterado */}
            <input value={props.value} onChange={type} required={props.requiredField} type="text"  placeholder={props.placeholder} />
        </div>
        
    )
};

export default TextField
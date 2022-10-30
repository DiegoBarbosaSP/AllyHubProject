import './Buttom.css'

const Buttom = (props) => {
    return (
        <button className="buttom">
            {/* Usar children */}
            {props.children}
        </button>
    )
}

export default Buttom
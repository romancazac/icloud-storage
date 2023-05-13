
import './ui.scss'

function Input(props) {
    return (
        <div className='input'>
            <label htmlFor={props.name}>{props.label}</label>
           <input {...props} className='input__inp' type={props.type ? props.type : 'text'} placeholder={props.placeholder} name={props.name} id={props.name}/> 
        </div>
    );
}

export default Input;
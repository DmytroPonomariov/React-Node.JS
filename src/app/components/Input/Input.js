import inputModule from './Input.module.css'

function Input() {
  return <input type="text" className={inputModule.active} placeholder="your text" />;
}

export default Input;

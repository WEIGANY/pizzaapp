import React from 'react';
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
    }
  }

  setShowError(showError) {
    this.setState({
      showError,
    });
  }

  render() {
    const {
      label,
      value,
      onChange,
      keyName,
      submitted,
    } = this.props;

    const { showError } = this.state;

    const isError = (showError || submitted) && !value;

    return (
      <div className={`input ${isError ? 'input--error' : ''}`}>
        <label>{label}</label>
        {isError && (<span>{`Please input ${label}`}</span>)}
        <input 
          type="text" 
          value={value} 
          name={keyName} 
          onFocus={() => this.setShowError(true)}
          onChange={({ target: { value } }) => onChange(keyName, value)} 
        />
      </div>
    );
  }
}

export default Input;

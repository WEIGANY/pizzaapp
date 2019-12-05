import React from 'react';
import Title from '../Title';
import './Details.css';
import Input from '../Input';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { details, setDetails, submitted } = this.props;

    return (
      <section className="details">
        <Title>Enter your details</Title>
        <div className="details__layout">
          {[{
            keyName: 'name',
            label: 'Name',
          }, {
            keyName: 'email',
            label: 'Email'
          }, {
            keyName: 'confirmEmail',
            label: 'Confirm Email'
          }, {
            keyName: 'address',
            label: 'Address'
          }, {
            keyName: 'postCode',
            label: 'Postcode'
          }, {
            keyName: 'contactNumber',
            label: 'Contact Number'
          }].map(({ keyName, label }) => (
            <Input 
              submitted={submitted}
              key={keyName}
              keyName={keyName}
              value={details[keyName]} 
              label={label} 
              onChange={setDetails}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Details;

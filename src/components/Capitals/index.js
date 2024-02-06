import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {isActiveCapitalId: countryAndCapitalsList[0].id}

  onCahangeOption = event => {
    this.setState({isActiveCapitalId: event.target.value})
  }

  getCountry = isActiveCapitalId => {
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachObject => eachObject.id === isActiveCapitalId,
    )

    return activeCapitalAndCountry.country
  }

  render() {
    const {isActiveCapitalId} = this.state
    const country = this.getCountry(isActiveCapitalId)
    return (
      <div className="app-container">
        <div className="captital-option-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select-captl"
              onChange={this.onCahangeOption}
              value={isActiveCapitalId}
            >
              {countryAndCapitalsList.map(eachObject => (
                <option
                  className="capital"
                  key={eachObject.id}
                  value={eachObject.id}
                >
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-Question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals

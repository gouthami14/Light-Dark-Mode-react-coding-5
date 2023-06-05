// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onChangeColor = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`body-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onChangeColor}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

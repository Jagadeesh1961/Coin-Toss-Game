import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    toss: 0,
    headCount: 0,
    tailCount: 0,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        toss: 0,
      })
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState({
        toss: 1,
      })
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {toss, tailCount, headCount} = this.state
    const imgUrl =
      toss === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="toss-image" />
          <button className="button" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {headCount + tailCount} </p>
            <p className="count">Heads: {headCount} </p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

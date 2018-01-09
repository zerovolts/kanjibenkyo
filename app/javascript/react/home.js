import React from "react"
import {Link} from "react-router-dom"

const Home = props => {
  return (
    <div className="home">
      <ul>
        <li><Link to="/kana">Kana List</Link></li>
        <li><Link to="/quiz/kana">Kana Quiz</Link></li>
      </ul>
    </div>
  )
}

export default Home

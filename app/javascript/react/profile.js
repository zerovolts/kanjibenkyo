import React from "react"

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: "zerovolts",
      user: {}
    }
  }

  componentDidMount() {
    fetch("/api/v1/user/" + this.state.login)
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.login}</p>
      </div>
    )
  }
}

export default Profile

import Users from "./GridLayout";
import "./style.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: true };

    this.goForFetch = this.goForFetch.bind(this);
  }

  goForFetch() {
    
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="idd1">
            <div className="idd2">
              <div className="column1">
                <h2 className="id1">Fetch API</h2>
              </div>
              <div className="id2">
                <button onClick={this.goForFetch}><h3>Get Users</h3></button>
              </div>
            </div>
          </div>
        </nav>
        <div className="con">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;








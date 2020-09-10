import React, { Component } from "react";
import UserForm from "./UserForm";
import { connect } from "react-redux";

class User extends Component {
  render() {
    let list = [
      {
        name: "Nataniel",
        email: "nataniel.paiva@gmail.com",
      },
      {
        name: "João",
        email: "joao@gmail.com",
      },
    ];

    return (
      <div>
        <UserForm></UserForm>
        <table border='1'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {list.map((item, key) => {
            return (
              <tbody key={key.toString()}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(User);

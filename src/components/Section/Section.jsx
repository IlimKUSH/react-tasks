import React from "react";

const Section = ({ users }) => {
  return (
    <div className="table__container">
      <div className="container">
        <table className="table">
          <tr>
            <th>name</th>
            <th>lastname</th>
            <th>age</th>
            <th>id</th>
          </tr>
          {users.map(item => (
            <tr>
              <td className="name">{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;

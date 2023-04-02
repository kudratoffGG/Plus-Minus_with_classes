import React from "react";
import Link from "../components/Link";
import '../App.css';


class Sidebar extends React.Component {
  clickHandler = () => {
    alert('Clicked');
  }

  render() {
    const {title, data} = this.props;
    return (
      <div className="App">
        <hr />
        <h1> Analytic </h1>
        <p> {title}, {data.name}</p>
        <button className="mb-3 btn btn-primary" onClick={this.clickHandler}> Click </button>
        <Link data={{ url: '/my-link', title: 'WebReact', isActive: true }} />
      </div>
    )
  }
}


export default Sidebar;
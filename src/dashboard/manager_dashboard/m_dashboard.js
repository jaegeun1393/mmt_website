import React, { Component } from 'react';
import axios from "axios";

import '../../App.css';

class M_Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginstate: false,
      clicked: 0
    };
    this.setclicked = this.setclicked.bind(this)
  }

  setclicked(num) {
    this.setState({clicked: num});
  }

  render() {
  return (
    <div>
<main className="flex w-full h-auto" style={{marginTop: "37px"}}>
<aside className="w-80 h-screen bg-gray w-fulll hidden sm:block">
  <div className="flex flex-col justify-between h-screen p-4">
      <div className="text-sm">
        <div className="bg-gray-600 text-blue-300 p-5 rounded mt-2 cursor-pointer" onClick={() => this.setclicked(0)}>Main</div>
        <div className="bg-gray-300 text-black p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" onClick={() => this.setclicked(1)}>Booking</div>
        <div className="bg-gray-300 text-black p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" onClick={() => this.setclicked(2)}>Reservation</div>
        <div className="bg-gray-300 text-black p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" onClick={() => this.setclicked(3)}>Complete</div>
        <div className="bg-gray-300 text-black p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" onClick={() => this.setclicked(4)}>Financial</div>
        <div className="bg-gray-300 text-black p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" onClick={() => this.setclicked(5)}>History</div>
      </div>


  </div>
</aside>

<section className="w-full p-4">
  <div className="w-full h-64 p-4 text-md">

  </div>
  </section>

</main>
    </div>
  );
  }
}

export default M_Dashboard;

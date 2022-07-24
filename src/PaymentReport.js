import React, { Component, createElement } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';


import './App.css';
class PaymentReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
          table_data: [
            { description: "Website design", quantity: 300, price: 12 }
          ],
          num_row: 0,
          total_price: 0,
          addrow_show: "block",
          subtotal1: 0,
          subtotal2: 0,
          f_sub: 0,
          c_name: "Angie Kim",
          c_email: "angiek@mmtprep.com",
          c_num: "971-256-1284"
        };
        this.preset = this.preset.bind(this)
        this.addRow = this.addRow.bind(this)
        this.autocal_total = this.autocal_total.bind(this)
        this.printDocument = this.printDocument.bind(this)
        this.addsubtotal = this.addsubtotal.bind(this)
        this.set_subprice = this.set_subprice.bind(this)
        this.set_subprice2 = this.set_subprice2.bind(this)
      }

      set_subprice = (e) => {
        this.setState({subtotal: e.target.value});
      }

      set_subprice2 = (e) => {
        this.setState({subtotal2: e.target.value});
      }

      addsubtotal(ver) {
        //ver == 0 -> add && ver == 1 -> per  
        var f_p = 0
        var td2 = document.createElement("td");

        if(ver == 0) {
          f_p = this.state.subtotal2;
          td2.innerText = "Sub Total: +$" + f_p;

        } else if(ver == 1) {
          f_p = (this.state.subtotal / 100) * this.state.total_price;
          td2.innerText = "Sub Total: (" + this.state.subtotal + "%) $" + f_p;
        }
        this.setState({f_sub: f_p});
        this.state.f_sub = f_p;
        var main = document.getElementById("subTotal");
        main.innerHTML = null;

        var td = document.createElement("td");
        td.colSpan = "3";

        main.appendChild(td);
        main.appendChild(td2);

        this.autocal_total();
      }

      preset() {
        var full_length = this.state.table_data.length;
        for(let i = 0; i < full_length; i++) {
            this.setState({num_row: this.state.num_row+1});
            var main = document.getElementById("table_item");

            var mtr = document.createElement("tr");
            mtr.className = "item";

            var td1 = document.createElement("td");
            var td1input = document.createElement("input");
            td1input.id = this.state.num_row + "_title";
            td1input.value = this.state.table_data[i].description;
            td1.className = "pl-4"
            td1.appendChild(td1input);

            var td2 = document.createElement("td");
            td2.innerText = "$";
            var td2input = document.createElement("input");
            td2input.type = "number";
            td2input.id = this.state.num_row + "_price";
            td2input.value = this.state.table_data[i].quantity;
            td2input.className = "text-right";
            td2input.addEventListener("change", (event) => {
                this.autocal_sub_total(event.target.id);
              });   
            td2.appendChild(td2input);

            var td3 = document.createElement("td");
            var td3input = document.createElement("input");
            td3input.type = "number";
            td3input.id = this.state.num_row + "_quantity";
            td3input.value = this.state.table_data[i].price;
            td3input.className = "text-right";
            td3input.addEventListener("change", (event) => {
                this.autocal_sub_total(event.target.id);
              });   
            td3.appendChild(td3input);

            var td4 = document.createElement("td");
            td4.id = this.state.num_row + "_subtotal";
            td4.innerText = "$ " + this.state.table_data[i].quantity * this.state.table_data[i].price;

            main.appendChild(mtr);
            mtr.appendChild(td1);
            mtr.appendChild(td2);
            mtr.appendChild(td3);
            mtr.appendChild(td4);
            this.autocal_total();
        }
      }

      addRow() {
            this.setState({num_row: this.state.num_row+1});
            var main = document.getElementById("table_item");

            var mtr = document.createElement("tr");
            mtr.className = "item";

            var td1 = document.createElement("td");
            var td1input = document.createElement("input");
            td1input.id = this.state.num_row + "_title";
            td1.className = "pl-4"
            td1.appendChild(td1input);

            var td2 = document.createElement("td");
            td2.innerText = "$";
            var td2input = document.createElement("input");
            td2input.type = "number";
            td2input.id = this.state.num_row + "_price";
            td2input.className = "text-right";
            td2input.addEventListener("change", (event) => {
                this.autocal_sub_total(event.target.id);
              });   
            td2.appendChild(td2input);

            var td3 = document.createElement("td");
            var td3input = document.createElement("input");
            td3input.type = "number";
            td3input.id = this.state.num_row + "_quantity";
            td3input.className = "text-right";
            td3input.addEventListener("change", (event) => {
                this.autocal_sub_total(event.target.id);
              });   
            td3.appendChild(td3input);

            var td4 = document.createElement("td");
            td4.id = this.state.num_row + "_subtotal";

            main.appendChild(mtr);
            mtr.appendChild(td1);
            mtr.appendChild(td2);
            mtr.appendChild(td3);
            mtr.appendChild(td4);
      }

      autocal_sub_total = (e) => {
        var num_row = e.substr(0, e.indexOf('_'));
        
        var price = document.getElementById(num_row+"_price").value;
        var quantity = document.getElementById(num_row+"_quantity").value;

        var subtotal_main = document.getElementById(num_row+"_subtotal");
        subtotal_main.innerText = "$ " + price * quantity;

        this.autocal_total();
      }

      async autocal_total() {
        var f_sub_p = 0;
        for(let i=0; i < this.state.num_row; i++) {
            var sub_price = document.getElementById(i+"_price").value * document.getElementById(i+"_quantity").value;
            f_sub_p += sub_price;
        }
        f_sub_p += parseFloat(this.state.f_sub);

        this.setState({total_price: f_sub_p});
      }

      async printDocument() {
        const input = document.getElementById('invoice-box');
        console.log(input);
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }

      componentDidMount() {   
        this.preset();
      }

    render() {
    return (
    <div>
        <div className="bg-gray-200 text-gray-800 font-semibold min-h-screen">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row pt-10 rounded-sm gap-10">
                    <div className="lg:w-4/12 w-full">
                       <form action="">
                            <div className="flex flex-col gap-7 ">
                                <div className="w-full rounded-xl bg-white shadow-xl">
                                    <h3 className="bg-gray-700 w-full text-white text-xl px-2.5 py-1.5 rounded-tr-xl rounded-tl-xl">Customer</h3>
                                    <div className="p-3 pb-7">
                                        <select id="countries" className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-md font-bold rounded-xl focus:ring-blue-300 focus:border-blue-300 block w-full px-2 leading-4 outline-none cursor-pointer">
                                            <option defaultValue>Select Customer</option>
                                            <option value="US">Customer</option>
                                            <option value="CA">Customer</option>
                                            <option value="FR">Customer</option>
                                            <option value="DE">Customer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full rounded-xl bg-white shadow-xl">
                                    <h3 className="bg-gray-700 w-full text-white text-xl px-2.5 py-1.5 rounded-tr-xl rounded-tl-xl">Add Item List</h3>
                                    <div className="p-3 pb-1">
                                        <div>
                                            <select id="countries" className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-md font-bold rounded-xl focus:ring-blue-300 focus:border-blue-300 block w-full px-2 leading-4 mb-2 outline-none cursor-pointer">
                                                <option defaultValue>Select an Item</option>
                                                <option value="US">Item</option>
                                                <option value="CA">Item</option>
                                                <option value="FR">Item</option>
                                                <option value="DE">Item</option>
                                            </select>
                                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border-2 focus:ring-blue-300 focus:border-blue-300 resize-none outline-none border-gray-500" placeholder="Description..."></textarea>
                                        </div>
                                        <div className="flex justify-between mt-3">
                                            <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-xl px-5 py-0.5 mr-2 mb-2" onClick={this.addRow}>Add Blank Item</button>
                                            <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-xl px-5 py-0.5 mr-2 mb-2">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full rounded-xl bg-white shadow-xl pb-2">
                                    <h3 className="bg-gray-700 w-full text-white text-xl px-2.5 py-1.5 rounded-tr-xl rounded-tl-xl">Add Subtotal</h3>
                                    <div className="p-3 pb-1 flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <div className="flex absolute inset-y-0 ml-2 left-0 items-center pr-3 pointer-events-none text-xl text-gray-700">
                                            %
                                            </div>
                                            <input type="number" id="input-group-1" className="bg-gray-50 border ml-8 border-gray-500 text-gray-700 text-md rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-200 px-2.5 py-1 outline-none" onChange={this.set_subprice} placeholder=""/>
                                        </div>
                                        <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-0.5 mr-2" onClick={() => this.addsubtotal(1)}>Add</button>
                                    </div>
                                    <div className="p-3 pb-1 flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <div className="flex absolute inset-y-0 ml-2 left-0 items-center pr-3 pointer-events-none text-xl text-gray-700">
                                            $
                                            </div>
                                            <input type="number" id="input-group-1" className="bg-gray-50 border ml-8 border-gray-500 text-gray-700 text-md rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-200 px-2.5 py-1 outline-none" onChange={this.set_subprice2} placeholder=""/>
                                        </div>
                                        <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-0.5 mr-2" onClick={() => this.addsubtotal(0)}>Add</button>
                                    </div>
                                </div>
                                <button type="button" className="text-gray-700 shadow-lg w-full bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-xl px-5 py-1.5 mr-2" onClick={this.printDocument}>Send Email</button>
                        </div>
                       </form>
                    </div>

                    <div className="md:w-full lg:w-8/12 bg-white p-6 sm:p-8" id="invoice-box">
                        <div className="">
                            <div className="mb-7 border-b border-gray-300">
                                <div className="flex justify-between items-center p-1.5 ">
                                    <div className="mr-3">
                                        <img src={require('./logo.jpg')}  width="100" height="33" alt="logo" />
                                    </div>
                                    <div className="text-right text-base">
                                        <p className="font-bold text-xl mb-4">Invoice#0001658</p>
                                        <p className="text-gray-600 text-sm">
                                            <span >Issue Date: </span>
                                            <span >Jul 20, 2022</span>
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span >Due Date:</span>
                                            <span >Jul 28, 2022</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start p-1.5">
                                    <div className="">
                                        <h4 className="text-gray-800 font-bold">MMT Prep, LLC</h4>
                                        <div className="text-xs text-gray-600">
                                            <p>
                                                Suite 116 <br />
                                                15160 Northwest Laidiaw Road <br />
                                                Portiand, Oregon 97229 <br />
                                                United States <br />
                                            </p>
                                            <p>Angiek@mmtprep.com</p>
                                            <p>Phone: 971-256-2586</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-7/12 w-full flex justify-between text-xs mb-7 p-1.5 text-gray-600">
                                <div className="">
                                    <p>Bill To:</p>
                                    <p className="font-bold text-gray-800">{this.state.c_name}</p>
                                    <p>United States</p>
                                </div>
                                <div className=" text-right md:text-left">
                                    <p>Additional Customer Info:</p>
                                    <p>Address: {this.state.c_email}</p>
                                    <p>Phone: {this.state.c_num}</p>
                                </div>
                            </div>
                            <div className="container"> 
                              <table className="w-full sm:bg-white rounded-lg overflow-hidden">
                                <thead className="bg-gray-200 border-b border-gray-100 rounded-sm">
                                    <tr className=" flex-no mb-2">
                                      <th className="p-3">Item</th>
                                        <th className="p-3">Unit Cost</th>
                                        <th className="p-3">Quantity</th>
                                        <th className="p-3">Price</th>
                                    </tr>
                                </thead>
    
                                <tbody id="table_item">
                                </tbody>

                                <tfoot>
                                <tr className="total" id="subTotal">
                                </tr>

                                <tr className="total">
                                  <td colSpan="3"></td>
                                  <td>Total: $ {this.state.total_price}</td>
                                </tr>
                              </tfoot>
                            </table>
   

                                <div>
                                    <p className="text-gray-600 text-lg leading-10">Note:</p>
                                    <div>
                                        <textarea className="resize-none w-full rounded-md border-2 border-gray-400 outline-none text-lg p-5 placeholder-gray-600" placeholder="Text Edit..." name="" id="" cols="30" rows="7"></textarea>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}
}

export default PaymentReport;

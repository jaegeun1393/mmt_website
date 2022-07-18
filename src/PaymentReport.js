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
          addrow_show: "block"
        };
        this.preset = this.preset.bind(this)
        this.addRow = this.addRow.bind(this)
        this.autocal_total = this.autocal_total.bind(this)
        this.printDocument = this.printDocument.bind(this)
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
            td1.appendChild(td1input);

            var td2 = document.createElement("td");
            td2.innerText = "$";
            var td2input = document.createElement("input");
            td2input.type = "number";
            td2input.id = this.state.num_row + "_price";
            td2input.value = this.state.table_data[i].quantity;
            td2input.addEventListener("change", (event) => {
                this.autocal_sub_total(event.target.id);
              });   
            td2.appendChild(td2input);

            var td3 = document.createElement("td");
            var td3input = document.createElement("input");
            td3input.type = "number";
            td3input.id = this.state.num_row + "_quantity";
            td3input.value = this.state.table_data[i].price;
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
            td1.appendChild(td1input);

            var td2 = document.createElement("td");
            td2.innerText = "$";
            var td2input = document.createElement("input");
            td2input.type = "number";
            td2input.id = this.state.num_row + "_price";
            td2input.addEventListener("change", (event) => {
                this.autocal_sub_total(event.target.id);
              });   
            td2.appendChild(td2input);

            var td3 = document.createElement("td");
            var td3input = document.createElement("input");
            td3input.type = "number";
            td3input.id = this.state.num_row + "_quantity";
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

        this.setState({total_price: f_sub_p});
      }

      async printDocument() {
        const input = document.getElementById('invoice-box');
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
    <div className='bg-slate-200'>
    <div className="invoice-box" id="invoice-box">
    <table cellPadding="0" cellSpacing="0">
        <tr>
        <td colSpan="4">
            <table>
                <thead>
                    <tr>
                        <td className="title">
                        <img style={{width:"195px", height:"33px"}} src={require('./logo.jpg')} />
                        </td>

                        <td>
                        Invoice #: 123<br /> Created: January 1, 2015<br /> Due: February 1, 2015
                        </td>
                    </tr>
            </thead>
            </table>
        </td>
        </tr>
        
        <tr className="information">
        <td colSpan="4">
            <table>
                <thead>
                    <tr>
                        <td>
                            Sparksuite, Inc.<br /> 12345 Sunny Road<br /> Sunnyville, CA 12345
                        </td>
                        <td>
                            Acme Corp.<br /> John Doe<br /> john@example.com
                        </td>
                    </tr>
                </thead>
            </table>
        </td>
        </tr>

        <tr className="heading">
        <td colSpan="3">Payment Method</td>
        <td>Check #</td>
        </tr>

        <tr className="details">
        <td colSpan="3">Check</td>
        <td>1000</td>
        </tr>

        </table>

        <table>
            <thead className="table_header">
                <tr>
                <th>Item</th>
                <th className="text-right">Unit Cost</th>
                <th className="text-right">Quantity</th>
                <th className="text-right">Price</th>
                </tr>
            </thead>
    
        <tbody id="table_item">
        </tbody>

        <tfoot>


            <tr className="total">
            <td colSpan="3"></td>
            <td>Total: $ {this.state.total_price}</td>
            </tr>
        </tfoot>
        </table>

    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={this.addRow} style={{display: this.state.addrow_show}}>Add row</button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={this.printDocument}>download</button>
        </div>
  );
}
}

export default PaymentReport;

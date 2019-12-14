import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PaystackButton from 'react-paystack';

class PayWithPaystack extends Component {
    constructor() {
        super()
        this.state = {
            key: "pk_live_de2ddae4bd862a98fd23b02a19bcd37a1f476bc8",
            email: "email@test.com",
            amount: 100000,
        }
    }

    callback = (response) => {
        console.log(response.reference); // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    render() {
        return (
            <PaystackButton
                text="Make Payment"
                className="btn btn-success"
                callback={this.callback}
                close={this.close}
                disabled={false}
                embed={false}
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                paystackkey={this.state.key}
                tag="button"
            />
        );
    }

}

export default PayWithPaystack
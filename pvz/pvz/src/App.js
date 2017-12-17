import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCard'


class App extends Component {

  render() {
    const tel = {
      product: [
        {pic: 'http://bliujus.uk/phone.jpg',  title: 'Bell Telephone Company', ringtone: 'Monophonic', price: '120'},
        {pic: 'http://bliujus.uk/phone2.jpg', title: 'Telegraph Company', ringtone: 'Monophonic', price: '223'},
        {pic: 'http://bliujus.uk/phone3.jpg', title: 'Bell Telephone Company', ringtone: 'Polyphonic', price: '340'},
        {pic: 'http://bliujus.uk/phone4.jpg', title: 'Bell Telephone Company', ringtone: 'Polyphonic', price: '400'},
        {pic: 'http://bliujus.uk/phone5.jpg', title: 'Telegraph Company', ringtone: 'Truetone', price: '410'},
        {pic: 'http://bliujus.uk/phone6.jpg', title: 'American Telephone', ringtone: 'Truetone', price: '420'}
      ]
    };

    return (
      <div>
        <Navbar />
        <ProductCards product={tel.product}/>
      </div>
    );
  }
}

export default App;

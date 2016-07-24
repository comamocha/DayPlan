import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../Client/App.jsx';

//The following contain A few test for App.jsx 
//This file can be used as a boilerplate to test the rest of the Components
function mockItem(overrides) {
  // … create mock ToDo Item
}

describe('<App />', () => {
  it('renders as a div', () => {
    
    const wrapper = shallow(<App />);
     expect(wrapper.type()).to.eql('div');
  });

  it('contains a nav  with 2  navbar-nav', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.nav')).to.have.length(2);
  });


});
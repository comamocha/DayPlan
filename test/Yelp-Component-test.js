import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import YelpComponent from '../Client/Components/YelpComponent.jsx';




describe('<YelpComponent />', () => {

    //YelpComponent is expecting a function to be pased in the props
    var fakefunction =  function(){
      return "Fake function"
    }

  it('renders as a div', () => {
    
    const wrapper = shallow(<YelpComponent addEvent={fakefunction}/>);
     expect(wrapper.type()).to.eql('div');
  });




});
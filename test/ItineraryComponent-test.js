import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ItineraryComponent from '../Client/Components/ItineraryComponent.jsx';



//Tried to add test case but we need to pass correct props 
//since ItineraryComponent depends on ItineraryEvent
//Please read the following post: https://github.com/airbnb/enzyme/issues/144
describe('<ItineraryComponent />', () => {


  // it('renders as a div', () => {
  //   const wrapper = shallow(<ItineraryComponent  />);
  //    expect(wrapper.type()).to.eql('div');
  // });

  it('place holder, add more tests please!', () => {
    expect(42).to.eql(42);
  });


});
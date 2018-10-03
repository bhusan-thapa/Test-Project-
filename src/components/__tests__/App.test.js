import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';
import Video from '../Video';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
it('shows the comment box', () => {
  expect(wrapped.find(Header).length).toEqual(1);
});
it('shows the comment list', () => {
  expect(wrapped.find(Video).length).toEqual(1);
});

/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
import React from 'react';
import { shallow } from 'enzyme';
import Details from '../../src/Details';
import toJson from 'enzyme-to-json';


jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: "",
      search: "",
      hash: "",
      state: null,
      key: "",

    }),
    useHistory: () => {
      push: jest.fn()
    },

    

}));

describe('Details Component', () => {

    //test case 01. number of headers
    test('render header of details', () => {
        const wrapper = shallow(<Details />);
        expect(wrapper.find('[data-testid="headerdetails"]').length).toBe(1);
    });

    //test case 02. number of divs in component
    test('number of div tags', () => {
        const wrapper = shallow(<Details />);
        expect(wrapper.find('div').length).toBe(7);
    });

    //test case 03. render detail table
    test('render details table',() => {
        const wrapper = shallow(<Details />);
        expect(wrapper.find('[data-testid="detailtable"]').length).toBe(1);
        expect(wrapper.find('[data-testid="detailtable"]').text()).toBe("Details");

    });

    //test case 04. render thumbnail image

    test('render details ListDetailImage',() => {
        const wrapper = shallow(<Details />);
        expect(wrapper.find('[data-testid="thumbnailimage"]').length).toBe(1);
        expect(wrapper.find('[data-testid="thumbnailimage"]').text()).toBe("");
      
    });

    //test case 05. render picture
    test('render album picture',() => {
      const wrapper = shallow(<Details />);
      expect(wrapper.find('[data-testid="albumpicture"]').length).toBe(1);
    
     });

     //render without crashing (snapshot)
     test('render without crashing', () => {
      const wrapper = shallow(<Details  />);
      expect(toJson(wrapper)).toMatchSnapshot();
    
  
  });


  
});

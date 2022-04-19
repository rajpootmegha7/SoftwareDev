import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Planner from '../containers/planner/planner';
import MemoryRouter from 'react-router-dom/BrowserRouter';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Render Planner Page', () => {
  it('should render', () => {
    const PlannerComponent = shallow(<MemoryRouter><Planner /></MemoryRouter>);
    const tree = toJson(PlannerComponent);
    expect(tree).toMatchSnapshot();
  });
});
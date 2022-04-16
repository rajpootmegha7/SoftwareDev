// navBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../containers/footer/footer';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Render - Footer Container', () => {
  it('Welcome Message Should Appear', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('GitHub - PlantCare 22')).toBeInTheDocument();
  });
});

// export default class Footer extends Component {
//     render() {
//         return (
            
//            <div className='Footer_container'>
//                  <a href='https://github.com'> GitHub - PlantCare 22'</a>   
//            </div>
//         )
//     }
// }

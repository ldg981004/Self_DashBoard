/* eslint-disable */

import './App.css';
import Chart from './components/chart/Chart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from './components/table/Table';
import Example from './components/piechart/Piechart';
import Default from './components/listgroup/listgroup';
import Cal from './components/calendar/Calendar';
import Scatchart from './components/scatterchart/scatterchart';
import ChartBar from './components/barchart/barchart';
import Weather from './components/weather/Weather';




function App() {
  return (
    <div>
      {/* 상단 Navbar 부분 */}
      <div>
        <Container fluid>
            <Row>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand className="dashboard" href="#home">DashBoard</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            </Row>
        </Container>
      </div>

      <div className='main-container'>
        {/* 좌측 메뉴 부분 */}
        <div className='menu'>

        <div className='lb'>
                <label className='lb_name'>User</label>
            </div>

            <div className='lb'>
                <label className='lb_name'>APPS</label>
            </div>
            <div>
              <ButtonGroup vertical className='btn_group'>
                <div>
                <Button className='button'>Email</Button>
                </div>
                <div>
                <Button className='button'>Chat</Button>
                </div>
                <div>
                <Button className='button'>Todo</Button>
                </div>
                <div>
                <Button className='button'>Calendar</Button>
                </div>
                <div>
                <Button className='button'>eCommerce</Button>
                </div>
                <div>
                <Button className='button'>Setting</Button>
                </div>
              </ButtonGroup>
            </div>

          <div className='lb'>
                <label className='lb_name'>UI</label>
          </div>
          <div>
            <ButtonGroup vertical className='btn_group'>
              <Button className='button'>Data List</Button>
              <Button className='button'>Grid</Button>
              <Button className='button'>Color</Button>
              <Button className='button'>Card</Button>
              <Button className='button'>Components</Button>
            </ButtonGroup>
          </div>
        </div>

        <div className='main-grid'>
          <div className='box'><ChartBar/></div>
          <div className='box'><Weather/></div>
          <div className='box'><Scatchart/></div>
          <div className='box'></div>
          <div className='box'><Example/></div>
          <div className='box6'><Default/></div>
          <div className='box7'><Cal/></div>
          <div className='box'><Table/></div>
          <div className='box'><Chart/></div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

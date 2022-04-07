import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import Checkbox from '../Checkbox';


const Navigationbar = (props) => {

    let dataAll = props.dataAll

    const [searObj1, setsearObj1] = useState([]);

    let searObj = []

    const search = (e) => {

        // console.log(searObj);                empty array
        console.log('search');
        const searchBar = document.getElementById('searchBar').value
        console.log(searchBar);
        dataAll.map((val, index) => {
            if (val.title.includes(searchBar)) {
                searObj = [...searObj, val]
                console.log("founfdddd", searObj);
            }
        })
        setsearObj1(searObj)
        props.searchDone(searObj1)
        // console.log(searObj);                 Full array

    }

    const checkBox1 = (data) => {
        props.checkData(data)
    }

    return (
        <>


            <Navbar expand="xs" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top" />{' '}  DATA-TABLE </Navbar.Brand>
                    <Navbar.Brand className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll   >
                        <Checkbox CheckBox={dataAll} recivingData={checkBox1} />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Features</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Form className="d-flex">
                                    <FormControl type="search" id="searchBar" placeholder="Search" className="me-2" aria-label="Search" onKeyUp={() => { search() }} />
                                    {/* <Button variant="outline-success" onClick={prosearch}  >Search</Button> */}
                                </Form>

                                <div className="d-grid gap-2 mt-4 mb-4">
                                    <Button variant="primary" size="lg" className='mb-2' onClick={() => { props.decending(searObj1) }}> Decending / Assending </Button>
                                    {/* <Button variant="secondary" size="lg" className='mt-2' onClick={decending}>   sort  Decending  </Button> */}
                                </div>


                            </Nav>
                        </Offcanvas.Body>

                    </Navbar.Offcanvas>


                </Container>
            </Navbar>


        </>
    )
}

export default Navigationbar






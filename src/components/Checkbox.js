import React, { useEffect, useState } from 'react'
import { Container, Form, NavDropdown } from 'react-bootstrap'

const Checkbox = (props) => {

    const CheckBox = props.CheckBox;

    const [users, setusers] = useState([])

    const [val1, setval1] = useState(0)
    const [val2, setval2] = useState(0)
    const [val3, setval3] = useState(0)
    const [val4, setval4] = useState(0)
    const [val5, setval5] = useState(0)
    const [val6, setval6] = useState(0)
    const [val7, setval7] = useState(0)
    const [val8, setval8] = useState(0)
    const [val9, setval9] = useState(0)
    const [val10, setval10] = useState(0)



    const filter = ([...v]) => {
        let copymyFilter = [];
        console.log('passed value of v', v);
        v.map((value) => {
            // console.log(value);
            CheckBox.map((ele) => {
                // console.log(ele.userId);
                if (ele.userId == value) {
                    copymyFilter = [...copymyFilter, ele]
                    // console.log('value:', ele);
                }
            })
        })
        console.log(copymyFilter)
        setusers(copymyFilter)
    }


    const checkBox1 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 1) { setval1(ele.userId); }
            })
        } else { console.log('unchecked'); setval1(0); }
    }

    const checkBox2 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 2) { setval2(ele.userId); }
            })
        } else { console.log('unchecked'); setval2(0); }
    }

    const checkBox3 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 3) { setval3(ele.userId); }
            })
        } else { console.log('unchecked'); setval3(0); }
    }

    const checkBox4 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 4) { setval4(ele.userId); }
            })
        } else { console.log('unchecked'); setval4(0); }
    }

    const checkBox5 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 5) { setval5(ele.userId); }
            })
        } else { console.log('unchecked'); setval5(0); }
    }

    const checkBox6 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 6) { setval6(ele.userId); }
            })
        } else { console.log('unchecked'); setval6(0); }
    }

    const checkBox7 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 7) { setval7(ele.userId); }
            })
        } else { console.log('unchecked'); setval7(0); }
    }

    const checkBox8 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 8) { setval8(ele.userId); }
            })
        } else { console.log('unchecked'); setval8(0); }
    }

    const checkBox9 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 9) { setval9(ele.userId); }
            })
        } else { console.log('unchecked'); setval9(0); }
    }

    const checkBox10 = (e) => {
        if (e.target.checked) {
            console.log('checked');
            CheckBox.map((ele) => {
                if (ele.userId == 10) { setval10(ele.userId); }
            })
        } else { console.log('unchecked'); setval10(0); }
    }

    useEffect(() => {

        props.recivingData(users)

    }, [users])

    useEffect(() => {
        // if (users.length !== 0) {
            filter([val1, val2, val3, val4, val5, val6, val7, val8, val9, val10]);
        // }
    }, [val1, val2, val3, val4, val5, val6, val7, val8, val9, val10])

    return (
        <div>

            <NavDropdown title="DISPLAY ID" id="offcanvasNavbarDropdown"  >
                <Container className='px-4'>
                    <Form.Check aria-label="option 1" label={`01-10 `} onChange={(e) => { checkBox1(e) }} />
                    <Form.Check aria-label="option 1" label={`11-20 `} onChange={(e) => { checkBox2(e) }} />
                    <Form.Check aria-label="option 1" label={`21-30 `} onChange={(e) => { checkBox3(e) }} />
                    <Form.Check aria-label="option 1" label={`31-40 `} onChange={(e) => { checkBox4(e) }} />
                    <Form.Check aria-label="option 1" label={`41-50 `} onChange={(e) => { checkBox5(e) }} />
                    <Form.Check aria-label="option 1" label={`51-60 `} onChange={(e) => { checkBox6(e) }} />
                    <Form.Check aria-label="option 1" label={`61-70 `} onChange={(e) => { checkBox7(e) }} />
                    <Form.Check aria-label="option 1" label={`71-80 `} onChange={(e) => { checkBox8(e) }} />
                    <Form.Check aria-label="option 1" label={`81-90 `} onChange={(e) => { checkBox9(e) }} />
                    <Form.Check aria-label="option 1" label={`91-100`} onChange={(e) => { checkBox10(e) }} />
                </Container>
            </NavDropdown>

        </div>
    )
}

export default Checkbox

import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Navigationbar from '../navigator/Navigationbar';

const DisplayData = (props) => {

    const [fetchdata, setfetchdata] = useState([]);
    const [Searchdata, setSearchdata] = useState([]);
    // const [state, setstate] = useState(initialState)



    useEffect(() => {
        fetchData();
        console.log('useeffect is running');

    }, [])


    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        setfetchdata(data);
        setSearchdata(data);

    }


    const searchDone = (searcData) => {
        setfetchdata(searcData)
        // console.log(searcData);
    }


    const arrangeData = (setdata) => {
        // console.log(' working recived');
        setfetchdata(setdata);
        // console.log(setdata);
    }



    const decending = (des) => {
        console.log('Working sending');
        const ass_dec = [...fetchdata.reverse()]
        console.log(ass_dec);
        setfetchdata(ass_dec)

    }


    const checkData = (data) => {
        setfetchdata(data)
    }


    return (
        <>

            <Navigationbar searchDone={searchDone} dataAll={Searchdata} decending={decending} arrangeData={arrangeData} checkData={checkData} />

            <Container className='m-4'>
                <Table striped bordered hover variant="dark">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>

                    <tbody>
                        {fetchdata.map((data) => {
                            return (<tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                            </tr>)
                        })}
                    </tbody>

                </Table>
            </Container>

        </>
    )
}

export default DisplayData

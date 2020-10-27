import {CSVLink} from 'react-csv'
import React, { useState } from 'react';
import ApplicantDataService from '../services/ApplicantDataService';
import { Button } from 'react-bootstrap';

export default function CsvDownload() {

    const [count, setcount] = useState(0);
    const [data, setdata] = useState([]);

    const headers = [
        {label: 'Course', key: 'course'},
        { label: "Name", key: "name" },
        { label: "email", key: "email" },
        { label: "phone", key: "phone" },
        { label: "dob", key: "dob" },
        { label: "gender", key: "gender" },
        { label: "addressLine1", key: "addressLine1" },
        { label: "addressLine2", key: "addressLine2" },
        { label: "state", key: "state" },
        { label: "pincode", key: "pincode" },
        { label: "bloodGroup", key: "bloodGroup" },
        { label: "bloodDonorVolunteer", key: "bloodDonorVolunteer" },
        { label: "studied", key: "studied" },
        { label: "additionalQualification", key: "additionalQualification" },
        { label: "studying", key: "studying" },
        { label: "working", key: "working" },
        { label: "verticalReservation", key: "verticalReservation" },
        { label: "horizontalReservation", key: "horizontalReservation" },
        { label: "Photo Link", key: "photo" },
        { label: 'Date Applied', key: 'dateApplied'}
      ];    

      return(<>

      <div className="rodiv"  style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center'
      }}>

        <Button disabled={count == 0 ? false : true} className='primary' onClick={
            () => {
                ApplicantDataService.getAllApplicant().then((data1) => {
                    setdata(data1.data);
                    setcount(data1.data.length);
                    console.log(data1.data)
                  })
            } 
        }>Get data</Button>
      <h2>{count} Applicants registered</h2>

        <Button  disabled={count == 0 ? true : false}
              variant="primary"
              style={{ margin: `0px`, color: '#fffff', backgroundColor: 'white' }}
            >
               <CSVLink data={data} headers={headers}>
            Download me 
        </CSVLink>
            </Button>
        </div>        
      </>);
}
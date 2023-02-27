import React, { useEffect, useState } from 'react'
import { getCase } from '../../services/caseService';

export default function Case() {
  const [listCase, setListCase] = useState([]);

  function getData () {
    getCase() .then((res)=>{
      setListCase(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  let elementCase = listCase? listCase.map((data)=>{
    return <div className=" col-md-4" key={data.id}>
    <div className="latest text_align_center">
      <div className="nostrud">
        <h3>{data.title}</h3>
        <p className='cases--content'>
        {data.content}
        </p>
      </div>
    </div>
  </div>
  }) : <></>

  return (
    <div className="cases">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>Covid-19 Cases</h2>
              </div>
            </div>
          </div>
          <div className="row d_flex">
            {elementCase}
          </div>
        </div>
      </div>
  )
}

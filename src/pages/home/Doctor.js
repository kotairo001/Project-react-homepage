import React, { useEffect, useState } from "react";
import { getHospital } from "../../services/hospitalServices";

export default function Doctor() {
  const [listHospital, setListHospital] = useState([]);

  function getData() {
    getHospital().then((res) => {
      setListHospital(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  let elementHospital = listHospital? listHospital.map((data) => {
    return (
      <div className=" col-md-6"  key={data.id}>
        <div id="ho_efcet" className="reader text_align_center">
          <h3>{data.name}</h3>
          <p>
            Address: {data.address}
          </p>
          <p>
            Phone: {data.phone}
          </p>
          <p>
            Email: {data.email}
          </p>
          <p>
            Home Page: <a>{data.page}</a>
          </p>
        </div>
      </div>
    );
  }) : <></>
  return (
    <div className="doctors">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center ">
              <h2>Where can you get vaccinated?</h2>
            </div>
          </div>
        </div>
        <div className="row d_flex">
          {elementHospital}
        </div>
      </div>
    </div>
  );
}

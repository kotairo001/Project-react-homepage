import React, { useEffect, useState } from "react";
import { getVaccine } from "../../services/vaccineServices";

export default function Action() {
  const [vaccine, setVaccine] = useState([]);

  function getData() {
    getVaccine().then((res) => {
      setVaccine(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  let elementVaccine = vaccine? vaccine.map((data) => {
    return (
      <div className=" col-md-4" key={data.id}>
        <div className="latest text_align_center">
          <figure>
            <img src={data.image} alt="#" />
          </figure>
          <div className="nostrud">
            <h3>{data.name}</h3>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    );
  }) : <></>;
  return (
    <div className="cases">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center ">
              <h2>Vaccine</h2>
              <p>
                Subunit vaccines include only the parts of a virus that best
                stimulate your immune system.
              </p>
            </div>
          </div>
        </div>
        <div className="row d_flex">{elementVaccine}</div>
      </div>
    </div>
  );
}

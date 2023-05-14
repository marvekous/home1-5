import React from "react";
import img1 from "../img/1.jpg";
import { Link } from "react-router-dom";
import jj from "./page.module.css";

const Page1 = () => {
  return (
    <div>
      <Link to={"/"}>
        {" "}
        <img src={img1} className={jj.ger} alt="" />
      </Link>
      <div className={jj.text}>
        <h1>Text</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit saepe
          eaque quisquam facere vel, doloribus amet delectus ad odit maiores
          hic, id reiciendis alias. Doloremque est earum officiis soluta atque.
          Labore, quaerat illo libero iure harum distinctio fuga mollitia. Nihil
          eos blanditiis odit nisi harum quas aliquam quos distinctio velit!
          Magnam adipisci odit, eaque tenetur id quasi explicabo voluptatum sit!
          Totam debitis unde eveniet, nihil eos, dolore non voluptas modi vero
          et qui. Quas blanditiis delectus eos nesciunt reprehenderit quasi
          molestias odio maiores consectetur nam sit expedita, non laudantium
          officia!
        </p>
      </div>
    </div>
  );
};

export default Page1;

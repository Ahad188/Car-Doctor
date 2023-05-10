import te1 from "../../../assets/images/team/1.jpg";
import te2 from "../../../assets/images/team/2.jpg";
import te3 from "../../../assets/images/team/3.jpg";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagramSquare } from "react-icons/fa";

const Team = () => {
  return (
    <section className="mt-5 mb-10">
      <div className="text-center">
        <h3 className="text-orange-400 text-2xl">Team</h3>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="mt-5">
          the majority have suffered alteration in some form, by injected humour, <br /> or
          randomised words which donot look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={ te1}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Car Engine Plug</h2>
           <h3>Engine Exper</h3>
          <div className="card-actions mt-2">
               <button  className="btn btn-outline btn-info"><FaFacebookF></FaFacebookF></button>
               <button  className="btn btn-outline btn-info"><FaTwitter></FaTwitter></button>
               <button  className="btn btn-outline btn-info"><FaLinkedin></FaLinkedin></button>
               <button  className="btn btn-outline btn-info"><FaInstagramSquare></FaInstagramSquare></button>
            
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={ te2}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Engine Plug</h2>
           <h3>Engine Exper</h3>
          <div className="card-actions mt-2">
               <button  className="btn btn-outline btn-info"><FaFacebookF></FaFacebookF></button>
               <button  className="btn btn-outline btn-info"><FaTwitter></FaTwitter></button>
               <button  className="btn btn-outline btn-info"><FaLinkedin></FaLinkedin></button>
               <button  className="btn btn-outline btn-info"><FaInstagramSquare></FaInstagramSquare></button>
            
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={ te3}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Engine Plug</h2>
           <h3>Engine Exper</h3>
          <div className="card-actions mt-2">
               <button  className="btn btn-outline btn-info"><FaFacebookF></FaFacebookF></button>
               <button  className="btn btn-outline btn-info"><FaTwitter></FaTwitter></button>
               <button  className="btn btn-outline btn-info"><FaLinkedin></FaLinkedin></button>
               <button  className="btn btn-outline btn-info"><FaInstagramSquare></FaInstagramSquare></button>
            
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Team;

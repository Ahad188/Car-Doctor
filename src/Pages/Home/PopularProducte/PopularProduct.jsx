import p1 from "../../../assets/images/products/1.png";
import p2 from "../../../assets/images/products/2.png";
import p3 from "../../../assets/images/products/3.png";
import p4 from "../../../assets/images/products/4.png";
import p5 from "../../../assets/images/products/5.png";
import p6 from "../../../assets/images/products/6.png";
import { FaRegStar } from "react-icons/fa";

const PopularProduct = () => {
  return (
    <section className="mt-5">
      <div className="text-center">
        <h3 className="text-orange-400 text-2xl">Popular Products</h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p className="mt-5">
          the majority have suffered alteration in some form, by injected humour, <br /> or
          randomised words which donot look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* p */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src= {p1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex justify-center gap-2">
               <FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar>
            </p>
            <h3 className="text-2xl">Cools Led Light</h3>
             <h4 className="text-orange-500 text-xl">$20.00</h4>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src= {p6}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex justify-center gap-2">
               <FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar>
            </p>
            <h3 className="text-2xl">Cools Led Light</h3>
             <h4 className="text-orange-500 text-xl">$20.00</h4>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src= {p2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex justify-center gap-2">
               <FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar>
            </p>
            <h3 className="text-2xl">Cools Led Light</h3>
             <h4 className="text-orange-500 text-xl">$20.00</h4>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src= {p5}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex justify-center gap-2">
               <FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar>
            </p>
            <h3 className="text-2xl">Cools Led Light</h3>
             <h4 className="text-orange-500 text-xl">$20.00</h4>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src= {p4}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex justify-center gap-2">
               <FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar>
            </p>
            <h3 className="text-2xl">Cools Led Light</h3>
             <h4 className="text-orange-500 text-xl">$20.00</h4>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src= {p3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="flex justify-center gap-2">
               <FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar>
            </p>
            <h3 className="text-2xl">Car Air Filter</h3>
             <h4 className="text-orange-500 text-xl">$20.00</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;

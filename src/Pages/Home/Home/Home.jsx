import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularProduct from "../PopularProducte/PopularProduct";
 
import Services from "../Services/Services";
import Team from "../Team/Team";

 

 

const Home = () => {
     return (
          <div>
              <Banner></Banner>
               <About></About>
               <Services></Services>
                <PopularProduct></PopularProduct>
               <Team></Team>
          </div>
     );
};

export default Home;
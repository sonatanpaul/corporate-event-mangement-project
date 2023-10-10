import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Home = () => {
    const seriveCard = useLoaderData();
    console.log(seriveCard);


    return (
        <div>
            <div className="hero  h-[70vh]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
           <div className="grid lg:grid-cols-3  gap-10 container mx-auto mt-10 mb-10">
           {
               seriveCard.map(service => <ServiceCard key={service.id} services = {service}></ServiceCard>) 
            }
           </div>

        </div>
    );
};

export default Home;
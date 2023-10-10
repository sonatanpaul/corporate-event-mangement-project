import { Link } from "react-router-dom";

const ServiceCard = ({services}) => {
    const {id,title,image,description} = services
    return (
            <Link to={`/corporate-event/${id}`}>
            <div className="card card-compact w-96  shadow-xl hover:bg-slate-300">
            <figure><img className=" h-48" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            </div>
            </Link>
       
    );
};

export default ServiceCard;
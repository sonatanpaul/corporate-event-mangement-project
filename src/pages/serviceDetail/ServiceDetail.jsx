import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetail = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInteger = parseInt(id)
     const detail = details.find(detail => detail.id === idInteger);
     console.log(detail);
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl">
                <figure><img src={detail.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
                </div>
        </div>
    );
};

export default ServiceDetail;
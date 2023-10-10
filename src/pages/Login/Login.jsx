import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col">
                     <div className=" text-4xl font-bold"><h1>Login Form</h1></div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    
                    <form className=" lg:card-body px-2 py-4">
                        <div className=" form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Not a Member? <Link to={"/register"}> <span className=" text-blue-700 underline">Register Now</span> </Link></p>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;
import { useState } from "react";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export const Login = () => {
  const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card p-4">
                    <h2 className="text-center mb-4">Login</h2>
                    <div className="mb-3">
                        <Input 
                            className="form-control" 
                            value={email} 
                            onChange={setEmail} 
                            placeholder="Email" 
                        />
                    </div>
                    <div className="mb-3">
                        <Input 
                            className="form-control" 
                            type="password"
                            value={password} 
                            onChange={setPassword} 
                            placeholder="Password" 
                        />
                    </div>
                    <Button 
                        className="btn-primary text-center w-25" 
                        label="Login" 
                        onClick={() => alert(`Email: ${email}`)} 
                    />
                </div>
            </div>
        </div>
    </div>
);
};

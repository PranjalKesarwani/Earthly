import React from "react";
import NewNav from "./NewNav";

const Signup = () => {
    return (
        <React.StrictMode>
            <NewNav />
            <div className="container col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <form class="row g-3" method="POST">
                    <div class="col-md-12">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword5" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="inputPassword5" />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-success">Sign in</button>
                    </div>
                </form>
            </div>

        </React.StrictMode>
    )
}

export default Signup;
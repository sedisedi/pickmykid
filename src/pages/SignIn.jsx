import React from 'react';
import { input } from 'bootstrap';

const SignIn = () => {
    return (
        <div>

            <form>
                <h4>
                    <span> Sign In </span>
                    <div>
                        <span> Email</span>
                        <input class="form-control"
                            type="text" placeholder="Email"
                        />
                    </div>


                    <div>
                        <span> Password</span>
                        <input class="form-control"
                            type="text" placeholder="Password"
                        />
                    </div>


                    <button>
                        Submit
            </button>


                </h4>
            </form>
        </div>
    )
}

export default SignIn;
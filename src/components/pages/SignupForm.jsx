import React, { useRef } from 'react';
const SignupForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const termsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const acceptedTerms = termsRef.current.checked;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Terms Accepted:", acceptedTerms);

    emailRef.current.value = '';
    passwordRef.current.value = '';
    confirmPasswordRef.current.value = '';
    termsRef.current.checked = false;
  };

  return (
    <section className="bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-gray-800 rounded-lg shadow border border-gray-700 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-red-600 md:text-2xl">
              Create an account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* form inputs same as before */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" ref={emailRef} id="email" placeholder="name@company.com" required
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-600 
                  focus:border-red-600 block w-full p-2.5 placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" ref={passwordRef} id="password" placeholder="••••••••" required
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-600 
                  focus:border-red-600 block w-full p-2.5 placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                <input type="password" ref={confirmPasswordRef} id="confirm-password" placeholder="••••••••" required
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-600 
                  focus:border-red-600 block w-full p-2.5 placeholder-gray-400" />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" ref={termsRef}
                    className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-2 focus:ring-red-600" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-400">
                    I accept the <a className="font-medium text-red-600 hover:underline" href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button type="submit"
                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none 
                focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Create an account
              </button>
              <p className="text-sm font-light text-gray-400">
                Already have an account? <a href="#" className="font-medium text-red-600 hover:underline">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

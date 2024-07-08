import { Formik,Form } from "formik";
import {  Link } from "react-router-dom";
import Input from "../../components/Input";


export default function Register() {
  return (
    <div className="bg-[#E3E7F7] flex justify-center h-screen flex-col items-center">
    <div className="bg-white py-5 px-5 rounded-2xl lg:w-[30%]">
      <h2 className="text-[18px] font-semibold text-[#171725] text-center pb-8">Sign Up to your account</h2>
      <div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
          onSubmit={values => {
            console.log("register input", values);
          }}
        >
          <Form>
            <Input name="username" placeholder="enter username" />
            <Input name="email" placeholder="enter email" />
            <Input name="password" placeholder="enter password" type="password" />
            <div className="py-4">
              <p className="text-center text-[#92929D] text-xs font-normal">
              By signing up, you confirm that you’ve read <br />
              and accepted our <Link to={'/register'} className="text-[#007FFF]">User Notice</Link> and <Link to={'/register'} className="text-[#007FFF]">Privacy Policy</Link>.
              </p>
            </div>
            <button type="submit" className="bg-[#007FFF] text-white w-full py-3">Register</button>
          </Form>
        </Formik>
       <div className="border-t border-b-0 border-l-0 border-r-0 border-solid border-t-[#F1F1F5] py-4 mt-4 text-center">
        <span className="text-[#007FFF] text-xs font-medium pr-1">Already have an Devbase account?</span>
        <Link className="text-[#007FFF] text-xs font-medium" to={'/login'}>Log In</Link>
       </div>
      </div>
    </div>
  </div>
  )
}

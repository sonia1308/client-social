import { Form, Formik } from "formik";
import Input from "../../components/Input";
import { Link } from "react-router-dom";


export default function Forget() {
  return (
    <div className="bg-[#E3E7F7] flex justify-center h-screen flex-col items-center">
    <div className="bg-white py-5 px-5 rounded-2xl lg:w-[30%] md:w-[48%] sm:w-[58%]  w-[97%]">
      <h2 className="text-[18px] font-semibold text-[#171725] text-center pb-8">Forgot password?</h2>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={values => {
            console.log("login input", values);
          }}
        >
          <Form>
            <Input name="email" placeholder="enter email" />
            <button type="submit" className="bg-[#007FFF] text-white w-full py-3">Send Recovery Email</button>
          </Form>
        </Formik>
       <div className="border-t border-b-0 border-l-0 border-r-0 border-solid border-t-[#F1F1F5] py-4 mt-4 text-center">
        <span className="text-[#007FFF] text-xs font-medium pr-1">Just remember?</span>
        <Link className="text-[#007FFF] text-xs font-medium" to={'/login'}>Log In</Link>
       </div>
      </div>
    </div>
  </div>
  )
}

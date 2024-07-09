import { ErrorMessage, Field } from "formik"
import PropTypes from "prop-types"

export default function Input({name,...props}) {
  return (
    <div>
      <Field name={name} {...props} className="rounded-[19px] border border-[#F1F1F5] border-solid bg-[#FAFAFB] py-3 px-3 w-full mb-4 outline-none focus:border-blue-500 placeholder:text-[#92929D] placeholder:text-sm placeholder:font-normal"  />
      <ErrorMessage component="small" name={name} className="text-xs text-red-500 dark:text-red-400 mt-1 block" />
    </div>
  )
}
Input.propTypes ={
  name: PropTypes.string.isRequired,
  props: PropTypes.object
}
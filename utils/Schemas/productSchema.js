import * as yup from "yup";

const AddProdyctschema = yup.object().shape({
    name: yup.string().required(),
  });
  
  export default AddProdyctschema;
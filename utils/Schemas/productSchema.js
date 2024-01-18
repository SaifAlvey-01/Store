  import * as yup from "yup";

  const AddProdyctschema = yup.object({
    name: yup.string().email().required(),
  }).required();
    
    export default AddProdyctschema;
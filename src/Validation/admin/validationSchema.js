import * as Yup from 'yup';

//PRODUCT
const validationSizeSchema = Yup.object().shape({
    width: Yup.number().required('width is required').min(0, 'width must be a positive number'),
    height: Yup.number().required('height is required').min(0, 'height must be a positive number'),
  });

 export default validationSizeSchema 
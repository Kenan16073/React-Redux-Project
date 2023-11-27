import { object, string} from 'yup';

let registerSchema = object({
  email: string().email().required(),
  password: string().required()
});

export default registerSchema
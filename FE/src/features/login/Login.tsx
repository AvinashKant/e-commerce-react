import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../components/Form/Input';

type Inputs = {
  example: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({});
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <div className="border flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>Login</div>
          <div>
            <div className="m-1">
              <Input
                type="email"
                placeholderText="Email"
                {...register('password', { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="m-1">
              {/* include validation with required or other standard HTML validation rules */}
              <input {...register('password', { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.password && <span>This field is required</span>}
            </div>
            <div>
              <input className="bg-sky-500 hover:bg-sky-700" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

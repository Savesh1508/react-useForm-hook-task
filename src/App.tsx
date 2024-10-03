import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <h4 style={{fontSize: '22px', fontFamily: 'Arial, Helvetica, sans-serif'}}>Signup</h4>
        <input {...register('username')} placeholder="Username" />
        <input {...register('email')} placeholder="Email" />
        <input {...register('password')} placeholder="Password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App

import { useState } from 'react';
import { useForm } from 'react-hook-form'

const RegisterApp = props => {
    const [isPasswordsMatch, setIsPasswordsMatch] = useState(true)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = (formData) => {
        console.log({ formData })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Firstname</label>
                <input type="text" {...register('firstname', { required: 'Firstname is required field.' })} placeholder='Enter your firstname...' />
                {errors.firstname?.message ?? ''}
            </div>

            <div>
                <label>Lastname</label>
                <input type="text" {...register('lastname', { required: 'Lastname is required field.' })} placeholder='Enter your lastname...' />
                {errors.lastname?.message ?? ''}
            </div>

            <div>
                <label>Username</label>
                <input type="text" {...register('username', {
                    required: 'Username is requird field',

                    pattern: {
                        vlaue: /[a-z\._]{6,}/, message: 'Username should have only be used lowercase or . or _ characters'
                    },
                })} placeholder='Enter your username...' />
                {errors.username?.message ?? ''}
            </div>

            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required: 'Email field is required field.', pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Email structure is not valid.'
                    }
                },)} placeholder='Enter your email...' />
                {errors.email?.message ?? ''}
            </div>

            <div>
                <label>Password</label>
                <input type="password" {...register('password', { required: true })} placeholder='Enter your password...' />
            </div>

            <div>
                <label>Password confirmation</label>
                <input type="password" {...register('passwordConfirmation', {
                    required: 'Password confirmation is required',
                    validate(value) {
                        const passwordValue = getValues('password');
                        if (value !== passwordValue) {
                            setIsPasswordsMatch(false);
                            return 'Passwords are not match.'
                        }
                        else {
                            setIsPasswordsMatch(true)
                            return undefined
                        }
                    }
                })} placeholder='Enter your password again...' />
                {errors.passwordConfirmation?.message ?? ''}
            </div>

            <div>
                <button type="submit">
                    Register User
                </button>
            </div>
        </form>
    )
}

export default RegisterApp
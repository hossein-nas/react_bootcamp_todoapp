import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const LoginApp = props => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log({ data })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder='Enter your username' {...register('username', {
                        required: 'username is required', minLength: {
                            value: 4,
                            message: 'you should have enter at least 4 character'
                        }
                    })} />
                    {errors.username?.message ?? ''}
                </div>
                <div>
                    <input type="password" placeholder='Enter your password' {...register('password', { required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div>

                    <button type="submit" > Submit </button>
                </div>
            </form>
        </div>
    )
}

LoginApp.propTypes = {}

export default LoginApp
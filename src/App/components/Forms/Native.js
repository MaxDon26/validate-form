import { useState } from 'react'
import styles from './form.module.css'
import { TextField } from '../common/form'
import { isEmail, isExistSymbols, isRepeat, min } from '../../validators/'

export const Native = () => {
	const [errors, setErrors] = useState({})
	const [data, setData] = useState({ email: '', password: '', repeat: '' })

	const handleChange = ({ target }) => {
		const { name, value } = target
		setData((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: null }))
	}

	const handleBlur = ({ target }) => {
		const { name, value } = target
		let validate
		if (name === 'email') {
			validate = isEmail(value)
		} else if (name === 'password') {
			validate = min(value) || isExistSymbols(value)
		} else if (name === 'repeat') {
			validate = isRepeat(data.password, data.repeat)
		}
		setErrors((prev) => ({ ...prev, [name]: validate }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
	}

	const isValid = Object.values(errors).every((err) => !err)
	console.log(isValid)
	return (
		<form className={styles.form}>
			<TextField
				value={data.email}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="Email"
				name="email"
				type="text"
				error={errors.email}
			/>
			<TextField
				value={data.password}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="Пароль"
				name="password"
				type="password"
				error={errors.password}
			/>
			<TextField
				value={data.repeat}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="Повторите пароль"
				name="repeat"
				type="password"
				error={errors.repeat}
			/>
			<button
				className={styles.submit}
				disabled={!isValid}
				onClick={handleSubmit}
			>
				Зарегистрировать
			</button>
		</form>
	)
}

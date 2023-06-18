import React, { useRef, useState } from 'react'
import { TextField } from '../common/form'
import styles from './form.module.css'
import * as yup from 'yup'

export const Yup = () => {
	const [errors, setErrors] = useState({})
	const [data, setData] = useState({ email: '', password: '', repeat: '' })

	const submit = useRef(null)

	const validateSchema = yup.object().shape({
		repeat: yup.string().matches(data.password, 'Пароли не совпадают'),
		password: yup
			.string()
			.required('Поле обязательно для заполнения')
			.min(3, 'Пароль должен содержать не менее 3 символов')
			.matches(/^\S+$/, 'Пароль не должен содержать пробелы')
			.matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву')
			.matches(/\d/, 'Пароль должен содержать минимум одну цифру'),
		email: yup
			.string()
			.email('Email должен соответствовать шаблону example@google.com')
			.required('Поле обязательно для заполнения'),
	})

	const validate = async () => {
		await validateSchema.validate(data)
	}

	const handleChange = ({ target }) => {
		const { name, value } = target
		setData((prev) => ({ ...prev, [name]: value }))

		setErrors((prev) => ({ ...prev, [name]: null }))
	}

	const handleBlur = () => {
		validate(data)
			.then(() => {
				setErrors({})
			})
			.catch(({ path, errors }) => {
				setErrors((prev) => ({ ...prev, [path]: errors[0] }))
			})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
	}

	const isValid = Object.keys(errors).length === 0

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
				ref={submit}
				className={styles.submit}
				disabled={!isValid}
				onClick={handleSubmit}
			>
				Зарегистрировать
			</button>
		</form>
	)
}

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '../common/form'
import styles from './form.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const fieldSchema = yup.object().shape({
	repeat: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
	password: yup
		.string()
		.required('Поле обязательно для заполнения')
		.min(3, 'Пароль должен содержать не менее 3 символов')
		.matches(/^\S+$/, 'Пароль не должен содержать пробелы')
		.matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву')
		.matches(/\d/, 'Пароль должен содержать минимум одну цифру'),
	login: yup
		.string()
		.email('Email должен соответствовать шаблону example@google.com')
		.required('Поле обязательно для заполнения'),
})

export const RHFYUP = () => {
	const {
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			login: '',
			password: '',
			repeat: '',
		},
		resolver: yupResolver(fieldSchema),
	})

	const onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Controller
				name="login"
				control={control}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						placeholder="Login"
						name="login"
						type="text"
						value={value}
						onChange={onChange}
						error={error?.message}
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						name="password"
						value={value}
						onChange={onChange}
						placeholder="Пароль"
						type="password"
						error={error?.message}
					/>
				)}
			/>
			<Controller
				name="repeat"
				control={control}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						placeholder="Повторить пароль"
						name="repeat"
						type="password"
						value={value}
						onChange={onChange}
						error={error?.message}
					/>
				)}
			/>

			<button className={styles.submit} disabled={!isValid} type="submit">
				Зарегистрировать
			</button>
		</form>
	)
}

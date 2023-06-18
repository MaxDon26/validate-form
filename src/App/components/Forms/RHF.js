import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '../common/form'
import styles from './form.module.css'

export const RHF = () => {
	const {
		handleSubmit,
		control,
		formState: { isValid },
		watch,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			login: '',
			password: '',
			repeat: '',
		},
	})

	const props = {
		login: {
			minLength: { value: 3, message: 'Должно быть больше 3 символов' },
			maxLength: { value: 20, message: 'Должно быть меньше 20 символов' },
			required: 'Обязательно для заполнения',
			pattern: {
				value: /^[\w_]*@[a-z]{2,6}\.[a-z]{2,10}/i,
				message: 'Должно соответствовать шаблону',
			},
		},
		password: {
			minLength: { value: 3, message: 'Должно быть больше 3 символов' },
			maxLength: { value: 20, message: 'Должно быть меньше 20 символов' },
			required: 'Обязательно для заполнения',
		},
		repeat: {
			required: 'Обязательно для заполнения',

			validate: (value) => {
				if (value !== watch('password')) return 'Пароли не совпадают'
			},
		},
	}

	const onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Controller
				name="login"
				control={control}
				rules={props.login}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						placeholder="Login"
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
				rules={props.password}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
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
				rules={props.repeat}
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

import { useState } from 'react'
import styles from './form.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeLowVision } from '@fortawesome/free-solid-svg-icons'

export const TextField = ({ error, type, ...rest }) => {
	const [isPass, setisPass] = useState(true)

	return (
		<div className={styles.inputWrapper}>
			<input
				{...rest}
				type={!isPass ? type : 'text'}
				className={styles.textfield}
			/>
			{type === 'password' && (
				<span
					onClick={() => setisPass((prev) => !prev)}
					role="button"
					className={styles.inputIcon}
				>
					<FontAwesomeIcon icon={!isPass ? faEye : faEyeLowVision} />
				</span>
			)}
			{error && (
				<label className={styles.error} htmlFor="email">
					{error}
				</label>
			)}
		</div>
	)
}

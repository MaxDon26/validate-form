import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const HederLayout = () => {
	return (
		<div className={styles.header}>
			<nav className={styles.nav}>
				<Link className={styles.link} to="/">
					Native
				</Link>
				<Link className={styles.link} to="/yup">
					Yup
				</Link>
				<Link className={styles.link} to="/rhf">
					RHF
				</Link>
				<Link className={styles.link} to="/rhfyup">
					RHF with Yup
				</Link>
			</nav>
		</div>
	)
}

export const Header = () => {
	return <HederLayout />
}

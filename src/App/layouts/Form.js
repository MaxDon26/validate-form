import { useParams } from 'react-router-dom'
import { Native, RHF, RHFYUP, Yup } from '../components/Forms'
import styles from './Form.module.css'

export const FormLayout = () => {
	const { form } = useParams()

	const renderForm = (form) => {
		switch (form) {
			case 'yup':
				return <Yup />
			case 'rhf':
				return <RHF />
			case 'rhfyup':
				return <RHFYUP />
			default:
				return <Native />
		}
	}
	return <div className={styles.formWrapper}>{renderForm(form)}</div>
}

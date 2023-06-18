import { Header } from './components'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import { FormLayout } from './layouts/Form'

function App() {
	return (
		<div className="App">
			<div className={styles.container}>
				<Header />
				<Routes>
					<Route path="/:form?" element={<FormLayout />} />
				</Routes>
			</div>
		</div>
	)
}

export default App

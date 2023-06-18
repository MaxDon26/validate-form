export const isEmail = (email) => {
	const pattern = /^[\w_]*@[a-z]{2,6}\.[a-z]{2,10}/i

	return pattern.test(email)
		? null
		: 'Email должен соответствовать шаблону example@google.com'
}

export const min = (str) =>
	str.length >= 3 ? null : 'Пароль должен содержать не менее 3 символов'

export const isExistSymbols = (str) => {
	const isNotSpace = /^\S+$/.test(str)
	const UpperExist = /[A-Z]+/.test(str)
	const numberExist = /\d/.test(str)
	if (!isNotSpace) return 'Пароль не должен содержать пробелы'
	if (!UpperExist) return 'Пароль должен содержать минимум одну заглавную букву'
	if (!numberExist) return 'Пароль должен содержать минимум одну цифру'
	return null
}

export const isRepeat = (first, second) =>
	first !== second ? 'Пароли не совпадают' : null

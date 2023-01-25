import bcrypt from 'bcrypt';

export const passwordIsCorrect = async (password: string, hash: string) => {
	const isCorrect = await bcrypt.compare(password, hash);
	console.log(isCorrect);
	return isCorrect;
}
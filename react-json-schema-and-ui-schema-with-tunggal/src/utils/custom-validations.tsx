const validate = (formData: any, errors: any) => {
	if (formData.telephone !== undefined && formData.telephone.length < 5) {
		errors.telephone.addError('No HP harus lebih dari 5 karakter');
	}
	return errors;
};

export default validate;

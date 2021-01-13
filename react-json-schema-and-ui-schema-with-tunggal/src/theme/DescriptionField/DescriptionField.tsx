import React from 'react';
import { FieldTemplateProps } from '@rjsf/core';

const DescriptionField = ({ description }: FieldTemplateProps) => {
	if (description) {
		return <span>{description}</span>;
	}

	return null;
};

export default DescriptionField;

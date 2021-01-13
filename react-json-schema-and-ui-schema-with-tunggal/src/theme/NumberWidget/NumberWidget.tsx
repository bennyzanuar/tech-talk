import React from 'react';
import { Input } from 'tunggal';
import { WidgetProps } from '@rjsf/core';

export interface TextWidgetProps extends WidgetProps {
	type?: string;
}

const NumberWidget = ({
	id,
	required,
	readonly,
	disabled,
	label,
	value,
	onChange,
	onBlur,
	onFocus,
	autofocus,
	options,
	schema,
	placeholder,
	rawErrors = [],
}: TextWidgetProps) => {
	const _onChange = (value: any) => {
		const onlyNumber = value.replace(/[^0-9]/g, '');
		if (onlyNumber) {
			return onChange(onlyNumber);
		}
		if (schema.type === 'integer') {
			return onChange(null);
		}
		return onChange('');
	};

	const _onBlur = (value: any) => onBlur(id, value);

	return (
		<Input
			type={schema.type === 'integer' ? 'number' : 'text'}
			required={required}
			disabled={disabled}
			readOnly={readonly}
			placeholder={placeholder}
			value={value || value === 0 ? value : ''}
			onChange={_onChange}
			onBlur={_onBlur}
		/>
	);
};

export default NumberWidget;

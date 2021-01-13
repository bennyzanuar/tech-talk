import React from 'react';
import { Textarea as TextareaTunggal } from 'tunggal';
import { WidgetProps } from '@rjsf/core';

const TextareaWidget = ({
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
	placeholder,
	schema,
	rawErrors = [],
}: WidgetProps) => {
	const _onChange = (value: any) => onChange(value);
	const _onBlur = (value: any) => onBlur(id, value);

	return (
		<TextareaTunggal
			id={id}
			required={required}
			placeholder={placeholder}
			disabled={disabled}
			value={value}
			maxLength={250}
			onChange={_onChange}
			onBlur={_onBlur}
			width={'100%'}
		/>
	);
};

export default TextareaWidget;

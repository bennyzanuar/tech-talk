import { Radio } from 'tunggal';
import { WidgetProps } from '@rjsf/core';
import React, { ReactText } from 'react';

const RadioWidget = ({
	id,
	schema,
	options,
	value,
	disabled,
	required,
	readonly,
	onChange,
	onBlur,
	onFocus,
}: WidgetProps) => {
	const _onChange = (value: any) => {
		if (value) onChange(value);
	};

	const data = (options.enumOptions as any).map((it: any) => {
		return {
			label: it.label,
			value: it.value,
		};
	});

	return (
		<Radio
			name={`${id}`}
			key={`${id}`}
			data={data}
			value={value}
			onChange={_onChange}
		/>
	);
};

export default RadioWidget;

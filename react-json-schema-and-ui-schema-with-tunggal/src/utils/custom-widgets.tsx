import React, { StatelessComponent } from 'react';
import NumberWidget from 'theme/NumberWidget';
import { WidgetProps } from '@rjsf/core';

const widgets = {
	numberWidget: NumberWidget as StatelessComponent<WidgetProps>,
};

export default widgets;

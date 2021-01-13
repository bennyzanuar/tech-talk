import React from 'react';
import { Button, Container, Row } from 'tunggal';
export default () => (
	<Container>
		<Row gutter={24} style={{ padding: '16px' }}>
			<Button color='primary' type='submit'>
				Submit
			</Button>
		</Row>
	</Container>
);

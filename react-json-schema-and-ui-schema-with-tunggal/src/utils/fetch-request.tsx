import axios from 'axios';

const fetchRequest = async (wilayah: string) => {
	const response = await axios.get(
		`https://dev.farizdotid.com/api/daerahindonesia/${wilayah}`
	);

	return response.data;
};

export default fetchRequest;

import { format, utcToZonedTime } from 'date-fns-tz';

const formatDate = (date) => {
	if (!date) {
		return;
	}
	const zonedDate = utcToZonedTime(date, 'Australia/Melbourne');
	return `${format(zonedDate, 'yyyy-MM-dd')}`;
};

export default formatDate;

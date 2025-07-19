export const getStatusColor = (status: string) => {
	switch (status) {
		case 'open': return 'bg-green-100 text-green-800';
		case 'in-progress': return 'bg-blue-100 text-blue-800';
		case 'completed': return 'bg-gray-100 text-gray-800';
		case 'closed': return 'bg-red-100 text-red-800';
		default: return 'bg-gray-100 text-gray-800';
	}
};

export const getPriorityColor = (priority: string) => {
	switch (priority) {
		case 'urgent': return 'bg-red-100 text-red-800';
		case 'high': return 'bg-orange-100 text-orange-800';
		case 'medium': return 'bg-yellow-100 text-yellow-800';
		case 'low': return 'bg-green-100 text-green-800';
		default: return 'bg-gray-100 text-gray-800';
	}
};

export const getLocationColor = (location: string) => {
	// Define colors for different location types
	const locationColors: { [key: string]: string } = {
		'Front Entrance': 'bg-purple-100 text-purple-800',
		'Foundation': 'bg-red-100 text-red-800',
		'Street': 'bg-blue-100 text-blue-800',
		'Exterior': 'bg-indigo-100 text-indigo-800',
		'Drainage System': 'bg-cyan-100 text-cyan-800',
		'Infrastructure': 'bg-gray-100 text-gray-800',
		'Doors': 'bg-amber-100 text-amber-800',
		'Balcony': 'bg-emerald-100 text-emerald-800',
		'A-28': 'bg-teal-100 text-teal-800' // Added for the new location
	};
	
	return locationColors[location] || 'bg-gray-100 text-gray-800';
}; 

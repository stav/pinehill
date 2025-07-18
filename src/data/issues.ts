export interface Comment {
	id: number;
	content: string;
	author: string;
	createdAt: string;
	replies: Comment[];
}

export interface Issue {
	id: number;
	title: string;
	description: string;
	status: 'open' | 'in-progress' | 'completed' | 'closed';
	priority: 'urgent' | 'high' | 'medium' | 'low';
	author: string;
	assignedTo?: string | null;
	createdAt: string;
	updatedAt?: string;
	comments: Comment[];
	blogPostId?: string; // Optional reference to a blog post
}

export const issues: Issue[] = [
	{
		id: 1,
		title: "Front step - sloped toward house, collecting water",
		description: "The front step is sloped toward the house and collecting water, creating potential foundation issues.",
		status: "open",
		priority: "high",
		author: "Steve Almeroth",
		assignedTo: null,
		createdAt: "2025-07-15",
		updatedAt: "2025-07-18",
		blogPostId: "front-step-sloped",
		comments: [
			{
				id: 1,
				content: "I've noticed this issue too. The water pooling is definitely a concern for the foundation. We should prioritize this fix.",
				author: "Pine Hill Resident",
				createdAt: "2025-07-16",
				replies: [
					{
						id: 2,
						content: "Agreed. I can help coordinate with a contractor to get this fixed. We should also check if there are any drainage issues in the surrounding area.",
						author: "Maintenance Team",
						createdAt: "2025-07-17",
						replies: []
					}
				]
			},
			{
				id: 3,
				content: "I have a contact for a good concrete contractor who specializes in foundation drainage. Should I reach out to them for a quote?",
				author: "Pine Hill Resident",
				createdAt: "2025-07-18",
				replies: []
			}
		]
	},
	{
		id: 2,
		title: "Curb out front - dissolved after winter install",
		description: "The curb at the street has dissolved after winter installation. Need to repair or replace the curb to maintain proper drainage and street appearance.",
		status: "open",
		priority: "medium",
		author: "Pine Hill Resident",
		createdAt: "2025-07-12",
		comments: []
	},
	{
		id: 3,
		title: "Drain lines inspected - routine maintenance suggested by State Farm 2021",
		description: "State Farm suggested routine maintenance inspection of drain lines in 2021. Need to schedule inspection to ensure proper drainage system function.",
		status: "open",
		priority: "medium",
		author: "Pine Hill Resident",
		createdAt: "2025-07-10",
		comments: []
	},
	{
		id: 4,
		title: "Screen door - need to install new one",
		description: "We have a new screen door that needs to be installed. Current door is damaged and needs replacement.",
		status: "in-progress",
		priority: "low",
		author: "Pine Hill Resident",
		createdAt: "2025-07-08",
		comments: []
	},
	{
		id: 5,
		title: "Overspray - from balcony painting",
		description: "There is overspray from balcony painting that needs to be cleaned up. Paint has gotten on surrounding areas and needs to be removed.",
		status: "open",
		priority: "low",
		author: "Pine Hill Resident",
		createdAt: "2025-07-05",
		comments: []
	}
]; 

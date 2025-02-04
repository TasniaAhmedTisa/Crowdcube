Assignment Category: Tulip
Crowdcube: A Crowd Funding Application

Project Theme

A crowdfunding website is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially. These projects can include personal needs (like medical expenses), creative ideas (like making a film or app), and startups (like launching a new product). 

Key Features:
1.	User Authentication:
o	Login/Registration: Users can sign in or sign up to access their personalized campaigns and donation history.
o	User Access Control: Campaign creation, updates, and deletion are restricted to logged-in users. Unauthorized users are redirected to the login page.
2.	Campaign Management:
o	Create Campaigns: Users can create a new campaign by providing details like title, description, minimum donation, deadline, and type.
o	Update Campaigns: Users can update the details of an existing campaign, such as changing the title, description, or other details.
o	Delete Campaigns: Users can delete their campaigns from the system, which removes them both from the client and server side.
o	View Campaign Details: Each campaign has a detailed view where users can see more information, including the deadline and donation statistics.
3.	Campaign Listings:
o	View All Campaigns: Users can view a list of all campaigns available in the system.
o	Filter Running Campaigns: The system only displays campaigns with a valid (future) deadline as "running," which are open for donations.
4.	Donation System:
o	Donate to Campaigns: Users can donate to any campaign by specifying the donation amount, which is recorded in the database.
o	View Donations: Users can view the list of their donations, including which campaigns they contributed to and the amounts donated.
5.	Real-Time Data:
o	Dynamic Fetching: Campaign data is dynamically fetched from the backend when needed (for example, when viewing or updating a campaign). This ensures the user always sees up-to-date information.
o	Spinner for Loading States: A loading spinner is shown while the application fetches campaign or donation data from the server, ensuring a better user experience during waiting times.
6.	Backend Integration:
o	MongoDB Database: The backend is connected to a MongoDB database to store and retrieve campaigns, donations, and user-related data.
o	CRUD Operations for Campaigns: The backend handles create, read, update, and delete operations for campaigns.
o	Donations Collection: A separate donations collection stores donation records with links to campaigns and users.
o	Secure User Interaction: Data updates are performed only by the authenticated users, ensuring data integrity and security.

Links:

Github-client-link:  
https://github.com/programming-hero-web-course2/b10-a10-client-side-TasniaAhmedTisa.git


Github-server-link:
 https://github.com/programming-hero-web-course2/b10-a10-server-side-TasniaAhmedTisa.git


 Client-Live-Link: https://my-project-10-60b26.web.app
 

Server-live-link: https://my-project-10-server.vercel.app/

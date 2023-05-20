export default defineEventHandler(async (event) => {
  // const config = useRuntimeConfig();
  // let URL = `${config.public.baseURL}notes`;

  // const response = await $fetch(URL);

  const notes = [
    {
      tag: "High Priority",
      title: "Grocery Shopping",
      note: "Buy groceries for the week - eggs, milk, bread, vegetables, and some fresh fruits like apples, bananas, and oranges. Don't forget to check the pantry for any other essential items that need restocking.",
    },
    {
      tag: "High Priority",
      title: "Doctor's Appointment",
      note: "Schedule a doctor's appointment for next Monday at 3 PM. Make sure to bring your medical insurance card and any relevant medical records or test results. Write down any questions or concerns you have for the doctor to address during the appointment.",
    },
    {
      tag: "High Priority",
      title: "Project Report Deadline",
      note: "Finish writing the report for the upcoming project deadline. Break down the tasks into smaller subtasks to manage your time effectively. Conduct thorough research, analyze data, and present your findings in a clear and concise manner. Proofread the report for any grammatical or formatting errors before submitting it.",
    },
    {
      tag: "Important",
      title: "Mom's Birthday Celebration",
      note: "Call mom to wish her a happy birthday and plan a family get-together. Ask her about her preferred celebration ideas and discuss possible dates and venues. Consider any dietary restrictions or preferences when deciding on the menu. Send out invitations to family members and coordinate logistics for a memorable gathering.",
    },
    {
      tag: "Routine",
      title: "Electricity Bill Payment",
      note: "Pay the electricity bill by the end of the week to avoid late fees. Check the bill for the due date and payment options. Set a reminder on your phone or mark it on your calendar to ensure timely payment. future bill payments.",
    },
    {
      tag: "Important",
      title: "Vacation Hotel Booking",
      note: "Research and book a hotel for the upcoming vacation. Consider the destination, budget, and preferred amenities when selecting a hotel. Read reviews from reliable sources to gauge the quality of service and cleanliness. Compare prices and availability before making a reservation to secure the best deal.",
    },
    {
      tag: "High Priority",
      title: "Team Meeting And Status Update",
      note: "Attend the team meeting tomorrow morning and prepare a status update. Review the agenda beforehand and gather any necessary documents or progress reports. Take notes during the meeting and actively participate in discussions. Share your updates, address any challenges faced, and contribute ideas for team collaboration.",
    },
    {
      tag: "Backburner",
      title: "Garage Cleaning and Organization",
      note: "Clean and organize the garage on Saturday afternoon. Sort through items, declutter, and create designated storage areas for different categories such as tools, sports equipment, and seasonal items. Dispose of any unnecessary items or consider donating them to a local charity. Sweep the floors and ensure proper lighting for a functional and tidy space.",
    },
    {
      tag: "Important",
      title: "Starting a New Book",
      note: "Start reading the new book recommended by a friend. Set aside dedicated time each day to delve into the book and immerse yourself in the story or knowledge it offers. Create a cozy reading nook with comfortable seating, good lighting, and minimal distractions. Consider joining a book club or discussing the book with friends to enhance the reading experience.",
    },
    {
      tag: "High Priority",
      title: "Complete Presentation Slides for Client Meeting",
      note: "Create comprehensive presentation slides for the upcoming client meeting. Include key data, impactful visuals, and clear talking points. Aim for a professional and engaging presentation that effectively conveys the message. Deadline: End of the day.",
    },
    {
      tag: "Important",
      title: "Research New Marketing Strategies",
      note: "Conduct thorough research on innovative marketing strategies. Explore social media campaigns, influencer collaborations, targeted ads, and emerging trends. Compile findings in a detailed report to inform future marketing decisions and stay ahead of the competition.",
    },
    {
      tag: "Routine",
      title: "Schedule Dentist Appointment for Next Week",
      note: "Take a proactive approach to dental health by scheduling an appointment with the dentist for next week. Make a phone call during office hours to check the dentist's availability and book a convenient date and time. Note any specific concerns or symptoms to discuss during the visit.",
    },
    {
      tag: "Routine",
      title: "Follow Up with Vendor Regarding Delivery",
      note: "Contact the vendor to obtain an update on the delivery status of a pending order. Inquire about the progress, estimated arrival date, and any necessary updates. Maintain clear communication to ensure a smooth and timely delivery process.",
    },
    {
      tag: "Routine",
      title: "Create Comprehensive Grocery List",
      note: "Prepare a detailed grocery list encompassing all essential items. Include basics such as milk, eggs, bread, and fresh produce. Add any specific recipe ingredients or personal preferences. Stay organized and ensure a successful shopping trip.",
    },
    {
      tag: "Backburner",
      title: "Organize Digital Files and Folders",
      note: "Streamline your digital workspace by decluttering the desktop and organizing files into categorized folders. Enhance productivity and efficiency by creating a systematic file structure for easier access and retrieval of important documents.",
    },
    {
      tag: "High Priority",
      title: "Prepare for Upcoming Job Interview",
      note: "Equip yourself for success in an upcoming job interview. Research the company, review common interview questions, and practice thoughtful responses. Dress professionally, gather necessary documents, and arrive early to make a positive impression.",
    },
    {
      tag: "High Priority",
      title: "Pay Monthly Bills",
      note: "Take care of financial obligations by paying monthly bills on time. Gather utility invoices, credit card statements, and rent payment details. Set aside dedicated time to complete online payments or mail checks to ensure timely payment.",
    },
    {
      tag: "Important",
      title: "Plan Weekend Getaway",
      note: "Plan a memorable weekend getaway to unwind and recharge. Choose a destination, research accommodations, attractions, and activities. Make necessary reservations for transportation and lodging. Create an itinerary to maximize enjoyment during the trip.",
    },
    {
      tag: "Backburner",
      title: "Set Personal Goals for the Month",
      note: "Set meaningful and achievable personal goals for the month. Identify areas of improvement, aspirations, or habits to develop. Break down each goal into actionable steps and track progress regularly to stay motivated and focused.",
    },
    {
      tag: "Important",
      title: "Research Health Insurance Options",
      note: "Dive into researching different health insurance plans to find the most suitable option. Compare coverage, premiums, deductibles, and provider networks. Consider personal healthcare needs and budget to make an informed decision.",
    },
    {
      tag: "High Priority",
      title: "Update Resume and LinkedIn Profile",
      note: "Take the time to update your resume and LinkedIn profile. Add recent achievements, projects, and skills. Tailor the content to highlight your strengths and experiences. Proofread carefully for any errors before sharing it with potential employers.",
    },
    {
      tag: "Routine",
      title: "Schedule Monthly Family Meeting",
      note: "Plan and schedule a monthly family meeting to discuss important family matters. Coordinate calendars, choose a convenient time, and create an agenda. Address topics like upcoming events, financial updates, and any concerns or decisions to be made together.",
    },
    {
      tag: "Backburner",
      title: "Declutter and Organize Wardrobe",
      note: "Dedicate some time to decluttering and organizing your wardrobe. Sort through clothes, shoes, and accessories. Donate or discard items that no longer fit or are no longer worn. Arrange the remaining items neatly to make getting dressed easier.",
    },
    {
      tag: "Important",
      title: "Research Professional Development Opportunities",
      note: "Explore professional development opportunities to enhance your skills and career growth. Look into workshops, webinars, courses, or conferences in your field of interest. Consider how these opportunities align with your long-term goals.",
    },
  ];

  return { status: true, data: notes };
});

import axios from "axios";

export const baseURL = "http://localhost:8080";
export const axiosInstance = axios.create({
    baseURL: baseURL,
});

export const generateResume = async(description)=>{
    const response = await axiosInstance.post("/api/v1/resume/generate", {
        userDescription: description,
    });
    return response.data

    // Dummy data for testing
    // const dummyResponse = {
    //     personalInformation: {
    //         fullName: "John Doe",
    //         email: "john.doe@example.com",
    //         phoneNumber: "+1-555-123-4567",
    //         location: "San Francisco, CA",
    //         linkedin: "https://linkedin.com/in/johndoe",
    //         gitHub: "https://github.com/johndoe",
    //         portfolio: null
    //     },
    //     summary: "Experienced software engineer specializing in JavaScript, React, and Node.js. Passionate about building scalable web applications and advancing technology.",
    //     skills: [
    //         { id: 1, title: "JavaScript", level: "Expert" },
    //         { id: 2, title: "React", level: "Advanced" },
    //         { id: 3, title: "Node.js", level: "Advanced" },
    //         { id: 4, title: "CSS", level: "Intermediate" }
    //     ],
    //     experience: [
    //         {
    //             id: 1,
    //             jobTitle: "Frontend Developer",
    //             company: "Tech Corp",
    //             location: "San Francisco, CA",
    //             duration: "Jan 2022 - Present",
    //             responsibility: "Developed and maintained user interfaces using React and Redux."
    //         },
    //         {
    //             id: 2,
    //             jobTitle: "Full Stack Developer",
    //             company: "Web Solutions",
    //             location: "Remote",
    //             duration: "Jun 2019 - Dec 2021",
    //             responsibility: "Built RESTful APIs and dynamic web applications with Node.js and React."
    //         }
    //     ],
    //     education: [
    //         {
    //             id: 1,
    //             degree: "B.Sc. Computer Science",
    //             university: "Stanford University",
    //             location: "Stanford, CA",
    //             graduationYear: "2019"
    //         }
    //     ],
    //     certifications: [
    //         {
    //             id: 1,
    //             title: "AWS Certified Developer",
    //             issuingOrganization: "Amazon Web Services",
    //             year: "2020"
    //         }
    //     ],
    //     projects: [
    //         {
    //             id: 1,
    //             title: "Resume Builder App",
    //             description: "A web application for generating professional resumes.",
    //             technologiesUsed: "React, Node.js, Express, MongoDB",
    //             githubLink: "https://github.com/johndoe/resume-builder"
    //         }
    //     ],
    //     languages: [
    //         { id: 1, name: "English" },
    //         { id: 2, name: "Spanish" }
    //     ],
    //     interests: [
    //         { id: 1, name: "Open Source Contribution" },
    //         { id: 2, name: "Machine Learning" }
    //     ]
    // };
    
    // return { data: dummyResponse };
};
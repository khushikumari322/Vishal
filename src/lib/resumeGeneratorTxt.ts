import { saveAs } from 'file-saver';

export const generateResumeTxt = () => {
  const resumeText = `
================================================================================
                              VISHAL KUMAWAT
            BCA Student | Python and Automation Developer
================================================================================

Email: xarvis320@gmail.com
Phone: +91 73003 02903
Location: Jaipur, Rajasthan
GitHub: https://github.com/vishalkumawatx
LinkedIn: https://linkedin.com/in/vishalkumawatx
Website: https://www.vishalkumawat.dev

================================================================================
                                   SUMMARY
================================================================================

• BCA student specializing in Python automation and computer vision; comfortable turning manual tasks into reliable scripts.
• Delivered a background removal and image-to-PDF tool that earned 2nd place in a college competition.
• Skilled in SQL schema design, file handling, and building simple UIs to support technical workflows.

================================================================================
                                  EDUCATION
================================================================================

Bachelor of Computer Applications (BCA)
Poornima University, Jaipur, Rajasthan | 2023 - Present
Focus: Python Development, Database Management, Web Technologies

Senior Secondary (12th), RBSE Board | 2023
Grades: PCM 78.80% | PCB 80.00%

Secondary (10th), RBSE Board | 2021
Percentage: 96%

================================================================================
                              TECHNICAL SKILLS
================================================================================

Languages: Python, JavaScript, Java, C, HTML, CSS
Libraries/Frameworks: OpenCV, Pillow (PIL), Tkinter, React (foundations)
Data & DB: MySQL, SQL schema design, relational modeling
Tools: Git, VS Code, Jupyter Notebook, Linux
Strengths: Automation scripting, API integration, PDF/image processing pipelines

================================================================================
                                   PROJECTS
================================================================================

Background Removal & Image-to-PDF Automation (2024) | 2nd Place - College Project Competition
• Built an end-to-end tool that removes image backgrounds and batches images into PDFs with a Tkinter UI.
• Optimized OpenCV/Pillow pipeline, reducing manual processing time by roughly 80%.
• Added file handling and format validation to keep outputs consistent; demoed to judges and faculty.
• Stack: Python, OpenCV, Pillow, Tkinter, file I/O.

Web Portfolio (2024)
• Designed a responsive personal portfolio to showcase projects and skills.
• Implemented modular components and clean layouts using HTML, CSS, and JavaScript.

Student Database Management System (2023)
• Created a MySQL-backed CRUD application for academic record management.
• Applied relational modeling, indexing, and input validation to keep data consistent.

================================================================================
                                   ADDITIONAL
================================================================================

Interests: Automation scripting, computer vision, full-stack web development, database design
Career goals: Land a Python development internship, contribute to open-source automation tools, expand computer vision expertise

================================================================================

References and project demos available upon request
Last Updated: January 2026

================================================================================
`;

  const blob = new Blob([resumeText], { type: 'text/plain' });
  saveAs(blob, 'Vishal_Kumawat_Resume.txt');
};

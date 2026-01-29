import { saveAs } from 'file-saver';

export const generateResumeDoc = async () => {
  // Create HTML content that will be saved as a Word-compatible document
  const htmlContent = `
<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
    <meta charset="utf-8">
    <title>Vishal Kumawat Resume</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.45; color: #202020; margin: 0; padding: 24px; }
        .container { max-width: 100%; }
        h1 { text-align: center; font-size: 24pt; margin: 0 0 6pt 0; letter-spacing: 0.5pt; }
        .subtitle { text-align: center; font-size: 11pt; margin-bottom: 8pt; text-transform: uppercase; letter-spacing: 0.6pt; }
        .contact { text-align: center; font-size: 10pt; margin-bottom: 14pt; }
        hr { border: 1px solid #000; margin: 12pt 0 10pt 0; }
        h2 { font-size: 13pt; font-weight: bold; border-bottom: 1px solid #000; padding-bottom: 4pt; margin: 12pt 0 8pt 0; }
        p { margin: 4pt 0; }
        .section { margin-bottom: 10pt; }
        .job-header { margin-bottom: 2pt; }
        .job-header-title { font-weight: bold; }
        .job-header-date { float: right; }
        .detail { margin: 0 0 2pt 0; }
        .project { margin-bottom: 10pt; }
        .project-title { font-weight: bold; margin-bottom: 2pt; }
        .project-meta { font-style: italic; margin-bottom: 4pt; }
        ul { margin: 4pt 0; padding-left: 18pt; }
        li { margin: 2pt 0; }
        .footer { text-align: center; font-size: 9pt; color: #555; margin-top: 16pt; border-top: 1px solid #000; padding-top: 8pt; }
    </style>
</head>
<body>
    <div class="container">
        <h1>VISHAL KUMAWAT</h1>
        <div class="subtitle">BCA Student | Python & Automation Developer</div>
        <div class="contact">
            <a href="mailto:xarvis320@gmail.com" style="color: #0066cc; text-decoration: none;">xarvis320@gmail.com</a> | +91 73003 02903 | Jaipur, Rajasthan<br>
            <a href="https://github.com/vishalkumawatx" target="_blank" style="color: #0066cc; text-decoration: none;">github.com/vishalkumawatx</a> | <a href="https://linkedin.com/in/vishalkumawatx" target="_blank" style="color: #0066cc; text-decoration: none;">linkedin.com/in/vishalkumawatx</a> | <a href="https://www.vishalkumawat.dev" target="_blank" style="color: #0066cc; text-decoration: none;">vishalkumawat.dev</a>
        </div>

        <hr>

        <h2>SUMMARY</h2>
        <ul>
            <li>BCA student focused on Python automation and computer vision; experienced turning manual tasks into reliable scripts.</li>
            <li>Delivered a background removal and image-to-PDF tool that earned 2nd place in a college competition.</li>
            <li>Comfortable with SQL schema design, clean file handling, and building simple UIs for technical workflows.</li>
        </ul>

        <hr>

        <h2>EDUCATION</h2>
        <div class="section">
            <div class="job-header">
                <span class="job-header-title">Bachelor of Computer Applications, Poornima University</span>
                <span class="job-header-date">2023 - Present</span>
                <div style="clear: both;"></div>
            </div>
            <div class="detail">Jaipur, Rajasthan | Focus: Python Development, Database Management, Web Technologies</div>
        </div>
        <div class="section">
            <div class="job-header">
                <span class="job-header-title">Senior Secondary (12th), RBSE Board</span>
                <span class="job-header-date">2023</span>
                <div style="clear: both;"></div>
            </div>
            <div class="detail">PCM: 78.80% | PCB: 80.00%</div>
        </div>
        <div class="section">
            <div class="job-header">
                <span class="job-header-title">Secondary (10th), RBSE Board</span>
                <span class="job-header-date">2021</span>
                <div style="clear: both;"></div>
            </div>
            <div class="detail">Percentage: 96%</div>
        </div>

        <hr>

        <h2>TECHNICAL SKILLS</h2>
        <ul>
            <li><strong>Languages:</strong> Python, JavaScript, Java, C, HTML, CSS</li>
            <li><strong>Libraries & Frameworks:</strong> OpenCV, Pillow (PIL), Tkinter, React (foundations)</li>
            <li><strong>Data & DB:</strong> MySQL, SQL schema design, relational modeling</li>
            <li><strong>Tools:</strong> Git, VS Code, Jupyter Notebook, Linux</li>
            <li><strong>Strengths:</strong> Automation scripting, API integration, PDF/image processing pipelines</li>
        </ul>

        <hr>

        <h2>PROJECTS</h2>
        <div class="project">
            <div class="project-title">Background Removal & Image-to-PDF Automation</div>
            <div class="project-meta">2024 | 2nd Place - College Project Competition</div>
            <ul>
                <li>Built an end-to-end tool that removes image backgrounds and batches images into PDFs with a Tkinter UI.</li>
                <li>Optimized OpenCV/Pillow pipeline, cutting manual processing time by roughly 80%.</li>
                <li>Packaged file handling and format validation for consistent outputs; demoed to judges and faculty.</li>
                <li>Stack: Python, OpenCV, Pillow, Tkinter, file I/O.</li>
            </ul>
        </div>

        <div class="project">
            <div class="project-title">Web Portfolio</div>
            <div class="project-meta">2024</div>
            <ul>
                <li>Designed a responsive personal portfolio to showcase projects and skills.</li>
                <li>Implemented modular components and clean layouts using HTML, CSS, and JavaScript.</li>
            </ul>
        </div>

        <div class="project">
            <div class="project-title">Student Database Management System</div>
            <div class="project-meta">2023</div>
            <ul>
                <li>Created a MySQL-backed CRUD application for academic record management.</li>
                <li>Applied relational modeling, indexing, and input validation to keep data consistent.</li>
            </ul>
        </div>

        <hr>

        <h2>ADDITIONAL</h2>
        <ul>
            <li><strong>Interests:</strong> Automation scripting, computer vision, full-stack web development, database design.</li>
            <li><strong>Career goals:</strong> Land a Python development internship, contribute to open-source automation tools, and expand computer vision expertise.</li>
        </ul>

        <div class="footer">
            <p>References and project demos available upon request</p>
            <p>Last Updated: January 2026</p>
        </div>
    </div>
</body>
</html>
  `;

  const blob = new Blob(['\ufeff', htmlContent], { 
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
  });
  saveAs(blob, 'Vishal_Kumawat_Resume.docx');
};

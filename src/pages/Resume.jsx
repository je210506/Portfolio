import resume from "../assets/resume.pdf";

export default function Resume() {
    return (
      <div className="resumeContainer">
        <h1>Jennys Resume</h1>
        <p className="download">
          Download my resume
          <a
            className="resumeLink"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "6px" }}
          >
            here!
          </a>
        </p>
      <p><strong>Location:</strong> Orlando, FL</p>
      <p><strong>Phone:</strong> (407) 403-2038</p>
      <p><strong>Email:</strong> lalanne1011@gmail.com</p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jenny-lalanne" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/jenny-lalanne</a></p>

      <section className="professional-summary">
        <h2>Professional Summary</h2>
        <p>Detail-oriented <strong>Full-Stack Developer</strong> with experience in <strong>TypeScript, SQL, Node.js, and React</strong>, coupled with a strong foundation in <strong>finance and revenue management</strong>. Passionate about leveraging technology to improve financial operations, automate workflows, and enhance user experiences.</p>      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>University of Central Florida, Orlando, FL</strong> - Bachelor of Science in Business Administration, Finance</li>
        </ul>
        <h3>Relevant Coursework</h3>
        <ul>
          <li>Computer Fundamentals for Business</li>
          <li>Equity and Capital Markets</li>
          <li>Intermediate Corporate Finance</li>
          <li>Debt and Money Markets</li>
          <li>Principles of Financial Accounting</li>
          <li>Principles of Managerial Accounting</li>
        </ul>
      </section>

      <section className="professional-experience">
        <h2>Professional Experience</h2>
        <h3>Orlando Health, Financial Counselor I</h3>
        <p><strong>April 2024 - Present</strong></p>
        <ol>
          <li>Conduct comprehensive evaluations of patients financial situations to determine eligibility for financial assistance programs and identify appropriate payment plans.</li>
          <li>Verify patient insurance coverage, assist with claims processing, and coordinate with insurance providers to ensure accurate billing and reimbursement.</li>
          <li>Oversee billing processes, manage accounts receivable, and implement effective collections strategies while maintaining compliance with hospital policies and regulations.</li>
        </ol>
      </section>

      <section className="projects">
        <h2>Software Development Projects</h2>
        <h3>Employee Tracker</h3>
        <ul>
          <li>Built a <strong>full-stack employee tracking app</strong> using <strong>Node.js, Express, and PostgreSQL</strong>.</li>
          <li>Implemented <strong>authentication (JWT)</strong> and role-based access for secure user interactions.</li>
          <li>Designed a <strong>dashboard with salary visualization</strong>.</li>
        </ul>
        
        <h3>Weather Dashboard API</h3>
        <ul>
          <li>Created a <strong>REST API</strong> in <strong>TypeScript and Express.js</strong> to fetch and display weather data.</li>
          <li>Developed a <strong>responsive UI in React</strong> with dynamic charting features.</li>
        </ul>
        <h3>Vehicle Generator</h3>
        <ul>
          <li>Designed and implemented a <strong>PostgreSQL database</strong> to store vehicle information and assigned roles to different types of vehicles.</li>
          <li>Created backend logic using <strong>Node.js and Express</strong> to generate vehicles dynamically.</li>
          <li>Developed a web-based UI to allow users to view and manage generated vehicles.</li>
        </ul>
        
        <h3>ReadMe Generator</h3>
        <ul>
          <li>Built a <strong>CLI-based ReadMe generator</strong> using <strong>Node.js and Inquirer.js</strong>.</li>
          <li>Automated ReadMe creation based on user input through dynamically appearing prompts.</li>
          <li>Ensured that generated ReadMe files followed best practices and markdown formatting.</li>
        </ul>
      </section>

      <section className="additional-info">
        <h2>Additional Information</h2>
        <ul>
          <li><strong>Languages:</strong> English and Haitian Creole</li>
          <li><strong>Certifications:</strong> Business Specialist Technical and Business Operations Technical Certificate</li>
        </ul>
      </section>
      </div>
    );
}
export default function Resume() {
    return (
      <div className="resumeContainer">
        <h1>Jenny's Resume</h1>
      <p><strong>Location:</strong> Orlando, FL</p>
      <p><strong>Phone:</strong> (407) 403-2038</p>
      <p><strong>Email:</strong> lalanne1011@gmail.com</p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jenny-lalanne" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/jenny-lalanne</a></p>

      <section className="professional-summary">
        <h2>Professional Summary</h2>
        <p>Driven university student looking for opportunities for growth in the financial field. Initiative-taking sales associate with extensive customer service, sales experience, and a history of driving increased sales, improving experience, and elevating company profile with target market. Optimistic dreamer ready to make her mark in the world.</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>University of Central Florida, Orlando, FL</strong> - Bachelor of Science in Business Administration, Finance</li>
          <li><strong>Valencia College, Orlando, FL</strong> - Associate in Arts in Business Administration </li>
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
        <ul>
          <li>Conduct comprehensive evaluations of patients' financial situations to determine eligibility for financial assistance programs and identify appropriate payment plans.</li>
          <li>Verify patient insurance coverage, assist with claims processing, and coordinate with insurance providers to ensure accurate billing and reimbursement.</li>
          <li>Oversee billing processes, manage accounts receivable, and implement effective collections strategies while maintaining compliance with hospital policies and regulations.</li>
        </ul>
        <h3>Hilton Grand Vacations Club, Guest Services Agent</h3>
        <p><strong>June 2022 - March 2024</strong></p>
        <ul>
          <li>Employ financial acumen to optimize room reservations, employing strategic planning to maximize occupancy and revenue.</li>
          <li>Uphold financial integrity by meticulously managing billing processes, resolving discrepancies, and ensuring accurate financial records.</li>
          <li>Spearhead guest financial interactions at the front desk, ensuring seamless check-ins and check-outs while meticulously managing payment processes.</li>
        </ul>
      </section>

      <section className="activities">
        <h2>Activities & Volunteer Experience</h2>
        <h3>Volunteer, Second Harvest Food Bank</h3>
        <p><strong>Fall 2020 - Spring 2024</strong></p>
        <ul>
          <li>Prepared cooked meals and food boxes with non-perishable goods for less fortunate families.</li>
        </ul>
      </section>

      <section className="honors">
        <h2>Honors</h2>
        <ul>
          <li>Dean’s List</li>
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
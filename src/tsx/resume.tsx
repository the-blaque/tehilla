const Resume: React.FC = () => {
  return (
    <main>
      <section>
        <h3 className="text-lg font-semibold mt-8 mb-2">Skills</h3>
        <div className="space-y-6">
          <div>
            <h5 className="text-md font-semibold">Technical</h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Programming & Development: C++, Python, PHP, JavaScript, HTML,
                CSS, SQL, and Bash.
              </li>
              <li className="text-sm mt-3">
                Frameworks: React, Bootstrap, Tailwind, Laravel, Express, Remix,
                JQuery
              </li>
              <li className="text-sm mt-3">
                Runtime Environment & Servers: Node.js, Nginx
              </li>
              <li className="text-sm mt-3">
                Project Management: Agile Delivery, Jira. Confluence
              </li>
              <li className="text-sm mt-3">CRM & CMS: HubSpot, WordPress</li>
              <li className="text-sm mt-3">
                Design: Adobe Illustrator, Photoshop
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">Soft</h5>
            <div className="flex text-sm">
              <div className="before:content-['•'] before:px-2">
                Critical Thinking and Problem-Solving
              </div>
              <div className="before:content-['•'] before:px-2">
                Strategic Storytelling
              </div>
              <div className="before:content-['•'] before:px-2">
                Entrepreneurial Leadership
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-semibold mt-8 mb-2">
          Professional Experience
        </h3>
        <div className="space-y-6">
          <div>
            <h5 className="text-md font-semibold">
              {" "}
              Co-Founder & Technical Product Lead | Stratum Labs | 2023 -
              Present
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Co-led the ideation and development of web and mobile
                applications, aligning product features with market needs and
                user feedback to drive engagement and solve key user problems.{" "}
              </li>
              <li className="text-sm mt-3">
                Utilized a diverse tech stack to create scalable and
                maintainable codebases, fostering a culture of technical
                excellence and innovation within the development team.
              </li>
              <li className="text-sm mt-3">
                Engaged directly with clients to gather requirements and
                feedback, translating business needs into actionable product
                strategies and features that delivered measurable value.
              </li>
              <li className="text-sm mt-3">
                Collaborated with marketing and sales teams to define product
                positioning and go-to-market strategies, contributing to a 20%
                growth in product adoption.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">
              Freelance Photographer & Graphic Designer | 2017 - Present
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Developed and executed visual content strategies for a diverse
                clientele, enhancing brand visibility and engagement through
                photography and graphic design.
              </li>
              <li className="text-sm mt-3">
                Worked closely with clients to conceptualize visual projects
                that aligned with their branding and marketing objectives,
                delivering tailored solutions that drive audience engagement.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">
              {" "}
              Fullstack Developer | Tracxtms | 2022 - 2023
            </h5>
            <h5
              className="text-sm font-semibold italic"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Product: A transportation & logistics management software
            </h5>
            <h5
              className="text-sm font-semibold italic"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Technology: Laravel, JQuery, MySQL, Node, Nginx hosted on AWS
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Played a pivotal role in the end-to-end lifecycle of a
                transportation management software, from concept through
                deployment, optimizing for operational efficiency and
                scalability.{" "}
              </li>
              <li className="text-sm mt-3">
                Integrated advanced analytics and reporting features using Power
                BI, enabling data-driven decisions that improved product
                functionality and customer satisfaction by 13%.
              </li>
              <li className="text-sm mt-3">
                Led the integration of SaaS GPS and invoicing software,
                enhancing product ecosystem interoperability and creating a
                seamless user experience across platforms.
              </li>
              <li className="text-sm mt-3">
                Addressed complex software bugs in collaboration with the
                customer support team, significantly improving system
                reliability and performance by 35% for enterprise clients.
              </li>
              <li className="text-sm mt-3">
                Contributed significantly to journey mapping and process
                elucidation, fostering team alignment and effectively
                communicating software improvements to stakeholders.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">
              Photographer | Photos Unlimited | 2022 - 2022{" "}
              <span
                className="text-sm italic"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                (4 months)
              </span>
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Managed photography projects from concept to delivery, ensuring
                client visions were realized through high-quality visual
                content, achieving a 98% client satisfaction rate that supported
                marketing and advertising objectives.
              </li>
              <li className="text-sm mt-3">
                Built and maintained strong relationships with clients, leading
                to repeat business and high satisfaction rates through attentive
                service and understanding of client needs.
              </li>
              <li className="text-sm mt-3">
                Streamlined shooting and post-processing workflows, maximizing
                productivity while maintaining high standards of quality.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">
              Digital Solutions Specialist | DMS, Community Futures | 2022 -
              2022{" "}
              <span
                className="text-sm italic"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                (4 months)
              </span>
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Led a team in the development of a digital service training
                program, enhancing the online presence and digital capabilities
                100s of local businesses.
              </li>
              <li className="text-sm mt-3">
                Conducted comprehensive business assessments to identify and
                address digital pain points, delivering solutions that
                significantly improved client digital engagement and reach.
              </li>
              <li className="text-sm mt-3">
                Designed and delivered training sessions on digital best
                practices, empowering over 250 local businesses with the
                knowledge to implement effective digital strategies
                independently.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">
              Sales and Customer Engagement Associate | Virgin Mobile (Bell
              Mobility) | 2019 - 2020
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Leveraged deep product knowledge and market trends to exceed
                sales targets through tailored customer engagement strategies,
                contributing to a 15% increase in store revenue over a year.
              </li>
              <li className="text-sm mt-3">
                Enhanced customer retention by providing personalized solutions
                and exceptional service, contributing to store revenue growth
                and positive customer feedback.
              </li>
              <li className="text-sm mt-3">
                Conducted continuous competitive analysis to adapt sales tactics
                and product offerings, ensuring a competitive edge in a
                fast-paced retail environment.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">
              Media Director | Enactus University of Lethbridge | 2018 - 2019
            </h5>
            <ul className="list-disc pl-5">
              <li className="text-sm mt-3">
                Led the development and implementation of a comprehensive media
                strategy to increase Enactus projects' visibility and impact,
                resulting in heightened engagement and support from the
                university community and beyond.
              </li>
              <li className="text-sm mt-3">
                Directed a team of creators, fostering a collaborative
                environment that encouraged creativity and innovation while
                mentoring team members on best practices.
              </li>
              <li className="text-sm mt-3">
                Crafted compelling narratives around Enactus initiatives,
                communicating the value and impact of projects to stakeholders,
                enhancing the organization's reputation, and attracting new
                partnerships.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold mt-8 mb-2">Education</h3>
        <p className="text-sm">
          {" "}
          Bachelor's of Management in Computer Science | University of
          lethbridge
        </p>
        <br />
        <br />
        <a
          href="/"
          className="text-sm text-custom-orange cursor-pointer hover:underline"
        >
          Go Back ←
        </a>
      </section>
    </main>
  );
};

export default Resume;

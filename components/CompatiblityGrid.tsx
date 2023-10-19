'use client'
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'

type Props = {}

function CapablityGrid({}: Props) {
    const capabilities = [
        {
          title: "Business Value Discovery",
          desc: "Measure the business value realised from your data & analytics programs",
          img: "",
          hih: [
            "Best practices to estimate and articulate business value from D&A initiatives",
            "Pre-built assessment questionnaire & templates to identify value drivers",
            "Pre-built assessment questionnaire & templates to identify value drivers",
          ],
          why: [
            "Measure & communicate ROI from D&A initiatives",
            "Help prioritize use cases objectively",
            "Empower stakeholders to take better, informed, & faster investment decisions",
          ],
        },
        {
          title: "Modern Architectures",
          desc: "Leverage modern Data Architectures and design paradigms to implement future-ready Data and Analytics platforms that power next-gen business competency",
          img: "",
          hih: [
            "Architectural templates for large transformation & modernization initiatives",
            "Component architecture approach to drive consistency across multiple D&A initiatives within the Enterprise",
            "Facilitate transition from old to new while maintaining interoperability between old and new systems where required",
          ],
          why: [
            "Reduce time to insights",
            "Ensure consistency in D&A Platforms",
            "Ease of interfacing with external and internal systems",
          ],
        },
        {
          title: "Modern Data Platforms",
          desc: "Next-gen data platforms that go beyond the incremental improvements to eliminate all-too-common silos in data, applications, and teams—and facilitate organizational change",
          img: "",
          hih: [
            "Assessment & roadmap definition leveraging proven frameworks and pre-built reference architectures",
            "Automations such as CTL, RTDS and best practices to implement the platform at speed",
            "Automated migration for a wide variety of data formats & sources",
          ],
          why: [
            "Delivers an agile, flexible & scalable data platform",
            "Unified & simple platform governance",
            "Cost effective & security compliant",
            "Reduced management overhead & increased productivity of D&A teams",
          ],
        },
        {
          title: "Data Modeling",
          desc: "Combine knowledge of business context, data characteristics & modern design paradigms to create scalable data models that optimizes performance & minimizes maintenance efforts",
          img: "",
          hih: [
            "Reusable Logical Data Model (LDM) templates for common domains and functions",
            "LDM for non-functional requirements such as traceability, auditability, security, quality",
            "Performance benchmarks for data access and data ingestion",
          ],
          why: [
            "Scales with data volume and velocity",
            "Minimizes maintenance efforts with data variety and variability",
            "Optimizes performance for data access and ingestion",
            "Supports data trust – quality, timeliness, traceability, auditability and security",
          ],
        },
        {
          title: "Product Design",
          desc: "Bring stakeholders together to imagine, create, & iterate data products that solve business problems or address specific unmet needs",
          img: "",
          hih: [
            "Design practices for personalized & immersive user experience",
            "Visual and narrative storytelling concepts to accelerate decisions",
            "Human centric approach to uncover actionable insights",
          ],
          why: [
            "Prepares users to interpret data uniformly, understand insights unambiguously & react faster to evolving market situations",
            "Prepares users to interpret data uniformly, understand insights unambiguously & react faster to evolving market situations",
          ],
        },
        {
          title: "Modern Data Pipelines",
          desc: "Unify & convert data from different sources into usable format in the fastest way possible",
          img: "",
          hih: [
            "Makes data available as events happen (in real-time)",
            "Comprehensive support for common file & databases",
            "Easily extendable",
            "Supports CDC, Query & API-based ingestion approaches",
          ],
          why: [
            "Rapid on-boarding of new data source",
            "Quick Insights – Maximize returns on your data through automated data pipelines",
            "Enhanced re-usability through established data ingestion patterns",
            "One stop solution for homogenous and heterogenous data ingestion",
          ],
        },
        {
          title: "Business Analytics",
          desc: "Convert data into user-friendly insights to deliver greater value–for customers, employees, partners, or shareholders–with greater efficiency",
          img: "",
          hih: [
            "Repeatable discovery-to-delivery approach",
            "Fully automated suite of tools to enable enterprise-grade apps",
            "Domain, digital and analytics expertise to create products that meet your business objectives",
          ],
          why: [
            "Intelligent business insights apps in days, not weeks",
            "Responsive, purpose-built solutions that satisfies unmet needs",
          ],
        },
        {
          title: "Data FinOps",
          desc: "Maximize Biz value by enabling cross-functional teams in making data-driven spending decisions while evolving financial management discipline and cultural practices",
          img: "",
          hih: [
            "Framework to manage Opex efficiently for D&A Initiatives",
            "Strike a balance between idle resources and over provisioning",
            "Provide Insights that help alleviate stakeholder fears on unexpected cost overruns",
            "Make faster decisions on retirement of Technical Debt (services that do not matter the most)",
          ],
          why: [
            "Drives the financial accountability culture by enabling D&A teams to make the right choices considering speed, cost, and quality",
            "Maximizes value from varying cloud spends – It’s not just about saving costs, as these spends can drive significant incremental revenue",
          ],
        },
        {
          title: "Data Migration",
          desc: "Convert and migrate data from legacy databases to cloud-native modern data platforms in an accelerated & efficient manner",
          img: "",
          hih: [
            "Data landscape assessment and roadmap advisory",
            "Multi-year TCO and ROI view to aid your funding decisions",
            "Automated conversion and migration for most of your legacy sources",
          ],
          why: [
            "Balances Speed with Accuracy",
            "Reduces migration risks",
            "Minimizes cost",
            "Zero business disruption",
          ],
        },
        {
          title: "Analytics Migration",
          desc: "Migrate BI/Analytics platforms quickly and efficiently to modern platforms using our robust methodology, accelerators, and pre-built toolkits",
          img: "",
          hih: [
            "Structured assessments to make right migration choices",
            "Automated tools for migrating most of your assets from source to target",
            "Automated regression tests",
            "Automated regression tests",
          ],
          why: [
            "Accelerates and de-risks migration programs – Get it right the first time!",
            "Retains benefits from existing apps",
            "Zero business disruption during migration",
            "Happier Users!",
          ],
        },
        {
          title: "Data Security & Privacy",
          desc: "Deliver trusted customer experience with a holistic and adaptive approach to data security and privacy based on zero trust principles of data protection",
          img: "",
          hih: [
            "Best practice frameworks & methods to validate security at every stage of data handshake",
            "Support for local data regulations such as PCI, HIPAA, GDPR etc",
            "Supports security in multi cloud/platform scenarios",
          ],
          why: [
            "Improves trust amongst partners, customers & other stakeholders",
            "Stops any type of misuse of PII Data",
            "Safeguards organizations from regulatory penalties",
          ],
        },
        {
          title: "Machine Learning",
          desc: "Seamless automation across the life cycle of a Data Science program – from advisory, to model development and deployment across platforms",
          img: "",
          hih: [
            "Adopt mining techniques & feature engineering processes that can automatically engineer new features",
            "Leverage repository of diverse algorithms that best fits needs",
            "Build a platform that explains model decisions in human interpretable format",
            "Automate repetitive, tedious and time-consuming tasks across the model lifecycle",
          ],
          why: [
            "Integrate your existing data science capabilities with new-age capabilities",
            "Free-up data scientists’ time to discover & solve new business problems",
          ],
        },
        {
          title: "Business Automation",
          desc: "Transform your business and customer experience using smarter technologies to drive hyper-productivity, enhance service quality & accelerate digital transformation",
          img: "",
          hih: [
            "Prioritize and streamline workflows through RPA/ automation techniques",
            "Standardize to drive efficiency across multiple business processes",
            "Leverage smarter technologies that are purpose built for automation and can handle scale & variety",
          ],
          why: [
            "Drives hyper productivity leading to significant cost savings",
            "Enhances agility and flexibility with the automated process always ready to perform a task on-Demand 24 x 7",
            "Improves overall governance with the audit trails driving insights, promoting accountability & demonstrating compliance",
          ],
        },
        {
          title: "Data Sharing",
          desc: "Realize better value of data, create new or better products, through secure sharing of data (both internally and externally) without replicating data assets",
          img: "",
          hih: [
            "Realize better value of data, create new or better products, through secure sharing of data (both internally and externally) without replicating data assets",
            "Enable data sharing in a hybrid multi-cloud/platform",
            "Automate monitoring & audits",
          ],
          why: [
            "Accelerates time to value",
            "Enables net new revenue creation through enabling new use cases",
            "Standardizes data sharing & governance practices",
            "Standardizes data sharing & governance practices",
          ],
        },
        {
          title: "DataOps Automation",
          desc: "Continuous improvement to reduce time & effort to convert data into insights in a secure & reliable way",
          img: "",
          hih: [
            "Automated data profiling, quality checks and discoverability",
            "Automated data pipeline development",
            "Automated data pipeline development",
            "Support for data-as-a-service",
          ],
          why: [
            "Reduces Manual QA Efforts",
            "Accelerates Time to Insights",
            "Reduces Data Silos",
          ],
        },
      ];
    
      const [active, setActive] = useState<number>(0);
  useEffect(() => {
    setActive(0);
  }, []);
  return (
    <div>
      <div className=" py-28 ">
        <div className=" px-4 md:px-8 lg:px-0">
          <div className=" max-w-7xl text-gray-700 mx-auto ">             

          <h2 className=" text-4xl pt-2  text-transparent  bg-clip-text  bg-gradient-to-r from-blue-400 via-cyan-400 to-lime-400 font-medium">
           Foundational Components
          </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pb-24">
              <div className=" max-h-max">
                <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
                  {capabilities.map((item: any, index: number) => (
                    <button
                      onClick={() => setActive(index)}
                      key={index}
                      className={` rounded-md hover:text-black hover:bg-lime-400 font-semibold ${
                        index === active
                          ? " text-white bg-cyan-400"
                          : " text-white/80 bg-gray-600/50"
                      } p-6 h-32 `}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className=" pl-4">
                <div className=" rounded-md">
                  <img
                    alt=""
                    src="https://www.infocepts.com/wp-content/uploads/2022/12/DataOps-Automation.png"
                    className=" object-cover rounded-md"
                  />
                  <h1 className=" text-black text-3xl font-medium pt-4">
                    {capabilities[active].title}
                  </h1>
                  <h3 className="pt-2  leading-6 text-gray-100">
                    {capabilities[active].desc}
                  </h3>
                  <div className=" grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h2 className=" text-white text-xl font-medium pt-4">
                        How it helps?
                      </h2>
                      <div className=" space-y-3 pt-2">
                        {capabilities[active].hih.map(
                          (item: any, index: number) => (
                            <div
                              key={index}
                              className=" flex space-x-3 py-1 text-sm"
                            >
                              <span className=" text-rose-400">
                                <StarIcon />
                              </span>
                              <p className=" text-gray-300">{item}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h2 className=" text-white text-xl font-medium pt-4">
                        Why?
                      </h2>
                      <div className=" space-y-3">
                        {capabilities[active].why.map(
                          (item: any, index: number) => (
                            <div
                              key={index}
                              className=" flex space-x-3 text-sm py-1"
                            >
                              <span className=" text-rose-400">
                                <StarIcon />
                              </span>
                              <p className=" text-gray-300">{item}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapablityGrid
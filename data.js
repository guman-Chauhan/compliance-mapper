window.NIST53_DATA = {
    "metadata":  {
                     "version":  "5.2.0",
                     "lastModified":  "2025-08-26T14:33:16.00000-00:00"
                 },
    "families":  [
                     {
                         "id":  "ac",
                         "label":  "AC",
                         "title":  "Access Control",
                         "controls":  [
                                          {
                                              "id":  "ac-1",
                                              "label":  "AC-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ac-1_prm_1 }}: Designate an {{ insert: param, ac-01_odp.04 }} to manage the development, documentation, and dissemination of the access control policy and procedures; and Review and update the current ...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-2",
                                              "label":  "AC-2",
                                              "title":  "Account Management",
                                              "description":  "Define and document the types of accounts allowed and specifically prohibited for use within the system; Assign account managers; Require {{ insert: param, ac-02_odp.01 }} for group and role membership; Specify: Require approvals by {{ insert: param, ac-02_...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-2.1",
                                                                       "label":  "AC-2(1)",
                                                                       "title":  "Automated System Account Management",
                                                                       "description":  "Support the management of system accounts using {{ insert: param, ac-02.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.2",
                                                                       "label":  "AC-2(2)",
                                                                       "title":  "Automated Temporary and Emergency Account Management",
                                                                       "description":  "Automatically {{ insert: param, ac-02.02_odp.01 }} temporary and emergency accounts after {{ insert: param, ac-02.02_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.3",
                                                                       "label":  "AC-2(3)",
                                                                       "title":  "Disable Accounts",
                                                                       "description":  "Disable accounts within {{ insert: param, ac-02.03_odp.01 }} when the accounts: Have expired; Are no longer associated with a user or individual; Are in violation of organizational policy; or Have been inactive for {{ insert: param, ac-02.03_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.4",
                                                                       "label":  "AC-2(4)",
                                                                       "title":  "Automated Audit Actions",
                                                                       "description":  "Automatically audit account creation, modification, enabling, disabling, and removal actions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.5",
                                                                       "label":  "AC-2(5)",
                                                                       "title":  "Inactivity Logout",
                                                                       "description":  "Require that users log out when {{ insert: param, ac-02.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.6",
                                                                       "label":  "AC-2(6)",
                                                                       "title":  "Dynamic Privilege Management",
                                                                       "description":  "Implement {{ insert: param, ac-02.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.7",
                                                                       "label":  "AC-2(7)",
                                                                       "title":  "Privileged User Accounts",
                                                                       "description":  "Establish and administer privileged user accounts in accordance with {{ insert: param, ac-02.07_odp }}; Monitor privileged role or attribute assignments; Monitor changes to roles or attributes; and Revoke access when privileged role or attribute assignments..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.8",
                                                                       "label":  "AC-2(8)",
                                                                       "title":  "Dynamic Account Management",
                                                                       "description":  "Create, activate, manage, and deactivate {{ insert: param, ac-02.08_odp }} dynamically."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.9",
                                                                       "label":  "AC-2(9)",
                                                                       "title":  "Restrictions on Use of Shared and Group Accounts",
                                                                       "description":  "Only permit the use of shared and group accounts that meet {{ insert: param, ac-02.09_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.10",
                                                                       "label":  "AC-2(10)",
                                                                       "title":  "Shared and Group Account Credential Change",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.11",
                                                                       "label":  "AC-2(11)",
                                                                       "title":  "Usage Conditions",
                                                                       "description":  "Enforce {{ insert: param, ac-02.11_odp.01 }} for {{ insert: param, ac-02.11_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.12",
                                                                       "label":  "AC-2(12)",
                                                                       "title":  "Account Monitoring for Atypical Usage",
                                                                       "description":  "Monitor system accounts for {{ insert: param, ac-02.12_odp.01 }} ; and Report atypical usage of system accounts to {{ insert: param, ac-02.12_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-2.13",
                                                                       "label":  "AC-2(13)",
                                                                       "title":  "Disable Accounts for High-risk Individuals",
                                                                       "description":  "Disable accounts of individuals within {{ insert: param, ac-02.13_odp.01 }} of discovery of {{ insert: param, ac-02.13_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-3",
                                              "label":  "AC-3",
                                              "title":  "Access Enforcement",
                                              "description":  "Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-3.1",
                                                                       "label":  "AC-3(1)",
                                                                       "title":  "Restricted Access to Privileged Functions",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.2",
                                                                       "label":  "AC-3(2)",
                                                                       "title":  "Dual Authorization",
                                                                       "description":  "Enforce dual authorization for {{ insert: param, ac-03.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.3",
                                                                       "label":  "AC-3(3)",
                                                                       "title":  "Mandatory Access Control",
                                                                       "description":  "Enforce {{ insert: param, ac-3.3_prm_1 }} over the set of covered subjects and objects specified in the policy, and where the policy: Is uniformly enforced across the covered subjects and objects within the system; Specifies that a subject that has been gra..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.4",
                                                                       "label":  "AC-3(4)",
                                                                       "title":  "Discretionary Access Control",
                                                                       "description":  "Enforce {{ insert: param, ac-3.4_prm_1 }} over the set of covered subjects and objects specified in the policy, and where the policy specifies that a subject that has been granted access to information can do one or more of the following: Pass the informati..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.5",
                                                                       "label":  "AC-3(5)",
                                                                       "title":  "Security-relevant Information",
                                                                       "description":  "Prevent access to {{ insert: param, ac-03.05_odp }} except during secure, non-operable system states."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.6",
                                                                       "label":  "AC-3(6)",
                                                                       "title":  "Protection of User and System Information",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.7",
                                                                       "label":  "AC-3(7)",
                                                                       "title":  "Role-based Access Control",
                                                                       "description":  "Enforce a role-based access control policy over defined subjects and objects and control access based upon {{ insert: param, ac-3.7_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.8",
                                                                       "label":  "AC-3(8)",
                                                                       "title":  "Revocation of Access Authorizations",
                                                                       "description":  "Enforce the revocation of access authorizations resulting from changes to the security attributes of subjects and objects based on {{ insert: param, ac-03.08_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.9",
                                                                       "label":  "AC-3(9)",
                                                                       "title":  "Controlled Release",
                                                                       "description":  "Release information outside of the system only if: The receiving {{ insert: param, ac-03.09_odp.01 }} provides {{ insert: param, ac-03.09_odp.02 }} ; and {{ insert: param, ac-03.09_odp.03 }} are used to validate the appropriateness of the information design..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.10",
                                                                       "label":  "AC-3(10)",
                                                                       "title":  "Audited Override of Access Control Mechanisms",
                                                                       "description":  "Employ an audited override of automated access control mechanisms under {{ insert: param, ac-03.10_odp.01 }} by {{ insert: param, ac-03.10_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.11",
                                                                       "label":  "AC-3(11)",
                                                                       "title":  "Restrict Access to Specific Information Types",
                                                                       "description":  "Restrict access to data repositories containing {{ insert: param, ac-03.11_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.12",
                                                                       "label":  "AC-3(12)",
                                                                       "title":  "Assert and Enforce Application Access",
                                                                       "description":  "Require applications to assert, as part of the installation process, the access needed to the following system applications and functions: {{ insert: param, ac-03.12_odp }}; Provide an enforcement mechanism to prevent unauthorized access; and Approve access..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.13",
                                                                       "label":  "AC-3(13)",
                                                                       "title":  "Attribute-based Access Control",
                                                                       "description":  "Enforce attribute-based access control policy over defined subjects and objects and control access based upon {{ insert: param, ac-03.13_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.14",
                                                                       "label":  "AC-3(14)",
                                                                       "title":  "Individual Access",
                                                                       "description":  "Provide {{ insert: param, ac-03.14_odp.01 }} to enable individuals to have access to the following elements of their personally identifiable information: {{ insert: param, ac-03.14_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-3.15",
                                                                       "label":  "AC-3(15)",
                                                                       "title":  "Discretionary and Mandatory Access Control",
                                                                       "description":  "Enforce {{ insert: param, ac-3.15_prm_1 }} over the set of covered subjects and objects specified in the policy; and Enforce {{ insert: param, ac-3.15_prm_2 }} over the set of covered subjects and objects specified in the policy."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-4",
                                              "label":  "AC-4",
                                              "title":  "Information Flow Enforcement",
                                              "description":  "Enforce approved authorizations for controlling the flow of information within the system and between connected systems based on {{ insert: param, ac-04_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-4.1",
                                                                       "label":  "AC-4(1)",
                                                                       "title":  "Object Security and Privacy Attributes",
                                                                       "description":  "Use {{ insert: param, ac-4.1_prm_1 }} associated with {{ insert: param, ac-4.1_prm_2 }} to enforce {{ insert: param, ac-04.01_odp.09 }} as a basis for flow control decisions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.2",
                                                                       "label":  "AC-4(2)",
                                                                       "title":  "Processing Domains",
                                                                       "description":  "Use protected processing domains to enforce {{ insert: param, ac-04.02_odp }} as a basis for flow control decisions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.3",
                                                                       "label":  "AC-4(3)",
                                                                       "title":  "Dynamic Information Flow Control",
                                                                       "description":  "Enforce {{ insert: param, ac-04.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.4",
                                                                       "label":  "AC-4(4)",
                                                                       "title":  "Flow Control of Encrypted Information",
                                                                       "description":  "Prevent encrypted information from bypassing {{ insert: param, ac-04.04_odp.01 }} by {{ insert: param, ac-04.04_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.5",
                                                                       "label":  "AC-4(5)",
                                                                       "title":  "Embedded Data Types",
                                                                       "description":  "Enforce {{ insert: param, ac-04.05_odp }} on embedding data types within other data types."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.6",
                                                                       "label":  "AC-4(6)",
                                                                       "title":  "Metadata",
                                                                       "description":  "Enforce information flow control based on {{ insert: param, ac-04.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.7",
                                                                       "label":  "AC-4(7)",
                                                                       "title":  "One-way Flow Mechanisms",
                                                                       "description":  "Enforce one-way information flows through hardware-based flow control mechanisms."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.8",
                                                                       "label":  "AC-4(8)",
                                                                       "title":  "Security and Privacy Policy Filters",
                                                                       "description":  "Enforce information flow control using {{ insert: param, ac-4.8_prm_1 }} as a basis for flow control decisions for {{ insert: param, ac-4.8_prm_2 }} ; and {{ insert: param, ac-04.08_odp.05 }} data after a filter processing failure in accordance with {{ inse..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.9",
                                                                       "label":  "AC-4(9)",
                                                                       "title":  "Human Reviews",
                                                                       "description":  "Enforce the use of human reviews for {{ insert: param, ac-04.09_odp.01 }} under the following conditions: {{ insert: param, ac-04.09_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.10",
                                                                       "label":  "AC-4(10)",
                                                                       "title":  "Enable and Disable Security or Privacy Policy Filters",
                                                                       "description":  "Provide the capability for privileged administrators to enable and disable {{ insert: param, ac-4.10_prm_1 }} under the following conditions: {{ insert: param, ac-4.10_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.11",
                                                                       "label":  "AC-4(11)",
                                                                       "title":  "Configuration of Security or Privacy Policy Filters",
                                                                       "description":  "Provide the capability for privileged administrators to configure {{ insert: param, ac-4.11_prm_1 }} to support different security or privacy policies."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.12",
                                                                       "label":  "AC-4(12)",
                                                                       "title":  "Data Type Identifiers",
                                                                       "description":  "When transferring information between different security domains, use {{ insert: param, ac-04.12_odp }} to validate data essential for information flow decisions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.13",
                                                                       "label":  "AC-4(13)",
                                                                       "title":  "Decomposition into Policy-relevant Subcomponents",
                                                                       "description":  "When transferring information between different security domains, decompose information into {{ insert: param, ac-04.13_odp }} for submission to policy enforcement mechanisms."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.14",
                                                                       "label":  "AC-4(14)",
                                                                       "title":  "Security or Privacy Policy Filter Constraints",
                                                                       "description":  "When transferring information between different security domains, implement {{ insert: param, ac-4.14_prm_1 }} requiring fully enumerated formats that restrict data structure and content."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.15",
                                                                       "label":  "AC-4(15)",
                                                                       "title":  "Detection of Unsanctioned Information",
                                                                       "description":  "When transferring information between different security domains, examine the information for the presence of {{ insert: param, ac-04.15_odp.01 }} and prohibit the transfer of such information in accordance with the {{ insert: param, ac-4.15_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.16",
                                                                       "label":  "AC-4(16)",
                                                                       "title":  "Information Transfers on Interconnected Systems",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.17",
                                                                       "label":  "AC-4(17)",
                                                                       "title":  "Domain Authentication",
                                                                       "description":  "Uniquely identify and authenticate source and destination points by {{ insert: param, ac-04.17_odp }} for information transfer."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.18",
                                                                       "label":  "AC-4(18)",
                                                                       "title":  "Security Attribute Binding",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.19",
                                                                       "label":  "AC-4(19)",
                                                                       "title":  "Validation of Metadata",
                                                                       "description":  "When transferring information between different security domains, implement {{ insert: param, ac-4.19_prm_1 }} on metadata."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.20",
                                                                       "label":  "AC-4(20)",
                                                                       "title":  "Approved Solutions",
                                                                       "description":  "Employ {{ insert: param, ac-04.20_odp.01 }} to control the flow of {{ insert: param, ac-04.20_odp.02 }} across security domains."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.21",
                                                                       "label":  "AC-4(21)",
                                                                       "title":  "Physical or Logical Separation of Information Flows",
                                                                       "description":  "Separate information flows logically or physically using {{ insert: param, ac-4.21_prm_1 }} to accomplish {{ insert: param, ac-04.21_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.22",
                                                                       "label":  "AC-4(22)",
                                                                       "title":  "Access Only",
                                                                       "description":  "Provide access from a single device to computing platforms, applications, or data residing in multiple different security domains, while preventing information flow between the different security domains."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.23",
                                                                       "label":  "AC-4(23)",
                                                                       "title":  "Modify Non-releasable Information",
                                                                       "description":  "When transferring information between different security domains, modify non-releasable information by implementing {{ insert: param, ac-04.23_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.24",
                                                                       "label":  "AC-4(24)",
                                                                       "title":  "Internal Normalized Format",
                                                                       "description":  "When transferring information between different security domains, parse incoming data into an internal normalized format and regenerate the data to be consistent with its intended specification."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.25",
                                                                       "label":  "AC-4(25)",
                                                                       "title":  "Data Sanitization",
                                                                       "description":  "When transferring information between different security domains, sanitize data to minimize {{ insert: param, ac-04.25_odp.01 }} in accordance with {{ insert: param, ac-04.25_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.26",
                                                                       "label":  "AC-4(26)",
                                                                       "title":  "Audit Filtering Actions",
                                                                       "description":  "When transferring information between different security domains, record and audit content filtering actions and results for the information being filtered."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.27",
                                                                       "label":  "AC-4(27)",
                                                                       "title":  "Redundant/Independent Filtering Mechanisms",
                                                                       "description":  "When transferring information between different security domains, implement content filtering solutions that provide redundant and independent filtering mechanisms for each data type."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.28",
                                                                       "label":  "AC-4(28)",
                                                                       "title":  "Linear Filter Pipelines",
                                                                       "description":  "When transferring information between different security domains, implement a linear content filter pipeline that is enforced with discretionary and mandatory access controls."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.29",
                                                                       "label":  "AC-4(29)",
                                                                       "title":  "Filter Orchestration Engines",
                                                                       "description":  "When transferring information between different security domains, employ content filter orchestration engines to ensure that: Content filtering mechanisms successfully complete execution without errors; and Content filtering actions occur in the correct ord..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.30",
                                                                       "label":  "AC-4(30)",
                                                                       "title":  "Filter Mechanisms Using Multiple Processes",
                                                                       "description":  "When transferring information between different security domains, implement content filtering mechanisms using multiple processes."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.31",
                                                                       "label":  "AC-4(31)",
                                                                       "title":  "Failed Content Transfer Prevention",
                                                                       "description":  "When transferring information between different security domains, prevent the transfer of failed content to the receiving domain."
                                                                   },
                                                                   {
                                                                       "id":  "ac-4.32",
                                                                       "label":  "AC-4(32)",
                                                                       "title":  "Process Requirements for Information Transfer",
                                                                       "description":  "When transferring information between different security domains, the process that transfers information between filter pipelines: Does not filter message content; Validates filtering metadata; Ensures the content associated with the filtering metadata has ..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-5",
                                              "label":  "AC-5",
                                              "title":  "Separation of Duties",
                                              "description":  "Identify and document {{ insert: param, ac-05_odp }} ; and Define system access authorizations to support separation of duties.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-6",
                                              "label":  "AC-6",
                                              "title":  "Least Privilege",
                                              "description":  "Employ the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) that are necessary to accomplish assigned organizational tasks.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-6.1",
                                                                       "label":  "AC-6(1)",
                                                                       "title":  "Authorize Access to Security Functions",
                                                                       "description":  "Authorize access for {{ insert: param, ac-06.01_odp.01 }} to: {{ insert: param, ac-6.1_prm_2 }} ; and {{ insert: param, ac-06.01_odp.05 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.2",
                                                                       "label":  "AC-6(2)",
                                                                       "title":  "Non-privileged Access for Nonsecurity Functions",
                                                                       "description":  "Require that users of system accounts (or roles) with access to {{ insert: param, ac-06.02_odp }} use non-privileged accounts or roles, when accessing nonsecurity functions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.3",
                                                                       "label":  "AC-6(3)",
                                                                       "title":  "Network Access to Privileged Commands",
                                                                       "description":  "Authorize network access to {{ insert: param, ac-06.03_odp.01 }} only for {{ insert: param, ac-06.03_odp.02 }} and document the rationale for such access in the security plan for the system."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.4",
                                                                       "label":  "AC-6(4)",
                                                                       "title":  "Separate Processing Domains",
                                                                       "description":  "Provide separate processing domains to enable finer-grained allocation of user privileges."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.5",
                                                                       "label":  "AC-6(5)",
                                                                       "title":  "Privileged Accounts",
                                                                       "description":  "Restrict privileged accounts on the system to {{ insert: param, ac-06.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.6",
                                                                       "label":  "AC-6(6)",
                                                                       "title":  "Privileged Access by Non-organizational Users",
                                                                       "description":  "Prohibit privileged access to the system by non-organizational users."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.7",
                                                                       "label":  "AC-6(7)",
                                                                       "title":  "Review of User Privileges",
                                                                       "description":  "Review {{ insert: param, ac-06.07_odp.01 }} the privileges assigned to {{ insert: param, ac-06.07_odp.02 }} to validate the need for such privileges; and Reassign or remove privileges, if necessary, to correctly reflect organizational mission and business n..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.8",
                                                                       "label":  "AC-6(8)",
                                                                       "title":  "Privilege Levels for Code Execution",
                                                                       "description":  "Prevent the following software from executing at higher privilege levels than users executing the software: {{ insert: param, ac-06.08_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.9",
                                                                       "label":  "AC-6(9)",
                                                                       "title":  "Log Use of Privileged Functions",
                                                                       "description":  "Log the execution of privileged functions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-6.10",
                                                                       "label":  "AC-6(10)",
                                                                       "title":  "Prohibit Non-privileged Users from Executing Privileged Functions",
                                                                       "description":  "Prevent non-privileged users from executing privileged functions."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-7",
                                              "label":  "AC-7",
                                              "title":  "Unsuccessful Logon Attempts",
                                              "description":  "Enforce a limit of {{ insert: param, ac-07_odp.01 }} consecutive invalid logon attempts by a user during a {{ insert: param, ac-07_odp.02 }} ; and Automatically {{ insert: param, ac-07_odp.03 }} when the maximum number of unsuccessful attempts is exceeded.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-7.1",
                                                                       "label":  "AC-7(1)",
                                                                       "title":  "Automatic Account Lock",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-7.2",
                                                                       "label":  "AC-7(2)",
                                                                       "title":  "Purge or Wipe Mobile Device",
                                                                       "description":  "Purge or wipe information from {{ insert: param, ac-07.02_odp.01 }} based on {{ insert: param, ac-07.02_odp.02 }} after {{ insert: param, ac-07.02_odp.03 }} consecutive, unsuccessful device logon attempts."
                                                                   },
                                                                   {
                                                                       "id":  "ac-7.3",
                                                                       "label":  "AC-7(3)",
                                                                       "title":  "Biometric Attempt Limiting",
                                                                       "description":  "Limit the number of unsuccessful biometric logon attempts to {{ insert: param, ac-07.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-7.4",
                                                                       "label":  "AC-7(4)",
                                                                       "title":  "Use of Alternate Authentication Factor",
                                                                       "description":  "Allow the use of {{ insert: param, ac-07.04_odp.01 }} that are different from the primary authentication factors after the number of organization-defined consecutive invalid logon attempts have been exceeded; and Enforce a limit of {{ insert: param, ac-07.0..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-8",
                                              "label":  "AC-8",
                                              "title":  "System Use Notification",
                                              "description":  "Display {{ insert: param, ac-08_odp.01 }} to users before granting access to the system that provides privacy and security notices consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines and state that...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-9",
                                              "label":  "AC-9",
                                              "title":  "Previous Logon Notification",
                                              "description":  "Notify the user, upon successful logon to the system, of the date and time of the last logon.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-9.1",
                                                                       "label":  "AC-9(1)",
                                                                       "title":  "Unsuccessful Logons",
                                                                       "description":  "Notify the user, upon successful logon, of the number of unsuccessful logon attempts since the last successful logon."
                                                                   },
                                                                   {
                                                                       "id":  "ac-9.2",
                                                                       "label":  "AC-9(2)",
                                                                       "title":  "Successful and Unsuccessful Logons",
                                                                       "description":  "Notify the user, upon successful logon, of the number of {{ insert: param, ac-09.02_odp.01 }} during {{ insert: param, ac-09.02_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-9.3",
                                                                       "label":  "AC-9(3)",
                                                                       "title":  "Notification of Account Changes",
                                                                       "description":  "Notify the user, upon successful logon, of changes to {{ insert: param, ac-09.03_odp.01 }} during {{ insert: param, ac-09.03_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-9.4",
                                                                       "label":  "AC-9(4)",
                                                                       "title":  "Additional Logon Information",
                                                                       "description":  "Notify the user, upon successful logon, of the following additional information: {{ insert: param, ac-09.04_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-10",
                                              "label":  "AC-10",
                                              "title":  "Concurrent Session Control",
                                              "description":  "Limit the number of concurrent sessions for each {{ insert: param, ac-10_odp.01 }} to {{ insert: param, ac-10_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-11",
                                              "label":  "AC-11",
                                              "title":  "Device Lock",
                                              "description":  "Prevent further access to the system by {{ insert: param, ac-11_odp.01 }} ; and Retain the device lock until the user reestablishes access using established identification and authentication procedures.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-11.1",
                                                                       "label":  "AC-11(1)",
                                                                       "title":  "Pattern-hiding Displays",
                                                                       "description":  "Conceal, via the device lock, information previously visible on the display with a publicly viewable image."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-12",
                                              "label":  "AC-12",
                                              "title":  "Session Termination",
                                              "description":  "Automatically terminate a user session after {{ insert: param, ac-12_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-12.1",
                                                                       "label":  "AC-12(1)",
                                                                       "title":  "User-initiated Logouts",
                                                                       "description":  "Provide a logout capability for user-initiated communications sessions whenever authentication is used to gain access to {{ insert: param, ac-12.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-12.2",
                                                                       "label":  "AC-12(2)",
                                                                       "title":  "Termination Message",
                                                                       "description":  "Display an explicit logout message to users indicating the termination of authenticated communications sessions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-12.3",
                                                                       "label":  "AC-12(3)",
                                                                       "title":  "Timeout Warning Message",
                                                                       "description":  "Display an explicit message to users indicating that the session will end in {{ insert: param, ac-12.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-13",
                                              "label":  "AC-13",
                                              "title":  "Supervision and Review â€” Access Control",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-14",
                                              "label":  "AC-14",
                                              "title":  "Permitted Actions Without Identification or Authentication",
                                              "description":  "Identify {{ insert: param, ac-14_odp }} that can be performed on the system without identification or authentication consistent with organizational mission and business functions; and Document and provide supporting rationale in the security plan for the sy...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-14.1",
                                                                       "label":  "AC-14(1)",
                                                                       "title":  "Necessary Uses",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-15",
                                              "label":  "AC-15",
                                              "title":  "Automated Marking",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-16",
                                              "label":  "AC-16",
                                              "title":  "Security and Privacy Attributes",
                                              "description":  "Provide the means to associate {{ insert: param, ac-16_prm_1 }} with {{ insert: param, ac-16_prm_2 }} for information in storage, in process, and/or in transmission; Ensure that the attribute associations are made and retained with the information; Establis...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-16.1",
                                                                       "label":  "AC-16(1)",
                                                                       "title":  "Dynamic Attribute Association",
                                                                       "description":  "Dynamically associate security and privacy attributes with {{ insert: param, ac-16.1_prm_1 }} in accordance with the following security and privacy policies as information is created and combined: {{ insert: param, ac-16.1_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.2",
                                                                       "label":  "AC-16(2)",
                                                                       "title":  "Attribute Value Changes by Authorized Individuals",
                                                                       "description":  "Provide authorized individuals (or processes acting on behalf of individuals) the capability to define or change the value of associated security and privacy attributes."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.3",
                                                                       "label":  "AC-16(3)",
                                                                       "title":  "Maintenance of Attribute Associations by System",
                                                                       "description":  "Maintain the association and integrity of {{ insert: param, ac-16.3_prm_1 }} to {{ insert: param, ac-16.3_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.4",
                                                                       "label":  "AC-16(4)",
                                                                       "title":  "Association of Attributes by Authorized Individuals",
                                                                       "description":  "Provide the capability to associate {{ insert: param, ac-16.4_prm_1 }} with {{ insert: param, ac-16.4_prm_2 }} by authorized individuals (or processes acting on behalf of individuals)."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.5",
                                                                       "label":  "AC-16(5)",
                                                                       "title":  "Attribute Displays on Objects to Be Output",
                                                                       "description":  "Display security and privacy attributes in human-readable form on each object that the system transmits to output devices to identify {{ insert: param, ac-16.05_odp.01 }} using {{ insert: param, ac-16.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.6",
                                                                       "label":  "AC-16(6)",
                                                                       "title":  "Maintenance of Attribute Association",
                                                                       "description":  "Require personnel to associate and maintain the association of {{ insert: param, ac-16.6_prm_1 }} with {{ insert: param, ac-16.6_prm_2 }} in accordance with {{ insert: param, ac-16.6_prm_3 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.7",
                                                                       "label":  "AC-16(7)",
                                                                       "title":  "Consistent Attribute Interpretation",
                                                                       "description":  "Provide a consistent interpretation of security and privacy attributes transmitted between distributed system components."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.8",
                                                                       "label":  "AC-16(8)",
                                                                       "title":  "Association Techniques and Technologies",
                                                                       "description":  "Implement {{ insert: param, ac-16.8_prm_1 }} in associating security and privacy attributes to information."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.9",
                                                                       "label":  "AC-16(9)",
                                                                       "title":  "Attribute Reassignment â€” Regrading Mechanisms",
                                                                       "description":  "Change security and privacy attributes associated with information only via regrading mechanisms validated using {{ insert: param, ac-16.9_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-16.10",
                                                                       "label":  "AC-16(10)",
                                                                       "title":  "Attribute Configuration by Authorized Individuals",
                                                                       "description":  "Provide authorized individuals the capability to define or change the type and value of security and privacy attributes available for association with subjects and objects."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-17",
                                              "label":  "AC-17",
                                              "title":  "Remote Access",
                                              "description":  "Establish and document usage restrictions, configuration/connection requirements, and implementation guidance for each type of remote access allowed; and Authorize each type of remote access to the system prior to allowing such connections.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-17.1",
                                                                       "label":  "AC-17(1)",
                                                                       "title":  "Monitoring and Control",
                                                                       "description":  "Employ automated mechanisms to monitor and control remote access methods."
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.2",
                                                                       "label":  "AC-17(2)",
                                                                       "title":  "Protection of Confidentiality and Integrity Using Encryption",
                                                                       "description":  "Implement cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.3",
                                                                       "label":  "AC-17(3)",
                                                                       "title":  "Managed Access Control Points",
                                                                       "description":  "Route remote accesses through authorized and managed network access control points."
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.4",
                                                                       "label":  "AC-17(4)",
                                                                       "title":  "Privileged Commands and Access",
                                                                       "description":  "Authorize the execution of privileged commands and access to security-relevant information via remote access only in a format that provides assessable evidence and for the following needs: {{ insert: param, ac-17.4_prm_1 }} ; and Document the rationale for ..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.5",
                                                                       "label":  "AC-17(5)",
                                                                       "title":  "Monitoring for Unauthorized Connections",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.6",
                                                                       "label":  "AC-17(6)",
                                                                       "title":  "Protection of Mechanism Information",
                                                                       "description":  "Protect information about remote access mechanisms from unauthorized use and disclosure."
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.7",
                                                                       "label":  "AC-17(7)",
                                                                       "title":  "Additional Protection for Security Function Access",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.8",
                                                                       "label":  "AC-17(8)",
                                                                       "title":  "Disable Nonsecure Network Protocols",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.9",
                                                                       "label":  "AC-17(9)",
                                                                       "title":  "Disconnect or Disable Access",
                                                                       "description":  "Provide the capability to disconnect or disable remote access to the system within {{ insert: param, ac-17.09_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-17.10",
                                                                       "label":  "AC-17(10)",
                                                                       "title":  "Authenticate Remote Commands",
                                                                       "description":  "Implement {{ insert: param, ac-17.10_odp.01 }} to authenticate {{ insert: param, ac-17.10_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-18",
                                              "label":  "AC-18",
                                              "title":  "Wireless Access",
                                              "description":  "Establish configuration requirements, connection requirements, and implementation guidance for each type of wireless access; and Authorize each type of wireless access to the system prior to allowing such connections.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-18.1",
                                                                       "label":  "AC-18(1)",
                                                                       "title":  "Authentication and Encryption",
                                                                       "description":  "Protect wireless access to the system using authentication of {{ insert: param, ac-18.01_odp }} and encryption."
                                                                   },
                                                                   {
                                                                       "id":  "ac-18.2",
                                                                       "label":  "AC-18(2)",
                                                                       "title":  "Monitoring Unauthorized Connections",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-18.3",
                                                                       "label":  "AC-18(3)",
                                                                       "title":  "Disable Wireless Networking",
                                                                       "description":  "Disable, when not intended for use, wireless networking capabilities embedded within system components prior to issuance and deployment."
                                                                   },
                                                                   {
                                                                       "id":  "ac-18.4",
                                                                       "label":  "AC-18(4)",
                                                                       "title":  "Restrict Configurations by Users",
                                                                       "description":  "Identify and explicitly authorize users allowed to independently configure wireless networking capabilities."
                                                                   },
                                                                   {
                                                                       "id":  "ac-18.5",
                                                                       "label":  "AC-18(5)",
                                                                       "title":  "Antennas and Transmission Power Levels",
                                                                       "description":  "Select radio antennas and calibrate transmission power levels to reduce the probability that signals from wireless access points can be received outside of organization-controlled boundaries."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-19",
                                              "label":  "AC-19",
                                              "title":  "Access Control for Mobile Devices",
                                              "description":  "Establish configuration requirements, connection requirements, and implementation guidance for organization-controlled mobile devices, to include when such devices are outside of controlled areas; and Authorize the connection of mobile devices to organizati...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-19.1",
                                                                       "label":  "AC-19(1)",
                                                                       "title":  "Use of Writable and Portable Storage Devices",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-19.2",
                                                                       "label":  "AC-19(2)",
                                                                       "title":  "Use of Personally Owned Portable Storage Devices",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-19.3",
                                                                       "label":  "AC-19(3)",
                                                                       "title":  "Use of Portable Storage Devices with No Identifiable Owner",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ac-19.4",
                                                                       "label":  "AC-19(4)",
                                                                       "title":  "Restrictions for Classified Information",
                                                                       "description":  "Prohibit the use of unclassified mobile devices in facilities containing systems processing, storing, or transmitting classified information unless specifically permitted by the authorizing official; and Enforce the following restrictions on individuals per..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-19.5",
                                                                       "label":  "AC-19(5)",
                                                                       "title":  "Full Device or Container-based Encryption",
                                                                       "description":  "Employ {{ insert: param, ac-19.05_odp.01 }} to protect the confidentiality and integrity of information on {{ insert: param, ac-19.05_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-20",
                                              "label":  "AC-20",
                                              "title":  "Use of External Systems",
                                              "description":  "{{ insert: param, ac-20_odp.01 }} , consistent with the trust relationships established with other organizations owning, operating, and/or maintaining external systems, allowing authorized individuals to: Prohibit the use of {{ insert: param, ac-20_odp.04 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-20.1",
                                                                       "label":  "AC-20(1)",
                                                                       "title":  "Limits on Authorized Use",
                                                                       "description":  "Permit authorized individuals to use an external system to access the system or to process, store, or transmit organization-controlled information only after: Verification of the implementation of controls on the external system as specified in the organiza..."
                                                                   },
                                                                   {
                                                                       "id":  "ac-20.2",
                                                                       "label":  "AC-20(2)",
                                                                       "title":  "Portable Storage Devices â€” Restricted Use",
                                                                       "description":  "Restrict the use of organization-controlled portable storage devices by authorized individuals on external systems using {{ insert: param, ac-20.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-20.3",
                                                                       "label":  "AC-20(3)",
                                                                       "title":  "Non-organizationally Owned Systems â€” Restricted Use",
                                                                       "description":  "Restrict the use of non-organizationally owned systems or system components to process, store, or transmit organizational information using {{ insert: param, ac-20.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ac-20.4",
                                                                       "label":  "AC-20(4)",
                                                                       "title":  "Network Accessible Storage Devices â€” Prohibited Use",
                                                                       "description":  "Prohibit the use of {{ insert: param, ac-20.04_odp }} in external systems."
                                                                   },
                                                                   {
                                                                       "id":  "ac-20.5",
                                                                       "label":  "AC-20(5)",
                                                                       "title":  "Portable Storage Devices â€” Prohibited Use",
                                                                       "description":  "Prohibit the use of organization-controlled portable storage devices by authorized individuals on external systems."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-21",
                                              "label":  "AC-21",
                                              "title":  "Information Sharing",
                                              "description":  "Enable authorized users to determine whether access authorizations assigned to a sharing partner match the informationâ€™s access and use restrictions for {{ insert: param, ac-21_odp.01 }} ; and Employ {{ insert: param, ac-21_odp.02 }} to assist users in ma...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-21.1",
                                                                       "label":  "AC-21(1)",
                                                                       "title":  "Automated Decision Support",
                                                                       "description":  "Employ {{ insert: param, ac-21.01_odp }} to enforce information-sharing decisions by authorized users based on access authorizations of sharing partners and access restrictions on information to be shared."
                                                                   },
                                                                   {
                                                                       "id":  "ac-21.2",
                                                                       "label":  "AC-21(2)",
                                                                       "title":  "Information Search and Retrieval",
                                                                       "description":  "Implement information search and retrieval services that enforce {{ insert: param, ac-21.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-22",
                                              "label":  "AC-22",
                                              "title":  "Publicly Accessible Content",
                                              "description":  "Designate individuals authorized to make information publicly accessible; Train authorized individuals to ensure that publicly accessible information does not contain nonpublic information; Review the proposed content of information prior to posting onto th...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-23",
                                              "label":  "AC-23",
                                              "title":  "Data Mining Protection",
                                              "description":  "Employ {{ insert: param, ac-23_odp.01 }} for {{ insert: param, ac-23_odp.02 }} to detect and protect against unauthorized data mining.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ac-24",
                                              "label":  "AC-24",
                                              "title":  "Access Control Decisions",
                                              "description":  "{{ insert: param, ac-24_odp.01 }} to ensure {{ insert: param, ac-24_odp.02 }} are applied to each access request prior to access enforcement.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ac-24.1",
                                                                       "label":  "AC-24(1)",
                                                                       "title":  "Transmit Access Authorization Information",
                                                                       "description":  "Transmit {{ insert: param, ac-24.01_odp.01 }} using {{ insert: param, ac-24.01_odp.02 }} to {{ insert: param, ac-24.01_odp.03 }} that enforce access control decisions."
                                                                   },
                                                                   {
                                                                       "id":  "ac-24.2",
                                                                       "label":  "AC-24(2)",
                                                                       "title":  "No User or Process Identity",
                                                                       "description":  "Enforce access control decisions based on {{ insert: param, ac-24.2_prm_1 }} that do not include the identity of the user or process acting on behalf of the user."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ac-25",
                                              "label":  "AC-25",
                                              "title":  "Reference Monitor",
                                              "description":  "Implement a reference monitor for {{ insert: param, ac-25_odp }} that is tamperproof, always invoked, and small enough to be subject to analysis and testing, the completeness of which can be assured.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "at",
                         "label":  "AT",
                         "title":  "Awareness and Training",
                         "controls":  [
                                          {
                                              "id":  "at-1",
                                              "label":  "AT-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, at-1_prm_1 }}: Designate an {{ insert: param, at-01_odp.04 }} to manage the development, documentation, and dissemination of the awareness and training policy and procedures; and Review and update the ...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "at-2",
                                              "label":  "AT-2",
                                              "title":  "Literacy Training and Awareness",
                                              "description":  "Provide security and privacy literacy training to system users (including managers, senior executives, and contractors): Employ the following techniques to increase the security and privacy awareness of system users {{ insert: param, at-02_odp.05 }}; Update...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "at-2.1",
                                                                       "label":  "AT-2(1)",
                                                                       "title":  "Practical Exercises",
                                                                       "description":  "Provide practical exercises in literacy training that simulate events and incidents."
                                                                   },
                                                                   {
                                                                       "id":  "at-2.2",
                                                                       "label":  "AT-2(2)",
                                                                       "title":  "Insider Threat",
                                                                       "description":  "Provide literacy training on recognizing and reporting potential indicators of insider threat."
                                                                   },
                                                                   {
                                                                       "id":  "at-2.3",
                                                                       "label":  "AT-2(3)",
                                                                       "title":  "Social Engineering and Mining",
                                                                       "description":  "Provide literacy training on recognizing and reporting potential and actual instances of social engineering and social mining."
                                                                   },
                                                                   {
                                                                       "id":  "at-2.4",
                                                                       "label":  "AT-2(4)",
                                                                       "title":  "Suspicious Communications and Anomalous System Behavior",
                                                                       "description":  "Provide literacy training on recognizing suspicious communications and anomalous behavior in organizational systems using {{ insert: param, at-02.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "at-2.5",
                                                                       "label":  "AT-2(5)",
                                                                       "title":  "Advanced Persistent Threat",
                                                                       "description":  "Provide literacy training on the advanced persistent threat."
                                                                   },
                                                                   {
                                                                       "id":  "at-2.6",
                                                                       "label":  "AT-2(6)",
                                                                       "title":  "Cyber Threat Environment",
                                                                       "description":  "Provide literacy training on the cyber threat environment; and Reflect current cyber threat information in system operations."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "at-3",
                                              "label":  "AT-3",
                                              "title":  "Role-based Training",
                                              "description":  "Provide role-based security and privacy training to personnel with the following roles and responsibilities: {{ insert: param, at-3_prm_1 }}: Update role-based training content {{ insert: param, at-03_odp.04 }} and following {{ insert: param, at-03_odp.05 }...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "at-3.1",
                                                                       "label":  "AT-3(1)",
                                                                       "title":  "Environmental Controls",
                                                                       "description":  "Provide {{ insert: param, at-03.01_odp.01 }} with initial and {{ insert: param, at-03.01_odp.02 }} training in the employment and operation of environmental controls."
                                                                   },
                                                                   {
                                                                       "id":  "at-3.2",
                                                                       "label":  "AT-3(2)",
                                                                       "title":  "Physical Security Controls",
                                                                       "description":  "Provide {{ insert: param, at-03.02_odp.01 }} with initial and {{ insert: param, at-03.02_odp.02 }} training in the employment and operation of physical security controls."
                                                                   },
                                                                   {
                                                                       "id":  "at-3.3",
                                                                       "label":  "AT-3(3)",
                                                                       "title":  "Practical Exercises",
                                                                       "description":  "Provide practical exercises in security and privacy training that reinforce training objectives."
                                                                   },
                                                                   {
                                                                       "id":  "at-3.4",
                                                                       "label":  "AT-3(4)",
                                                                       "title":  "Suspicious Communications and Anomalous System Behavior",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "at-3.5",
                                                                       "label":  "AT-3(5)",
                                                                       "title":  "Processing Personally Identifiable Information",
                                                                       "description":  "Provide {{ insert: param, at-03.05_odp.01 }} with initial and {{ insert: param, at-03.05_odp.02 }} training in the employment and operation of personally identifiable information processing and transparency controls."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "at-4",
                                              "label":  "AT-4",
                                              "title":  "Training Records",
                                              "description":  "Document and monitor information security and privacy training activities, including security and privacy awareness training and specific role-based security and privacy training; and Retain individual training records for {{ insert: param, at-04_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "at-5",
                                              "label":  "AT-5",
                                              "title":  "Contacts with Security Groups and Associations",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "at-6",
                                              "label":  "AT-6",
                                              "title":  "Training Feedback",
                                              "description":  "Provide feedback on organizational training results to the following personnel {{ insert: param, at-06_odp.01 }}: {{ insert: param, at-06_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "au",
                         "label":  "AU",
                         "title":  "Audit and Accountability",
                         "controls":  [
                                          {
                                              "id":  "au-1",
                                              "label":  "AU-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, au-1_prm_1 }}: Designate an {{ insert: param, au-01_odp.04 }} to manage the development, documentation, and dissemination of the audit and accountability policy and procedures; and Review and update th...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "au-2",
                                              "label":  "AU-2",
                                              "title":  "Event Logging",
                                              "description":  "Identify the types of events that the system is capable of logging in support of the audit function: {{ insert: param, au-02_odp.01 }}; Coordinate the event logging function with other organizational entities requiring audit-related information to guide and...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-2.1",
                                                                       "label":  "AU-2(1)",
                                                                       "title":  "Compilation of Audit Records from Multiple Sources",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-2.2",
                                                                       "label":  "AU-2(2)",
                                                                       "title":  "Selection of Audit Events by Component",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-2.3",
                                                                       "label":  "AU-2(3)",
                                                                       "title":  "Reviews and Updates",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-2.4",
                                                                       "label":  "AU-2(4)",
                                                                       "title":  "Privileged Functions",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-3",
                                              "label":  "AU-3",
                                              "title":  "Content of Audit Records",
                                              "description":  "Ensure that audit records contain information that establishes the following: What type of event occurred; When the event occurred; Where the event occurred; Source of the event; Outcome of the event; and Identity of any individuals, subjects, or objects/en...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-3.1",
                                                                       "label":  "AU-3(1)",
                                                                       "title":  "Additional Audit Information",
                                                                       "description":  "Generate audit records containing the following additional information: {{ insert: param, au-03.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-3.2",
                                                                       "label":  "AU-3(2)",
                                                                       "title":  "Centralized Management of Planned Audit Record Content",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-3.3",
                                                                       "label":  "AU-3(3)",
                                                                       "title":  "Limit Personally Identifiable Information Elements",
                                                                       "description":  "Limit personally identifiable information contained in audit records to the following elements identified in the privacy risk assessment: {{ insert: param, au-03.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-4",
                                              "label":  "AU-4",
                                              "title":  "Audit Log Storage Capacity",
                                              "description":  "Allocate audit log storage capacity to accommodate {{ insert: param, au-04_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-4.1",
                                                                       "label":  "AU-4(1)",
                                                                       "title":  "Transfer to Alternate Storage",
                                                                       "description":  "Transfer audit logs {{ insert: param, au-04.01_odp }} to a different system, system component, or media other than the system or system component conducting the logging."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-5",
                                              "label":  "AU-5",
                                              "title":  "Response to Audit Logging Process Failures",
                                              "description":  "Alert {{ insert: param, au-05_odp.01 }} within {{ insert: param, au-05_odp.02 }} in the event of an audit logging process failure; and Take the following additional actions: {{ insert: param, au-05_odp.03 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-5.1",
                                                                       "label":  "AU-5(1)",
                                                                       "title":  "Storage Capacity Warning",
                                                                       "description":  "Provide a warning to {{ insert: param, au-05.01_odp.01 }} within {{ insert: param, au-05.01_odp.02 }} when allocated audit log storage volume reaches {{ insert: param, au-05.01_odp.03 }} of repository maximum audit log storage capacity."
                                                                   },
                                                                   {
                                                                       "id":  "au-5.2",
                                                                       "label":  "AU-5(2)",
                                                                       "title":  "Real-time Alerts",
                                                                       "description":  "Provide an alert within {{ insert: param, au-05.02_odp.01 }} to {{ insert: param, au-05.02_odp.02 }} when the following audit failure events occur: {{ insert: param, au-05.02_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-5.3",
                                                                       "label":  "AU-5(3)",
                                                                       "title":  "Configurable Traffic Volume Thresholds",
                                                                       "description":  "Enforce configurable network communications traffic volume thresholds reflecting limits on audit log storage capacity and {{ insert: param, au-05.03_odp }} network traffic above those thresholds."
                                                                   },
                                                                   {
                                                                       "id":  "au-5.4",
                                                                       "label":  "AU-5(4)",
                                                                       "title":  "Shutdown on Failure",
                                                                       "description":  "Invoke a {{ insert: param, au-05.04_odp.01 }} in the event of {{ insert: param, au-05.04_odp.02 }} , unless an alternate audit logging capability exists."
                                                                   },
                                                                   {
                                                                       "id":  "au-5.5",
                                                                       "label":  "AU-5(5)",
                                                                       "title":  "Alternate Audit Logging Capability",
                                                                       "description":  "Provide an alternate audit logging capability in the event of a failure in primary audit logging capability that implements {{ insert: param, au-05.05_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-6",
                                              "label":  "AU-6",
                                              "title":  "Audit Record Review, Analysis, and Reporting",
                                              "description":  "Review and analyze system audit records {{ insert: param, au-06_odp.01 }} for indications of {{ insert: param, au-06_odp.02 }} and the potential impact of the inappropriate or unusual activity; Report findings to {{ insert: param, au-06_odp.03 }} ; and Adju...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-6.1",
                                                                       "label":  "AU-6(1)",
                                                                       "title":  "Automated Process Integration",
                                                                       "description":  "Integrate audit record review, analysis, and reporting processes using {{ insert: param, au-06.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.2",
                                                                       "label":  "AU-6(2)",
                                                                       "title":  "Automated Security Alerts",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-6.3",
                                                                       "label":  "AU-6(3)",
                                                                       "title":  "Correlate Audit Record Repositories",
                                                                       "description":  "Analyze and correlate audit records across different repositories to gain organization-wide situational awareness."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.4",
                                                                       "label":  "AU-6(4)",
                                                                       "title":  "Central Review and Analysis",
                                                                       "description":  "Provide and implement the capability to centrally review and analyze audit records from multiple components within the system."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.5",
                                                                       "label":  "AU-6(5)",
                                                                       "title":  "Integrated Analysis of Audit Records",
                                                                       "description":  "Integrate analysis of audit records with analysis of {{ insert: param, au-06.05_odp.01 }} to further enhance the ability to identify inappropriate or unusual activity."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.6",
                                                                       "label":  "AU-6(6)",
                                                                       "title":  "Correlation with Physical Monitoring",
                                                                       "description":  "Correlate information from audit records with information obtained from monitoring physical access to further enhance the ability to identify suspicious, inappropriate, unusual, or malevolent activity."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.7",
                                                                       "label":  "AU-6(7)",
                                                                       "title":  "Permitted Actions",
                                                                       "description":  "Specify the permitted actions for each {{ insert: param, au-06.07_odp }} associated with the review, analysis, and reporting of audit record information."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.8",
                                                                       "label":  "AU-6(8)",
                                                                       "title":  "Full Text Analysis of Privileged Commands",
                                                                       "description":  "Perform a full text analysis of logged privileged commands in a physically distinct component or subsystem of the system, or other system that is dedicated to that analysis."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.9",
                                                                       "label":  "AU-6(9)",
                                                                       "title":  "Correlation with Information from Nontechnical Sources",
                                                                       "description":  "Correlate information from nontechnical sources with audit record information to enhance organization-wide situational awareness."
                                                                   },
                                                                   {
                                                                       "id":  "au-6.10",
                                                                       "label":  "AU-6(10)",
                                                                       "title":  "Audit Level Adjustment",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-7",
                                              "label":  "AU-7",
                                              "title":  "Audit Record Reduction and Report Generation",
                                              "description":  "Provide and implement an audit record reduction and report generation capability that: Supports on-demand audit record review, analysis, and reporting requirements and after-the-fact investigations of incidents; and Does not alter the original content or ti...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-7.1",
                                                                       "label":  "AU-7(1)",
                                                                       "title":  "Automatic Processing",
                                                                       "description":  "Provide and implement the capability to process, sort, and search audit records for events of interest based on the following content: {{ insert: param, au-07.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-7.2",
                                                                       "label":  "AU-7(2)",
                                                                       "title":  "Automatic Sort and Search",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-8",
                                              "label":  "AU-8",
                                              "title":  "Time Stamps",
                                              "description":  "Use internal system clocks to generate time stamps for audit records; and Record time stamps for audit records that meet {{ insert: param, au-08_odp }} and that use Coordinated Universal Time, have a fixed local time offset from Coordinated Universal Time, ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-8.1",
                                                                       "label":  "AU-8(1)",
                                                                       "title":  "Synchronization with Authoritative Time Source",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-8.2",
                                                                       "label":  "AU-8(2)",
                                                                       "title":  "Secondary Authoritative Time Source",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-9",
                                              "label":  "AU-9",
                                              "title":  "Protection of Audit Information",
                                              "description":  "Protect audit information and audit logging tools from unauthorized access, modification, and deletion; and Alert {{ insert: param, au-09_odp }} upon detection of unauthorized access, modification, or deletion of audit information.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-9.1",
                                                                       "label":  "AU-9(1)",
                                                                       "title":  "Hardware Write-once Media",
                                                                       "description":  "Write audit trails to hardware-enforced, write-once media."
                                                                   },
                                                                   {
                                                                       "id":  "au-9.2",
                                                                       "label":  "AU-9(2)",
                                                                       "title":  "Store on Separate Physical Systems or Components",
                                                                       "description":  "Store audit records {{ insert: param, au-09.02_odp }} in a repository that is part of a physically different system or system component than the system or component being audited."
                                                                   },
                                                                   {
                                                                       "id":  "au-9.3",
                                                                       "label":  "AU-9(3)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  "Implement cryptographic mechanisms to protect the integrity of audit information and audit tools."
                                                                   },
                                                                   {
                                                                       "id":  "au-9.4",
                                                                       "label":  "AU-9(4)",
                                                                       "title":  "Access by Subset of Privileged Users",
                                                                       "description":  "Authorize access to management of audit logging functionality to only {{ insert: param, au-09.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-9.5",
                                                                       "label":  "AU-9(5)",
                                                                       "title":  "Dual Authorization",
                                                                       "description":  "Enforce dual authorization for {{ insert: param, au-09.05_odp.01 }} of {{ insert: param, au-09.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-9.6",
                                                                       "label":  "AU-9(6)",
                                                                       "title":  "Read-only Access",
                                                                       "description":  "Authorize read-only access to audit information to {{ insert: param, au-09.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-9.7",
                                                                       "label":  "AU-9(7)",
                                                                       "title":  "Store on Component with Different Operating System",
                                                                       "description":  "Store audit information on a component running a different operating system than the system or component being audited."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-10",
                                              "label":  "AU-10",
                                              "title":  "Non-repudiation",
                                              "description":  "Provide irrefutable evidence that an individual (or process acting on behalf of an individual) has performed {{ insert: param, au-10_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-10.1",
                                                                       "label":  "AU-10(1)",
                                                                       "title":  "Association of Identities",
                                                                       "description":  "Bind the identity of the information producer with the information to {{ insert: param, au-10.01_odp }} ; and Provide the means for authorized individuals to determine the identity of the producer of the information."
                                                                   },
                                                                   {
                                                                       "id":  "au-10.2",
                                                                       "label":  "AU-10(2)",
                                                                       "title":  "Validate Binding of Information Producer Identity",
                                                                       "description":  "Validate the binding of the information producer identity to the information at {{ insert: param, au-10.02_odp.01 }} ; and Perform {{ insert: param, au-10.02_odp.02 }} in the event of a validation error."
                                                                   },
                                                                   {
                                                                       "id":  "au-10.3",
                                                                       "label":  "AU-10(3)",
                                                                       "title":  "Chain of Custody",
                                                                       "description":  "Maintain reviewer or releaser credentials within the established chain of custody for information reviewed or released."
                                                                   },
                                                                   {
                                                                       "id":  "au-10.4",
                                                                       "label":  "AU-10(4)",
                                                                       "title":  "Validate Binding of Information Reviewer Identity",
                                                                       "description":  "Validate the binding of the information reviewer identity to the information at the transfer or release points prior to release or transfer between {{ insert: param, au-10.04_odp.01 }} ; and Perform {{ insert: param, au-10.04_odp.02 }} in the event of a val..."
                                                                   },
                                                                   {
                                                                       "id":  "au-10.5",
                                                                       "label":  "AU-10(5)",
                                                                       "title":  "Digital Signatures",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-11",
                                              "label":  "AU-11",
                                              "title":  "Audit Record Retention",
                                              "description":  "Retain audit records for {{ insert: param, au-11_odp }} to provide support for after-the-fact investigations of incidents and to meet regulatory and organizational information retention requirements.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-11.1",
                                                                       "label":  "AU-11(1)",
                                                                       "title":  "Long-term Retrieval Capability",
                                                                       "description":  "Employ {{ insert: param, au-11.01_odp }} to ensure that long-term audit records generated by the system can be retrieved."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-12",
                                              "label":  "AU-12",
                                              "title":  "Audit Record Generation",
                                              "description":  "Provide audit record generation capability for the event types the system is capable of auditing as defined in [AU-2a](#au-2_smt.a) on {{ insert: param, au-12_odp.01 }}; Allow {{ insert: param, au-12_odp.02 }} to select the event types that are to be logged...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-12.1",
                                                                       "label":  "AU-12(1)",
                                                                       "title":  "System-wide and Time-correlated Audit Trail",
                                                                       "description":  "Compile audit records from {{ insert: param, au-12.01_odp.01 }} into a system-wide (logical or physical) audit trail that is time-correlated to within {{ insert: param, au-12.01_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-12.2",
                                                                       "label":  "AU-12(2)",
                                                                       "title":  "Standardized Formats",
                                                                       "description":  "Produce a system-wide (logical or physical) audit trail composed of audit records in a standardized format."
                                                                   },
                                                                   {
                                                                       "id":  "au-12.3",
                                                                       "label":  "AU-12(3)",
                                                                       "title":  "Changes by Authorized Individuals",
                                                                       "description":  "Provide and implement the capability for {{ insert: param, au-12.03_odp.01 }} to change the logging to be performed on {{ insert: param, au-12.03_odp.02 }} based on {{ insert: param, au-12.03_odp.03 }} within {{ insert: param, au-12.03_odp.04 }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-12.4",
                                                                       "label":  "AU-12(4)",
                                                                       "title":  "Query Parameter Audits of Personally Identifiable Information",
                                                                       "description":  "Provide and implement the capability for auditing the parameters of user query events for data sets containing personally identifiable information."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-13",
                                              "label":  "AU-13",
                                              "title":  "Monitoring for Information Disclosure",
                                              "description":  "Monitor {{ insert: param, au-13_odp.01 }} {{ insert: param, au-13_odp.02 }} for evidence of unauthorized disclosure of organizational information; and If an information disclosure is discovered:",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-13.1",
                                                                       "label":  "AU-13(1)",
                                                                       "title":  "Use of Automated Tools",
                                                                       "description":  "Monitor open-source information and information sites using {{ insert: param, au-13.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-13.2",
                                                                       "label":  "AU-13(2)",
                                                                       "title":  "Review of Monitored Sites",
                                                                       "description":  "Review the list of open-source information sites being monitored {{ insert: param, au-13.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-13.3",
                                                                       "label":  "AU-13(3)",
                                                                       "title":  "Unauthorized Replication of Information",
                                                                       "description":  "Employ discovery techniques, processes, and tools to determine if external entities are replicating organizational information in an unauthorized manner."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-14",
                                              "label":  "AU-14",
                                              "title":  "Session Audit",
                                              "description":  "Provide and implement the capability for {{ insert: param, au-14_odp.01 }} to {{ insert: param, au-14_odp.02 }} the content of a user session under {{ insert: param, au-14_odp.03 }} ; and Develop, integrate, and use session auditing activities in consultati...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-14.1",
                                                                       "label":  "AU-14(1)",
                                                                       "title":  "System Start-up",
                                                                       "description":  "Initiate session audits automatically at system start-up."
                                                                   },
                                                                   {
                                                                       "id":  "au-14.2",
                                                                       "label":  "AU-14(2)",
                                                                       "title":  "Capture and Record Content",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "au-14.3",
                                                                       "label":  "AU-14(3)",
                                                                       "title":  "Remote Viewing and Listening",
                                                                       "description":  "Provide and implement the capability for authorized users to remotely view and hear content related to an established user session in real time."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "au-15",
                                              "label":  "AU-15",
                                              "title":  "Alternate Audit Logging Capability",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "au-16",
                                              "label":  "AU-16",
                                              "title":  "Cross-organizational Audit Logging",
                                              "description":  "Employ {{ insert: param, au-16_odp.01 }} for coordinating {{ insert: param, au-16_odp.02 }} among external organizations when audit information is transmitted across organizational boundaries.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "au-16.1",
                                                                       "label":  "AU-16(1)",
                                                                       "title":  "Identity Preservation",
                                                                       "description":  "Preserve the identity of individuals in cross-organizational audit trails."
                                                                   },
                                                                   {
                                                                       "id":  "au-16.2",
                                                                       "label":  "AU-16(2)",
                                                                       "title":  "Sharing of Audit Information",
                                                                       "description":  "Provide cross-organizational audit information to {{ insert: param, au-16.02_odp.01 }} based on {{ insert: param, au-16.02_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "au-16.3",
                                                                       "label":  "AU-16(3)",
                                                                       "title":  "Disassociability",
                                                                       "description":  "Implement {{ insert: param, au-16.03_odp }} to disassociate individuals from audit information transmitted across organizational boundaries."
                                                                   }
                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "ca",
                         "label":  "CA",
                         "title":  "Assessment, Authorization, and Monitoring",
                         "controls":  [
                                          {
                                              "id":  "ca-1",
                                              "label":  "CA-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ca-1_prm_1 }}: Designate an {{ insert: param, ca-01_odp.04 }} to manage the development, documentation, and dissemination of the assessment, authorization, and monitoring policy and procedures; and Rev...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ca-2",
                                              "label":  "CA-2",
                                              "title":  "Control Assessments",
                                              "description":  "Select the appropriate assessor or assessment team for the type of assessment to be conducted; Develop a control assessment plan that describes the scope of the assessment including: Ensure the control assessment plan is reviewed and approved by the authori...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-2.1",
                                                                       "label":  "CA-2(1)",
                                                                       "title":  "Independent Assessors",
                                                                       "description":  "Employ independent assessors or assessment teams to conduct control assessments."
                                                                   },
                                                                   {
                                                                       "id":  "ca-2.2",
                                                                       "label":  "CA-2(2)",
                                                                       "title":  "Specialized Assessments",
                                                                       "description":  "Include as part of control assessments, {{ insert: param, ca-02.02_odp.01 }}, {{ insert: param, ca-02.02_odp.02 }}, {{ insert: param, ca-02.02_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ca-2.3",
                                                                       "label":  "CA-2(3)",
                                                                       "title":  "Leveraging Results from External Organizations",
                                                                       "description":  "Leverage the results of control assessments performed by {{ insert: param, ca-02.03_odp.01 }} on {{ insert: param, ca-02.03_odp.02 }} when the assessment meets {{ insert: param, ca-02.03_odp.03 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ca-3",
                                              "label":  "CA-3",
                                              "title":  "Information Exchange",
                                              "description":  "Approve and manage the exchange of information between the system and other systems using {{ insert: param, ca-03_odp.01 }}; Document, as part of each exchange agreement, the interface characteristics, security and privacy requirements, controls, and respon...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-3.1",
                                                                       "label":  "CA-3(1)",
                                                                       "title":  "Unclassified National Security System Connections",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ca-3.2",
                                                                       "label":  "CA-3(2)",
                                                                       "title":  "Classified National Security System Connections",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ca-3.3",
                                                                       "label":  "CA-3(3)",
                                                                       "title":  "Unclassified Non-national Security System Connections",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ca-3.4",
                                                                       "label":  "CA-3(4)",
                                                                       "title":  "Connections to Public Networks",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ca-3.5",
                                                                       "label":  "CA-3(5)",
                                                                       "title":  "Restrictions on External System Connections",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ca-3.6",
                                                                       "label":  "CA-3(6)",
                                                                       "title":  "Transfer Authorizations",
                                                                       "description":  "Verify that individuals or systems transferring data between interconnecting systems have the requisite authorizations (i.e., write permissions or privileges) prior to accepting such data."
                                                                   },
                                                                   {
                                                                       "id":  "ca-3.7",
                                                                       "label":  "CA-3(7)",
                                                                       "title":  "Transitive Information Exchanges",
                                                                       "description":  "Identify transitive (downstream) information exchanges with other systems through the systems identified in [CA-3a](#ca-3_smt.a) ; and Take measures to ensure that transitive (downstream) information exchanges cease when the controls on identified transitiv..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ca-4",
                                              "label":  "CA-4",
                                              "title":  "Security Certification",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ca-5",
                                              "label":  "CA-5",
                                              "title":  "Plan of Action and Milestones",
                                              "description":  "Develop a plan of action and milestones for the system to document the planned remediation actions of the organization to correct weaknesses or deficiencies noted during the assessment of the controls and to reduce or eliminate known vulnerabilities in the ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-5.1",
                                                                       "label":  "CA-5(1)",
                                                                       "title":  "Automation Support for Accuracy and Currency",
                                                                       "description":  "Ensure the accuracy, currency, and availability of the plan of action and milestones for the system using {{ insert: param, ca-05.01_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ca-6",
                                              "label":  "CA-6",
                                              "title":  "Authorization",
                                              "description":  "Assign a senior official as the authorizing official for the system; Assign a senior official as the authorizing official for common controls available for inheritance by organizational systems; Ensure that the authorizing official for the system, before co...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-6.1",
                                                                       "label":  "CA-6(1)",
                                                                       "title":  "Joint Authorization â€” Intra-organization",
                                                                       "description":  "Employ a joint authorization process for the system that includes multiple authorizing officials from the same organization conducting the authorization."
                                                                   },
                                                                   {
                                                                       "id":  "ca-6.2",
                                                                       "label":  "CA-6(2)",
                                                                       "title":  "Joint Authorization â€” Inter-organization",
                                                                       "description":  "Employ a joint authorization process for the system that includes multiple authorizing officials with at least one authorizing official from an organization external to the organization conducting the authorization."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ca-7",
                                              "label":  "CA-7",
                                              "title":  "Continuous Monitoring",
                                              "description":  "Develop a system-level continuous monitoring strategy and implement continuous monitoring in accordance with the organization-level continuous monitoring strategy that includes: Establishing the following system-level metrics to be monitored: {{ insert: par...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-7.1",
                                                                       "label":  "CA-7(1)",
                                                                       "title":  "Independent Assessment",
                                                                       "description":  "Employ independent assessors or assessment teams to monitor the controls in the system on an ongoing basis."
                                                                   },
                                                                   {
                                                                       "id":  "ca-7.2",
                                                                       "label":  "CA-7(2)",
                                                                       "title":  "Types of Assessments",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ca-7.3",
                                                                       "label":  "CA-7(3)",
                                                                       "title":  "Trend Analyses",
                                                                       "description":  "Employ trend analyses to determine if control implementations, the frequency of continuous monitoring activities, and the types of activities used in the continuous monitoring process need to be modified based on empirical data."
                                                                   },
                                                                   {
                                                                       "id":  "ca-7.4",
                                                                       "label":  "CA-7(4)",
                                                                       "title":  "Risk Monitoring",
                                                                       "description":  "Ensure risk monitoring is an integral part of the continuous monitoring strategy that includes the following: Effectiveness monitoring; Compliance monitoring; and Change monitoring."
                                                                   },
                                                                   {
                                                                       "id":  "ca-7.5",
                                                                       "label":  "CA-7(5)",
                                                                       "title":  "Consistency Analysis",
                                                                       "description":  "Employ the following actions to validate that policies are established and implemented controls are operating in a consistent manner: {{ insert: param, ca-7.5_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ca-7.6",
                                                                       "label":  "CA-7(6)",
                                                                       "title":  "Automation Support for Monitoring",
                                                                       "description":  "Ensure the accuracy, currency, and availability of monitoring results for the system using {{ insert: param, ca-07.06_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ca-8",
                                              "label":  "CA-8",
                                              "title":  "Penetration Testing",
                                              "description":  "Conduct penetration testing {{ insert: param, ca-08_odp.01 }} on {{ insert: param, ca-08_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-8.1",
                                                                       "label":  "CA-8(1)",
                                                                       "title":  "Independent Penetration Testing Agent or Team",
                                                                       "description":  "Employ an independent penetration testing agent or team to perform penetration testing on the system or system components."
                                                                   },
                                                                   {
                                                                       "id":  "ca-8.2",
                                                                       "label":  "CA-8(2)",
                                                                       "title":  "Red Team Exercises",
                                                                       "description":  "Employ the following red-team exercises to simulate attempts by adversaries to compromise organizational systems in accordance with applicable rules of engagement: {{ insert: param, ca-08.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ca-8.3",
                                                                       "label":  "CA-8(3)",
                                                                       "title":  "Facility Penetration Testing",
                                                                       "description":  "Employ a penetration testing process that includes {{ insert: param, ca-08.03_odp.01 }} {{ insert: param, ca-08.03_odp.02 }} attempts to bypass or circumvent controls associated with physical access points to the facility."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ca-9",
                                              "label":  "CA-9",
                                              "title":  "Internal System Connections",
                                              "description":  "Authorize internal connections of {{ insert: param, ca-09_odp.01 }} to the system; Document, for each internal connection, the interface characteristics, security and privacy requirements, and the nature of the information communicated; Terminate internal s...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ca-9.1",
                                                                       "label":  "CA-9(1)",
                                                                       "title":  "Compliance Checks",
                                                                       "description":  "Perform security and privacy compliance checks on constituent system components prior to the establishment of the internal connection."
                                                                   }
                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "cm",
                         "label":  "CM",
                         "title":  "Configuration Management",
                         "controls":  [
                                          {
                                              "id":  "cm-1",
                                              "label":  "CM-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, cm-1_prm_1 }}: Designate an {{ insert: param, cm-01_odp.04 }} to manage the development, documentation, and dissemination of the configuration management policy and procedures; and Review and update th...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "cm-2",
                                              "label":  "CM-2",
                                              "title":  "Baseline Configuration",
                                              "description":  "Develop, document, and maintain under configuration control, a current baseline configuration of the system; and Review and update the baseline configuration of the system:",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-2.1",
                                                                       "label":  "CM-2(1)",
                                                                       "title":  "Reviews and Updates",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-2.2",
                                                                       "label":  "CM-2(2)",
                                                                       "title":  "Automation Support for Accuracy and Currency",
                                                                       "description":  "Maintain the currency, completeness, accuracy, and availability of the baseline configuration of the system using {{ insert: param, cm-02.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-2.3",
                                                                       "label":  "CM-2(3)",
                                                                       "title":  "Retention of Previous Configurations",
                                                                       "description":  "Retain {{ insert: param, cm-02.03_odp }} of previous versions of baseline configurations of the system to support rollback."
                                                                   },
                                                                   {
                                                                       "id":  "cm-2.4",
                                                                       "label":  "CM-2(4)",
                                                                       "title":  "Unauthorized Software",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-2.5",
                                                                       "label":  "CM-2(5)",
                                                                       "title":  "Authorized Software",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-2.6",
                                                                       "label":  "CM-2(6)",
                                                                       "title":  "Development and Test Environments",
                                                                       "description":  "Maintain a baseline configuration for system development and test environments that is managed separately from the operational baseline configuration."
                                                                   },
                                                                   {
                                                                       "id":  "cm-2.7",
                                                                       "label":  "CM-2(7)",
                                                                       "title":  "Configure Systems and Components for High-risk Areas",
                                                                       "description":  "Issue {{ insert: param, cm-02.07_odp.01 }} with {{ insert: param, cm-02.07_odp.02 }} to individuals traveling to locations that the organization deems to be of significant risk; and Apply the following controls to the systems or components when the individu..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-3",
                                              "label":  "CM-3",
                                              "title":  "Configuration Change Control",
                                              "description":  "Determine and document the types of changes to the system that are configuration-controlled; Review proposed configuration-controlled changes to the system and approve or disapprove such changes with explicit consideration for security and privacy impact an...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-3.1",
                                                                       "label":  "CM-3(1)",
                                                                       "title":  "Automated Documentation, Notification, and Prohibition of Changes",
                                                                       "description":  "Use {{ insert: param, cm-03.01_odp.01 }} to: Document proposed changes to the system; Notify {{ insert: param, cm-03.01_odp.02 }} of proposed changes to the system and request change approval; Highlight proposed changes to the system that have not been appr..."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.2",
                                                                       "label":  "CM-3(2)",
                                                                       "title":  "Testing, Validation, and Documentation of Changes",
                                                                       "description":  "Test, validate, and document changes to the system before finalizing the implementation of the changes."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.3",
                                                                       "label":  "CM-3(3)",
                                                                       "title":  "Automated Change Implementation",
                                                                       "description":  "Implement changes to the current system baseline and deploy the updated baseline across the installed base using {{ insert: param, cm-03.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.4",
                                                                       "label":  "CM-3(4)",
                                                                       "title":  "Security and Privacy Representatives",
                                                                       "description":  "Require {{ insert: param, cm-3.4_prm_1 }} to be members of the {{ insert: param, cm-03.04_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.5",
                                                                       "label":  "CM-3(5)",
                                                                       "title":  "Automated Security Response",
                                                                       "description":  "Implement the following security responses automatically if baseline configurations are changed in an unauthorized manner: {{ insert: param, cm-03.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.6",
                                                                       "label":  "CM-3(6)",
                                                                       "title":  "Cryptography Management",
                                                                       "description":  "Ensure that cryptographic mechanisms used to provide the following controls are under configuration management: {{ insert: param, cm-03.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.7",
                                                                       "label":  "CM-3(7)",
                                                                       "title":  "Review System Changes",
                                                                       "description":  "Review changes to the system {{ insert: param, cm-03.07_odp.01 }} or when {{ insert: param, cm-03.07_odp.02 }} to determine whether unauthorized changes have occurred."
                                                                   },
                                                                   {
                                                                       "id":  "cm-3.8",
                                                                       "label":  "CM-3(8)",
                                                                       "title":  "Prevent or Restrict Configuration Changes",
                                                                       "description":  "Prevent or restrict changes to the configuration of the system under the following circumstances: {{ insert: param, cm-03.08_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-4",
                                              "label":  "CM-4",
                                              "title":  "Impact Analyses",
                                              "description":  "Analyze changes to the system to determine potential security and privacy impacts prior to change implementation.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-4.1",
                                                                       "label":  "CM-4(1)",
                                                                       "title":  "Separate Test Environments",
                                                                       "description":  "Analyze changes to the system in a separate test environment before implementation in an operational environment, looking for security and privacy impacts due to flaws, weaknesses, incompatibility, or intentional malice."
                                                                   },
                                                                   {
                                                                       "id":  "cm-4.2",
                                                                       "label":  "CM-4(2)",
                                                                       "title":  "Verification of Controls",
                                                                       "description":  "After system changes, verify that the impacted controls are implemented correctly, operating as intended, and producing the desired outcome with regard to meeting the security and privacy requirements for the system."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-5",
                                              "label":  "CM-5",
                                              "title":  "Access Restrictions for Change",
                                              "description":  "Define, document, approve, and enforce physical and logical access restrictions associated with changes to the system.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-5.1",
                                                                       "label":  "CM-5(1)",
                                                                       "title":  "Automated Access Enforcement and Audit Records",
                                                                       "description":  "Enforce access restrictions using {{ insert: param, cm-05.01_odp }} ; and Automatically generate audit records of the enforcement actions."
                                                                   },
                                                                   {
                                                                       "id":  "cm-5.2",
                                                                       "label":  "CM-5(2)",
                                                                       "title":  "Review System Changes",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-5.3",
                                                                       "label":  "CM-5(3)",
                                                                       "title":  "Signed Components",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-5.4",
                                                                       "label":  "CM-5(4)",
                                                                       "title":  "Dual Authorization",
                                                                       "description":  "Enforce dual authorization for implementing changes to {{ insert: param, cm-5.4_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-5.5",
                                                                       "label":  "CM-5(5)",
                                                                       "title":  "Privilege Limitation for Production and Operation",
                                                                       "description":  "Limit privileges to change system components and system-related information within a production or operational environment; and Review and reevaluate privileges {{ insert: param, cm-5.5_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-5.6",
                                                                       "label":  "CM-5(6)",
                                                                       "title":  "Limit Library Privileges",
                                                                       "description":  "Limit privileges to change software resident within software libraries."
                                                                   },
                                                                   {
                                                                       "id":  "cm-5.7",
                                                                       "label":  "CM-5(7)",
                                                                       "title":  "Automatic Implementation of Security Safeguards",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-6",
                                              "label":  "CM-6",
                                              "title":  "Configuration Settings",
                                              "description":  "Establish and document configuration settings for components employed within the system that reflect the most restrictive mode consistent with operational requirements using {{ insert: param, cm-06_odp.01 }}; Implement the configuration settings; Identify, ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-6.1",
                                                                       "label":  "CM-6(1)",
                                                                       "title":  "Automated Management, Application, and Verification",
                                                                       "description":  "Manage, apply, and verify configuration settings for {{ insert: param, cm-06.01_odp.01 }} using {{ insert: param, cm-6.1_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-6.2",
                                                                       "label":  "CM-6(2)",
                                                                       "title":  "Respond to Unauthorized Changes",
                                                                       "description":  "Take the following actions in response to unauthorized changes to {{ insert: param, cm-06.02_odp.02 }}: {{ insert: param, cm-06.02_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-6.3",
                                                                       "label":  "CM-6(3)",
                                                                       "title":  "Unauthorized Change Detection",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-6.4",
                                                                       "label":  "CM-6(4)",
                                                                       "title":  "Conformance Demonstration",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-7",
                                              "label":  "CM-7",
                                              "title":  "Least Functionality",
                                              "description":  "Configure the system to provide only {{ insert: param, cm-07_odp.01 }} ; and Prohibit or restrict the use of the following functions, ports, protocols, software, and/or services: {{ insert: param, cm-7_prm_2 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-7.1",
                                                                       "label":  "CM-7(1)",
                                                                       "title":  "Periodic Review",
                                                                       "description":  "Review the system {{ insert: param, cm-07.01_odp.01 }} to identify unnecessary and/or nonsecure functions, ports, protocols, software, and services; and Disable or remove {{ insert: param, cm-7.1_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.2",
                                                                       "label":  "CM-7(2)",
                                                                       "title":  "Prevent Program Execution",
                                                                       "description":  "Prevent program execution in accordance with {{ insert: param, cm-07.02_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.3",
                                                                       "label":  "CM-7(3)",
                                                                       "title":  "Registration Compliance",
                                                                       "description":  "Ensure compliance with {{ insert: param, cm-07.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.4",
                                                                       "label":  "CM-7(4)",
                                                                       "title":  "Unauthorized Software â€” Deny-by-exception",
                                                                       "description":  "Identify {{ insert: param, cm-07.04_odp.01 }}; Employ an allow-all, deny-by-exception policy to prohibit the execution of unauthorized software programs on the system; and Review and update the list of unauthorized software programs {{ insert: param, cm-07...."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.5",
                                                                       "label":  "CM-7(5)",
                                                                       "title":  "Authorized Software â€” Allow-by-exception",
                                                                       "description":  "Identify {{ insert: param, cm-07.05_odp.01 }}; Employ a deny-all, permit-by-exception policy to allow the execution of authorized software programs on the system; and Review and update the list of authorized software programs {{ insert: param, cm-07.05_odp...."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.6",
                                                                       "label":  "CM-7(6)",
                                                                       "title":  "Confined Environments with Limited Privileges",
                                                                       "description":  "Require that the following user-installed software execute in a confined physical or virtual machine environment with limited privileges: {{ insert: param, cm-07.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.7",
                                                                       "label":  "CM-7(7)",
                                                                       "title":  "Code Execution in Protected Environments",
                                                                       "description":  "Allow execution of binary or machine-executable code only in confined physical or virtual machine environments and with the explicit approval of {{ insert: param, cm-07.07_odp }} when such code is: Obtained from sources with limited or no warranty; and/or W..."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.8",
                                                                       "label":  "CM-7(8)",
                                                                       "title":  "Binary or Machine Executable Code",
                                                                       "description":  "Prohibit the use of binary or machine-executable code from sources with limited or no warranty or without the provision of source code; and Allow exceptions only for compelling mission or operational requirements and with the approval of the authorizing off..."
                                                                   },
                                                                   {
                                                                       "id":  "cm-7.9",
                                                                       "label":  "CM-7(9)",
                                                                       "title":  "Prohibiting The Use of Unauthorized Hardware",
                                                                       "description":  "Identify {{ insert: param, cm-07.09_odp.01 }}; Prohibit the use or connection of unauthorized hardware components; Review and update the list of authorized hardware components {{ insert: param, cm-07.09_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-8",
                                              "label":  "CM-8",
                                              "title":  "System Component Inventory",
                                              "description":  "Develop and document an inventory of system components that: Review and update the system component inventory {{ insert: param, cm-08_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-8.1",
                                                                       "label":  "CM-8(1)",
                                                                       "title":  "Updates During Installation and Removal",
                                                                       "description":  "Update the inventory of system components as part of component installations, removals, and system updates."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.2",
                                                                       "label":  "CM-8(2)",
                                                                       "title":  "Automated Maintenance",
                                                                       "description":  "Maintain the currency, completeness, accuracy, and availability of the inventory of system components using {{ insert: param, cm-8.2_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.3",
                                                                       "label":  "CM-8(3)",
                                                                       "title":  "Automated Unauthorized Component Detection",
                                                                       "description":  "Detect the presence of unauthorized hardware, software, and firmware components within the system using {{ insert: param, cm-8.3_prm_1 }} {{ insert: param, cm-08.03_odp.04 }} ; and Take the following actions when unauthorized components are detected: {{ ins..."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.4",
                                                                       "label":  "CM-8(4)",
                                                                       "title":  "Accountability Information",
                                                                       "description":  "Include in the system component inventory information, a means for identifying by {{ insert: param, cm-08.04_odp }} , individuals responsible and accountable for administering those components."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.5",
                                                                       "label":  "CM-8(5)",
                                                                       "title":  "No Duplicate Accounting of Components",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.6",
                                                                       "label":  "CM-8(6)",
                                                                       "title":  "Assessed Configurations and Approved Deviations",
                                                                       "description":  "Include assessed component configurations and any approved deviations to current deployed configurations in the system component inventory."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.7",
                                                                       "label":  "CM-8(7)",
                                                                       "title":  "Centralized Repository",
                                                                       "description":  "Provide a centralized repository for the inventory of system components."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.8",
                                                                       "label":  "CM-8(8)",
                                                                       "title":  "Automated Location Tracking",
                                                                       "description":  "Support the tracking of system components by geographic location using {{ insert: param, cm-08.08_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cm-8.9",
                                                                       "label":  "CM-8(9)",
                                                                       "title":  "Assignment of Components to Systems",
                                                                       "description":  "Assign system components to a system; and Receive an acknowledgement from {{ insert: param, cm-08.09_odp }} of this assignment."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-9",
                                              "label":  "CM-9",
                                              "title":  "Configuration Management Plan",
                                              "description":  "Develop, document, and implement a configuration management plan for the system that: Addresses roles, responsibilities, and configuration management processes and procedures; Establishes a process for identifying configuration items throughout the system d...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-9.1",
                                                                       "label":  "CM-9(1)",
                                                                       "title":  "Assignment of Responsibility",
                                                                       "description":  "Assign responsibility for developing the configuration management process to organizational personnel that are not directly involved in system development."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-10",
                                              "label":  "CM-10",
                                              "title":  "Software Usage Restrictions",
                                              "description":  "Use software and associated documentation in accordance with contract agreements and copyright laws; Track the use of software and associated documentation protected by quantity licenses to control copying and distribution; and Control and document the use ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-10.1",
                                                                       "label":  "CM-10(1)",
                                                                       "title":  "Open-source Software",
                                                                       "description":  "Establish the following restrictions on the use of open-source software: {{ insert: param, cm-10.01_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-11",
                                              "label":  "CM-11",
                                              "title":  "User-installed Software",
                                              "description":  "Establish {{ insert: param, cm-11_odp.01 }} governing the installation of software by users; Enforce software installation policies through the following methods: {{ insert: param, cm-11_odp.02 }} ; and Monitor policy compliance {{ insert: param, cm-11_odp....",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-11.1",
                                                                       "label":  "CM-11(1)",
                                                                       "title":  "Alerts for Unauthorized Installations",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cm-11.2",
                                                                       "label":  "CM-11(2)",
                                                                       "title":  "Software Installation with Privileged Status",
                                                                       "description":  "Allow user installation of software only with explicit privileged status."
                                                                   },
                                                                   {
                                                                       "id":  "cm-11.3",
                                                                       "label":  "CM-11(3)",
                                                                       "title":  "Automated Enforcement and Monitoring",
                                                                       "description":  "Enforce and monitor compliance with software installation policies using {{ insert: param, cm-11.3_prm_1 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-12",
                                              "label":  "CM-12",
                                              "title":  "Information Location",
                                              "description":  "Identify and document the location of {{ insert: param, cm-12_odp }} and the specific system components on which the information is processed and stored; Identify and document the users who have access to the system and system components where the informati...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cm-12.1",
                                                                       "label":  "CM-12(1)",
                                                                       "title":  "Automated Tools to Support Information Location",
                                                                       "description":  "Use automated tools to identify {{ insert: param, cm-12.01_odp.01 }} on {{ insert: param, cm-12.01_odp.02 }} to ensure controls are in place to protect organizational information and individual privacy."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cm-13",
                                              "label":  "CM-13",
                                              "title":  "Data Action Mapping",
                                              "description":  "Develop and document a map of system data actions.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "cm-14",
                                              "label":  "CM-14",
                                              "title":  "Signed Components",
                                              "description":  "Prevent the installation of {{ insert: param, cm-14_prm_1 }} without verification that the component has been digitally signed using a certificate that is recognized and approved by the organization.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "cp",
                         "label":  "CP",
                         "title":  "Contingency Planning",
                         "controls":  [
                                          {
                                              "id":  "cp-1",
                                              "label":  "CP-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, cp-1_prm_1 }}: Designate an {{ insert: param, cp-01_odp.04 }} to manage the development, documentation, and dissemination of the contingency planning policy and procedures; and Review and update the cu...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "cp-2",
                                              "label":  "CP-2",
                                              "title":  "Contingency Plan",
                                              "description":  "Develop a contingency plan for the system that: Distribute copies of the contingency plan to {{ insert: param, cp-2_prm_2 }}; Coordinate contingency planning activities with incident handling activities; Review the contingency plan for the system {{ insert:...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-2.1",
                                                                       "label":  "CP-2(1)",
                                                                       "title":  "Coordinate with Related Plans",
                                                                       "description":  "Coordinate contingency plan development with organizational elements responsible for related plans."
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.2",
                                                                       "label":  "CP-2(2)",
                                                                       "title":  "Capacity Planning",
                                                                       "description":  "Conduct capacity planning so that necessary capacity for information processing, telecommunications, and environmental support exists during contingency operations."
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.3",
                                                                       "label":  "CP-2(3)",
                                                                       "title":  "Resume Mission and Business Functions",
                                                                       "description":  "Plan for the resumption of {{ insert: param, cp-02.03_odp.01 }} mission and business functions within {{ insert: param, cp-02.03_odp.02 }} of contingency plan activation."
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.4",
                                                                       "label":  "CP-2(4)",
                                                                       "title":  "Resume All Mission and Business Functions",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.5",
                                                                       "label":  "CP-2(5)",
                                                                       "title":  "Continue Mission and Business Functions",
                                                                       "description":  "Plan for the continuance of {{ insert: param, cp-02.05_odp }} mission and business functions with minimal or no loss of operational continuity and sustains that continuity until full system restoration at primary processing and/or storage sites."
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.6",
                                                                       "label":  "CP-2(6)",
                                                                       "title":  "Alternate Processing and Storage Sites",
                                                                       "description":  "Plan for the transfer of {{ insert: param, cp-02.06_odp }} mission and business functions to alternate processing and/or storage sites with minimal or no loss of operational continuity and sustain that continuity through system restoration to primary proces..."
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.7",
                                                                       "label":  "CP-2(7)",
                                                                       "title":  "Coordinate with External Service Providers",
                                                                       "description":  "Coordinate the contingency plan with the contingency plans of external service providers to ensure that contingency requirements can be satisfied."
                                                                   },
                                                                   {
                                                                       "id":  "cp-2.8",
                                                                       "label":  "CP-2(8)",
                                                                       "title":  "Identify Critical Assets",
                                                                       "description":  "Identify critical system assets supporting {{ insert: param, cp-02.08_odp }} mission and business functions."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-3",
                                              "label":  "CP-3",
                                              "title":  "Contingency Training",
                                              "description":  "Provide contingency training to system users consistent with assigned roles and responsibilities: Review and update contingency training content {{ insert: param, cp-03_odp.03 }} and following {{ insert: param, cp-03_odp.04 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-3.1",
                                                                       "label":  "CP-3(1)",
                                                                       "title":  "Simulated Events",
                                                                       "description":  "Incorporate simulated events into contingency training to facilitate effective response by personnel in crisis situations."
                                                                   },
                                                                   {
                                                                       "id":  "cp-3.2",
                                                                       "label":  "CP-3(2)",
                                                                       "title":  "Mechanisms Used in Training Environments",
                                                                       "description":  "Employ mechanisms used in operations to provide a more thorough and realistic contingency training environment."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-4",
                                              "label":  "CP-4",
                                              "title":  "Contingency Plan Testing",
                                              "description":  "Test the contingency plan for the system {{ insert: param, cp-04_odp.01 }} using the following tests to determine the effectiveness of the plan and the readiness to execute the plan: {{ insert: param, cp-4_prm_2 }}. Review the contingency plan test results;...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-4.1",
                                                                       "label":  "CP-4(1)",
                                                                       "title":  "Coordinate with Related Plans",
                                                                       "description":  "Coordinate contingency plan testing with organizational elements responsible for related plans."
                                                                   },
                                                                   {
                                                                       "id":  "cp-4.2",
                                                                       "label":  "CP-4(2)",
                                                                       "title":  "Alternate Processing Site",
                                                                       "description":  "Test the contingency plan at the alternate processing site: To familiarize contingency personnel with the facility and available resources; and To evaluate the capabilities of the alternate processing site to support contingency operations."
                                                                   },
                                                                   {
                                                                       "id":  "cp-4.3",
                                                                       "label":  "CP-4(3)",
                                                                       "title":  "Automated Testing",
                                                                       "description":  "Test the contingency plan using {{ insert: param, cp-04.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cp-4.4",
                                                                       "label":  "CP-4(4)",
                                                                       "title":  "Full Recovery and Reconstitution",
                                                                       "description":  "Include a full recovery and reconstitution of the system to a known state as part of contingency plan testing."
                                                                   },
                                                                   {
                                                                       "id":  "cp-4.5",
                                                                       "label":  "CP-4(5)",
                                                                       "title":  "Self-challenge",
                                                                       "description":  "Employ {{ insert: param, cp-04.05_odp.01 }} to {{ insert: param, cp-04.05_odp.02 }} to disrupt and adversely affect the system or system component."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-5",
                                              "label":  "CP-5",
                                              "title":  "Contingency Plan Update",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "cp-6",
                                              "label":  "CP-6",
                                              "title":  "Alternate Storage Site",
                                              "description":  "Establish an alternate storage site, including necessary agreements to permit the storage and retrieval of system backup information; and Ensure that the alternate storage site provides controls equivalent to that of the primary site.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-6.1",
                                                                       "label":  "CP-6(1)",
                                                                       "title":  "Separation from Primary Site",
                                                                       "description":  "Identify an alternate storage site that is sufficiently separated from the primary storage site to reduce susceptibility to the same threats."
                                                                   },
                                                                   {
                                                                       "id":  "cp-6.2",
                                                                       "label":  "CP-6(2)",
                                                                       "title":  "Recovery Time and Recovery Point Objectives",
                                                                       "description":  "Configure the alternate storage site to facilitate recovery operations in accordance with recovery time and recovery point objectives."
                                                                   },
                                                                   {
                                                                       "id":  "cp-6.3",
                                                                       "label":  "CP-6(3)",
                                                                       "title":  "Accessibility",
                                                                       "description":  "Identify potential accessibility problems to the alternate storage site in the event of an area-wide disruption or disaster and outline explicit mitigation actions."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-7",
                                              "label":  "CP-7",
                                              "title":  "Alternate Processing Site",
                                              "description":  "Establish an alternate processing site, including necessary agreements to permit the transfer and resumption of {{ insert: param, cp-07_odp.01 }} for essential mission and business functions within {{ insert: param, cp-07_odp.02 }} when the primary processi...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-7.1",
                                                                       "label":  "CP-7(1)",
                                                                       "title":  "Separation from Primary Site",
                                                                       "description":  "Identify an alternate processing site that is sufficiently separated from the primary processing site to reduce susceptibility to the same threats."
                                                                   },
                                                                   {
                                                                       "id":  "cp-7.2",
                                                                       "label":  "CP-7(2)",
                                                                       "title":  "Accessibility",
                                                                       "description":  "Identify potential accessibility problems to alternate processing sites in the event of an area-wide disruption or disaster and outlines explicit mitigation actions."
                                                                   },
                                                                   {
                                                                       "id":  "cp-7.3",
                                                                       "label":  "CP-7(3)",
                                                                       "title":  "Priority of Service",
                                                                       "description":  "Develop alternate processing site agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives)."
                                                                   },
                                                                   {
                                                                       "id":  "cp-7.4",
                                                                       "label":  "CP-7(4)",
                                                                       "title":  "Preparation for Use",
                                                                       "description":  "Prepare the alternate processing site so that the site can serve as the operational site supporting essential mission and business functions."
                                                                   },
                                                                   {
                                                                       "id":  "cp-7.5",
                                                                       "label":  "CP-7(5)",
                                                                       "title":  "Equivalent Information Security Safeguards",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cp-7.6",
                                                                       "label":  "CP-7(6)",
                                                                       "title":  "Inability to Return to Primary Site",
                                                                       "description":  "Plan and prepare for circumstances that preclude returning to the primary processing site."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-8",
                                              "label":  "CP-8",
                                              "title":  "Telecommunications Services",
                                              "description":  "Establish alternate telecommunications services, including necessary agreements to permit the resumption of {{ insert: param, cp-08_odp.01 }} for essential mission and business functions within {{ insert: param, cp-08_odp.02 }} when the primary telecommunic...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-8.1",
                                                                       "label":  "CP-8(1)",
                                                                       "title":  "Priority of Service Provisions",
                                                                       "description":  "Develop primary and alternate telecommunications service agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives); and Request Telecommunications Service Priority for all teleco..."
                                                                   },
                                                                   {
                                                                       "id":  "cp-8.2",
                                                                       "label":  "CP-8(2)",
                                                                       "title":  "Single Points of Failure",
                                                                       "description":  "Obtain alternate telecommunications services to reduce the likelihood of sharing a single point of failure with primary telecommunications services."
                                                                   },
                                                                   {
                                                                       "id":  "cp-8.3",
                                                                       "label":  "CP-8(3)",
                                                                       "title":  "Separation of Primary and Alternate Providers",
                                                                       "description":  "Obtain alternate telecommunications services from providers that are separated from primary service providers to reduce susceptibility to the same threats."
                                                                   },
                                                                   {
                                                                       "id":  "cp-8.4",
                                                                       "label":  "CP-8(4)",
                                                                       "title":  "Provider Contingency Plan",
                                                                       "description":  "Require primary and alternate telecommunications service providers to have contingency plans; Review provider contingency plans to ensure that the plans meet organizational contingency requirements; and Obtain evidence of contingency testing and training by..."
                                                                   },
                                                                   {
                                                                       "id":  "cp-8.5",
                                                                       "label":  "CP-8(5)",
                                                                       "title":  "Alternate Telecommunication Service Testing",
                                                                       "description":  "Test alternate telecommunication services {{ insert: param, cp-08.05_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-9",
                                              "label":  "CP-9",
                                              "title":  "System Backup",
                                              "description":  "Conduct backups of user-level information contained in {{ insert: param, cp-09_odp.01 }} {{ insert: param, cp-09_odp.02 }}; Conduct backups of system-level information contained in the system {{ insert: param, cp-09_odp.03 }}; Conduct backups of system docu...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-9.1",
                                                                       "label":  "CP-9(1)",
                                                                       "title":  "Testing for Reliability and Integrity",
                                                                       "description":  "Test backup information {{ insert: param, cp-9.1_prm_1 }} to verify media reliability and information integrity."
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.2",
                                                                       "label":  "CP-9(2)",
                                                                       "title":  "Test Restoration Using Sampling",
                                                                       "description":  "Use a sample of backup information in the restoration of selected system functions as part of contingency plan testing."
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.3",
                                                                       "label":  "CP-9(3)",
                                                                       "title":  "Separate Storage for Critical Information",
                                                                       "description":  "Store backup copies of {{ insert: param, cp-09.03_odp }} in a separate facility or in a fire rated container that is not collocated with the operational system."
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.4",
                                                                       "label":  "CP-9(4)",
                                                                       "title":  "Protection from Unauthorized Modification",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.5",
                                                                       "label":  "CP-9(5)",
                                                                       "title":  "Transfer to Alternate Storage Site",
                                                                       "description":  "Transfer system backup information to the alternate storage site {{ insert: param, cp-9.5_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.6",
                                                                       "label":  "CP-9(6)",
                                                                       "title":  "Redundant Secondary System",
                                                                       "description":  "Conduct system backup by maintaining a redundant secondary system that is not collocated with the primary system and that can be activated without loss of information or disruption to operations."
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.7",
                                                                       "label":  "CP-9(7)",
                                                                       "title":  "Dual Authorization for Deletion or Destruction",
                                                                       "description":  "Enforce dual authorization for the deletion or destruction of {{ insert: param, cp-09.07_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "cp-9.8",
                                                                       "label":  "CP-9(8)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  "Implement cryptographic mechanisms to prevent unauthorized disclosure and modification of {{ insert: param, cp-09.08_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-10",
                                              "label":  "CP-10",
                                              "title":  "System Recovery and Reconstitution",
                                              "description":  "Provide for the recovery and reconstitution of the system to a known state within {{ insert: param, cp-10_prm_1 }} after a disruption, compromise, or failure.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "cp-10.1",
                                                                       "label":  "CP-10(1)",
                                                                       "title":  "Contingency Plan Testing",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cp-10.2",
                                                                       "label":  "CP-10(2)",
                                                                       "title":  "Transaction Recovery",
                                                                       "description":  "Implement transaction recovery for systems that are transaction-based."
                                                                   },
                                                                   {
                                                                       "id":  "cp-10.3",
                                                                       "label":  "CP-10(3)",
                                                                       "title":  "Compensating Security Controls",
                                                                       "description":  "Addressed through tailoring."
                                                                   },
                                                                   {
                                                                       "id":  "cp-10.4",
                                                                       "label":  "CP-10(4)",
                                                                       "title":  "Restore Within Time Period",
                                                                       "description":  "Provide the capability to restore system components within {{ insert: param, cp-10.04_odp }} from configuration-controlled and integrity-protected information representing a known, operational state for the components."
                                                                   },
                                                                   {
                                                                       "id":  "cp-10.5",
                                                                       "label":  "CP-10(5)",
                                                                       "title":  "Failover Capability",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "cp-10.6",
                                                                       "label":  "CP-10(6)",
                                                                       "title":  "Component Protection",
                                                                       "description":  "Protect system components used for recovery and reconstitution."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "cp-11",
                                              "label":  "CP-11",
                                              "title":  "Alternate Communications Protocols",
                                              "description":  "Provide the capability to employ {{ insert: param, cp-11_odp }} in support of maintaining continuity of operations.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "cp-12",
                                              "label":  "CP-12",
                                              "title":  "Safe Mode",
                                              "description":  "When {{ insert: param, cp-12_odp.02 }} are detected, enter a safe mode of operation with {{ insert: param, cp-12_odp.01 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "cp-13",
                                              "label":  "CP-13",
                                              "title":  "Alternative Security Mechanisms",
                                              "description":  "Employ {{ insert: param, cp-13_odp.01 }} for satisfying {{ insert: param, cp-13_odp.02 }} when the primary means of implementing the security function is unavailable or compromised.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "ia",
                         "label":  "IA",
                         "title":  "Identification and Authentication",
                         "controls":  [
                                          {
                                              "id":  "ia-1",
                                              "label":  "IA-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ia-1_prm_1 }}: Designate an {{ insert: param, ia-01_odp.04 }} to manage the development, documentation, and dissemination of the identification and authentication policy and procedures; and Review and ...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ia-2",
                                              "label":  "IA-2",
                                              "title":  "Identification and Authentication (Organizational Users)",
                                              "description":  "Uniquely identify and authenticate organizational users and associate that unique identification with processes acting on behalf of those users.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-2.1",
                                                                       "label":  "IA-2(1)",
                                                                       "title":  "Multi-factor Authentication to Privileged Accounts",
                                                                       "description":  "Implement multi-factor authentication for access to privileged accounts."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.2",
                                                                       "label":  "IA-2(2)",
                                                                       "title":  "Multi-factor Authentication to Non-privileged Accounts",
                                                                       "description":  "Implement multi-factor authentication for access to non-privileged accounts."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.3",
                                                                       "label":  "IA-2(3)",
                                                                       "title":  "Local Access to Privileged Accounts",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.4",
                                                                       "label":  "IA-2(4)",
                                                                       "title":  "Local Access to Non-privileged Accounts",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.5",
                                                                       "label":  "IA-2(5)",
                                                                       "title":  "Individual Authentication with Group Authentication",
                                                                       "description":  "When shared accounts or authenticators are employed, require users to be individually authenticated before granting access to the shared accounts or resources."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.6",
                                                                       "label":  "IA-2(6)",
                                                                       "title":  "Access to Accounts â€”separate Device",
                                                                       "description":  "Implement multi-factor authentication for {{ insert: param, ia-02.06_odp.01 }} access to {{ insert: param, ia-02.06_odp.02 }} such that: One of the factors is provided by a device separate from the system gaining access; and The device meets {{ insert: para..."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.7",
                                                                       "label":  "IA-2(7)",
                                                                       "title":  "Network Access to Non-privileged Accounts â€” Separate Device",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.8",
                                                                       "label":  "IA-2(8)",
                                                                       "title":  "Access to Accounts â€” Replay Resistant",
                                                                       "description":  "Implement replay-resistant authentication mechanisms for access to {{ insert: param, ia-02.08_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.9",
                                                                       "label":  "IA-2(9)",
                                                                       "title":  "Network Access to Non-privileged Accounts â€” Replay Resistant",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.10",
                                                                       "label":  "IA-2(10)",
                                                                       "title":  "Single Sign-on",
                                                                       "description":  "Provide a single sign-on capability for {{ insert: param, ia-02.10_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.11",
                                                                       "label":  "IA-2(11)",
                                                                       "title":  "Remote Access â€” Separate Device",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.12",
                                                                       "label":  "IA-2(12)",
                                                                       "title":  "Acceptance of PIV Credentials",
                                                                       "description":  "Accept and electronically verify Personal Identity Verification-compliant credentials."
                                                                   },
                                                                   {
                                                                       "id":  "ia-2.13",
                                                                       "label":  "IA-2(13)",
                                                                       "title":  "Out-of-band Authentication",
                                                                       "description":  "Implement the following out-of-band authentication mechanisms under {{ insert: param, ia-02.13_odp.02 }}: {{ insert: param, ia-02.13_odp.01 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-3",
                                              "label":  "IA-3",
                                              "title":  "Device Identification and Authentication",
                                              "description":  "Uniquely identify and authenticate {{ insert: param, ia-03_odp.01 }} before establishing a {{ insert: param, ia-03_odp.02 }} connection.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-3.1",
                                                                       "label":  "IA-3(1)",
                                                                       "title":  "Cryptographic Bidirectional Authentication",
                                                                       "description":  "Authenticate {{ insert: param, ia-03.01_odp.01 }} before establishing {{ insert: param, ia-03.01_odp.02 }} connection using bidirectional authentication that is cryptographically based."
                                                                   },
                                                                   {
                                                                       "id":  "ia-3.2",
                                                                       "label":  "IA-3(2)",
                                                                       "title":  "Cryptographic Bidirectional Network Authentication",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-3.3",
                                                                       "label":  "IA-3(3)",
                                                                       "title":  "Dynamic Address Allocation",
                                                                       "description":  "Where addresses are allocated dynamically, standardize dynamic address allocation lease information and the lease duration assigned to devices in accordance with {{ insert: param, ia-3.3_prm_1 }} ; and Audit lease information when assigned to a device."
                                                                   },
                                                                   {
                                                                       "id":  "ia-3.4",
                                                                       "label":  "IA-3(4)",
                                                                       "title":  "Device Attestation",
                                                                       "description":  "Handle device identification and authentication based on attestation by {{ insert: param, ia-03.04_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-4",
                                              "label":  "IA-4",
                                              "title":  "Identifier Management",
                                              "description":  "Manage system identifiers by: Receiving authorization from {{ insert: param, ia-04_odp.01 }} to assign an individual, group, role, service, or device identifier; Selecting an identifier that identifies an individual, group, role, service, or device; Assigni...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-4.1",
                                                                       "label":  "IA-4(1)",
                                                                       "title":  "Prohibit Account Identifiers as Public Identifiers",
                                                                       "description":  "Prohibit the use of system account identifiers that are the same as public identifiers for individual accounts."
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.2",
                                                                       "label":  "IA-4(2)",
                                                                       "title":  "Supervisor Authorization",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.3",
                                                                       "label":  "IA-4(3)",
                                                                       "title":  "Multiple Forms of Certification",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.4",
                                                                       "label":  "IA-4(4)",
                                                                       "title":  "Identify User Status",
                                                                       "description":  "Manage individual identifiers by uniquely identifying each individual as {{ insert: param, ia-04.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.5",
                                                                       "label":  "IA-4(5)",
                                                                       "title":  "Dynamic Management",
                                                                       "description":  "Manage individual identifiers dynamically in accordance with {{ insert: param, ia-04.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.6",
                                                                       "label":  "IA-4(6)",
                                                                       "title":  "Cross-organization Management",
                                                                       "description":  "Coordinate with the following external organizations for cross-organization management of identifiers: {{ insert: param, ia-04.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.7",
                                                                       "label":  "IA-4(7)",
                                                                       "title":  "In-person Registration",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.8",
                                                                       "label":  "IA-4(8)",
                                                                       "title":  "Pairwise Pseudonymous Identifiers",
                                                                       "description":  "Generate pairwise pseudonymous identifiers."
                                                                   },
                                                                   {
                                                                       "id":  "ia-4.9",
                                                                       "label":  "IA-4(9)",
                                                                       "title":  "Attribute Maintenance and Protection",
                                                                       "description":  "Maintain the attributes for each uniquely identified individual, device, or service in {{ insert: param, ia-04.09_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-5",
                                              "label":  "IA-5",
                                              "title":  "Authenticator Management",
                                              "description":  "Manage system authenticators by: Verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, service, or device receiving the authenticator; Establishing initial authenticator content for any authenticators iss...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-5.1",
                                                                       "label":  "IA-5(1)",
                                                                       "title":  "Password-based Authentication",
                                                                       "description":  "For password-based authentication: Maintain a list of commonly-used, expected, or compromised passwords and update the list {{ insert: param, ia-05.01_odp.01 }} and when organizational passwords are suspected to have been compromised directly or indirectly;..."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.2",
                                                                       "label":  "IA-5(2)",
                                                                       "title":  "Public Key-based Authentication",
                                                                       "description":  "For public key-based authentication: When public key infrastructure (PKI) is used:"
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.3",
                                                                       "label":  "IA-5(3)",
                                                                       "title":  "In-person or Trusted External Party Registration",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.4",
                                                                       "label":  "IA-5(4)",
                                                                       "title":  "Automated Support for Password Strength Determination",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.5",
                                                                       "label":  "IA-5(5)",
                                                                       "title":  "Change Authenticators Prior to Delivery",
                                                                       "description":  "Require developers and installers of system components to provide unique authenticators or change default authenticators prior to delivery and installation."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.6",
                                                                       "label":  "IA-5(6)",
                                                                       "title":  "Protection of Authenticators",
                                                                       "description":  "Protect authenticators commensurate with the security category of the information to which use of the authenticator permits access."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.7",
                                                                       "label":  "IA-5(7)",
                                                                       "title":  "No Embedded Unencrypted Static Authenticators",
                                                                       "description":  "Ensure that unencrypted static authenticators are not embedded in applications or other forms of static storage."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.8",
                                                                       "label":  "IA-5(8)",
                                                                       "title":  "Multiple System Accounts",
                                                                       "description":  "Implement {{ insert: param, ia-05.08_odp }} to manage the risk of compromise due to individuals having accounts on multiple systems."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.9",
                                                                       "label":  "IA-5(9)",
                                                                       "title":  "Federated Credential Management",
                                                                       "description":  "Use the following external organizations to federate credentials: {{ insert: param, ia-05.09_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.10",
                                                                       "label":  "IA-5(10)",
                                                                       "title":  "Dynamic Credential Binding",
                                                                       "description":  "Bind identities and authenticators dynamically using the following rules: {{ insert: param, ia-05.10_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.11",
                                                                       "label":  "IA-5(11)",
                                                                       "title":  "Hardware Token-based Authentication",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.12",
                                                                       "label":  "IA-5(12)",
                                                                       "title":  "Biometric Authentication Performance",
                                                                       "description":  "For biometric-based authentication, employ mechanisms that satisfy the following biometric quality requirements {{ insert: param, ia-05.12_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.13",
                                                                       "label":  "IA-5(13)",
                                                                       "title":  "Expiration of Cached Authenticators",
                                                                       "description":  "Prohibit the use of cached authenticators after {{ insert: param, ia-05.13_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.14",
                                                                       "label":  "IA-5(14)",
                                                                       "title":  "Managing Content of PKI Trust Stores",
                                                                       "description":  "For PKI-based authentication, employ an organization-wide methodology for managing the content of PKI trust stores installed across all platforms, including networks, operating systems, browsers, and applications."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.15",
                                                                       "label":  "IA-5(15)",
                                                                       "title":  "GSA-approved Products and Services",
                                                                       "description":  "Use only General Services Administration-approved products and services for identity, credential, and access management."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.16",
                                                                       "label":  "IA-5(16)",
                                                                       "title":  "In-person or Trusted External Party Authenticator Issuance",
                                                                       "description":  "Require that the issuance of {{ insert: param, ia-05.16_odp.01 }} be conducted {{ insert: param, ia-05.16_odp.02 }} before {{ insert: param, ia-05.16_odp.03 }} with authorization by {{ insert: param, ia-05.16_odp.04 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.17",
                                                                       "label":  "IA-5(17)",
                                                                       "title":  "Presentation Attack Detection for Biometric Authenticators",
                                                                       "description":  "Employ presentation attack detection mechanisms for biometric-based authentication."
                                                                   },
                                                                   {
                                                                       "id":  "ia-5.18",
                                                                       "label":  "IA-5(18)",
                                                                       "title":  "Password Managers",
                                                                       "description":  "Employ {{ insert: param, ia-05.18_odp.01 }} to generate and manage passwords; and Protect the passwords using {{ insert: param, ia-05.18_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-6",
                                              "label":  "IA-6",
                                              "title":  "Authentication Feedback",
                                              "description":  "Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ia-7",
                                              "label":  "IA-7",
                                              "title":  "Cryptographic Module Authentication",
                                              "description":  "Implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ia-8",
                                              "label":  "IA-8",
                                              "title":  "Identification and Authentication (Non-organizational Users)",
                                              "description":  "Uniquely identify and authenticate non-organizational users or processes acting on behalf of non-organizational users.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-8.1",
                                                                       "label":  "IA-8(1)",
                                                                       "title":  "Acceptance of PIV Credentials from Other Agencies",
                                                                       "description":  "Accept and electronically verify Personal Identity Verification-compliant credentials from other federal agencies."
                                                                   },
                                                                   {
                                                                       "id":  "ia-8.2",
                                                                       "label":  "IA-8(2)",
                                                                       "title":  "Acceptance of External Authenticators",
                                                                       "description":  "Accept only external authenticators that are NIST-compliant; and Document and maintain a list of accepted external authenticators."
                                                                   },
                                                                   {
                                                                       "id":  "ia-8.3",
                                                                       "label":  "IA-8(3)",
                                                                       "title":  "Use of FICAM-approved Products",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-8.4",
                                                                       "label":  "IA-8(4)",
                                                                       "title":  "Use of Defined Profiles",
                                                                       "description":  "Conform to the following profiles for identity management {{ insert: param, ia-08.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-8.5",
                                                                       "label":  "IA-8(5)",
                                                                       "title":  "Acceptance of PIV-I Credentials",
                                                                       "description":  "Accept and verify federated or PKI credentials that meet {{ insert: param, ia-08.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-8.6",
                                                                       "label":  "IA-8(6)",
                                                                       "title":  "Disassociability",
                                                                       "description":  "Implement the following measures to disassociate user attributes or identifier assertion relationships among individuals, credential service providers, and relying parties: {{ insert: param, ia-08.06_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-9",
                                              "label":  "IA-9",
                                              "title":  "Service Identification and Authentication",
                                              "description":  "Uniquely identify and authenticate {{ insert: param, ia-09_odp }} before establishing communications with devices, users, or other services or applications.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-9.1",
                                                                       "label":  "IA-9(1)",
                                                                       "title":  "Information Exchange",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ia-9.2",
                                                                       "label":  "IA-9(2)",
                                                                       "title":  "Transmission of Decisions",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-10",
                                              "label":  "IA-10",
                                              "title":  "Adaptive Authentication",
                                              "description":  "Require individuals accessing the system to employ {{ insert: param, ia-10_odp.01 }} under specific {{ insert: param, ia-10_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ia-11",
                                              "label":  "IA-11",
                                              "title":  "Re-authentication",
                                              "description":  "Require users to re-authenticate when {{ insert: param, ia-11_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ia-12",
                                              "label":  "IA-12",
                                              "title":  "Identity Proofing",
                                              "description":  "Identity proof users that require accounts for logical access to systems based on appropriate identity assurance level requirements as specified in applicable standards and guidelines; Resolve user identities to a unique individual; and Collect, validate, a...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-12.1",
                                                                       "label":  "IA-12(1)",
                                                                       "title":  "Supervisor Authorization",
                                                                       "description":  "Require that the registration process to receive an account for logical access includes supervisor or sponsor authorization."
                                                                   },
                                                                   {
                                                                       "id":  "ia-12.2",
                                                                       "label":  "IA-12(2)",
                                                                       "title":  "Identity Evidence",
                                                                       "description":  "Require evidence of individual identification be presented to the registration authority."
                                                                   },
                                                                   {
                                                                       "id":  "ia-12.3",
                                                                       "label":  "IA-12(3)",
                                                                       "title":  "Identity Evidence Validation and Verification",
                                                                       "description":  "Require that the presented identity evidence be validated and verified through {{ insert: param, ia-12.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ia-12.4",
                                                                       "label":  "IA-12(4)",
                                                                       "title":  "In-person Validation and Verification",
                                                                       "description":  "Require that the validation and verification of identity evidence be conducted in person before a designated registration authority."
                                                                   },
                                                                   {
                                                                       "id":  "ia-12.5",
                                                                       "label":  "IA-12(5)",
                                                                       "title":  "Address Confirmation",
                                                                       "description":  "Require that a {{ insert: param, ia-12.05_odp }} be delivered through an out-of-band channel to verify the users address (physical or digital) of record."
                                                                   },
                                                                   {
                                                                       "id":  "ia-12.6",
                                                                       "label":  "IA-12(6)",
                                                                       "title":  "Accept Externally-proofed Identities",
                                                                       "description":  "Accept externally-proofed identities at {{ insert: param, ia-12.06_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ia-13",
                                              "label":  "IA-13",
                                              "title":  "Identity Providers and Authorization Servers",
                                              "description":  "Employ identity providers and authorization servers to manage user, device, and non-person entity (NPE) identities, attributes, and access rights supporting authentication and authorization decisions in accordance with {{ insert: param, ia-13_odp.01 }} usin...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ia-13.1",
                                                                       "label":  "IA-13(1)",
                                                                       "title":  "Protection of Cryptographic Keys",
                                                                       "description":  "Cryptographic keys that protect access tokens are generated, managed, and protected from disclosure and misuse."
                                                                   },
                                                                   {
                                                                       "id":  "ia-13.2",
                                                                       "label":  "IA-13(2)",
                                                                       "title":  "Verification of Identity Assertions and Access Tokens",
                                                                       "description":  "The source and integrity of identity assertions and access tokens are verified before granting access to system and information resources."
                                                                   },
                                                                   {
                                                                       "id":  "ia-13.3",
                                                                       "label":  "IA-13(3)",
                                                                       "title":  "Token Management",
                                                                       "description":  "In accordance with {{ insert: param, ia-13_odp.01 }}, assertions and access tokens are: generated; issued; refreshed; revoked; time-restricted; and audience-restricted."
                                                                   }
                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "ir",
                         "label":  "IR",
                         "title":  "Incident Response",
                         "controls":  [
                                          {
                                              "id":  "ir-1",
                                              "label":  "IR-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ir-1_prm_1 }}: Designate an {{ insert: param, ir-01_odp.04 }} to manage the development, documentation, and dissemination of the incident response policy and procedures; and Review and update the curre...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ir-2",
                                              "label":  "IR-2",
                                              "title":  "Incident Response Training",
                                              "description":  "Provide incident response training to system users consistent with assigned roles and responsibilities: Review and update incident response training content {{ insert: param, ir-02_odp.03 }} and following {{ insert: param, ir-02_odp.04 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-2.1",
                                                                       "label":  "IR-2(1)",
                                                                       "title":  "Simulated Events",
                                                                       "description":  "Incorporate simulated events into incident response training to facilitate the required response by personnel in crisis situations."
                                                                   },
                                                                   {
                                                                       "id":  "ir-2.2",
                                                                       "label":  "IR-2(2)",
                                                                       "title":  "Automated Training Environments",
                                                                       "description":  "Provide an incident response training environment using {{ insert: param, ir-02.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-2.3",
                                                                       "label":  "IR-2(3)",
                                                                       "title":  "Breach",
                                                                       "description":  "Provide incident response training on how to identify and respond to a breach, including the organizationâ€™s process for reporting a breach."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-3",
                                              "label":  "IR-3",
                                              "title":  "Incident Response Testing",
                                              "description":  "Test the effectiveness of the incident response capability for the system {{ insert: param, ir-03_odp.01 }} using the following tests: {{ insert: param, ir-03_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-3.1",
                                                                       "label":  "IR-3(1)",
                                                                       "title":  "Automated Testing",
                                                                       "description":  "Test the incident response capability using {{ insert: param, ir-03.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-3.2",
                                                                       "label":  "IR-3(2)",
                                                                       "title":  "Coordination with Related Plans",
                                                                       "description":  "Coordinate incident response testing with organizational elements responsible for related plans."
                                                                   },
                                                                   {
                                                                       "id":  "ir-3.3",
                                                                       "label":  "IR-3(3)",
                                                                       "title":  "Continuous Improvement",
                                                                       "description":  "Use qualitative and quantitative data from testing to: Determine the effectiveness of incident response processes; Continuously improve incident response processes; and Provide incident response measures and metrics that are accurate, consistent, and in a r..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-4",
                                              "label":  "IR-4",
                                              "title":  "Incident Handling",
                                              "description":  "Implement an incident handling capability for incidents that is consistent with the incident response plan and includes preparation, detection and analysis, containment, eradication, and recovery; Coordinate incident handling activities with contingency pla...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-4.1",
                                                                       "label":  "IR-4(1)",
                                                                       "title":  "Automated Incident Handling Processes",
                                                                       "description":  "Support the incident handling process using {{ insert: param, ir-04.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.2",
                                                                       "label":  "IR-4(2)",
                                                                       "title":  "Dynamic Reconfiguration",
                                                                       "description":  "Include the following types of dynamic reconfiguration for {{ insert: param, ir-04.02_odp.02 }} as part of the incident response capability: {{ insert: param, ir-04.02_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.3",
                                                                       "label":  "IR-4(3)",
                                                                       "title":  "Continuity of Operations",
                                                                       "description":  "Identify {{ insert: param, ir-04.03_odp.01 }} and take the following actions in response to those incidents to ensure continuation of organizational mission and business functions: {{ insert: param, ir-04.03_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.4",
                                                                       "label":  "IR-4(4)",
                                                                       "title":  "Information Correlation",
                                                                       "description":  "Correlate incident information and individual incident responses to achieve an organization-wide perspective on incident awareness and response."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.5",
                                                                       "label":  "IR-4(5)",
                                                                       "title":  "Automatic Disabling of System",
                                                                       "description":  "Implement a configurable capability to automatically disable the system if {{ insert: param, ir-04.05_odp }} are detected."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.6",
                                                                       "label":  "IR-4(6)",
                                                                       "title":  "Insider Threats",
                                                                       "description":  "Implement an incident handling capability for incidents involving insider threats."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.7",
                                                                       "label":  "IR-4(7)",
                                                                       "title":  "Insider Threats â€” Intra-organization Coordination",
                                                                       "description":  "Coordinate an incident handling capability for insider threats that includes the following organizational entities {{ insert: param, ir-04.07_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.8",
                                                                       "label":  "IR-4(8)",
                                                                       "title":  "Correlation with External Organizations",
                                                                       "description":  "Coordinate with {{ insert: param, ir-04.08_odp.01 }} to correlate and share {{ insert: param, ir-04.08_odp.02 }} to achieve a cross-organization perspective on incident awareness and more effective incident responses."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.9",
                                                                       "label":  "IR-4(9)",
                                                                       "title":  "Dynamic Response Capability",
                                                                       "description":  "Employ {{ insert: param, ir-04.09_odp }} to respond to incidents."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.10",
                                                                       "label":  "IR-4(10)",
                                                                       "title":  "Supply Chain Coordination",
                                                                       "description":  "Coordinate incident handling activities involving supply chain events with other organizations involved in the supply chain."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.11",
                                                                       "label":  "IR-4(11)",
                                                                       "title":  "Integrated Incident Response Team",
                                                                       "description":  "Establish and maintain an integrated incident response team that can be deployed to any location identified by the organization in {{ insert: param, ir-04.11_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.12",
                                                                       "label":  "IR-4(12)",
                                                                       "title":  "Malicious Code and Forensic Analysis",
                                                                       "description":  "Analyze malicious code and/or other residual artifacts remaining in the system after the incident."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.13",
                                                                       "label":  "IR-4(13)",
                                                                       "title":  "Behavior Analysis",
                                                                       "description":  "Analyze anomalous or suspected adversarial behavior in or related to {{ insert: param, ir-04.13_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.14",
                                                                       "label":  "IR-4(14)",
                                                                       "title":  "Security Operations Center",
                                                                       "description":  "Establish and maintain a security operations center."
                                                                   },
                                                                   {
                                                                       "id":  "ir-4.15",
                                                                       "label":  "IR-4(15)",
                                                                       "title":  "Public Relations and Reputation Repair",
                                                                       "description":  "Manage public relations associated with an incident; and Employ measures to repair the reputation of the organization."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-5",
                                              "label":  "IR-5",
                                              "title":  "Incident Monitoring",
                                              "description":  "Track and document incidents.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-5.1",
                                                                       "label":  "IR-5(1)",
                                                                       "title":  "Automated Tracking, Data Collection, and Analysis",
                                                                       "description":  "Track incidents and collect and analyze incident information using {{ insert: param, ir-5.1_prm_1 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-6",
                                              "label":  "IR-6",
                                              "title":  "Incident Reporting",
                                              "description":  "Require personnel to report suspected incidents to the organizational incident response capability within {{ insert: param, ir-06_odp.01 }} ; and Report incident information to {{ insert: param, ir-06_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-6.1",
                                                                       "label":  "IR-6(1)",
                                                                       "title":  "Automated Reporting",
                                                                       "description":  "Report incidents using {{ insert: param, ir-06.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-6.2",
                                                                       "label":  "IR-6(2)",
                                                                       "title":  "Vulnerabilities Related to Incidents",
                                                                       "description":  "Report system vulnerabilities associated with reported incidents to {{ insert: param, ir-06.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-6.3",
                                                                       "label":  "IR-6(3)",
                                                                       "title":  "Supply Chain Coordination",
                                                                       "description":  "Provide incident information to the provider of the product or service and other organizations involved in the supply chain or supply chain governance for systems or system components related to the incident."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-7",
                                              "label":  "IR-7",
                                              "title":  "Incident Response Assistance",
                                              "description":  "Provide an incident response support resource, integral to the organizational incident response capability, that offers advice and assistance to users of the system for the handling and reporting of incidents.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-7.1",
                                                                       "label":  "IR-7(1)",
                                                                       "title":  "Automation Support for Availability of Information and Support",
                                                                       "description":  "Increase the availability of incident response information and support using {{ insert: param, ir-07.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-7.2",
                                                                       "label":  "IR-7(2)",
                                                                       "title":  "Coordination with External Providers",
                                                                       "description":  "Establish a direct, cooperative relationship between its incident response capability and external providers of system protection capability; and Identify organizational incident response team members to the external providers."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-8",
                                              "label":  "IR-8",
                                              "title":  "Incident Response Plan",
                                              "description":  "Develop an incident response plan that: Distribute copies of the incident response plan to {{ insert: param, ir-08_odp.04 }}; Update the incident response plan to address system and organizational changes or problems encountered during plan implementation, ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-8.1",
                                                                       "label":  "IR-8(1)",
                                                                       "title":  "Breaches",
                                                                       "description":  "Include the following in the Incident Response Plan for breaches involving personally identifiable information: A process to determine if notice to individuals or other organizations, including oversight organizations, is needed; An assessment process to de..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-9",
                                              "label":  "IR-9",
                                              "title":  "Information Spillage Response",
                                              "description":  "Respond to information spills by: Assigning {{ insert: param, ir-09_odp.01 }} with responsibility for responding to information spills; Identifying the specific information involved in the system contamination; Alerting {{ insert: param, ir-09_odp.02 }} of ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ir-9.1",
                                                                       "label":  "IR-9(1)",
                                                                       "title":  "Responsible Personnel",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ir-9.2",
                                                                       "label":  "IR-9(2)",
                                                                       "title":  "Training",
                                                                       "description":  "Provide information spillage response training {{ insert: param, ir-09.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-9.3",
                                                                       "label":  "IR-9(3)",
                                                                       "title":  "Post-spill Operations",
                                                                       "description":  "Implement the following procedures to ensure that organizational personnel impacted by information spills can continue to carry out assigned tasks while contaminated systems are undergoing corrective actions: {{ insert: param, ir-09.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ir-9.4",
                                                                       "label":  "IR-9(4)",
                                                                       "title":  "Exposure to Unauthorized Personnel",
                                                                       "description":  "Employ the following controls for personnel exposed to information not within assigned access authorizations: {{ insert: param, ir-09.04_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ir-10",
                                              "label":  "IR-10",
                                              "title":  "Integrated Information Security Analysis Team",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "ma",
                         "label":  "MA",
                         "title":  "Maintenance",
                         "controls":  [
                                          {
                                              "id":  "ma-1",
                                              "label":  "MA-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ma-1_prm_1 }}: Designate an {{ insert: param, ma-01_odp.04 }} to manage the development, documentation, and dissemination of the maintenance policy and procedures; and Review and update the current mai...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ma-2",
                                              "label":  "MA-2",
                                              "title":  "Controlled Maintenance",
                                              "description":  "Schedule, document, and review records of maintenance, repair, and replacement on system components in accordance with manufacturer or vendor specifications and/or organizational requirements; Approve and monitor all maintenance activities, whether performe...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ma-2.1",
                                                                       "label":  "MA-2(1)",
                                                                       "title":  "Record Content",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ma-2.2",
                                                                       "label":  "MA-2(2)",
                                                                       "title":  "Automated Maintenance Activities",
                                                                       "description":  "Schedule, conduct, and document maintenance, repair, and replacement actions for the system using {{ insert: param, ma-2.2_prm_1 }} ; and Produce up-to date, accurate, and complete records of all maintenance, repair, and replacement actions requested, sched..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ma-3",
                                              "label":  "MA-3",
                                              "title":  "Maintenance Tools",
                                              "description":  "Approve, control, and monitor the use of system maintenance tools; and Review previously approved system maintenance tools {{ insert: param, ma-03_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ma-3.1",
                                                                       "label":  "MA-3(1)",
                                                                       "title":  "Inspect Tools",
                                                                       "description":  "Inspect the maintenance tools used by maintenance personnel for improper or unauthorized modifications."
                                                                   },
                                                                   {
                                                                       "id":  "ma-3.2",
                                                                       "label":  "MA-3(2)",
                                                                       "title":  "Inspect Media",
                                                                       "description":  "Check media containing diagnostic and test programs for malicious code before the media are used in the system."
                                                                   },
                                                                   {
                                                                       "id":  "ma-3.3",
                                                                       "label":  "MA-3(3)",
                                                                       "title":  "Prevent Unauthorized Removal",
                                                                       "description":  "Prevent the removal of maintenance equipment containing organizational information by: Verifying that there is no organizational information contained on the equipment; Sanitizing or destroying the equipment; Retaining the equipment within the facility; or ..."
                                                                   },
                                                                   {
                                                                       "id":  "ma-3.4",
                                                                       "label":  "MA-3(4)",
                                                                       "title":  "Restricted Tool Use",
                                                                       "description":  "Restrict the use of maintenance tools to authorized personnel only."
                                                                   },
                                                                   {
                                                                       "id":  "ma-3.5",
                                                                       "label":  "MA-3(5)",
                                                                       "title":  "Execution with Privilege",
                                                                       "description":  "Monitor the use of maintenance tools that execute with increased privilege."
                                                                   },
                                                                   {
                                                                       "id":  "ma-3.6",
                                                                       "label":  "MA-3(6)",
                                                                       "title":  "Software Updates and Patches",
                                                                       "description":  "Inspect maintenance tools to ensure the latest software updates and patches are installed."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ma-4",
                                              "label":  "MA-4",
                                              "title":  "Nonlocal Maintenance",
                                              "description":  "Approve and monitor nonlocal maintenance and diagnostic activities; Allow the use of nonlocal maintenance and diagnostic tools only as consistent with organizational policy and documented in the security plan for the system; Employ strong authentication in ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ma-4.1",
                                                                       "label":  "MA-4(1)",
                                                                       "title":  "Logging and Review",
                                                                       "description":  "Log {{ insert: param, ma-4.1_prm_1 }} for nonlocal maintenance and diagnostic sessions; and Review the audit records of the maintenance and diagnostic sessions to detect anomalous behavior."
                                                                   },
                                                                   {
                                                                       "id":  "ma-4.2",
                                                                       "label":  "MA-4(2)",
                                                                       "title":  "Document Nonlocal Maintenance",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ma-4.3",
                                                                       "label":  "MA-4(3)",
                                                                       "title":  "Comparable Security and Sanitization",
                                                                       "description":  "Require that nonlocal maintenance and diagnostic services be performed from a system that implements a security capability comparable to the capability implemented on the system being serviced; or Remove the component to be serviced from the system prior to..."
                                                                   },
                                                                   {
                                                                       "id":  "ma-4.4",
                                                                       "label":  "MA-4(4)",
                                                                       "title":  "Authentication and Separation of Maintenance Sessions",
                                                                       "description":  "Protect nonlocal maintenance sessions by: Employing {{ insert: param, ma-04.04_odp }} ; and Separating the maintenance sessions from other network sessions with the system by either:"
                                                                   },
                                                                   {
                                                                       "id":  "ma-4.5",
                                                                       "label":  "MA-4(5)",
                                                                       "title":  "Approvals and Notifications",
                                                                       "description":  "Require the approval of each nonlocal maintenance session by {{ insert: param, ma-04.05_odp.01 }} ; and Notify the following personnel or roles of the date and time of planned nonlocal maintenance: {{ insert: param, ma-04.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ma-4.6",
                                                                       "label":  "MA-4(6)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  "Implement the following cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications: {{ insert: param, ma-04.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ma-4.7",
                                                                       "label":  "MA-4(7)",
                                                                       "title":  "Disconnect Verification",
                                                                       "description":  "Verify session and network connection termination after the completion of nonlocal maintenance and diagnostic sessions."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ma-5",
                                              "label":  "MA-5",
                                              "title":  "Maintenance Personnel",
                                              "description":  "Establish a process for maintenance personnel authorization and maintain a list of authorized maintenance organizations or personnel; Verify that non-escorted personnel performing maintenance on the system possess the required access authorizations; and Des...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ma-5.1",
                                                                       "label":  "MA-5(1)",
                                                                       "title":  "Individuals Without Appropriate Access",
                                                                       "description":  "Implement procedures for the use of maintenance personnel that lack appropriate security clearances or are not U.S. citizens, that include the following requirements: Develop and implement {{ insert: param, ma-05.01_odp }} in the event a system component ca..."
                                                                   },
                                                                   {
                                                                       "id":  "ma-5.2",
                                                                       "label":  "MA-5(2)",
                                                                       "title":  "Security Clearances for Classified Systems",
                                                                       "description":  "Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information possess security clearances and formal access approvals for at least the highest classification level and for comp..."
                                                                   },
                                                                   {
                                                                       "id":  "ma-5.3",
                                                                       "label":  "MA-5(3)",
                                                                       "title":  "Citizenship Requirements for Classified Systems",
                                                                       "description":  "Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information are U.S. citizens."
                                                                   },
                                                                   {
                                                                       "id":  "ma-5.4",
                                                                       "label":  "MA-5(4)",
                                                                       "title":  "Foreign Nationals",
                                                                       "description":  "Ensure that: Foreign nationals with appropriate security clearances are used to conduct maintenance and diagnostic activities on classified systems only when the systems are jointly owned and operated by the United States and foreign allied governments, or ..."
                                                                   },
                                                                   {
                                                                       "id":  "ma-5.5",
                                                                       "label":  "MA-5(5)",
                                                                       "title":  "Non-system Maintenance",
                                                                       "description":  "Ensure that non-escorted personnel performing maintenance activities not directly associated with the system but in the physical proximity of the system, have required access authorizations."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ma-6",
                                              "label":  "MA-6",
                                              "title":  "Timely Maintenance",
                                              "description":  "Obtain maintenance support and/or spare parts for {{ insert: param, ma-06_odp.01 }} within {{ insert: param, ma-06_odp.02 }} of failure.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ma-6.1",
                                                                       "label":  "MA-6(1)",
                                                                       "title":  "Preventive Maintenance",
                                                                       "description":  "Perform preventive maintenance on {{ insert: param, ma-06.01_odp.01 }} at {{ insert: param, ma-06.01_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ma-6.2",
                                                                       "label":  "MA-6(2)",
                                                                       "title":  "Predictive Maintenance",
                                                                       "description":  "Perform predictive maintenance on {{ insert: param, ma-06.02_odp.01 }} at {{ insert: param, ma-06.02_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ma-6.3",
                                                                       "label":  "MA-6(3)",
                                                                       "title":  "Automated Support for Predictive Maintenance",
                                                                       "description":  "Transfer predictive maintenance data to a maintenance management system using {{ insert: param, ma-06.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ma-7",
                                              "label":  "MA-7",
                                              "title":  "Field Maintenance",
                                              "description":  "Restrict or prohibit field maintenance on {{ insert: param, ma-07_odp.01 }} to {{ insert: param, ma-07_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "mp",
                         "label":  "MP",
                         "title":  "Media Protection",
                         "controls":  [
                                          {
                                              "id":  "mp-1",
                                              "label":  "MP-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, mp-1_prm_1 }}: Designate an {{ insert: param, mp-01_odp.04 }} to manage the development, documentation, and dissemination of the media protection policy and procedures; and Review and update the curren...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "mp-2",
                                              "label":  "MP-2",
                                              "title":  "Media Access",
                                              "description":  "Restrict access to {{ insert: param, mp-2_prm_1 }} to {{ insert: param, mp-2_prm_2 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "mp-2.1",
                                                                       "label":  "MP-2(1)",
                                                                       "title":  "Automated Restricted Access",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-2.2",
                                                                       "label":  "MP-2(2)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "mp-3",
                                              "label":  "MP-3",
                                              "title":  "Media Marking",
                                              "description":  "Mark system media indicating the distribution limitations, handling caveats, and applicable security markings (if any) of the information; and Exempt {{ insert: param, mp-03_odp.01 }} from marking if the media remain within {{ insert: param, mp-03_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "mp-4",
                                              "label":  "MP-4",
                                              "title":  "Media Storage",
                                              "description":  "Physically control and securely store {{ insert: param, mp-4_prm_1 }} within {{ insert: param, mp-4_prm_2 }} ; and Protect system media types defined in MP-4a until the media are destroyed or sanitized using approved equipment, techniques, and procedures.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "mp-4.1",
                                                                       "label":  "MP-4(1)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-4.2",
                                                                       "label":  "MP-4(2)",
                                                                       "title":  "Automated Restricted Access",
                                                                       "description":  "Restrict access to media storage areas and log access attempts and access granted using {{ insert: param, mp-4.2_prm_1 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "mp-5",
                                              "label":  "MP-5",
                                              "title":  "Media Transport",
                                              "description":  "Protect and control {{ insert: param, mp-05_odp.01 }} during transport outside of controlled areas using {{ insert: param, mp-5_prm_2 }}; Maintain accountability for system media during transport outside of controlled areas; Document activities associated w...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "mp-5.1",
                                                                       "label":  "MP-5(1)",
                                                                       "title":  "Protection Outside of Controlled Areas",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-5.2",
                                                                       "label":  "MP-5(2)",
                                                                       "title":  "Documentation of Activities",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-5.3",
                                                                       "label":  "MP-5(3)",
                                                                       "title":  "Custodians",
                                                                       "description":  "Employ an identified custodian during transport of system media outside of controlled areas."
                                                                   },
                                                                   {
                                                                       "id":  "mp-5.4",
                                                                       "label":  "MP-5(4)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "mp-6",
                                              "label":  "MP-6",
                                              "title":  "Media Sanitization",
                                              "description":  "Sanitize {{ insert: param, mp-6_prm_1 }} prior to disposal, release out of organizational control, or release for reuse using {{ insert: param, mp-6_prm_2 }} ; and Employ sanitization mechanisms with the strength and integrity commensurate with the security...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "mp-6.1",
                                                                       "label":  "MP-6(1)",
                                                                       "title":  "Review, Approve, Track, Document, and Verify",
                                                                       "description":  "Review, approve, track, document, and verify media sanitization and disposal actions."
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.2",
                                                                       "label":  "MP-6(2)",
                                                                       "title":  "Equipment Testing",
                                                                       "description":  "Test sanitization equipment and procedures {{ insert: param, mp-6.2_prm_1 }} to ensure that the intended sanitization is being achieved."
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.3",
                                                                       "label":  "MP-6(3)",
                                                                       "title":  "Nondestructive Techniques",
                                                                       "description":  "Apply nondestructive sanitization techniques to portable storage devices prior to connecting such devices to the system under the following circumstances: {{ insert: param, mp-06.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.4",
                                                                       "label":  "MP-6(4)",
                                                                       "title":  "Controlled Unclassified Information",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.5",
                                                                       "label":  "MP-6(5)",
                                                                       "title":  "Classified Information",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.6",
                                                                       "label":  "MP-6(6)",
                                                                       "title":  "Media Destruction",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.7",
                                                                       "label":  "MP-6(7)",
                                                                       "title":  "Dual Authorization",
                                                                       "description":  "Enforce dual authorization for the sanitization of {{ insert: param, mp-06.07_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "mp-6.8",
                                                                       "label":  "MP-6(8)",
                                                                       "title":  "Remote Purging or Wiping of Information",
                                                                       "description":  "Provide the capability to purge or wipe information from {{ insert: param, mp-06.08_odp.01 }} {{ insert: param, mp-06.08_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "mp-7",
                                              "label":  "MP-7",
                                              "title":  "Media Use",
                                              "description":  "{{ insert: param, mp-07_odp.02 }} the use of {{ insert: param, mp-07_odp.01 }} on {{ insert: param, mp-07_odp.03 }} using {{ insert: param, mp-07_odp.04 }} ; and Prohibit the use of portable storage devices in organizational systems when such devices have n...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "mp-7.1",
                                                                       "label":  "MP-7(1)",
                                                                       "title":  "Prohibit Use Without Owner",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "mp-7.2",
                                                                       "label":  "MP-7(2)",
                                                                       "title":  "Prohibit Use of Sanitization-resistant Media",
                                                                       "description":  "Prohibit the use of sanitization-resistant media in organizational systems."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "mp-8",
                                              "label":  "MP-8",
                                              "title":  "Media Downgrading",
                                              "description":  "Establish {{ insert: param, mp-08_odp.01 }} that includes employing downgrading mechanisms with strength and integrity commensurate with the security category or classification of the information; Verify that the system media downgrading process is commensu...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "mp-8.1",
                                                                       "label":  "MP-8(1)",
                                                                       "title":  "Documentation of Process",
                                                                       "description":  "Document system media downgrading actions."
                                                                   },
                                                                   {
                                                                       "id":  "mp-8.2",
                                                                       "label":  "MP-8(2)",
                                                                       "title":  "Equipment Testing",
                                                                       "description":  "Test downgrading equipment and procedures {{ insert: param, mp-8.2_prm_1 }} to ensure that downgrading actions are being achieved."
                                                                   },
                                                                   {
                                                                       "id":  "mp-8.3",
                                                                       "label":  "MP-8(3)",
                                                                       "title":  "Controlled Unclassified Information",
                                                                       "description":  "Downgrade system media containing controlled unclassified information prior to public release."
                                                                   },
                                                                   {
                                                                       "id":  "mp-8.4",
                                                                       "label":  "MP-8(4)",
                                                                       "title":  "Classified Information",
                                                                       "description":  "Downgrade system media containing classified information prior to release to individuals without required access authorizations."
                                                                   }
                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "pe",
                         "label":  "PE",
                         "title":  "Physical and Environmental Protection",
                         "controls":  [
                                          {
                                              "id":  "pe-1",
                                              "label":  "PE-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, pe-1_prm_1 }}: Designate an {{ insert: param, pe-01_odp.04 }} to manage the development, documentation, and dissemination of the physical and environmental protection policy and procedures; and Review ...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-2",
                                              "label":  "PE-2",
                                              "title":  "Physical Access Authorizations",
                                              "description":  "Develop, approve, and maintain a list of individuals with authorized access to the facility where the system resides; Issue authorization credentials for facility access; Review the access list detailing authorized facility access by individuals {{ insert: ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-2.1",
                                                                       "label":  "PE-2(1)",
                                                                       "title":  "Access by Position or Role",
                                                                       "description":  "Authorize physical access to the facility where the system resides based on position or role."
                                                                   },
                                                                   {
                                                                       "id":  "pe-2.2",
                                                                       "label":  "PE-2(2)",
                                                                       "title":  "Two Forms of Identification",
                                                                       "description":  "Require two forms of identification from the following forms of identification for visitor access to the facility where the system resides: {{ insert: param, pe-02.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-2.3",
                                                                       "label":  "PE-2(3)",
                                                                       "title":  "Restrict Unescorted Access",
                                                                       "description":  "Restrict unescorted access to the facility where the system resides to personnel with {{ insert: param, pe-02.03_odp.01 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-3",
                                              "label":  "PE-3",
                                              "title":  "Physical Access Control",
                                              "description":  "Enforce physical access authorizations at {{ insert: param, pe-03_odp.01 }} by: Maintain physical access audit logs for {{ insert: param, pe-03_odp.04 }}; Control access to areas within the facility designated as publicly accessible by implementing the foll...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-3.1",
                                                                       "label":  "PE-3(1)",
                                                                       "title":  "System Access",
                                                                       "description":  "Enforce physical access authorizations to the system in addition to the physical access controls for the facility at {{ insert: param, pe-03.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.2",
                                                                       "label":  "PE-3(2)",
                                                                       "title":  "Facility and Systems",
                                                                       "description":  "Perform security checks {{ insert: param, pe-03.02_odp }} at the physical perimeter of the facility or system for exfiltration of information or removal of system components."
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.3",
                                                                       "label":  "PE-3(3)",
                                                                       "title":  "Continuous Guards",
                                                                       "description":  "Employ guards to control {{ insert: param, pe-03.03_odp }} to the facility where the system resides 24 hours per day, 7 days per week."
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.4",
                                                                       "label":  "PE-3(4)",
                                                                       "title":  "Lockable Casings",
                                                                       "description":  "Use lockable physical casings to protect {{ insert: param, pe-03.04_odp }} from unauthorized physical access."
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.5",
                                                                       "label":  "PE-3(5)",
                                                                       "title":  "Tamper Protection",
                                                                       "description":  "Employ {{ insert: param, pe-03.05_odp.01 }} to {{ insert: param, pe-03.05_odp.02 }} physical tampering or alteration of {{ insert: param, pe-03.05_odp.03 }} within the system."
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.6",
                                                                       "label":  "PE-3(6)",
                                                                       "title":  "Facility Penetration Testing",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.7",
                                                                       "label":  "PE-3(7)",
                                                                       "title":  "Physical Barriers",
                                                                       "description":  "Limit access using physical barriers."
                                                                   },
                                                                   {
                                                                       "id":  "pe-3.8",
                                                                       "label":  "PE-3(8)",
                                                                       "title":  "Access Control Vestibules",
                                                                       "description":  "Employ access control vestibules at {{ insert: param, pe-03.08_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-4",
                                              "label":  "PE-4",
                                              "title":  "Access Control for Transmission",
                                              "description":  "Control physical access to {{ insert: param, pe-04_odp.01 }} within organizational facilities using {{ insert: param, pe-04_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-5",
                                              "label":  "PE-5",
                                              "title":  "Access Control for Output Devices",
                                              "description":  "Control physical access to output from {{ insert: param, pe-05_odp }} to prevent unauthorized individuals from obtaining the output.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-5.1",
                                                                       "label":  "PE-5(1)",
                                                                       "title":  "Access to Output by Authorized Individuals",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "pe-5.2",
                                                                       "label":  "PE-5(2)",
                                                                       "title":  "Link to Individual Identity",
                                                                       "description":  "Link individual identity to receipt of output from output devices."
                                                                   },
                                                                   {
                                                                       "id":  "pe-5.3",
                                                                       "label":  "PE-5(3)",
                                                                       "title":  "Marking Output Devices",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-6",
                                              "label":  "PE-6",
                                              "title":  "Monitoring Physical Access",
                                              "description":  "Monitor physical access to the facility where the system resides to detect and respond to physical security incidents; Review physical access logs {{ insert: param, pe-06_odp.01 }} and upon occurrence of {{ insert: param, pe-06_odp.02 }} ; and Coordinate re...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-6.1",
                                                                       "label":  "PE-6(1)",
                                                                       "title":  "Intrusion Alarms and Surveillance Equipment",
                                                                       "description":  "Monitor physical access to the facility where the system resides using physical intrusion alarms and surveillance equipment."
                                                                   },
                                                                   {
                                                                       "id":  "pe-6.2",
                                                                       "label":  "PE-6(2)",
                                                                       "title":  "Automated Intrusion Recognition and Responses",
                                                                       "description":  "Recognize {{ insert: param, pe-06.02_odp.01 }} and initiate {{ insert: param, pe-06.02_odp.02 }} using {{ insert: param, pe-06.02_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-6.3",
                                                                       "label":  "PE-6(3)",
                                                                       "title":  "Video Surveillance",
                                                                       "description":  "Employ video surveillance of {{ insert: param, pe-06.03_odp.01 }}; Review video recordings {{ insert: param, pe-06.03_odp.02 }} ; and Retain video recordings for {{ insert: param, pe-06.03_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-6.4",
                                                                       "label":  "PE-6(4)",
                                                                       "title":  "Monitoring Physical Access to Systems",
                                                                       "description":  "Monitor physical access to the system in addition to the physical access monitoring of the facility at {{ insert: param, pe-06.04_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-7",
                                              "label":  "PE-7",
                                              "title":  "Visitor Control",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-8",
                                              "label":  "PE-8",
                                              "title":  "Visitor Access Records",
                                              "description":  "Maintain visitor access records to the facility where the system resides for {{ insert: param, pe-08_odp.01 }}; Review visitor access records {{ insert: param, pe-08_odp.02 }} ; and Report anomalies in visitor access records to {{ insert: param, pe-08_odp.0...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-8.1",
                                                                       "label":  "PE-8(1)",
                                                                       "title":  "Automated Records Maintenance and Review",
                                                                       "description":  "Maintain and review visitor access records using {{ insert: param, pe-8.1_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-8.2",
                                                                       "label":  "PE-8(2)",
                                                                       "title":  "Physical Access Records",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "pe-8.3",
                                                                       "label":  "PE-8(3)",
                                                                       "title":  "Limit Personally Identifiable Information Elements",
                                                                       "description":  "Limit personally identifiable information contained in visitor access records to the following elements identified in the privacy risk assessment: {{ insert: param, pe-08.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-9",
                                              "label":  "PE-9",
                                              "title":  "Power Equipment and Cabling",
                                              "description":  "Protect power equipment and power cabling for the system from damage and destruction.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-9.1",
                                                                       "label":  "PE-9(1)",
                                                                       "title":  "Redundant Cabling",
                                                                       "description":  "Employ redundant power cabling paths that are physically separated by {{ insert: param, pe-09.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-9.2",
                                                                       "label":  "PE-9(2)",
                                                                       "title":  "Automatic Voltage Controls",
                                                                       "description":  "Employ automatic voltage controls for {{ insert: param, pe-09.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-10",
                                              "label":  "PE-10",
                                              "title":  "Emergency Shutoff",
                                              "description":  "Provide the capability of shutting off power to {{ insert: param, pe-10_odp.01 }} in emergency situations; Place emergency shutoff switches or devices in {{ insert: param, pe-10_odp.02 }} to facilitate access for authorized personnel; and Protect emergency ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-10.1",
                                                                       "label":  "PE-10(1)",
                                                                       "title":  "Accidental and Unauthorized Activation",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-11",
                                              "label":  "PE-11",
                                              "title":  "Emergency Power",
                                              "description":  "Provide an uninterruptible power supply to facilitate {{ insert: param, pe-11_odp }} in the event of a primary power source loss.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-11.1",
                                                                       "label":  "PE-11(1)",
                                                                       "title":  "Alternate Power Supply â€” Minimal Operational Capability",
                                                                       "description":  "Provide an alternate power supply for the system that is activated {{ insert: param, pe-11.01_odp }} and that can maintain minimally required operational capability in the event of an extended loss of the primary power source."
                                                                   },
                                                                   {
                                                                       "id":  "pe-11.2",
                                                                       "label":  "PE-11(2)",
                                                                       "title":  "Alternate Power Supply â€” Self-contained",
                                                                       "description":  "Provide an alternate power supply for the system that is activated {{ insert: param, pe-11.02_odp.01 }} and that is: Self-contained; Not reliant on external power generation; and Capable of maintaining {{ insert: param, pe-11.02_odp.02 }} in the event of an..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-12",
                                              "label":  "PE-12",
                                              "title":  "Emergency Lighting",
                                              "description":  "Employ and maintain automatic emergency lighting for the system that activates in the event of a power outage or disruption and that covers emergency exits and evacuation routes within the facility.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-12.1",
                                                                       "label":  "PE-12(1)",
                                                                       "title":  "Essential Mission and Business Functions",
                                                                       "description":  "Provide emergency lighting for all areas within the facility supporting essential mission and business functions."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-13",
                                              "label":  "PE-13",
                                              "title":  "Fire Protection",
                                              "description":  "Employ and maintain fire detection and suppression systems that are supported by an independent energy source.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-13.1",
                                                                       "label":  "PE-13(1)",
                                                                       "title":  "Detection Systems â€” Automatic Activation and Notification",
                                                                       "description":  "Employ fire detection systems that activate automatically and notify {{ insert: param, pe-13.01_odp.01 }} and {{ insert: param, pe-13.01_odp.02 }} in the event of a fire."
                                                                   },
                                                                   {
                                                                       "id":  "pe-13.2",
                                                                       "label":  "PE-13(2)",
                                                                       "title":  "Suppression Systems â€” Automatic Activation and Notification",
                                                                       "description":  "Employ fire suppression systems that activate automatically and notify {{ insert: param, pe-13.02_odp.01 }} and {{ insert: param, pe-13.02_odp.02 }} ; and Employ an automatic fire suppression capability when the facility is not staffed on a continuous basis."
                                                                   },
                                                                   {
                                                                       "id":  "pe-13.3",
                                                                       "label":  "PE-13(3)",
                                                                       "title":  "Automatic Fire Suppression",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "pe-13.4",
                                                                       "label":  "PE-13(4)",
                                                                       "title":  "Inspections",
                                                                       "description":  "Ensure that the facility undergoes {{ insert: param, pe-13.04_odp.01 }} fire protection inspections by authorized and qualified inspectors and identified deficiencies are resolved within {{ insert: param, pe-13.04_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-14",
                                              "label":  "PE-14",
                                              "title":  "Environmental Controls",
                                              "description":  "Maintain {{ insert: param, pe-14_odp.01 }} levels within the facility where the system resides at {{ insert: param, pe-14_odp.03 }} ; and Monitor environmental control levels {{ insert: param, pe-14_odp.04 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-14.1",
                                                                       "label":  "PE-14(1)",
                                                                       "title":  "Automatic Controls",
                                                                       "description":  "Employ the following automatic environmental controls in the facility to prevent fluctuations potentially harmful to the system: {{ insert: param, pe-14.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "pe-14.2",
                                                                       "label":  "PE-14(2)",
                                                                       "title":  "Monitoring with Alarms and Notifications",
                                                                       "description":  "Employ environmental control monitoring that provides an alarm or notification of changes potentially harmful to personnel or equipment to {{ insert: param, pe-14.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-15",
                                              "label":  "PE-15",
                                              "title":  "Water Damage Protection",
                                              "description":  "Protect the system from damage resulting from water leakage by providing master shutoff or isolation valves that are accessible, working properly, and known to key personnel.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-15.1",
                                                                       "label":  "PE-15(1)",
                                                                       "title":  "Automation Support",
                                                                       "description":  "Detect the presence of water near the system and alert {{ insert: param, pe-15.01_odp.01 }} using {{ insert: param, pe-15.01_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-16",
                                              "label":  "PE-16",
                                              "title":  "Delivery and Removal",
                                              "description":  "Authorize and control {{ insert: param, pe-16_prm_1 }} entering and exiting the facility; and Maintain records of the system components.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-17",
                                              "label":  "PE-17",
                                              "title":  "Alternate Work Site",
                                              "description":  "Determine and document the {{ insert: param, pe-17_odp.01 }} allowed for use by employees; Employ the following controls at alternate work sites: {{ insert: param, pe-17_odp.02 }}; Assess the effectiveness of controls at alternate work sites; and Provide a ...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-18",
                                              "label":  "PE-18",
                                              "title":  "Location of System Components",
                                              "description":  "Position system components within the facility to minimize potential damage from {{ insert: param, pe-18_odp }} and to minimize the opportunity for unauthorized access.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-18.1",
                                                                       "label":  "PE-18(1)",
                                                                       "title":  "Facility Site",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-19",
                                              "label":  "PE-19",
                                              "title":  "Information Leakage",
                                              "description":  "Protect the system from information leakage due to electromagnetic signals emanations.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pe-19.1",
                                                                       "label":  "PE-19(1)",
                                                                       "title":  "National Emissions Policies and Procedures",
                                                                       "description":  "Protect system components, associated data communications, and networks in accordance with national Emissions Security policies and procedures based on the security category or classification of the information."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pe-20",
                                              "label":  "PE-20",
                                              "title":  "Asset Monitoring and Tracking",
                                              "description":  "Employ {{ insert: param, pe-20_odp.01 }} to track and monitor the location and movement of {{ insert: param, pe-20_odp.02 }} within {{ insert: param, pe-20_odp.03 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-21",
                                              "label":  "PE-21",
                                              "title":  "Electromagnetic Pulse Protection",
                                              "description":  "Employ {{ insert: param, pe-21_odp.01 }} against electromagnetic pulse damage for {{ insert: param, pe-21_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-22",
                                              "label":  "PE-22",
                                              "title":  "Component Marking",
                                              "description":  "Mark {{ insert: param, pe-22_odp }} indicating the impact level or classification level of the information permitted to be processed, stored, or transmitted by the hardware component.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pe-23",
                                              "label":  "PE-23",
                                              "title":  "Facility Location",
                                              "description":  "Plan the location or site of the facility where the system resides considering physical and environmental hazards; and For existing facilities, consider the physical and environmental hazards in the organizational risk management strategy.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "pl",
                         "label":  "PL",
                         "title":  "Planning",
                         "controls":  [
                                          {
                                              "id":  "pl-1",
                                              "label":  "PL-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, pl-1_prm_1 }}: Designate an {{ insert: param, pl-01_odp.04 }} to manage the development, documentation, and dissemination of the planning policy and procedures; and Review and update the current planning:",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-2",
                                              "label":  "PL-2",
                                              "title":  "System Security and Privacy Plans",
                                              "description":  "Develop security and privacy plans for the system that: Distribute copies of the plans and communicate subsequent changes to the plans to {{ insert: param, pl-02_odp.02 }}; Review the plans {{ insert: param, pl-02_odp.03 }}; Update the plans to address chan...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pl-2.1",
                                                                       "label":  "PL-2(1)",
                                                                       "title":  "Concept of Operations",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "pl-2.2",
                                                                       "label":  "PL-2(2)",
                                                                       "title":  "Functional Architecture",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "pl-2.3",
                                                                       "label":  "PL-2(3)",
                                                                       "title":  "Plan and Coordinate with Other Organizational Entities",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pl-3",
                                              "label":  "PL-3",
                                              "title":  "System Security Plan Update",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-4",
                                              "label":  "PL-4",
                                              "title":  "Rules of Behavior",
                                              "description":  "Establish and provide to individuals requiring access to the system, the rules that describe their responsibilities and expected behavior for information and system usage, security, and privacy; Receive a documented acknowledgment from such individuals, ind...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pl-4.1",
                                                                       "label":  "PL-4(1)",
                                                                       "title":  "Social Media and External Site/Application Usage Restrictions",
                                                                       "description":  "Include in the rules of behavior, restrictions on: Use of social media, social networking sites, and external sites/applications; Posting organizational information on public websites; and Use of organization-provided identifiers (e.g., email addresses) and..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pl-5",
                                              "label":  "PL-5",
                                              "title":  "Privacy Impact Assessment",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-6",
                                              "label":  "PL-6",
                                              "title":  "Security-related Activity Planning",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-7",
                                              "label":  "PL-7",
                                              "title":  "Concept of Operations",
                                              "description":  "Develop a Concept of Operations (CONOPS) for the system describing how the organization intends to operate the system from the perspective of information security and privacy; and Review and update the CONOPS {{ insert: param, pl-07_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-8",
                                              "label":  "PL-8",
                                              "title":  "Security and Privacy Architectures",
                                              "description":  "Develop security and privacy architectures for the system that: Review and update the architectures {{ insert: param, pl-08_odp }} to reflect changes in the enterprise architecture; and Reflect planned architecture changes in security and privacy plans, Con...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pl-8.1",
                                                                       "label":  "PL-8(1)",
                                                                       "title":  "Defense in Depth",
                                                                       "description":  "Design the security and privacy architectures for the system using a defense-in-depth approach that: Allocates {{ insert: param, pl-08.01_odp.01 }} to {{ insert: param, pl-08.01_odp.02 }} ; and Ensures that the allocated controls operate in a coordinated an..."
                                                                   },
                                                                   {
                                                                       "id":  "pl-8.2",
                                                                       "label":  "PL-8(2)",
                                                                       "title":  "Supplier Diversity",
                                                                       "description":  "Require that {{ insert: param, pl-08.02_odp.01 }} allocated to {{ insert: param, pl-08.02_odp.02 }} are obtained from different suppliers."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pl-9",
                                              "label":  "PL-9",
                                              "title":  "Central Management",
                                              "description":  "Centrally manage {{ insert: param, pl-09_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-10",
                                              "label":  "PL-10",
                                              "title":  "Baseline Selection",
                                              "description":  "Select a control baseline for the system.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pl-11",
                                              "label":  "PL-11",
                                              "title":  "Baseline Tailoring",
                                              "description":  "Tailor the selected control baseline by applying specified tailoring actions.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "pm",
                         "label":  "PM",
                         "title":  "Program Management",
                         "controls":  [
                                          {
                                              "id":  "pm-1",
                                              "label":  "PM-1",
                                              "title":  "Information Security Program Plan",
                                              "description":  "Develop and disseminate an organization-wide information security program plan that: Review and update the organization-wide information security program plan {{ insert: param, pm-01_odp.01 }} and following {{ insert: param, pm-01_odp.02 }} ; and Protect th...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-2",
                                              "label":  "PM-2",
                                              "title":  "Information Security Program Leadership Role",
                                              "description":  "Appoint a senior agency information security officer with the mission and resources to coordinate, develop, implement, and maintain an organization-wide information security program.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-3",
                                              "label":  "PM-3",
                                              "title":  "Information Security and Privacy Resources",
                                              "description":  "Include the resources needed to implement the information security and privacy programs in capital planning and investment requests and document all exceptions to this requirement; Prepare documentation required for addressing information security and priva...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-4",
                                              "label":  "PM-4",
                                              "title":  "Plan of Action and Milestones Process",
                                              "description":  "Implement a process to ensure that plans of action and milestones for the information security, privacy, and supply chain risk management programs and associated organizational systems: Review plans of action and milestones for consistency with the organiza...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-5",
                                              "label":  "PM-5",
                                              "title":  "System Inventory",
                                              "description":  "Develop and update {{ insert: param, pm-05_odp }} an inventory of organizational systems.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pm-5.1",
                                                                       "label":  "PM-5(1)",
                                                                       "title":  "Inventory of Personally Identifiable Information",
                                                                       "description":  "Establish, maintain, and update {{ insert: param, pm-05.01_odp }} an inventory of all systems, applications, and projects that process personally identifiable information."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pm-6",
                                              "label":  "PM-6",
                                              "title":  "Measures of Performance",
                                              "description":  "Develop, monitor, and report on the results of information security and privacy measures of performance.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-7",
                                              "label":  "PM-7",
                                              "title":  "Enterprise Architecture",
                                              "description":  "Develop and maintain an enterprise architecture with consideration for information security, privacy, and the resulting risk to organizational operations and assets, individuals, other organizations, and the Nation.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pm-7.1",
                                                                       "label":  "PM-7(1)",
                                                                       "title":  "Offloading",
                                                                       "description":  "Offload {{ insert: param, pm-07.01_odp }} to other systems, system components, or an external provider."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pm-8",
                                              "label":  "PM-8",
                                              "title":  "Critical Infrastructure Plan",
                                              "description":  "Address information security and privacy issues in the development, documentation, and updating of a critical infrastructure and key resources protection plan.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-9",
                                              "label":  "PM-9",
                                              "title":  "Risk Management Strategy",
                                              "description":  "Develops a comprehensive strategy to manage: Implement the risk management strategy consistently across the organization; and Review and update the risk management strategy {{ insert: param, pm-09_odp }} or as required, to address organizational changes.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-10",
                                              "label":  "PM-10",
                                              "title":  "Authorization Process",
                                              "description":  "Manage the security and privacy state of organizational systems and the environments in which those systems operate through authorization processes; Designate individuals to fulfill specific roles and responsibilities within the organizational risk manageme...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-11",
                                              "label":  "PM-11",
                                              "title":  "Mission and Business Process Definition",
                                              "description":  "Define organizational mission and business processes with consideration for information security and privacy and the resulting risk to organizational operations, organizational assets, individuals, other organizations, and the Nation; and Determine informat...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-12",
                                              "label":  "PM-12",
                                              "title":  "Insider Threat Program",
                                              "description":  "Implement an insider threat program that includes a cross-discipline insider threat incident handling team.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-13",
                                              "label":  "PM-13",
                                              "title":  "Security and Privacy Workforce",
                                              "description":  "Establish a security and privacy workforce development and improvement program.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-14",
                                              "label":  "PM-14",
                                              "title":  "Testing, Training, and Monitoring",
                                              "description":  "Implement a process for ensuring that organizational plans for conducting security and privacy testing, training, and monitoring activities associated with organizational systems: Review testing, training, and monitoring plans for consistency with the organ...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-15",
                                              "label":  "PM-15",
                                              "title":  "Security and Privacy Groups and Associations",
                                              "description":  "Establish and institutionalize contact with selected groups and associations within the security and privacy communities: To facilitate ongoing security and privacy education and training for organizational personnel; To maintain currency with recommended s...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-16",
                                              "label":  "PM-16",
                                              "title":  "Threat Awareness Program",
                                              "description":  "Implement a threat awareness program that includes a cross-organization information-sharing capability for threat intelligence.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pm-16.1",
                                                                       "label":  "PM-16(1)",
                                                                       "title":  "Automated Means for Sharing Threat Intelligence",
                                                                       "description":  "Employ automated mechanisms to maximize the effectiveness of sharing threat intelligence information."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pm-17",
                                              "label":  "PM-17",
                                              "title":  "Protecting Controlled Unclassified Information on External Systems",
                                              "description":  "Establish policy and procedures to ensure that requirements for the protection of controlled unclassified information that is processed, stored or transmitted on external systems, are implemented in accordance with applicable laws, executive orders, directi...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-18",
                                              "label":  "PM-18",
                                              "title":  "Privacy Program Plan",
                                              "description":  "Develop and disseminate an organization-wide privacy program plan that provides an overview of the agencyâ€™s privacy program, and: Update the plan {{ insert: param, pm-18_odp }} and to address changes in federal privacy laws and policy and organizational c...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-19",
                                              "label":  "PM-19",
                                              "title":  "Privacy Program Leadership Role",
                                              "description":  "Appoint a senior agency official for privacy with the authority, mission, accountability, and resources to coordinate, develop, and implement, applicable privacy requirements and manage privacy risks through the organization-wide privacy program.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-20",
                                              "label":  "PM-20",
                                              "title":  "Dissemination of Privacy Program Information",
                                              "description":  "Maintain a central resource webpage on the organizationâ€™s principal public website that serves as a central source of information about the organizationâ€™s privacy program and that: Ensures that the public has access to information about organizational p...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pm-20.1",
                                                                       "label":  "PM-20(1)",
                                                                       "title":  "Privacy Policies on Websites, Applications, and Digital Services",
                                                                       "description":  "Develop and post privacy policies on all external-facing websites, mobile applications, and other digital services, that: Are written in plain language and organized in a way that is easy to understand and navigate; Provide information needed by the public ..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pm-21",
                                              "label":  "PM-21",
                                              "title":  "Accounting of Disclosures",
                                              "description":  "Develop and maintain an accurate accounting of disclosures of personally identifiable information, including: Retain the accounting of disclosures for the length of the time the personally identifiable information is maintained or five years after the discl...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-22",
                                              "label":  "PM-22",
                                              "title":  "Personally Identifiable Information Quality Management",
                                              "description":  "Develop and document organization-wide policies and procedures for: Reviewing for the accuracy, relevance, timeliness, and completeness of personally identifiable information across the information life cycle; Correcting or deleting inaccurate or outdated p...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-23",
                                              "label":  "PM-23",
                                              "title":  "Data Governance Body",
                                              "description":  "Establish a Data Governance Body consisting of {{ insert: param, pm-23_odp.01 }} with {{ insert: param, pm-23_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-24",
                                              "label":  "PM-24",
                                              "title":  "Data Integrity Board",
                                              "description":  "Establish a Data Integrity Board to: Review proposals to conduct or participate in a matching program; and Conduct an annual review of all matching programs in which the agency has participated.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-25",
                                              "label":  "PM-25",
                                              "title":  "Minimization of Personally Identifiable Information Used in Testing, Training, and Research",
                                              "description":  "Develop, document, and implement policies and procedures that address the use of personally identifiable information for internal testing, training, and research; Limit or minimize the amount of personally identifiable information used for internal testing,...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-26",
                                              "label":  "PM-26",
                                              "title":  "Complaint Management",
                                              "description":  "Implement a process for receiving and responding to complaints, concerns, or questions from individuals about the organizational security and privacy practices that includes: Mechanisms that are easy to use and readily accessible by the public; All informat...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-27",
                                              "label":  "PM-27",
                                              "title":  "Privacy Reporting",
                                              "description":  "Develop {{ insert: param, pm-27_odp.01 }} and disseminate to: Review and update privacy reports {{ insert: param, pm-27_odp.04 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-28",
                                              "label":  "PM-28",
                                              "title":  "Risk Framing",
                                              "description":  "Identify and document: Distribute the results of risk framing activities to {{ insert: param, pm-28_odp.01 }} ; and Review and update risk framing considerations {{ insert: param, pm-28_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-29",
                                              "label":  "PM-29",
                                              "title":  "Risk Management Program Leadership Roles",
                                              "description":  "Appoint a Senior Accountable Official for Risk Management to align organizational information security and privacy management processes with strategic, operational, and budgetary planning processes; and Establish a Risk Executive (function) to view and anal...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-30",
                                              "label":  "PM-30",
                                              "title":  "Supply Chain Risk Management Strategy",
                                              "description":  "Develop an organization-wide strategy for managing supply chain risks associated with the development, acquisition, maintenance, and disposal of systems, system components, and system services; Implement the supply chain risk management strategy consistentl...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pm-30.1",
                                                                       "label":  "PM-30(1)",
                                                                       "title":  "Suppliers of Critical or Mission-essential Items",
                                                                       "description":  "Identify, prioritize, and assess suppliers of critical or mission-essential technologies, products, and services."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pm-31",
                                              "label":  "PM-31",
                                              "title":  "Continuous Monitoring Strategy",
                                              "description":  "Develop an organization-wide continuous monitoring strategy and implement continuous monitoring programs that include: Establishing the following organization-wide metrics to be monitored: {{ insert: param, pm-31_odp.01 }}; Establishing {{ insert: param, pm...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pm-32",
                                              "label":  "PM-32",
                                              "title":  "Purposing",
                                              "description":  "Analyze {{ insert: param, pm-32_odp }} supporting mission essential services or functions to ensure that the information resources are being used consistent with their intended purpose.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "ps",
                         "label":  "PS",
                         "title":  "Personnel Security",
                         "controls":  [
                                          {
                                              "id":  "ps-1",
                                              "label":  "PS-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ps-1_prm_1 }}: Designate an {{ insert: param, ps-01_odp.04 }} to manage the development, documentation, and dissemination of the personnel security policy and procedures; and Review and update the curr...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ps-2",
                                              "label":  "PS-2",
                                              "title":  "Position Risk Designation",
                                              "description":  "Assign a risk designation to all organizational positions; Establish screening criteria for individuals filling those positions; and Review and update position risk designations {{ insert: param, ps-02_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ps-3",
                                              "label":  "PS-3",
                                              "title":  "Personnel Screening",
                                              "description":  "Screen individuals prior to authorizing access to the system; and Rescreen individuals in accordance with {{ insert: param, ps-3_prm_1 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ps-3.1",
                                                                       "label":  "PS-3(1)",
                                                                       "title":  "Classified Information",
                                                                       "description":  "Verify that individuals accessing a system processing, storing, or transmitting classified information are cleared and indoctrinated to the highest classification level of the information to which they have access on the system."
                                                                   },
                                                                   {
                                                                       "id":  "ps-3.2",
                                                                       "label":  "PS-3(2)",
                                                                       "title":  "Formal Indoctrination",
                                                                       "description":  "Verify that individuals accessing a system processing, storing, or transmitting types of classified information that require formal indoctrination, are formally indoctrinated for all the relevant types of information to which they have access on the system."
                                                                   },
                                                                   {
                                                                       "id":  "ps-3.3",
                                                                       "label":  "PS-3(3)",
                                                                       "title":  "Information Requiring Special Protective Measures",
                                                                       "description":  "Verify that individuals accessing a system processing, storing, or transmitting information requiring special protection: Have valid access authorizations that are demonstrated by assigned official government duties; and Satisfy {{ insert: param, ps-03.03_o..."
                                                                   },
                                                                   {
                                                                       "id":  "ps-3.4",
                                                                       "label":  "PS-3(4)",
                                                                       "title":  "Citizenship Requirements",
                                                                       "description":  "Verify that individuals accessing a system processing, storing, or transmitting {{ insert: param, ps-03.04_odp.01 }} meet {{ insert: param, ps-03.04_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ps-4",
                                              "label":  "PS-4",
                                              "title":  "Personnel Termination",
                                              "description":  "Upon termination of individual employment: Disable system access within {{ insert: param, ps-04_odp.01 }}; Terminate or revoke any authenticators and credentials associated with the individual; Conduct exit interviews that include a discussion of {{ insert:...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ps-4.1",
                                                                       "label":  "PS-4(1)",
                                                                       "title":  "Post-employment Requirements",
                                                                       "description":  "Notify terminated individuals of applicable, legally binding post-employment requirements for the protection of organizational information; and Require terminated individuals to sign an acknowledgment of post-employment requirements as part of the organizat..."
                                                                   },
                                                                   {
                                                                       "id":  "ps-4.2",
                                                                       "label":  "PS-4(2)",
                                                                       "title":  "Automated Actions",
                                                                       "description":  "Use {{ insert: param, ps-04.02_odp.01 }} to {{ insert: param, ps-04.02_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ps-5",
                                              "label":  "PS-5",
                                              "title":  "Personnel Transfer",
                                              "description":  "Review and confirm ongoing operational need for current logical and physical access authorizations to systems and facilities when individuals are reassigned or transferred to other positions within the organization; Initiate {{ insert: param, ps-05_odp.01 }...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ps-6",
                                              "label":  "PS-6",
                                              "title":  "Access Agreements",
                                              "description":  "Develop and document access agreements for organizational systems; Review and update the access agreements {{ insert: param, ps-06_odp.01 }} ; and Verify that individuals requiring access to organizational information and systems:",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ps-6.1",
                                                                       "label":  "PS-6(1)",
                                                                       "title":  "Information Requiring Special Protection",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ps-6.2",
                                                                       "label":  "PS-6(2)",
                                                                       "title":  "Classified Information Requiring Special Protection",
                                                                       "description":  "Verify that access to classified information requiring special protection is granted only to individuals who: Have a valid access authorization that is demonstrated by assigned official government duties; Satisfy associated personnel security criteria; and ..."
                                                                   },
                                                                   {
                                                                       "id":  "ps-6.3",
                                                                       "label":  "PS-6(3)",
                                                                       "title":  "Post-employment Requirements",
                                                                       "description":  "Notify individuals of applicable, legally binding post-employment requirements for protection of organizational information; and Require individuals to sign an acknowledgment of these requirements, if applicable, as part of granting initial access to covere..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ps-7",
                                              "label":  "PS-7",
                                              "title":  "External Personnel Security",
                                              "description":  "Establish personnel security requirements, including security roles and responsibilities for external providers; Require external providers to comply with personnel security policies and procedures established by the organization; Document personnel securit...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ps-8",
                                              "label":  "PS-8",
                                              "title":  "Personnel Sanctions",
                                              "description":  "Employ a formal sanctions process for individuals failing to comply with established information security and privacy policies and procedures; and Notify {{ insert: param, ps-08_odp.01 }} within {{ insert: param, ps-08_odp.02 }} when a formal employee sanct...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ps-9",
                                              "label":  "PS-9",
                                              "title":  "Position Descriptions",
                                              "description":  "Incorporate security and privacy roles and responsibilities into organizational position descriptions.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "pt",
                         "label":  "PT",
                         "title":  "Personally Identifiable Information Processing and Transparency",
                         "controls":  [
                                          {
                                              "id":  "pt-1",
                                              "label":  "PT-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, pt-1_prm_1 }}: Designate an {{ insert: param, pt-01_odp.04 }} to manage the development, documentation, and dissemination of the personally identifiable information processing and transparency policy a...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "pt-2",
                                              "label":  "PT-2",
                                              "title":  "Authority to Process Personally Identifiable Information",
                                              "description":  "Determine and document the {{ insert: param, pt-02_odp.01 }} that permits the {{ insert: param, pt-02_odp.02 }} of personally identifiable information; and Restrict the {{ insert: param, pt-02_odp.03 }} of personally identifiable information to only that wh...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pt-2.1",
                                                                       "label":  "PT-2(1)",
                                                                       "title":  "Data Tagging",
                                                                       "description":  "Attach data tags containing {{ insert: param, pt-02.01_odp.01 }} to {{ insert: param, pt-02.01_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "pt-2.2",
                                                                       "label":  "PT-2(2)",
                                                                       "title":  "Automation",
                                                                       "description":  "Manage enforcement of the authorized processing of personally identifiable information using {{ insert: param, pt-02.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pt-3",
                                              "label":  "PT-3",
                                              "title":  "Personally Identifiable Information Processing Purposes",
                                              "description":  "Identify and document the {{ insert: param, pt-03_odp.01 }} for processing personally identifiable information; Describe the purpose(s) in the public privacy notices and policies of the organization; Restrict the {{ insert: param, pt-03_odp.02 }} of persona...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pt-3.1",
                                                                       "label":  "PT-3(1)",
                                                                       "title":  "Data Tagging",
                                                                       "description":  "Attach data tags containing the following purposes to {{ insert: param, pt-03.01_odp.02 }}: {{ insert: param, pt-03.01_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "pt-3.2",
                                                                       "label":  "PT-3(2)",
                                                                       "title":  "Automation",
                                                                       "description":  "Track processing purposes of personally identifiable information using {{ insert: param, pt-03.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pt-4",
                                              "label":  "PT-4",
                                              "title":  "Consent",
                                              "description":  "Implement {{ insert: param, pt-04_odp }} for individuals to consent to the processing of their personally identifiable information prior to its collection that facilitate individualsâ€™ informed decision-making.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pt-4.1",
                                                                       "label":  "PT-4(1)",
                                                                       "title":  "Tailored Consent",
                                                                       "description":  "Provide {{ insert: param, pt-04.01_odp }} to allow individuals to tailor processing permissions to selected elements of personally identifiable information."
                                                                   },
                                                                   {
                                                                       "id":  "pt-4.2",
                                                                       "label":  "PT-4(2)",
                                                                       "title":  "Just-in-time Consent",
                                                                       "description":  "Present {{ insert: param, pt-04.02_odp.01 }} to individuals at {{ insert: param, pt-04.02_odp.02 }} and in conjunction with {{ insert: param, pt-04.02_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "pt-4.3",
                                                                       "label":  "PT-4(3)",
                                                                       "title":  "Revocation",
                                                                       "description":  "Implement {{ insert: param, pt-04.03_odp }} for individuals to revoke consent to the processing of their personally identifiable information."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pt-5",
                                              "label":  "PT-5",
                                              "title":  "Privacy Notice",
                                              "description":  "Provide notice to individuals about the processing of personally identifiable information that: Is available to individuals upon first interacting with an organization, and subsequently at {{ insert: param, pt-05_odp.01 }}; Is clear and easy-to-understand, ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pt-5.1",
                                                                       "label":  "PT-5(1)",
                                                                       "title":  "Just-in-time Notice",
                                                                       "description":  "Present notice of personally identifiable information processing to individuals at a time and location where the individual provides personally identifiable information or in conjunction with a data action, or {{ insert: param, pt-05.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "pt-5.2",
                                                                       "label":  "PT-5(2)",
                                                                       "title":  "Privacy Act Statements",
                                                                       "description":  "Include Privacy Act statements on forms that collect information that will be maintained in a Privacy Act system of records, or provide Privacy Act statements on separate forms that can be retained by individuals."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pt-6",
                                              "label":  "PT-6",
                                              "title":  "System of Records Notice",
                                              "description":  "For systems that process information that will be maintained in a Privacy Act system of records: Draft system of records notices in accordance with OMB guidance and submit new and significantly modified system of records notices to the OMB and appropriate c...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pt-6.1",
                                                                       "label":  "PT-6(1)",
                                                                       "title":  "Routine Uses",
                                                                       "description":  "Review all routine uses published in the system of records notice at {{ insert: param, pt-06.01_odp }} to ensure continued accuracy, and to ensure that routine uses continue to be compatible with the purpose for which the information was collected."
                                                                   },
                                                                   {
                                                                       "id":  "pt-6.2",
                                                                       "label":  "PT-6(2)",
                                                                       "title":  "Exemption Rules",
                                                                       "description":  "Review all Privacy Act exemptions claimed for the system of records at {{ insert: param, pt-06.02_odp }} to ensure they remain appropriate and necessary in accordance with law, that they have been promulgated as regulations, and that they are accurately des..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pt-7",
                                              "label":  "PT-7",
                                              "title":  "Specific Categories of Personally Identifiable Information",
                                              "description":  "Apply {{ insert: param, pt-07_odp }} for specific categories of personally identifiable information.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "pt-7.1",
                                                                       "label":  "PT-7(1)",
                                                                       "title":  "Social Security Numbers",
                                                                       "description":  "When a system processes Social Security numbers: Eliminate unnecessary collection, maintenance, and use of Social Security numbers, and explore alternatives to their use as a personal identifier; Do not deny any individual any right, benefit, or privilege p..."
                                                                   },
                                                                   {
                                                                       "id":  "pt-7.2",
                                                                       "label":  "PT-7(2)",
                                                                       "title":  "First Amendment Information",
                                                                       "description":  "Prohibit the processing of information describing how any individual exercises rights guaranteed by the First Amendment unless expressly authorized by statute or by the individual or unless pertinent to and within the scope of an authorized law enforcement ..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "pt-8",
                                              "label":  "PT-8",
                                              "title":  "Computer Matching Requirements",
                                              "description":  "When a system or organization processes information for the purpose of conducting a matching program: Obtain approval from the Data Integrity Board to conduct the matching program; Develop and enter into a computer matching agreement; Publish a matching not...",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "ra",
                         "label":  "RA",
                         "title":  "Risk Assessment",
                         "controls":  [
                                          {
                                              "id":  "ra-1",
                                              "label":  "RA-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, ra-1_prm_1 }}: Designate an {{ insert: param, ra-01_odp.04 }} to manage the development, documentation, and dissemination of the risk assessment policy and procedures; and Review and update the current...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ra-2",
                                              "label":  "RA-2",
                                              "title":  "Security Categorization",
                                              "description":  "Categorize the system and information it processes, stores, and transmits; Document the security categorization results, including supporting rationale, in the security plan for the system; and Verify that the authorizing official or authorizing official de...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ra-2.1",
                                                                       "label":  "RA-2(1)",
                                                                       "title":  "Impact-level Prioritization",
                                                                       "description":  "Conduct an impact-level prioritization of organizational systems to obtain additional granularity on system impact levels."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ra-3",
                                              "label":  "RA-3",
                                              "title":  "Risk Assessment",
                                              "description":  "Conduct a risk assessment, including: Integrate risk assessment results and risk management decisions from the organization and mission or business process perspectives with system-level risk assessments; Document risk assessment results in {{ insert: param...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ra-3.1",
                                                                       "label":  "RA-3(1)",
                                                                       "title":  "Supply Chain Risk Assessment",
                                                                       "description":  "Assess supply chain risks associated with {{ insert: param, ra-03.01_odp.01 }} ; and Update the supply chain risk assessment {{ insert: param, ra-03.01_odp.02 }} , when there are significant changes to the relevant supply chain, or when changes to the syste..."
                                                                   },
                                                                   {
                                                                       "id":  "ra-3.2",
                                                                       "label":  "RA-3(2)",
                                                                       "title":  "Use of All-source Intelligence",
                                                                       "description":  "Use all-source intelligence to assist in the analysis of risk."
                                                                   },
                                                                   {
                                                                       "id":  "ra-3.3",
                                                                       "label":  "RA-3(3)",
                                                                       "title":  "Dynamic Threat Awareness",
                                                                       "description":  "Determine the current cyber threat environment on an ongoing basis using {{ insert: param, ra-03.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ra-3.4",
                                                                       "label":  "RA-3(4)",
                                                                       "title":  "Predictive Cyber Analytics",
                                                                       "description":  "Employ the following advanced automation and analytics capabilities to predict and identify risks to {{ insert: param, ra-03.04_odp.02 }}: {{ insert: param, ra-3.4_prm_2 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ra-4",
                                              "label":  "RA-4",
                                              "title":  "Risk Assessment Update",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ra-5",
                                              "label":  "RA-5",
                                              "title":  "Vulnerability Monitoring and Scanning",
                                              "description":  "Monitor and scan for vulnerabilities in the system and hosted applications {{ insert: param, ra-5_prm_1 }} and when new vulnerabilities potentially affecting the system are identified and reported; Employ vulnerability monitoring tools and techniques that f...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "ra-5.1",
                                                                       "label":  "RA-5(1)",
                                                                       "title":  "Update Tool Capability",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.2",
                                                                       "label":  "RA-5(2)",
                                                                       "title":  "Update Vulnerabilities to Be Scanned",
                                                                       "description":  "Update the system vulnerabilities to be scanned {{ insert: param, ra-05.02_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.3",
                                                                       "label":  "RA-5(3)",
                                                                       "title":  "Breadth and Depth of Coverage",
                                                                       "description":  "Define the breadth and depth of vulnerability scanning coverage."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.4",
                                                                       "label":  "RA-5(4)",
                                                                       "title":  "Discoverable Information",
                                                                       "description":  "Determine information about the system that is discoverable and take {{ insert: param, ra-05.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.5",
                                                                       "label":  "RA-5(5)",
                                                                       "title":  "Privileged Access",
                                                                       "description":  "Implement privileged access authorization to {{ insert: param, ra-05.05_odp.01 }} for {{ insert: param, ra-05.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.6",
                                                                       "label":  "RA-5(6)",
                                                                       "title":  "Automated Trend Analyses",
                                                                       "description":  "Compare the results of multiple vulnerability scans using {{ insert: param, ra-05.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.7",
                                                                       "label":  "RA-5(7)",
                                                                       "title":  "Automated Detection and Notification of Unauthorized Components",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.8",
                                                                       "label":  "RA-5(8)",
                                                                       "title":  "Review Historic Audit Logs",
                                                                       "description":  "Review historic audit logs to determine if a vulnerability identified in a {{ insert: param, ra-05.08_odp.01 }} has been previously exploited within an {{ insert: param, ra-05.08_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.9",
                                                                       "label":  "RA-5(9)",
                                                                       "title":  "Penetration Testing and Analyses",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.10",
                                                                       "label":  "RA-5(10)",
                                                                       "title":  "Correlate Scanning Information",
                                                                       "description":  "Correlate the output from vulnerability scanning tools to determine the presence of multi-vulnerability and multi-hop attack vectors."
                                                                   },
                                                                   {
                                                                       "id":  "ra-5.11",
                                                                       "label":  "RA-5(11)",
                                                                       "title":  "Public Disclosure Program",
                                                                       "description":  "Establish a public reporting channel for receiving reports of vulnerabilities in organizational systems and system components."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "ra-6",
                                              "label":  "RA-6",
                                              "title":  "Technical Surveillance Countermeasures Survey",
                                              "description":  "Employ a technical surveillance countermeasures survey at {{ insert: param, ra-06_odp.01 }} {{ insert: param, ra-06_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ra-7",
                                              "label":  "RA-7",
                                              "title":  "Risk Response",
                                              "description":  "Respond to findings from security and privacy assessments, monitoring, and audits in accordance with organizational risk tolerance.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ra-8",
                                              "label":  "RA-8",
                                              "title":  "Privacy Impact Assessments",
                                              "description":  "Conduct privacy impact assessments for systems, programs, or other activities before: Developing or procuring information technology that processes personally identifiable information; and Initiating a new collection of personally identifiable information t...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ra-9",
                                              "label":  "RA-9",
                                              "title":  "Criticality Analysis",
                                              "description":  "Identify critical system components and functions by performing a criticality analysis for {{ insert: param, ra-09_odp.01 }} at {{ insert: param, ra-09_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "ra-10",
                                              "label":  "RA-10",
                                              "title":  "Threat Hunting",
                                              "description":  "Establish and maintain a cyber threat hunting capability to: Employ the threat hunting capability {{ insert: param, ra-10_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "sa",
                         "label":  "SA",
                         "title":  "System and Services Acquisition",
                         "controls":  [
                                          {
                                              "id":  "sa-1",
                                              "label":  "SA-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, sa-1_prm_1 }}: Designate an {{ insert: param, sa-01_odp.04 }} to manage the development, documentation, and dissemination of the system and services acquisition policy and procedures; and Review and up...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-2",
                                              "label":  "SA-2",
                                              "title":  "Allocation of Resources",
                                              "description":  "Determine the high-level information security and privacy requirements for the system or system service in mission and business process planning; Determine, document, and allocate the resources required to protect the system or system service as part of the...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-3",
                                              "label":  "SA-3",
                                              "title":  "System Development Life Cycle",
                                              "description":  "Acquire, develop, and manage the system using {{ insert: param, sa-03_odp }} that incorporates information security and privacy considerations; Define and document information security and privacy roles and responsibilities throughout the system development...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-3.1",
                                                                       "label":  "SA-3(1)",
                                                                       "title":  "Manage Preproduction Environment",
                                                                       "description":  "Protect system preproduction environments commensurate with risk throughout the system development life cycle for the system, system component, or system service."
                                                                   },
                                                                   {
                                                                       "id":  "sa-3.2",
                                                                       "label":  "SA-3(2)",
                                                                       "title":  "Use of Live or Operational Data",
                                                                       "description":  "Approve, document, and control the use of live data in preproduction environments for the system, system component, or system service; and Protect preproduction environments for the system, system component, or system service at the same impact or classific..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-3.3",
                                                                       "label":  "SA-3(3)",
                                                                       "title":  "Technology Refresh",
                                                                       "description":  "Plan for and implement a technology refresh schedule for the system throughout the system development life cycle."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-4",
                                              "label":  "SA-4",
                                              "title":  "Acquisition Process",
                                              "description":  "Include the following requirements, descriptions, and criteria, explicitly or by reference, using {{ insert: param, sa-04_odp.01 }} in the acquisition contract for the system, system component, or system service: Security and privacy functional requirements...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-4.1",
                                                                       "label":  "SA-4(1)",
                                                                       "title":  "Functional Properties of Controls",
                                                                       "description":  "Require the developer of the system, system component, or system service to provide a description of the functional properties of the controls to be implemented."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.2",
                                                                       "label":  "SA-4(2)",
                                                                       "title":  "Design and Implementation Information for Controls",
                                                                       "description":  "Require the developer of the system, system component, or system service to provide design and implementation information for the controls that includes: {{ insert: param, sa-04.02_odp.01 }} at {{ insert: param, sa-04.02_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.3",
                                                                       "label":  "SA-4(3)",
                                                                       "title":  "Development Methods, Techniques, and Practices",
                                                                       "description":  "Require the developer of the system, system component, or system service to demonstrate the use of a system development life cycle process that includes: {{ insert: param, sa-04.03_odp.01 }}; {{ insert: param, sa-04.03_odp.02 }} ; and {{ insert: param, sa-0..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.4",
                                                                       "label":  "SA-4(4)",
                                                                       "title":  "Assignment of Components to Systems",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.5",
                                                                       "label":  "SA-4(5)",
                                                                       "title":  "System, Component, and Service Configurations",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Deliver the system, component, or service with {{ insert: param, sa-04.05_odp }} implemented; and Use the configurations as the default for any subsequent system, component, or ser..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.6",
                                                                       "label":  "SA-4(6)",
                                                                       "title":  "Use of Information Assurance Products",
                                                                       "description":  "Employ only government off-the-shelf or commercial off-the-shelf information assurance and information assurance-enabled information technology products that compose an NSA-approved solution to protect classified information when the networks used to transm..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.7",
                                                                       "label":  "SA-4(7)",
                                                                       "title":  "NIAP-approved Protection Profiles ",
                                                                       "description":  "Limit the use of commercially provided information assurance and information assurance-enabled information technology products to those products that have been successfully evaluated against a National Information Assurance partnership (NIAP)-approved Prote..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.8",
                                                                       "label":  "SA-4(8)",
                                                                       "title":  "Continuous Monitoring Plan for Controls",
                                                                       "description":  "Require the developer of the system, system component, or system service to produce a plan for continuous monitoring of control effectiveness that is consistent with the continuous monitoring program of the organization."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.9",
                                                                       "label":  "SA-4(9)",
                                                                       "title":  "Functions, Ports, Protocols, and Services in Use",
                                                                       "description":  "Require the developer of the system, system component, or system service to identify the functions, ports, protocols, and services intended for organizational use."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.10",
                                                                       "label":  "SA-4(10)",
                                                                       "title":  "Use of Approved PIV Products",
                                                                       "description":  "Employ only information technology products on the FIPS 201-approved products list for Personal Identity Verification (PIV) capability implemented within organizational systems."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.11",
                                                                       "label":  "SA-4(11)",
                                                                       "title":  "System of Records",
                                                                       "description":  "Include {{ insert: param, sa-04.11_odp }} in the acquisition contract for the operation of a system of records on behalf of an organization to accomplish an organizational mission or function."
                                                                   },
                                                                   {
                                                                       "id":  "sa-4.12",
                                                                       "label":  "SA-4(12)",
                                                                       "title":  "Data Ownership",
                                                                       "description":  "Include organizational data ownership requirements in the acquisition contract; and Require all data to be removed from the contractorâ€™s system and returned to the organization within {{ insert: param, sa-04.12_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-5",
                                              "label":  "SA-5",
                                              "title":  "System Documentation",
                                              "description":  "Obtain or develop administrator documentation for the system, system component, or system service that describes: Obtain or develop user documentation for the system, system component, or system service that describes: Document attempts to obtain system, sy...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-5.1",
                                                                       "label":  "SA-5(1)",
                                                                       "title":  "Functional Properties of Security Controls",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-5.2",
                                                                       "label":  "SA-5(2)",
                                                                       "title":  "Security-relevant External System Interfaces",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-5.3",
                                                                       "label":  "SA-5(3)",
                                                                       "title":  "High-level Design",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-5.4",
                                                                       "label":  "SA-5(4)",
                                                                       "title":  "Low-level Design",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-5.5",
                                                                       "label":  "SA-5(5)",
                                                                       "title":  "Source Code",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-6",
                                              "label":  "SA-6",
                                              "title":  "Software Usage Restrictions",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-7",
                                              "label":  "SA-7",
                                              "title":  "User-installed Software",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-8",
                                              "label":  "SA-8",
                                              "title":  "Security and Privacy Engineering Principles",
                                              "description":  "Apply the following systems security and privacy engineering principles in the specification, design, development, implementation, and modification of the system and system components: {{ insert: param, sa-8_prm_1 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-8.1",
                                                                       "label":  "SA-8(1)",
                                                                       "title":  "Clear Abstractions",
                                                                       "description":  "Implement the security design principle of clear abstractions."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.2",
                                                                       "label":  "SA-8(2)",
                                                                       "title":  "Least Common Mechanism",
                                                                       "description":  "Implement the security design principle of least common mechanism in {{ insert: param, sa-08.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.3",
                                                                       "label":  "SA-8(3)",
                                                                       "title":  "Modularity and Layering",
                                                                       "description":  "Implement the security design principles of modularity and layering in {{ insert: param, sa-8.3_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.4",
                                                                       "label":  "SA-8(4)",
                                                                       "title":  "Partially Ordered Dependencies",
                                                                       "description":  "Implement the security design principle of partially ordered dependencies in {{ insert: param, sa-08.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.5",
                                                                       "label":  "SA-8(5)",
                                                                       "title":  "Efficiently Mediated Access",
                                                                       "description":  "Implement the security design principle of efficiently mediated access in {{ insert: param, sa-08.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.6",
                                                                       "label":  "SA-8(6)",
                                                                       "title":  "Minimized Sharing",
                                                                       "description":  "Implement the security design principle of minimized sharing in {{ insert: param, sa-08.06_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.7",
                                                                       "label":  "SA-8(7)",
                                                                       "title":  "Reduced Complexity",
                                                                       "description":  "Implement the security design principle of reduced complexity in {{ insert: param, sa-08.07_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.8",
                                                                       "label":  "SA-8(8)",
                                                                       "title":  "Secure Evolvability",
                                                                       "description":  "Implement the security design principle of secure evolvability in {{ insert: param, sa-08.08_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.9",
                                                                       "label":  "SA-8(9)",
                                                                       "title":  "Trusted Components",
                                                                       "description":  "Implement the security design principle of trusted components in {{ insert: param, sa-08.09_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.10",
                                                                       "label":  "SA-8(10)",
                                                                       "title":  "Hierarchical Trust",
                                                                       "description":  "Implement the security design principle of hierarchical trust in {{ insert: param, sa-08.10_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.11",
                                                                       "label":  "SA-8(11)",
                                                                       "title":  "Inverse Modification Threshold",
                                                                       "description":  "Implement the security design principle of inverse modification threshold in {{ insert: param, sa-08.11_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.12",
                                                                       "label":  "SA-8(12)",
                                                                       "title":  "Hierarchical Protection",
                                                                       "description":  "Implement the security design principle of hierarchical protection in {{ insert: param, sa-08.12_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.13",
                                                                       "label":  "SA-8(13)",
                                                                       "title":  "Minimized Security Elements",
                                                                       "description":  "Implement the security design principle of minimized security elements in {{ insert: param, sa-08.13_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.14",
                                                                       "label":  "SA-8(14)",
                                                                       "title":  "Least Privilege",
                                                                       "description":  "Implement the security design principle of least privilege in {{ insert: param, sa-08.14_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.15",
                                                                       "label":  "SA-8(15)",
                                                                       "title":  "Predicate Permission",
                                                                       "description":  "Implement the security design principle of predicate permission in {{ insert: param, sa-08.15_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.16",
                                                                       "label":  "SA-8(16)",
                                                                       "title":  "Self-reliant Trustworthiness",
                                                                       "description":  "Implement the security design principle of self-reliant trustworthiness in {{ insert: param, sa-08.16_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.17",
                                                                       "label":  "SA-8(17)",
                                                                       "title":  "Secure Distributed Composition",
                                                                       "description":  "Implement the security design principle of secure distributed composition in {{ insert: param, sa-08.17_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.18",
                                                                       "label":  "SA-8(18)",
                                                                       "title":  "Trusted Communications Channels",
                                                                       "description":  "Implement the security design principle of trusted communications channels in {{ insert: param, sa-08.18_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.19",
                                                                       "label":  "SA-8(19)",
                                                                       "title":  "Continuous Protection",
                                                                       "description":  "Implement the security design principle of continuous protection in {{ insert: param, sa-08.19_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.20",
                                                                       "label":  "SA-8(20)",
                                                                       "title":  "Secure Metadata Management",
                                                                       "description":  "Implement the security design principle of secure metadata management in {{ insert: param, sa-08.20_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.21",
                                                                       "label":  "SA-8(21)",
                                                                       "title":  "Self-analysis",
                                                                       "description":  "Implement the security design principle of self-analysis in {{ insert: param, sa-08.21_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.22",
                                                                       "label":  "SA-8(22)",
                                                                       "title":  "Accountability and Traceability",
                                                                       "description":  "Implement the security design principle of accountability and traceability in {{ insert: param, sa-8.22_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.23",
                                                                       "label":  "SA-8(23)",
                                                                       "title":  "Secure Defaults",
                                                                       "description":  "Implement the security design principle of secure defaults in {{ insert: param, sa-08.23_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.24",
                                                                       "label":  "SA-8(24)",
                                                                       "title":  "Secure Failure and Recovery",
                                                                       "description":  "Implement the security design principle of secure failure and recovery in {{ insert: param, sa-8.24_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.25",
                                                                       "label":  "SA-8(25)",
                                                                       "title":  "Economic Security",
                                                                       "description":  "Implement the security design principle of economic security in {{ insert: param, sa-08.25_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.26",
                                                                       "label":  "SA-8(26)",
                                                                       "title":  "Performance Security",
                                                                       "description":  "Implement the security design principle of performance security in {{ insert: param, sa-08.26_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.27",
                                                                       "label":  "SA-8(27)",
                                                                       "title":  "Human Factored Security",
                                                                       "description":  "Implement the security design principle of human factored security in {{ insert: param, sa-08.27_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.28",
                                                                       "label":  "SA-8(28)",
                                                                       "title":  "Acceptable Security",
                                                                       "description":  "Implement the security design principle of acceptable security in {{ insert: param, sa-08.28_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.29",
                                                                       "label":  "SA-8(29)",
                                                                       "title":  "Repeatable and Documented Procedures",
                                                                       "description":  "Implement the security design principle of repeatable and documented procedures in {{ insert: param, sa-08.29_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.30",
                                                                       "label":  "SA-8(30)",
                                                                       "title":  "Procedural Rigor",
                                                                       "description":  "Implement the security design principle of procedural rigor in {{ insert: param, sa-08.30_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.31",
                                                                       "label":  "SA-8(31)",
                                                                       "title":  "Secure System Modification",
                                                                       "description":  "Implement the security design principle of secure system modification in {{ insert: param, sa-08.31_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.32",
                                                                       "label":  "SA-8(32)",
                                                                       "title":  "Sufficient Documentation",
                                                                       "description":  "Implement the security design principle of sufficient documentation in {{ insert: param, sa-08.32_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-8.33",
                                                                       "label":  "SA-8(33)",
                                                                       "title":  "Minimization",
                                                                       "description":  "Implement the privacy principle of minimization using {{ insert: param, sa-08.33_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-9",
                                              "label":  "SA-9",
                                              "title":  "External System Services",
                                              "description":  "Require that providers of external system services comply with organizational security and privacy requirements and employ the following controls: {{ insert: param, sa-09_odp.01 }}; Define and document organizational oversight and user roles and responsibil...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-9.1",
                                                                       "label":  "SA-9(1)",
                                                                       "title":  "Risk Assessments and Organizational Approvals",
                                                                       "description":  "Conduct an organizational assessment of risk prior to the acquisition or outsourcing of information security services; and Verify that the acquisition or outsourcing of dedicated information security services is approved by {{ insert: param, sa-09.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.2",
                                                                       "label":  "SA-9(2)",
                                                                       "title":  "Identification of Functions, Ports, Protocols, and Services",
                                                                       "description":  "Require providers of the following external system services to identify the functions, ports, protocols, and other services required for the use of such services: {{ insert: param, sa-09.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.3",
                                                                       "label":  "SA-9(3)",
                                                                       "title":  "Establish and Maintain Trust Relationship with Providers",
                                                                       "description":  "Establish, document, and maintain trust relationships with external service providers based on the following requirements, properties, factors, or conditions: {{ insert: param, sa-9.3_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.4",
                                                                       "label":  "SA-9(4)",
                                                                       "title":  "Consistent Interests of Consumers and Providers",
                                                                       "description":  "Take the following actions to verify that the interests of {{ insert: param, sa-09.04_odp.01 }} are consistent with and reflect organizational interests: {{ insert: param, sa-09.04_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.5",
                                                                       "label":  "SA-9(5)",
                                                                       "title":  "Processing, Storage, and Service Location",
                                                                       "description":  "Restrict the location of {{ insert: param, sa-09.05_odp.01 }} to {{ insert: param, sa-09.05_odp.02 }} based on {{ insert: param, sa-09.05_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.6",
                                                                       "label":  "SA-9(6)",
                                                                       "title":  "Organization-controlled Cryptographic Keys",
                                                                       "description":  "Maintain exclusive control of cryptographic keys for encrypted material stored or transmitted through an external system."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.7",
                                                                       "label":  "SA-9(7)",
                                                                       "title":  "Organization-controlled Integrity Checking",
                                                                       "description":  "Provide the capability to check the integrity of information while it resides in the external system."
                                                                   },
                                                                   {
                                                                       "id":  "sa-9.8",
                                                                       "label":  "SA-9(8)",
                                                                       "title":  "Processing and Storage Location â€” U.S. Jurisdiction",
                                                                       "description":  "Restrict the geographic location of information processing and data storage to facilities located within in the legal jurisdictional boundary of the United States."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-10",
                                              "label":  "SA-10",
                                              "title":  "Developer Configuration Management",
                                              "description":  "Require the developer of the system, system component, or system service to: Perform configuration management during system, component, or service {{ insert: param, sa-10_odp.01 }}; Document, manage, and control the integrity of changes to {{ insert: param,...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-10.1",
                                                                       "label":  "SA-10(1)",
                                                                       "title":  "Software and Firmware Integrity Verification",
                                                                       "description":  "Require the developer of the system, system component, or system service to enable integrity verification of software and firmware components."
                                                                   },
                                                                   {
                                                                       "id":  "sa-10.2",
                                                                       "label":  "SA-10(2)",
                                                                       "title":  "Alternative Configuration Management Processes",
                                                                       "description":  "Provide an alternate configuration management process using organizational personnel in the absence of a dedicated developer configuration management team."
                                                                   },
                                                                   {
                                                                       "id":  "sa-10.3",
                                                                       "label":  "SA-10(3)",
                                                                       "title":  "Hardware Integrity Verification",
                                                                       "description":  "Require the developer of the system, system component, or system service to enable integrity verification of hardware components."
                                                                   },
                                                                   {
                                                                       "id":  "sa-10.4",
                                                                       "label":  "SA-10(4)",
                                                                       "title":  "Trusted Generation",
                                                                       "description":  "Require the developer of the system, system component, or system service to employ tools for comparing newly generated versions of security-relevant hardware descriptions, source code, and object code with previous versions."
                                                                   },
                                                                   {
                                                                       "id":  "sa-10.5",
                                                                       "label":  "SA-10(5)",
                                                                       "title":  "Mapping Integrity for Version Control",
                                                                       "description":  "Require the developer of the system, system component, or system service to maintain the integrity of the mapping between the master build data describing the current version of security-relevant hardware, software, and firmware and the on-site master copy ..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-10.6",
                                                                       "label":  "SA-10(6)",
                                                                       "title":  "Trusted Distribution",
                                                                       "description":  "Require the developer of the system, system component, or system service to execute procedures for ensuring that security-relevant hardware, software, and firmware updates distributed to the organization are exactly as specified by the master copies."
                                                                   },
                                                                   {
                                                                       "id":  "sa-10.7",
                                                                       "label":  "SA-10(7)",
                                                                       "title":  "Security and Privacy Representatives",
                                                                       "description":  "Require {{ insert: param, sa-10.7_prm_1 }} to be included in the {{ insert: param, sa-10.7_prm_2 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-11",
                                              "label":  "SA-11",
                                              "title":  "Developer Testing and Evaluation",
                                              "description":  "Require the developer of the system, system component, or system service, at all post-design stages of the system development life cycle, to: Develop and implement a plan for ongoing security and privacy control assessments; Perform {{ insert: param, sa-11_...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-11.1",
                                                                       "label":  "SA-11(1)",
                                                                       "title":  "Static Code Analysis",
                                                                       "description":  "Require the developer of the system, system component, or system service to employ static code analysis tools to identify common flaws and document the results of the analysis."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.2",
                                                                       "label":  "SA-11(2)",
                                                                       "title":  "Threat Modeling and Vulnerability Analyses",
                                                                       "description":  "Require the developer of the system, system component, or system service to perform threat modeling and vulnerability analyses during development and the subsequent testing and evaluation of the system, component, or service that: Uses the following context..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.3",
                                                                       "label":  "SA-11(3)",
                                                                       "title":  "Independent Verification of Assessment Plans and Evidence",
                                                                       "description":  "Require an independent agent satisfying {{ insert: param, sa-11.03_odp }} to verify the correct implementation of the developer security and privacy assessment plans and the evidence produced during testing and evaluation; and Verify that the independent ag..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.4",
                                                                       "label":  "SA-11(4)",
                                                                       "title":  "Manual Code Reviews",
                                                                       "description":  "Require the developer of the system, system component, or system service to perform a manual code review of {{ insert: param, sa-11.04_odp.01 }} using the following processes, procedures, and/or techniques: {{ insert: param, sa-11.04_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.5",
                                                                       "label":  "SA-11(5)",
                                                                       "title":  "Penetration Testing",
                                                                       "description":  "Require the developer of the system, system component, or system service to perform penetration testing: At the following level of rigor: {{ insert: param, sa-11.5_prm_1 }} ; and Under the following constraints: {{ insert: param, sa-11.05_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.6",
                                                                       "label":  "SA-11(6)",
                                                                       "title":  "Attack Surface Reviews",
                                                                       "description":  "Require the developer of the system, system component, or system service to perform attack surface reviews."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.7",
                                                                       "label":  "SA-11(7)",
                                                                       "title":  "Verify Scope of Testing and Evaluation",
                                                                       "description":  "Require the developer of the system, system component, or system service to verify that the scope of testing and evaluation provides complete coverage of the required controls at the following level of rigor: {{ insert: param, sa-11.7_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.8",
                                                                       "label":  "SA-11(8)",
                                                                       "title":  "Dynamic Code Analysis",
                                                                       "description":  "Require the developer of the system, system component, or system service to employ dynamic code analysis tools to identify common flaws and document the results of the analysis."
                                                                   },
                                                                   {
                                                                       "id":  "sa-11.9",
                                                                       "label":  "SA-11(9)",
                                                                       "title":  "Interactive Application Security Testing",
                                                                       "description":  "Require the developer of the system, system component, or system service to employ interactive application security testing tools to identify flaws and document the results."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-12",
                                              "label":  "SA-12",
                                              "title":  "Supply Chain Protection",
                                              "description":  null,
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-12.1",
                                                                       "label":  "SA-12(1)",
                                                                       "title":  "Acquisition Strategies / Tools / Methods",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.2",
                                                                       "label":  "SA-12(2)",
                                                                       "title":  "Supplier Reviews",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.3",
                                                                       "label":  "SA-12(3)",
                                                                       "title":  "Trusted Shipping and Warehousing",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.4",
                                                                       "label":  "SA-12(4)",
                                                                       "title":  "Diversity of Suppliers",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.5",
                                                                       "label":  "SA-12(5)",
                                                                       "title":  "Limitation of Harm",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.6",
                                                                       "label":  "SA-12(6)",
                                                                       "title":  "Minimizing Procurement Time",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.7",
                                                                       "label":  "SA-12(7)",
                                                                       "title":  "Assessments Prior to Selection / Acceptance / Update",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.8",
                                                                       "label":  "SA-12(8)",
                                                                       "title":  "Use of All-source Intelligence",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.9",
                                                                       "label":  "SA-12(9)",
                                                                       "title":  "Operations Security",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.10",
                                                                       "label":  "SA-12(10)",
                                                                       "title":  "Validate as Genuine and Not Altered",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.11",
                                                                       "label":  "SA-12(11)",
                                                                       "title":  "Penetration Testing / Analysis of Elements, Processes, and Actors",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.12",
                                                                       "label":  "SA-12(12)",
                                                                       "title":  "Inter-organizational Agreements",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.13",
                                                                       "label":  "SA-12(13)",
                                                                       "title":  "Critical Information System Components",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.14",
                                                                       "label":  "SA-12(14)",
                                                                       "title":  "Identity and Traceability",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-12.15",
                                                                       "label":  "SA-12(15)",
                                                                       "title":  "Processes to Address Weaknesses or Deficiencies",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-13",
                                              "label":  "SA-13",
                                              "title":  "Trustworthiness",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-14",
                                              "label":  "SA-14",
                                              "title":  "Criticality Analysis",
                                              "description":  null,
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-14.1",
                                                                       "label":  "SA-14(1)",
                                                                       "title":  "Critical Components with No Viable Alternative Sourcing",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-15",
                                              "label":  "SA-15",
                                              "title":  "Development Process, Standards, and Tools",
                                              "description":  "Require the developer of the system, system component, or system service to follow a documented development process that: Review the development process, standards, tools, tool options, and tool configurations {{ insert: param, sa-15_odp.01 }} to determine ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-15.1",
                                                                       "label":  "SA-15(1)",
                                                                       "title":  "Quality Metrics",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Define quality metrics at the beginning of the development process; and Provide evidence of meeting the quality metrics {{ insert: param, sa-15.01_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.2",
                                                                       "label":  "SA-15(2)",
                                                                       "title":  "Security and Privacy Tracking Tools",
                                                                       "description":  "Require the developer of the system, system component, or system service to select and employ security and privacy tracking tools for use during the development process."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.3",
                                                                       "label":  "SA-15(3)",
                                                                       "title":  "Criticality Analysis",
                                                                       "description":  "Require the developer of the system, system component, or system service to perform a criticality analysis: At the following decision points in the system development life cycle: {{ insert: param, sa-15.03_odp.01 }} ; and At the following level of rigor: {{..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.4",
                                                                       "label":  "SA-15(4)",
                                                                       "title":  "Threat Modeling and Vulnerability Analysis",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.5",
                                                                       "label":  "SA-15(5)",
                                                                       "title":  "Attack Surface Reduction",
                                                                       "description":  "Require the developer of the system, system component, or system service to reduce attack surfaces to {{ insert: param, sa-15.05_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.6",
                                                                       "label":  "SA-15(6)",
                                                                       "title":  "Continuous Improvement",
                                                                       "description":  "Require the developer of the system, system component, or system service to implement an explicit process to continuously improve the development process."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.7",
                                                                       "label":  "SA-15(7)",
                                                                       "title":  "Automated Vulnerability Analysis",
                                                                       "description":  "Require the developer of the system, system component, or system service {{ insert: param, sa-15.07_odp.01 }} to: Perform an automated vulnerability analysis using {{ insert: param, sa-15.07_odp.02 }}; Determine the exploitation potential for discovered vul..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.8",
                                                                       "label":  "SA-15(8)",
                                                                       "title":  "Reuse of Threat and Vulnerability Information",
                                                                       "description":  "Require the developer of the system, system component, or system service to use threat modeling and vulnerability analyses from similar systems, components, or services to inform the current development process."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.9",
                                                                       "label":  "SA-15(9)",
                                                                       "title":  "Use of Live Data",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.10",
                                                                       "label":  "SA-15(10)",
                                                                       "title":  "Incident Response Plan",
                                                                       "description":  "Require the developer of the system, system component, or system service to provide, implement, and test an incident response plan."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.11",
                                                                       "label":  "SA-15(11)",
                                                                       "title":  "Archive System or Component",
                                                                       "description":  "Require the developer of the system or system component to archive the system or component to be released or delivered together with the corresponding evidence supporting the final security and privacy review."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.12",
                                                                       "label":  "SA-15(12)",
                                                                       "title":  "Minimize Personally Identifiable Information",
                                                                       "description":  "Require the developer of the system or system component to minimize the use of personally identifiable information in development and test environments."
                                                                   },
                                                                   {
                                                                       "id":  "sa-15.13",
                                                                       "label":  "SA-15(13)",
                                                                       "title":  "Logging Syntax",
                                                                       "description":  "Require the developer of the system or system component to minimize the use of personally identifiable information in development and test environments."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-16",
                                              "label":  "SA-16",
                                              "title":  "Developer-provided Training",
                                              "description":  "Require the developer of the system, system component, or system service to provide the following training on the correct use and operation of the implemented security and privacy functions, controls, and/or mechanisms: {{ insert: param, sa-16_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-17",
                                              "label":  "SA-17",
                                              "title":  "Developer Security and Privacy Architecture and Design",
                                              "description":  "Require the developer of the system, system component, or system service to produce a design specification and security and privacy architecture that: Is consistent with the organizationâ€™s security and privacy architecture that is an integral part the org...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-17.1",
                                                                       "label":  "SA-17(1)",
                                                                       "title":  "Formal Policy Model",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Produce, as an integral part of the development process, a formal policy model describing the {{ insert: param, sa-17.1_prm_1 }} to be enforced; and Prove that the formal policy mo..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.2",
                                                                       "label":  "SA-17(2)",
                                                                       "title":  "Security-relevant Components",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Define security-relevant hardware, software, and firmware; and Provide a rationale that the definition for security-relevant hardware, software, and firmware is complete."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.3",
                                                                       "label":  "SA-17(3)",
                                                                       "title":  "Formal Correspondence",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Produce, as an integral part of the development process, a formal top-level specification that specifies the interfaces to security-relevant hardware, software, and firmware in ter..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.4",
                                                                       "label":  "SA-17(4)",
                                                                       "title":  "Informal Correspondence",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Produce, as an integral part of the development process, an informal descriptive top-level specification that specifies the interfaces to security-relevant hardware, software, and ..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.5",
                                                                       "label":  "SA-17(5)",
                                                                       "title":  "Conceptually Simple Design",
                                                                       "description":  "Require the developer of the system, system component, or system service to: Design and structure the security-relevant hardware, software, and firmware to use a complete, conceptually simple protection mechanism with precisely defined semantics; and Intern..."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.6",
                                                                       "label":  "SA-17(6)",
                                                                       "title":  "Structure for Testing",
                                                                       "description":  "Require the developer of the system, system component, or system service to structure security-relevant hardware, software, and firmware to facilitate testing."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.7",
                                                                       "label":  "SA-17(7)",
                                                                       "title":  "Structure for Least Privilege",
                                                                       "description":  "Require the developer of the system, system component, or system service to structure security-relevant hardware, software, and firmware to facilitate controlling access with least privilege."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.8",
                                                                       "label":  "SA-17(8)",
                                                                       "title":  "Orchestration",
                                                                       "description":  "Design {{ insert: param, sa-17.08_odp.01 }} with coordinated behavior to implement the following capabilities: {{ insert: param, sa-17.08_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sa-17.9",
                                                                       "label":  "SA-17(9)",
                                                                       "title":  "Design Diversity",
                                                                       "description":  "Use different designs for {{ insert: param, sa-17.09_odp }} to satisfy a common set of requirements or to provide equivalent functionality."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-18",
                                              "label":  "SA-18",
                                              "title":  "Tamper Resistance and Detection",
                                              "description":  null,
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-18.1",
                                                                       "label":  "SA-18(1)",
                                                                       "title":  "Multiple Phases of System Development Life Cycle",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-18.2",
                                                                       "label":  "SA-18(2)",
                                                                       "title":  "Inspection of Systems or Components",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-19",
                                              "label":  "SA-19",
                                              "title":  "Component Authenticity",
                                              "description":  null,
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-19.1",
                                                                       "label":  "SA-19(1)",
                                                                       "title":  "Anti-counterfeit Training",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-19.2",
                                                                       "label":  "SA-19(2)",
                                                                       "title":  "Configuration Control for Component Service and Repair",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-19.3",
                                                                       "label":  "SA-19(3)",
                                                                       "title":  "Component Disposal",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sa-19.4",
                                                                       "label":  "SA-19(4)",
                                                                       "title":  "Anti-counterfeit Scanning",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-20",
                                              "label":  "SA-20",
                                              "title":  "Customized Development of Critical Components",
                                              "description":  "Reimplement or custom develop the following critical system components: {{ insert: param, sa-20_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-21",
                                              "label":  "SA-21",
                                              "title":  "Developer Screening",
                                              "description":  "Require that the developer of {{ insert: param, sa-21_odp.01 }}: Has appropriate access authorizations as determined by assigned {{ insert: param, sa-21_odp.02 }} ; and Satisfies the following additional personnel screening criteria: {{ insert: param, sa-21...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-21.1",
                                                                       "label":  "SA-21(1)",
                                                                       "title":  "Validation of Screening",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-22",
                                              "label":  "SA-22",
                                              "title":  "Unsupported System Components",
                                              "description":  "Replace system components when support for the components is no longer available from the developer, vendor, or manufacturer; or Provide the following options for alternative sources for continued support for unsupported components {{ insert: param, sa-22_o...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sa-22.1",
                                                                       "label":  "SA-22(1)",
                                                                       "title":  "Alternative Sources for Continued Support",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sa-23",
                                              "label":  "SA-23",
                                              "title":  "Specialization",
                                              "description":  "Employ {{ insert: param, sa-23_odp.01 }} on {{ insert: param, sa-23_odp.02 }} supporting mission essential services or functions to increase the trustworthiness in those systems or components.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sa-24",
                                              "label":  "SA-24",
                                              "title":  "Design For Cyber Resiliency",
                                              "description":  "Design organizational systems, system components, or system services to achieve cyber resiliency by: Implement the selected cyber resiliency goals, objectives, techniques, implementation approaches, and design principles as part of an organizational risk ma...",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "sc",
                         "label":  "SC",
                         "title":  "System and Communications Protection",
                         "controls":  [
                                          {
                                              "id":  "sc-1",
                                              "label":  "SC-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, sc-1_prm_1 }}: Designate an {{ insert: param, sc-01_odp.04 }} to manage the development, documentation, and dissemination of the system and communications protection policy and procedures; and Review a...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-2",
                                              "label":  "SC-2",
                                              "title":  "Separation of System and User Functionality",
                                              "description":  "Separate user functionality, including user interface services, from system management functionality.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-2.1",
                                                                       "label":  "SC-2(1)",
                                                                       "title":  "Interfaces for Non-privileged Users",
                                                                       "description":  "Prevent the presentation of system management functionality at interfaces to non-privileged users."
                                                                   },
                                                                   {
                                                                       "id":  "sc-2.2",
                                                                       "label":  "SC-2(2)",
                                                                       "title":  "Disassociability",
                                                                       "description":  "Store state information from applications and software separately."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-3",
                                              "label":  "SC-3",
                                              "title":  "Security Function Isolation",
                                              "description":  "Isolate security functions from nonsecurity functions.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-3.1",
                                                                       "label":  "SC-3(1)",
                                                                       "title":  "Hardware Separation",
                                                                       "description":  "Employ hardware separation mechanisms to implement security function isolation."
                                                                   },
                                                                   {
                                                                       "id":  "sc-3.2",
                                                                       "label":  "SC-3(2)",
                                                                       "title":  "Access and Flow Control Functions",
                                                                       "description":  "Isolate security functions enforcing access and information flow control from nonsecurity functions and from other security functions."
                                                                   },
                                                                   {
                                                                       "id":  "sc-3.3",
                                                                       "label":  "SC-3(3)",
                                                                       "title":  "Minimize Nonsecurity Functionality",
                                                                       "description":  "Minimize the number of nonsecurity functions included within the isolation boundary containing security functions."
                                                                   },
                                                                   {
                                                                       "id":  "sc-3.4",
                                                                       "label":  "SC-3(4)",
                                                                       "title":  "Module Coupling and Cohesiveness",
                                                                       "description":  "Implement security functions as largely independent modules that maximize internal cohesiveness within modules and minimize coupling between modules."
                                                                   },
                                                                   {
                                                                       "id":  "sc-3.5",
                                                                       "label":  "SC-3(5)",
                                                                       "title":  "Layered Structures",
                                                                       "description":  "Implement security functions as a layered structure minimizing interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-4",
                                              "label":  "SC-4",
                                              "title":  "Information in Shared System Resources",
                                              "description":  "Prevent unauthorized and unintended information transfer via shared system resources.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-4.1",
                                                                       "label":  "SC-4(1)",
                                                                       "title":  "Security Levels",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-4.2",
                                                                       "label":  "SC-4(2)",
                                                                       "title":  "Multilevel or Periods Processing",
                                                                       "description":  "Prevent unauthorized information transfer via shared resources in accordance with {{ insert: param, sc-04.02_odp }} when system processing explicitly switches between different information classification levels or security categories."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-5",
                                              "label":  "SC-5",
                                              "title":  "Denial-of-service Protection",
                                              "description":  "{{ insert: param, sc-05_odp.02 }} the effects of the following types of denial-of-service events: {{ insert: param, sc-05_odp.01 }} ; and Employ the following controls to achieve the denial-of-service objective: {{ insert: param, sc-05_odp.03 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-5.1",
                                                                       "label":  "SC-5(1)",
                                                                       "title":  "Restrict Ability to Attack Other Systems",
                                                                       "description":  "Restrict the ability of individuals to launch the following denial-of-service attacks against other systems: {{ insert: param, sc-05.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-5.2",
                                                                       "label":  "SC-5(2)",
                                                                       "title":  "Capacity, Bandwidth, and Redundancy",
                                                                       "description":  "Manage capacity, bandwidth, or other redundancy to limit the effects of information flooding denial-of-service attacks."
                                                                   },
                                                                   {
                                                                       "id":  "sc-5.3",
                                                                       "label":  "SC-5(3)",
                                                                       "title":  "Detection and Monitoring",
                                                                       "description":  "Employ the following monitoring tools to detect indicators of denial-of-service attacks against, or launched from, the system: {{ insert: param, sc-05.03_odp.01 }} ; and Monitor the following system resources to determine if sufficient resources exist to pr..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-6",
                                              "label":  "SC-6",
                                              "title":  "Resource Availability",
                                              "description":  "Protect the availability of resources by allocating {{ insert: param, sc-06_odp.01 }} by {{ insert: param, sc-06_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-7",
                                              "label":  "SC-7",
                                              "title":  "Boundary Protection",
                                              "description":  "Monitor and control communications at the external managed interfaces to the system and at key internal managed interfaces within the system; Implement subnetworks for publicly accessible system components that are {{ insert: param, sc-07_odp }} separated f...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-7.1",
                                                                       "label":  "SC-7(1)",
                                                                       "title":  "Physically Separated Subnetworks",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.2",
                                                                       "label":  "SC-7(2)",
                                                                       "title":  "Public Access",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.3",
                                                                       "label":  "SC-7(3)",
                                                                       "title":  "Access Points",
                                                                       "description":  "Limit the number of external network connections to the system."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.4",
                                                                       "label":  "SC-7(4)",
                                                                       "title":  "External Telecommunications Services",
                                                                       "description":  "Implement a managed interface for each external telecommunication service; Establish a traffic flow policy for each managed interface; Protect the confidentiality and integrity of the information being transmitted across each interface; Document each except..."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.5",
                                                                       "label":  "SC-7(5)",
                                                                       "title":  "Deny by Default â€” Allow by Exception",
                                                                       "description":  "Deny network communications traffic by default and allow network communications traffic by exception {{ insert: param, sc-07.05_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.6",
                                                                       "label":  "SC-7(6)",
                                                                       "title":  "Response to Recognized Failures",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.7",
                                                                       "label":  "SC-7(7)",
                                                                       "title":  "Split Tunneling for Remote Devices",
                                                                       "description":  "Prevent split tunneling for remote devices connecting to organizational systems unless the split tunnel is securely provisioned using {{ insert: param, sc-07.07_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.8",
                                                                       "label":  "SC-7(8)",
                                                                       "title":  "Route Traffic to Authenticated Proxy Servers",
                                                                       "description":  "Route {{ insert: param, sc-07.08_odp.01 }} to {{ insert: param, sc-07.08_odp.02 }} through authenticated proxy servers at managed interfaces."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.9",
                                                                       "label":  "SC-7(9)",
                                                                       "title":  "Restrict Threatening Outgoing Communications Traffic",
                                                                       "description":  "Detect and deny outgoing communications traffic posing a threat to external systems; and Audit the identity of internal users associated with denied communications."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.10",
                                                                       "label":  "SC-7(10)",
                                                                       "title":  "Prevent Exfiltration",
                                                                       "description":  "Prevent the exfiltration of information; and Conduct exfiltration tests {{ insert: param, sc-07.10_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.11",
                                                                       "label":  "SC-7(11)",
                                                                       "title":  "Restrict Incoming Communications Traffic",
                                                                       "description":  "Only allow incoming communications from {{ insert: param, sc-07.11_odp.01 }} to be routed to {{ insert: param, sc-07.11_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.12",
                                                                       "label":  "SC-7(12)",
                                                                       "title":  "Host-based Protection",
                                                                       "description":  "Implement {{ insert: param, sc-07.12_odp.01 }} at {{ insert: param, sc-07.12_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.13",
                                                                       "label":  "SC-7(13)",
                                                                       "title":  "Isolation of Security Tools, Mechanisms, and Support Components",
                                                                       "description":  "Isolate {{ insert: param, sc-07.13_odp }} from other internal system components by implementing physically separate subnetworks with managed interfaces to other components of the system."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.14",
                                                                       "label":  "SC-7(14)",
                                                                       "title":  "Protect Against Unauthorized Physical Connections",
                                                                       "description":  "Protect against unauthorized physical connections at {{ insert: param, sc-07.14_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.15",
                                                                       "label":  "SC-7(15)",
                                                                       "title":  "Networked Privileged Accesses",
                                                                       "description":  "Route networked, privileged accesses through a dedicated, managed interface for purposes of access control and auditing."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.16",
                                                                       "label":  "SC-7(16)",
                                                                       "title":  "Prevent Discovery of System Components",
                                                                       "description":  "Prevent the discovery of specific system components that represent a managed interface."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.17",
                                                                       "label":  "SC-7(17)",
                                                                       "title":  "Automated Enforcement of Protocol Formats",
                                                                       "description":  "Enforce adherence to protocol formats."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.18",
                                                                       "label":  "SC-7(18)",
                                                                       "title":  "Fail Secure",
                                                                       "description":  "Prevent systems from entering unsecure states in the event of an operational failure of a boundary protection device."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.19",
                                                                       "label":  "SC-7(19)",
                                                                       "title":  "Block Communication from Non-organizationally Configured Hosts",
                                                                       "description":  "Block inbound and outbound communications traffic between {{ insert: param, sc-07.19_odp }} that are independently configured by end users and external service providers."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.20",
                                                                       "label":  "SC-7(20)",
                                                                       "title":  "Dynamic Isolation and Segregation",
                                                                       "description":  "Provide the capability to dynamically isolate {{ insert: param, sc-07.20_odp }} from other system components."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.21",
                                                                       "label":  "SC-7(21)",
                                                                       "title":  "Isolation of System Components",
                                                                       "description":  "Employ boundary protection mechanisms to isolate {{ insert: param, sc-07.21_odp.01 }} supporting {{ insert: param, sc-07.21_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.22",
                                                                       "label":  "SC-7(22)",
                                                                       "title":  "Separate Subnets for Connecting to Different Security Domains",
                                                                       "description":  "Implement separate network addresses to connect to systems in different security domains."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.23",
                                                                       "label":  "SC-7(23)",
                                                                       "title":  "Disable Sender Feedback on Protocol Validation Failure",
                                                                       "description":  "Disable feedback to senders on protocol format validation failure."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.24",
                                                                       "label":  "SC-7(24)",
                                                                       "title":  "Personally Identifiable Information",
                                                                       "description":  "For systems that process personally identifiable information: Apply the following processing rules to data elements of personally identifiable information: {{ insert: param, sc-07.24_odp }}; Monitor for permitted processing at the external interfaces to the..."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.25",
                                                                       "label":  "SC-7(25)",
                                                                       "title":  "Unclassified National Security System Connections",
                                                                       "description":  "Prohibit the direct connection of {{ insert: param, sc-07.25_odp.01 }} to an external network without the use of {{ insert: param, sc-07.25_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.26",
                                                                       "label":  "SC-7(26)",
                                                                       "title":  "Classified National Security System Connections",
                                                                       "description":  "Prohibit the direct connection of a classified national security system to an external network without the use of {{ insert: param, sc-07.26_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.27",
                                                                       "label":  "SC-7(27)",
                                                                       "title":  "Unclassified Non-national Security System Connections",
                                                                       "description":  "Prohibit the direct connection of {{ insert: param, sc-07.27_odp.01 }} to an external network without the use of {{ insert: param, sc-07.27_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.28",
                                                                       "label":  "SC-7(28)",
                                                                       "title":  "Connections to Public Networks",
                                                                       "description":  "Prohibit the direct connection of {{ insert: param, sc-07.28_odp }} to a public network."
                                                                   },
                                                                   {
                                                                       "id":  "sc-7.29",
                                                                       "label":  "SC-7(29)",
                                                                       "title":  "Separate Subnets to Isolate Functions",
                                                                       "description":  "Implement {{ insert: param, sc-07.29_odp.01 }} separate subnetworks to isolate the following critical system components and functions: {{ insert: param, sc-07.29_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-8",
                                              "label":  "SC-8",
                                              "title":  "Transmission Confidentiality and Integrity",
                                              "description":  "Protect the {{ insert: param, sc-08_odp }} of transmitted information.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-8.1",
                                                                       "label":  "SC-8(1)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  "Implement cryptographic mechanisms to {{ insert: param, sc-08.01_odp }} during transmission."
                                                                   },
                                                                   {
                                                                       "id":  "sc-8.2",
                                                                       "label":  "SC-8(2)",
                                                                       "title":  "Pre- and Post-transmission Handling",
                                                                       "description":  "Maintain the {{ insert: param, sc-08.02_odp }} of information during preparation for transmission and during reception."
                                                                   },
                                                                   {
                                                                       "id":  "sc-8.3",
                                                                       "label":  "SC-8(3)",
                                                                       "title":  "Cryptographic Protection for Message Externals",
                                                                       "description":  "Implement cryptographic mechanisms to protect message externals unless otherwise protected by {{ insert: param, sc-08.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-8.4",
                                                                       "label":  "SC-8(4)",
                                                                       "title":  "Conceal or Randomize Communications",
                                                                       "description":  "Implement cryptographic mechanisms to conceal or randomize communication patterns unless otherwise protected by {{ insert: param, sc-08.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-8.5",
                                                                       "label":  "SC-8(5)",
                                                                       "title":  "Protected Distribution System",
                                                                       "description":  "Implement {{ insert: param, sc-08.05_odp.01 }} to {{ insert: param, sc-08.05_odp.02 }} during transmission."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-9",
                                              "label":  "SC-9",
                                              "title":  "Transmission Confidentiality",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-10",
                                              "label":  "SC-10",
                                              "title":  "Network Disconnect",
                                              "description":  "Terminate the network connection associated with a communications session at the end of the session or after {{ insert: param, sc-10_odp }} of inactivity.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-11",
                                              "label":  "SC-11",
                                              "title":  "Trusted Path",
                                              "description":  "Provide a {{ insert: param, sc-11_odp.01 }} isolated trusted communications path for communications between the user and the trusted components of the system; and Permit users to invoke the trusted communications path for communications between the user and...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-11.1",
                                                                       "label":  "SC-11(1)",
                                                                       "title":  "Irrefutable Communications Path",
                                                                       "description":  "Provide a trusted communications path that is irrefutably distinguishable from other communications paths; and Initiate the trusted communications path for communications between the {{ insert: param, sc-11.01_odp }} of the system and the user."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-12",
                                              "label":  "SC-12",
                                              "title":  "Cryptographic Key Establishment and Management",
                                              "description":  "Establish and manage cryptographic keys when cryptography is employed within the system in accordance with the following key management requirements: {{ insert: param, sc-12_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-12.1",
                                                                       "label":  "SC-12(1)",
                                                                       "title":  "Availability",
                                                                       "description":  "Maintain availability of information in the event of the loss of cryptographic keys by users."
                                                                   },
                                                                   {
                                                                       "id":  "sc-12.2",
                                                                       "label":  "SC-12(2)",
                                                                       "title":  "Symmetric Keys",
                                                                       "description":  "Produce, control, and distribute symmetric cryptographic keys using {{ insert: param, sc-12.02_odp }} key management technology and processes."
                                                                   },
                                                                   {
                                                                       "id":  "sc-12.3",
                                                                       "label":  "SC-12(3)",
                                                                       "title":  "Asymmetric Keys",
                                                                       "description":  "Produce, control, and distribute asymmetric cryptographic keys using {{ insert: param, sc-12.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-12.4",
                                                                       "label":  "SC-12(4)",
                                                                       "title":  "PKI Certificates",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-12.5",
                                                                       "label":  "SC-12(5)",
                                                                       "title":  "PKI Certificates / Hardware Tokens",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-12.6",
                                                                       "label":  "SC-12(6)",
                                                                       "title":  "Physical Control of Keys",
                                                                       "description":  "Maintain physical control of cryptographic keys when stored information is encrypted by external service providers."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-13",
                                              "label":  "SC-13",
                                              "title":  "Cryptographic Protection",
                                              "description":  "Determine the {{ insert: param, sc-13_odp.01 }} ; and Implement the following types of cryptography required for each specified cryptographic use: {{ insert: param, sc-13_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-13.1",
                                                                       "label":  "SC-13(1)",
                                                                       "title":  "FIPS-validated Cryptography",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-13.2",
                                                                       "label":  "SC-13(2)",
                                                                       "title":  "NSA-approved Cryptography",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-13.3",
                                                                       "label":  "SC-13(3)",
                                                                       "title":  "Individuals Without Formal Access Approvals",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-13.4",
                                                                       "label":  "SC-13(4)",
                                                                       "title":  "Digital Signatures",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-14",
                                              "label":  "SC-14",
                                              "title":  "Public Access Protections",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-15",
                                              "label":  "SC-15",
                                              "title":  "Collaborative Computing Devices and Applications",
                                              "description":  "Prohibit remote activation of collaborative computing devices and applications with the following exceptions: {{ insert: param, sc-15_odp }} ; and Provide an explicit indication of use to users physically present at the devices.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-15.1",
                                                                       "label":  "SC-15(1)",
                                                                       "title":  "Physical or Logical Disconnect",
                                                                       "description":  "Provide {{ insert: param, sc-15.01_odp }} disconnect of collaborative computing devices in a manner that supports ease of use."
                                                                   },
                                                                   {
                                                                       "id":  "sc-15.2",
                                                                       "label":  "SC-15(2)",
                                                                       "title":  "Blocking Inbound and Outbound Communications Traffic",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-15.3",
                                                                       "label":  "SC-15(3)",
                                                                       "title":  "Disabling and Removal in Secure Work Areas",
                                                                       "description":  "Disable or remove collaborative computing devices and applications from {{ insert: param, sc-15.03_odp.01 }} in {{ insert: param, sc-15.03_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-15.4",
                                                                       "label":  "SC-15(4)",
                                                                       "title":  "Explicitly Indicate Current Participants",
                                                                       "description":  "Provide an explicit indication of current participants in {{ insert: param, sc-15.04_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-16",
                                              "label":  "SC-16",
                                              "title":  "Transmission of Security and Privacy Attributes",
                                              "description":  "Associate {{ insert: param, sc-16_prm_1 }} with information exchanged between systems and between system components.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-16.1",
                                                                       "label":  "SC-16(1)",
                                                                       "title":  "Integrity Verification",
                                                                       "description":  "Verify the integrity of transmitted security and privacy attributes."
                                                                   },
                                                                   {
                                                                       "id":  "sc-16.2",
                                                                       "label":  "SC-16(2)",
                                                                       "title":  "Anti-spoofing Mechanisms",
                                                                       "description":  "Implement anti-spoofing mechanisms to prevent adversaries from falsifying the security attributes indicating the successful application of the security process."
                                                                   },
                                                                   {
                                                                       "id":  "sc-16.3",
                                                                       "label":  "SC-16(3)",
                                                                       "title":  "Cryptographic Binding",
                                                                       "description":  "Implement {{ insert: param, sc-16.03_odp }} to bind security and privacy attributes to transmitted information."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-17",
                                              "label":  "SC-17",
                                              "title":  "Public Key Infrastructure Certificates",
                                              "description":  "Issue public key certificates under an {{ insert: param, sc-17_odp }} or obtain public key certificates from an approved service provider; and Include only approved trust anchors in trust stores or certificate stores managed by the organization.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-18",
                                              "label":  "SC-18",
                                              "title":  "Mobile Code",
                                              "description":  "Define acceptable and unacceptable mobile code and mobile code technologies; and Authorize, monitor, and control the use of mobile code within the system.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-18.1",
                                                                       "label":  "SC-18(1)",
                                                                       "title":  "Identify Unacceptable Code and Take Corrective Actions",
                                                                       "description":  "Identify {{ insert: param, sc-18.01_odp.01 }} and take {{ insert: param, sc-18.01_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-18.2",
                                                                       "label":  "SC-18(2)",
                                                                       "title":  "Acquisition, Development, and Use",
                                                                       "description":  "Verify that the acquisition, development, and use of mobile code to be deployed in the system meets {{ insert: param, sc-18.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-18.3",
                                                                       "label":  "SC-18(3)",
                                                                       "title":  "Prevent Downloading and Execution",
                                                                       "description":  "Prevent the download and execution of {{ insert: param, sc-18.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-18.4",
                                                                       "label":  "SC-18(4)",
                                                                       "title":  "Prevent Automatic Execution",
                                                                       "description":  "Prevent the automatic execution of mobile code in {{ insert: param, sc-18.04_odp.01 }} and enforce {{ insert: param, sc-18.04_odp.02 }} prior to executing the code."
                                                                   },
                                                                   {
                                                                       "id":  "sc-18.5",
                                                                       "label":  "SC-18(5)",
                                                                       "title":  "Allow Execution Only in Confined Environments",
                                                                       "description":  "Allow execution of permitted mobile code only in confined virtual machine environments."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-19",
                                              "label":  "SC-19",
                                              "title":  "Voice Over Internet Protocol",
                                              "description":  "Technology-specific; addressed as any other technology or protocol.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-20",
                                              "label":  "SC-20",
                                              "title":  "Secure Name/Address Resolution Service (Authoritative Source)",
                                              "description":  "Provide additional data origin authentication and integrity verification artifacts along with the authoritative name resolution data the system returns in response to external name/address resolution queries; and Provide the means to indicate the security s...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-20.1",
                                                                       "label":  "SC-20(1)",
                                                                       "title":  "Child Subspaces",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-20.2",
                                                                       "label":  "SC-20(2)",
                                                                       "title":  "Data Origin and Integrity",
                                                                       "description":  "Provide data origin and integrity protection artifacts for internal name/address resolution queries."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-21",
                                              "label":  "SC-21",
                                              "title":  "Secure Name/Address Resolution Service (Recursive or Caching Resolver)",
                                              "description":  "Request and perform data origin authentication and data integrity verification on the name/address resolution responses the system receives from authoritative sources.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-21.1",
                                                                       "label":  "SC-21(1)",
                                                                       "title":  "Data Origin and Integrity",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-22",
                                              "label":  "SC-22",
                                              "title":  "Architecture and Provisioning for Name/Address Resolution Service",
                                              "description":  "Ensure the systems that collectively provide name/address resolution service for an organization are fault-tolerant and implement internal and external role separation.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-23",
                                              "label":  "SC-23",
                                              "title":  "Session Authenticity",
                                              "description":  "Protect the authenticity of communications sessions.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-23.1",
                                                                       "label":  "SC-23(1)",
                                                                       "title":  "Invalidate Session Identifiers at Logout",
                                                                       "description":  "Invalidate session identifiers upon user logout or other session termination."
                                                                   },
                                                                   {
                                                                       "id":  "sc-23.2",
                                                                       "label":  "SC-23(2)",
                                                                       "title":  "User-initiated Logouts and Message Displays",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-23.3",
                                                                       "label":  "SC-23(3)",
                                                                       "title":  "Unique System-generated Session Identifiers",
                                                                       "description":  "Generate a unique session identifier for each session with {{ insert: param, sc-23.03_odp }} and recognize only session identifiers that are system-generated."
                                                                   },
                                                                   {
                                                                       "id":  "sc-23.4",
                                                                       "label":  "SC-23(4)",
                                                                       "title":  "Unique Session Identifiers with Randomization",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-23.5",
                                                                       "label":  "SC-23(5)",
                                                                       "title":  "Allowed Certificate Authorities",
                                                                       "description":  "Only allow the use of {{ insert: param, sc-23.05_odp }} for verification of the establishment of protected sessions."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-24",
                                              "label":  "SC-24",
                                              "title":  "Fail in Known State",
                                              "description":  "Fail to a {{ insert: param, sc-24_odp.02 }} for the following failures on the indicated components while preserving {{ insert: param, sc-24_odp.03 }} in failure: {{ insert: param, sc-24_odp.01 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-25",
                                              "label":  "SC-25",
                                              "title":  "Thin Nodes",
                                              "description":  "Employ minimal functionality and information storage on the following system components: {{ insert: param, sc-25_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-26",
                                              "label":  "SC-26",
                                              "title":  "Decoys",
                                              "description":  "Include components within organizational systems specifically designed to be the target of malicious attacks for detecting, deflecting, and analyzing such attacks.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-26.1",
                                                                       "label":  "SC-26(1)",
                                                                       "title":  "Detection of Malicious Code",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-27",
                                              "label":  "SC-27",
                                              "title":  "Platform-independent Applications",
                                              "description":  "Include within organizational systems the following platform independent applications: {{ insert: param, sc-27_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-28",
                                              "label":  "SC-28",
                                              "title":  "Protection of Information at Rest",
                                              "description":  "Protect the {{ insert: param, sc-28_odp.01 }} of the following information at rest: {{ insert: param, sc-28_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-28.1",
                                                                       "label":  "SC-28(1)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  "Implement cryptographic mechanisms to prevent unauthorized disclosure and modification of the following information at rest on {{ insert: param, sc-28.01_odp.02 }}: {{ insert: param, sc-28.01_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-28.2",
                                                                       "label":  "SC-28(2)",
                                                                       "title":  "Offline Storage",
                                                                       "description":  "Remove the following information from online storage and store offline in a secure location: {{ insert: param, sc-28.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-28.3",
                                                                       "label":  "SC-28(3)",
                                                                       "title":  "Cryptographic Keys",
                                                                       "description":  "Provide protected storage for cryptographic keys {{ insert: param, sc-28.03_odp.01 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-29",
                                              "label":  "SC-29",
                                              "title":  "Heterogeneity",
                                              "description":  "Employ a diverse set of information technologies for the following system components in the implementation of the system: {{ insert: param, sc-29_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-29.1",
                                                                       "label":  "SC-29(1)",
                                                                       "title":  "Virtualization Techniques",
                                                                       "description":  "Employ virtualization techniques to support the deployment of a diversity of operating systems and applications that are changed {{ insert: param, sc-29.01_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-30",
                                              "label":  "SC-30",
                                              "title":  "Concealment and Misdirection",
                                              "description":  "Employ the following concealment and misdirection techniques for {{ insert: param, sc-30_odp.02 }} at {{ insert: param, sc-30_odp.03 }} to confuse and mislead adversaries: {{ insert: param, sc-30_odp.01 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-30.1",
                                                                       "label":  "SC-30(1)",
                                                                       "title":  "Virtualization Techniques",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-30.2",
                                                                       "label":  "SC-30(2)",
                                                                       "title":  "Randomness",
                                                                       "description":  "Employ {{ insert: param, sc-30.02_odp }} to introduce randomness into organizational operations and assets."
                                                                   },
                                                                   {
                                                                       "id":  "sc-30.3",
                                                                       "label":  "SC-30(3)",
                                                                       "title":  "Change Processing and Storage Locations",
                                                                       "description":  "Change the location of {{ insert: param, sc-30.03_odp.01 }} {{ insert: param, sc-30.03_odp.02 }}]."
                                                                   },
                                                                   {
                                                                       "id":  "sc-30.4",
                                                                       "label":  "SC-30(4)",
                                                                       "title":  "Misleading Information",
                                                                       "description":  "Employ realistic, but misleading information in {{ insert: param, sc-30.04_odp }} about its security state or posture."
                                                                   },
                                                                   {
                                                                       "id":  "sc-30.5",
                                                                       "label":  "SC-30(5)",
                                                                       "title":  "Concealment of System Components",
                                                                       "description":  "Employ the following techniques to hide or conceal {{ insert: param, sc-30.05_odp.02 }}: {{ insert: param, sc-30.05_odp.01 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-31",
                                              "label":  "SC-31",
                                              "title":  "Covert Channel Analysis",
                                              "description":  "Perform a covert channel analysis to identify those aspects of communications within the system that are potential avenues for covert {{ insert: param, sc-31_odp }} channels; and Estimate the maximum bandwidth of those channels.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-31.1",
                                                                       "label":  "SC-31(1)",
                                                                       "title":  "Test Covert Channels for Exploitability",
                                                                       "description":  "Test a subset of the identified covert channels to determine the channels that are exploitable."
                                                                   },
                                                                   {
                                                                       "id":  "sc-31.2",
                                                                       "label":  "SC-31(2)",
                                                                       "title":  "Maximum Bandwidth",
                                                                       "description":  "Reduce the maximum bandwidth for identified covert {{ insert: param, sc-31.02_odp.01 }} channels to {{ insert: param, sc-31.02_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-31.3",
                                                                       "label":  "SC-31(3)",
                                                                       "title":  "Measure Bandwidth in Operational Environments",
                                                                       "description":  "Measure the bandwidth of {{ insert: param, sc-31.03_odp }} in the operational environment of the system."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-32",
                                              "label":  "SC-32",
                                              "title":  "System Partitioning",
                                              "description":  "Partition the system into {{ insert: param, sc-32_odp.01 }} residing in separate {{ insert: param, sc-32_odp.02 }} domains or environments based on {{ insert: param, sc-32_odp.03 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-32.1",
                                                                       "label":  "SC-32(1)",
                                                                       "title":  "Separate Physical Domains for Privileged Functions",
                                                                       "description":  "Partition privileged functions into separate physical domains."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-33",
                                              "label":  "SC-33",
                                              "title":  "Transmission Preparation Integrity",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-34",
                                              "label":  "SC-34",
                                              "title":  "Non-modifiable Executable Programs",
                                              "description":  "For {{ insert: param, sc-34_odp.01 }} , load and execute: The operating environment from hardware-enforced, read-only media; and The following applications from hardware-enforced, read-only media: {{ insert: param, sc-34_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-34.1",
                                                                       "label":  "SC-34(1)",
                                                                       "title":  "No Writable Storage",
                                                                       "description":  "Employ {{ insert: param, sc-34.01_odp }} with no writeable storage that is persistent across component restart or power on/off."
                                                                   },
                                                                   {
                                                                       "id":  "sc-34.2",
                                                                       "label":  "SC-34(2)",
                                                                       "title":  "Integrity Protection on Read-only Media",
                                                                       "description":  "Protect the integrity of information prior to storage on read-only media and control the media after such information has been recorded onto the media."
                                                                   },
                                                                   {
                                                                       "id":  "sc-34.3",
                                                                       "label":  "SC-34(3)",
                                                                       "title":  "Hardware-based Protection",
                                                                       "description":  null
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-35",
                                              "label":  "SC-35",
                                              "title":  "External Malicious Code Identification",
                                              "description":  "Include system components that proactively seek to identify network-based malicious code or malicious websites.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-36",
                                              "label":  "SC-36",
                                              "title":  "Distributed Processing and Storage",
                                              "description":  "Distribute the following processing and storage components across multiple {{ insert: param, sc-36_prm_1 }}: {{ insert: param, sc-36_prm_2 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-36.1",
                                                                       "label":  "SC-36(1)",
                                                                       "title":  "Polling Techniques",
                                                                       "description":  "Employ polling techniques to identify potential faults, errors, or compromises to the following processing and storage components: {{ insert: param, sc-36.01_odp.01 }} ; and Take the following actions in response to identified faults, errors, or compromises..."
                                                                   },
                                                                   {
                                                                       "id":  "sc-36.2",
                                                                       "label":  "SC-36(2)",
                                                                       "title":  "Synchronization",
                                                                       "description":  "Synchronize the following duplicate systems or system components: {{ insert: param, sc-36.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-37",
                                              "label":  "SC-37",
                                              "title":  "Out-of-band Channels",
                                              "description":  "Employ the following out-of-band channels for the physical delivery or electronic transmission of {{ insert: param, sc-37_odp.02 }} to {{ insert: param, sc-37_odp.03 }}: {{ insert: param, sc-37_odp.01 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-37.1",
                                                                       "label":  "SC-37(1)",
                                                                       "title":  "Ensure Delivery and Transmission",
                                                                       "description":  "Employ {{ insert: param, sc-37.01_odp.01 }} to ensure that only {{ insert: param, sc-37.01_odp.02 }} receive the following information, system components, or devices: {{ insert: param, sc-37.01_odp.03 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-38",
                                              "label":  "SC-38",
                                              "title":  "Operations Security",
                                              "description":  "Employ the following operations security controls to protect key organizational information throughout the system development life cycle: {{ insert: param, sc-38_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-39",
                                              "label":  "SC-39",
                                              "title":  "Process Isolation",
                                              "description":  "Maintain a separate execution domain for each executing system process.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-39.1",
                                                                       "label":  "SC-39(1)",
                                                                       "title":  "Hardware Separation",
                                                                       "description":  "Implement hardware separation mechanisms to facilitate process isolation."
                                                                   },
                                                                   {
                                                                       "id":  "sc-39.2",
                                                                       "label":  "SC-39(2)",
                                                                       "title":  "Separate Execution Domain Per Thread",
                                                                       "description":  "Maintain a separate execution domain for each thread in {{ insert: param, sc-39.02_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-40",
                                              "label":  "SC-40",
                                              "title":  "Wireless Link Protection",
                                              "description":  "Protect external and internal {{ insert: param, sc-40_prm_1 }} from the following signal parameter attacks: {{ insert: param, sc-40_prm_2 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-40.1",
                                                                       "label":  "SC-40(1)",
                                                                       "title":  "Electromagnetic Interference",
                                                                       "description":  "Implement cryptographic mechanisms that achieve {{ insert: param, sc-40.01_odp }} against the effects of intentional electromagnetic interference."
                                                                   },
                                                                   {
                                                                       "id":  "sc-40.2",
                                                                       "label":  "SC-40(2)",
                                                                       "title":  "Reduce Detection Potential",
                                                                       "description":  "Implement cryptographic mechanisms to reduce the detection potential of wireless links to {{ insert: param, sc-40.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-40.3",
                                                                       "label":  "SC-40(3)",
                                                                       "title":  "Imitative or Manipulative Communications Deception",
                                                                       "description":  "Implement cryptographic mechanisms to identify and reject wireless transmissions that are deliberate attempts to achieve imitative or manipulative communications deception based on signal parameters."
                                                                   },
                                                                   {
                                                                       "id":  "sc-40.4",
                                                                       "label":  "SC-40(4)",
                                                                       "title":  "Signal Parameter Identification",
                                                                       "description":  "Implement cryptographic mechanisms to prevent the identification of {{ insert: param, sc-40.04_odp }} by using the transmitter signal parameters."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-41",
                                              "label":  "SC-41",
                                              "title":  "Port and I/O Device Access",
                                              "description":  "{{ insert: param, sc-41_odp.02 }} disable or remove {{ insert: param, sc-41_odp.01 }} on the following systems or system components: {{ insert: param, sc-41_odp.03 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-42",
                                              "label":  "SC-42",
                                              "title":  "Sensor Capability and Data",
                                              "description":  "Prohibit {{ insert: param, sc-42_odp.01 }} ; and Provide an explicit indication of sensor use to {{ insert: param, sc-42_odp.05 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-42.1",
                                                                       "label":  "SC-42(1)",
                                                                       "title":  "Reporting to Authorized Individuals or Roles",
                                                                       "description":  "Verify that the system is configured so that data or information collected by the {{ insert: param, sc-42.01_odp }} is only reported to authorized individuals or roles."
                                                                   },
                                                                   {
                                                                       "id":  "sc-42.2",
                                                                       "label":  "SC-42(2)",
                                                                       "title":  "Authorized Use",
                                                                       "description":  "Employ the following measures so that data or information collected by {{ insert: param, sc-42.01_odp }} is only used for authorized purposes: {{ insert: param, sc-42.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-42.3",
                                                                       "label":  "SC-42(3)",
                                                                       "title":  "Prohibit Use of Devices",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "sc-42.4",
                                                                       "label":  "SC-42(4)",
                                                                       "title":  "Notice of Collection",
                                                                       "description":  "Employ the following measures to facilitate an individualâ€™s awareness that personally identifiable information is being collected by {{ insert: param, sc-42.04_odp.02 }}: {{ insert: param, sc-42.04_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sc-42.5",
                                                                       "label":  "SC-42(5)",
                                                                       "title":  "Collection Minimization",
                                                                       "description":  "Employ {{ insert: param, sc-42.05_odp }} that are configured to minimize the collection of information about individuals that is not needed."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-43",
                                              "label":  "SC-43",
                                              "title":  "Usage Restrictions",
                                              "description":  "Establish usage restrictions and implementation guidelines for the following system components: {{ insert: param, sc-43_odp }} ; and Authorize, monitor, and control the use of such components within the system.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-44",
                                              "label":  "SC-44",
                                              "title":  "Detonation Chambers",
                                              "description":  "Employ a detonation chamber capability within {{ insert: param, sc-44_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-45",
                                              "label":  "SC-45",
                                              "title":  "System Time Synchronization",
                                              "description":  "Synchronize system clocks within and between systems and system components.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-45.1",
                                                                       "label":  "SC-45(1)",
                                                                       "title":  "Synchronization with Authoritative Time Source",
                                                                       "description":  "Compare the internal system clocks {{ insert: param, sc-45.01_odp.01 }} with {{ insert: param, sc-45.01_odp.02 }} ; and Synchronize the internal system clocks to the authoritative time source when the time difference is greater than {{ insert: param, sc-45...."
                                                                   },
                                                                   {
                                                                       "id":  "sc-45.2",
                                                                       "label":  "SC-45(2)",
                                                                       "title":  "Secondary Authoritative Time Source",
                                                                       "description":  "Identify a secondary authoritative time source that is in a different geographic region than the primary authoritative time source; and Synchronize the internal system clocks to the secondary authoritative time source if the primary authoritative time sourc..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-46",
                                              "label":  "SC-46",
                                              "title":  "Cross Domain Policy Enforcement",
                                              "description":  "Implement a policy enforcement mechanism {{ insert: param, sc-46_odp }} between the physical and/or network interfaces for the connecting security domains.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-47",
                                              "label":  "SC-47",
                                              "title":  "Alternate Communications Paths",
                                              "description":  "Establish {{ insert: param, sc-47_odp }} for system operations organizational command and control.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-48",
                                              "label":  "SC-48",
                                              "title":  "Sensor Relocation",
                                              "description":  "Relocate {{ insert: param, sc-48_odp.01 }} to {{ insert: param, sc-48_odp.02 }} under the following conditions or circumstances: {{ insert: param, sc-48_odp.03 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sc-48.1",
                                                                       "label":  "SC-48(1)",
                                                                       "title":  "Dynamic Relocation of Sensors or Monitoring Capabilities",
                                                                       "description":  "Dynamically relocate {{ insert: param, sc-48.01_odp.01 }} to {{ insert: param, sc-48.01_odp.02 }} under the following conditions or circumstances: {{ insert: param, sc-48.01_odp.03 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sc-49",
                                              "label":  "SC-49",
                                              "title":  "Hardware-enforced Separation and Policy Enforcement",
                                              "description":  "Implement hardware-enforced separation and policy enforcement mechanisms between {{ insert: param, sc-49_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-50",
                                              "label":  "SC-50",
                                              "title":  "Software-enforced Separation and Policy Enforcement",
                                              "description":  "Implement software-enforced separation and policy enforcement mechanisms between {{ insert: param, sc-50_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sc-51",
                                              "label":  "SC-51",
                                              "title":  "Hardware-based Protection",
                                              "description":  "Employ hardware-based, write-protect for {{ insert: param, sc-51_odp.01 }} ; and Implement specific procedures for {{ insert: param, sc-51_odp.02 }} to manually disable hardware write-protect for firmware modifications and re-enable the write-protect prior ...",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "si",
                         "label":  "SI",
                         "title":  "System and Information Integrity",
                         "controls":  [
                                          {
                                              "id":  "si-1",
                                              "label":  "SI-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, si-1_prm_1 }}: Designate an {{ insert: param, si-01_odp.04 }} to manage the development, documentation, and dissemination of the system and information integrity policy and procedures; and Review and u...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-2",
                                              "label":  "SI-2",
                                              "title":  "Flaw Remediation",
                                              "description":  "Identify, report, and correct system flaws; Test software and firmware updates related to flaw remediation for effectiveness and potential side effects before installation; Install security-relevant software and firmware updates within {{ insert: param, si-...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-2.1",
                                                                       "label":  "SI-2(1)",
                                                                       "title":  "Central Management",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-2.2",
                                                                       "label":  "SI-2(2)",
                                                                       "title":  "Automated Flaw Remediation Status",
                                                                       "description":  "Determine if system components have applicable security-relevant software and firmware updates installed using {{ insert: param, si-02.02_odp.01 }} {{ insert: param, si-02.02_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-2.3",
                                                                       "label":  "SI-2(3)",
                                                                       "title":  "Time to Remediate Flaws and Benchmarks for Corrective Actions",
                                                                       "description":  "Measure the time between flaw identification and flaw remediation; and Establish the following benchmarks for taking corrective actions: {{ insert: param, si-02.03_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-2.4",
                                                                       "label":  "SI-2(4)",
                                                                       "title":  "Automated Patch Management Tools",
                                                                       "description":  "Employ automated patch management tools to facilitate flaw remediation to the following system components: {{ insert: param, si-02.04_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-2.5",
                                                                       "label":  "SI-2(5)",
                                                                       "title":  "Automatic Software and Firmware Updates",
                                                                       "description":  "Install {{ insert: param, si-02.05_odp.01 }} automatically to {{ insert: param, si-02.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-2.6",
                                                                       "label":  "SI-2(6)",
                                                                       "title":  "Removal of Previous Versions of Software and Firmware",
                                                                       "description":  "Remove previous versions of {{ insert: param, si-02.06_odp }} after updated versions have been installed."
                                                                   },
                                                                   {
                                                                       "id":  "si-2.7",
                                                                       "label":  "SI-2(7)",
                                                                       "title":  "Root Cause Analysis",
                                                                       "description":  "Conduct root cause analysis to identify underlying causes of issues or failures. Develop actions to address the root cause of the issue or failure. Implement the actions and monitor the implementation for effectiveness."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-3",
                                              "label":  "SI-3",
                                              "title":  "Malicious Code Protection",
                                              "description":  "Implement {{ insert: param, si-03_odp.01 }} malicious code protection mechanisms at system entry and exit points to detect and eradicate malicious code; Automatically update malicious code protection mechanisms as new releases are available in accordance wi...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-3.1",
                                                                       "label":  "SI-3(1)",
                                                                       "title":  "Central Management",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-3.2",
                                                                       "label":  "SI-3(2)",
                                                                       "title":  "Automatic Updates",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-3.3",
                                                                       "label":  "SI-3(3)",
                                                                       "title":  "Non-privileged Users",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-3.4",
                                                                       "label":  "SI-3(4)",
                                                                       "title":  "Updates Only by Privileged Users",
                                                                       "description":  "Update malicious code protection mechanisms only when directed by a privileged user."
                                                                   },
                                                                   {
                                                                       "id":  "si-3.5",
                                                                       "label":  "SI-3(5)",
                                                                       "title":  "Portable Storage Devices",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-3.6",
                                                                       "label":  "SI-3(6)",
                                                                       "title":  "Testing and Verification",
                                                                       "description":  "Test malicious code protection mechanisms {{ insert: param, si-03.06_odp }} by introducing known benign code into the system; and Verify that the detection of the code and the associated incident reporting occur."
                                                                   },
                                                                   {
                                                                       "id":  "si-3.7",
                                                                       "label":  "SI-3(7)",
                                                                       "title":  "Nonsignature-based Detection",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-3.8",
                                                                       "label":  "SI-3(8)",
                                                                       "title":  "Detect Unauthorized Commands",
                                                                       "description":  "Detect the following unauthorized operating system commands through the kernel application programming interface on {{ insert: param, si-03.08_odp.02 }}: {{ insert: param, si-03.08_odp.01 }} ; and {{ insert: param, si-03.08_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-3.9",
                                                                       "label":  "SI-3(9)",
                                                                       "title":  "Authenticate Remote Commands",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-3.10",
                                                                       "label":  "SI-3(10)",
                                                                       "title":  "Malicious Code Analysis",
                                                                       "description":  "Employ the following tools and techniques to analyze the characteristics and behavior of malicious code: {{ insert: param, si-03.10_odp }} ; and Incorporate the results from malicious code analysis into organizational incident response and flaw remediation ..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-4",
                                              "label":  "SI-4",
                                              "title":  "System Monitoring",
                                              "description":  "Monitor the system to detect: Identify unauthorized use of the system through the following techniques and methods: {{ insert: param, si-04_odp.02 }}; Invoke internal monitoring capabilities or deploy monitoring devices: Analyze detected events and anomalie...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-4.1",
                                                                       "label":  "SI-4(1)",
                                                                       "title":  "System-wide Intrusion Detection System",
                                                                       "description":  "Connect and configure individual intrusion detection tools into a system-wide intrusion detection system."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.2",
                                                                       "label":  "SI-4(2)",
                                                                       "title":  "Automated Tools and Mechanisms for Real-time Analysis",
                                                                       "description":  "Employ automated tools and mechanisms to support near real-time analysis of events."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.3",
                                                                       "label":  "SI-4(3)",
                                                                       "title":  "Automated Tool and Mechanism Integration",
                                                                       "description":  "Employ automated tools and mechanisms to integrate intrusion detection tools and mechanisms into access control and flow control mechanisms."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.4",
                                                                       "label":  "SI-4(4)",
                                                                       "title":  "Inbound and Outbound Communications Traffic",
                                                                       "description":  "Determine criteria for unusual or unauthorized activities or conditions for inbound and outbound communications traffic; Monitor inbound and outbound communications traffic {{ insert: param, si-4.4_prm_1 }} for {{ insert: param, si-4.4_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.5",
                                                                       "label":  "SI-4(5)",
                                                                       "title":  "System-generated Alerts",
                                                                       "description":  "Alert {{ insert: param, si-04.05_odp.01 }} when the following system-generated indications of compromise or potential compromise occur: {{ insert: param, si-04.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.6",
                                                                       "label":  "SI-4(6)",
                                                                       "title":  "Restrict Non-privileged Users",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-4.7",
                                                                       "label":  "SI-4(7)",
                                                                       "title":  "Automated Response to Suspicious Events",
                                                                       "description":  "Notify {{ insert: param, si-04.07_odp.01 }} of detected suspicious events; and Take the following actions upon detection: {{ insert: param, si-04.07_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.8",
                                                                       "label":  "SI-4(8)",
                                                                       "title":  "Protection of Monitoring Information",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-4.9",
                                                                       "label":  "SI-4(9)",
                                                                       "title":  "Testing of Monitoring Tools and Mechanisms",
                                                                       "description":  "Test intrusion-monitoring tools and mechanisms {{ insert: param, si-04.09_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.10",
                                                                       "label":  "SI-4(10)",
                                                                       "title":  "Visibility of Encrypted Communications",
                                                                       "description":  "Make provisions so that {{ insert: param, si-04.10_odp.01 }} is visible to {{ insert: param, si-04.10_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.11",
                                                                       "label":  "SI-4(11)",
                                                                       "title":  "Analyze Communications Traffic Anomalies",
                                                                       "description":  "Analyze outbound communications traffic at the external interfaces to the system and selected {{ insert: param, si-04.11_odp }} to discover anomalies."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.12",
                                                                       "label":  "SI-4(12)",
                                                                       "title":  "Automated Organization-generated Alerts",
                                                                       "description":  "Alert {{ insert: param, si-04.12_odp.01 }} using {{ insert: param, si-04.12_odp.02 }} when the following indications of inappropriate or unusual activities with security or privacy implications occur: {{ insert: param, si-04.12_odp.03 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.13",
                                                                       "label":  "SI-4(13)",
                                                                       "title":  "Analyze Traffic and Event Patterns",
                                                                       "description":  "Analyze communications traffic and event patterns for the system; Develop profiles representing common traffic and event patterns; and Use the traffic and event profiles in tuning system-monitoring devices."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.14",
                                                                       "label":  "SI-4(14)",
                                                                       "title":  "Wireless Intrusion Detection",
                                                                       "description":  "Employ a wireless intrusion detection system to identify rogue wireless devices and to detect attack attempts and potential compromises or breaches to the system."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.15",
                                                                       "label":  "SI-4(15)",
                                                                       "title":  "Wireless to Wireline Communications",
                                                                       "description":  "Employ an intrusion detection system to monitor wireless communications traffic as the traffic passes from wireless to wireline networks."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.16",
                                                                       "label":  "SI-4(16)",
                                                                       "title":  "Correlate Monitoring Information",
                                                                       "description":  "Correlate information from monitoring tools and mechanisms employed throughout the system."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.17",
                                                                       "label":  "SI-4(17)",
                                                                       "title":  "Integrated Situational Awareness",
                                                                       "description":  "Correlate information from monitoring physical, cyber, and supply chain activities to achieve integrated, organization-wide situational awareness."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.18",
                                                                       "label":  "SI-4(18)",
                                                                       "title":  "Analyze Traffic and Covert Exfiltration",
                                                                       "description":  "Analyze outbound communications traffic at external interfaces to the system and at the following interior points to detect covert exfiltration of information: {{ insert: param, si-04.18_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.19",
                                                                       "label":  "SI-4(19)",
                                                                       "title":  "Risk for Individuals",
                                                                       "description":  "Implement {{ insert: param, si-04.19_odp.01 }} of individuals who have been identified by {{ insert: param, si-04.19_odp.02 }} as posing an increased level of risk."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.20",
                                                                       "label":  "SI-4(20)",
                                                                       "title":  "Privileged Users",
                                                                       "description":  "Implement the following additional monitoring of privileged users: {{ insert: param, si-04.20_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.21",
                                                                       "label":  "SI-4(21)",
                                                                       "title":  "Probationary Periods",
                                                                       "description":  "Implement the following additional monitoring of individuals during {{ insert: param, si-04.21_odp.02 }}: {{ insert: param, si-04.21_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.22",
                                                                       "label":  "SI-4(22)",
                                                                       "title":  "Unauthorized Network Services",
                                                                       "description":  "Detect network services that have not been authorized or approved by {{ insert: param, si-04.22_odp.01 }} ; and {{ insert: param, si-04.22_odp.02 }} when detected."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.23",
                                                                       "label":  "SI-4(23)",
                                                                       "title":  "Host-based Devices",
                                                                       "description":  "Implement the following host-based monitoring mechanisms at {{ insert: param, si-04.23_odp.02 }}: {{ insert: param, si-04.23_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.24",
                                                                       "label":  "SI-4(24)",
                                                                       "title":  "Indicators of Compromise",
                                                                       "description":  "Discover, collect, and distribute to {{ insert: param, si-04.24_odp.02 }} , indicators of compromise provided by {{ insert: param, si-04.24_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-4.25",
                                                                       "label":  "SI-4(25)",
                                                                       "title":  "Optimize Network Traffic Analysis",
                                                                       "description":  "Provide visibility into network traffic at external and key internal system interfaces to optimize the effectiveness of monitoring devices."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-5",
                                              "label":  "SI-5",
                                              "title":  "Security Alerts, Advisories, and Directives",
                                              "description":  "Receive system security alerts, advisories, and directives from {{ insert: param, si-05_odp.01 }} on an ongoing basis; Generate internal security alerts, advisories, and directives as deemed necessary; Disseminate security alerts, advisories, and directives...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-5.1",
                                                                       "label":  "SI-5(1)",
                                                                       "title":  "Automated Alerts and Advisories",
                                                                       "description":  "Broadcast security alert and advisory information throughout the organization using {{ insert: param, si-05.01_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-6",
                                              "label":  "SI-6",
                                              "title":  "Security and Privacy Function Verification",
                                              "description":  "Verify the correct operation of {{ insert: param, si-6_prm_1 }}; Perform the verification of the functions specified in SI-6a {{ insert: param, si-06_odp.03 }}; Alert {{ insert: param, si-06_odp.06 }} to failed security and privacy verification tests; and {...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-6.1",
                                                                       "label":  "SI-6(1)",
                                                                       "title":  "Notification of Failed Security Tests",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-6.2",
                                                                       "label":  "SI-6(2)",
                                                                       "title":  "Automation Support for Distributed Testing",
                                                                       "description":  "Implement automated mechanisms to support the management of distributed security and privacy function testing."
                                                                   },
                                                                   {
                                                                       "id":  "si-6.3",
                                                                       "label":  "SI-6(3)",
                                                                       "title":  "Report Verification Results",
                                                                       "description":  "Report the results of security and privacy function verification to {{ insert: param, si-06.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-7",
                                              "label":  "SI-7",
                                              "title":  "Software, Firmware, and Information Integrity",
                                              "description":  "Employ integrity verification tools to detect unauthorized changes to the following software, firmware, and information: {{ insert: param, si-7_prm_1 }} ; and Take the following actions when unauthorized changes to the software, firmware, and information ar...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-7.1",
                                                                       "label":  "SI-7(1)",
                                                                       "title":  "Integrity Checks",
                                                                       "description":  "Perform an integrity check of {{ insert: param, si-7.1_prm_1 }} {{ insert: param, si-7.1_prm_2 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.2",
                                                                       "label":  "SI-7(2)",
                                                                       "title":  "Automated Notifications of Integrity Violations",
                                                                       "description":  "Employ automated tools that provide notification to {{ insert: param, si-07.02_odp }} upon discovering discrepancies during integrity verification."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.3",
                                                                       "label":  "SI-7(3)",
                                                                       "title":  "Centrally Managed Integrity Tools",
                                                                       "description":  "Employ centrally managed integrity verification tools."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.4",
                                                                       "label":  "SI-7(4)",
                                                                       "title":  "Tamper-evident Packaging",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-7.5",
                                                                       "label":  "SI-7(5)",
                                                                       "title":  "Automated Response to Integrity Violations",
                                                                       "description":  "Automatically {{ insert: param, si-07.05_odp.01 }} when integrity violations are discovered."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.6",
                                                                       "label":  "SI-7(6)",
                                                                       "title":  "Cryptographic Protection",
                                                                       "description":  "Implement cryptographic mechanisms to detect unauthorized changes to software, firmware, and information."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.7",
                                                                       "label":  "SI-7(7)",
                                                                       "title":  "Integration of Detection and Response",
                                                                       "description":  "Incorporate the detection of the following unauthorized changes into the organizational incident response capability: {{ insert: param, si-07.07_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.8",
                                                                       "label":  "SI-7(8)",
                                                                       "title":  "Auditing Capability for Significant Events",
                                                                       "description":  "Upon detection of a potential integrity violation, provide the capability to audit the event and initiate the following actions: {{ insert: param, si-07.08_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.9",
                                                                       "label":  "SI-7(9)",
                                                                       "title":  "Verify Boot Process",
                                                                       "description":  "Verify the integrity of the boot process of the following system components: {{ insert: param, si-07.09_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.10",
                                                                       "label":  "SI-7(10)",
                                                                       "title":  "Protection of Boot Firmware",
                                                                       "description":  "Implement the following mechanisms to protect the integrity of boot firmware in {{ insert: param, si-07.10_odp.02 }}: {{ insert: param, si-07.10_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.11",
                                                                       "label":  "SI-7(11)",
                                                                       "title":  "Confined Environments with Limited Privileges",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-7.12",
                                                                       "label":  "SI-7(12)",
                                                                       "title":  "Integrity Verification",
                                                                       "description":  "Require that the integrity of the following user-installed software be verified prior to execution: {{ insert: param, si-07.12_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.13",
                                                                       "label":  "SI-7(13)",
                                                                       "title":  "Code Execution in Protected Environments",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-7.14",
                                                                       "label":  "SI-7(14)",
                                                                       "title":  "Binary or Machine Executable Code",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-7.15",
                                                                       "label":  "SI-7(15)",
                                                                       "title":  "Code Authentication",
                                                                       "description":  "Implement cryptographic mechanisms to authenticate the following software or firmware components prior to installation: {{ insert: param, si-07.15_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.16",
                                                                       "label":  "SI-7(16)",
                                                                       "title":  "Time Limit on Process Execution Without Supervision",
                                                                       "description":  "Prohibit processes from executing without supervision for more than {{ insert: param, si-07.16_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-7.17",
                                                                       "label":  "SI-7(17)",
                                                                       "title":  "Runtime Application Self-protection",
                                                                       "description":  "Implement {{ insert: param, si-07.17_odp }} for application self-protection at runtime."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-8",
                                              "label":  "SI-8",
                                              "title":  "Spam Protection",
                                              "description":  "Employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages; and Update spam protection mechanisms when new releases are available in accordance with organizational configuration management policy and procedures.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-8.1",
                                                                       "label":  "SI-8(1)",
                                                                       "title":  "Central Management",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-8.2",
                                                                       "label":  "SI-8(2)",
                                                                       "title":  "Automatic Updates",
                                                                       "description":  "Automatically update spam protection mechanisms {{ insert: param, si-08.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-8.3",
                                                                       "label":  "SI-8(3)",
                                                                       "title":  "Continuous Learning Capability",
                                                                       "description":  "Implement spam protection mechanisms with a learning capability to more effectively identify legitimate communications traffic."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-9",
                                              "label":  "SI-9",
                                              "title":  "Information Input Restrictions",
                                              "description":  null,
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-10",
                                              "label":  "SI-10",
                                              "title":  "Information Input Validation",
                                              "description":  "Check the validity of the following information inputs: {{ insert: param, si-10_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-10.1",
                                                                       "label":  "SI-10(1)",
                                                                       "title":  "Manual Override Capability",
                                                                       "description":  "Provide a manual override capability for input validation of the following information inputs: {{ insert: param, si-10_odp }}; Restrict the use of the manual override capability to only {{ insert: param, si-10.01_odp }} ; and Audit the use of the manual ove..."
                                                                   },
                                                                   {
                                                                       "id":  "si-10.2",
                                                                       "label":  "SI-10(2)",
                                                                       "title":  "Review and Resolve Errors",
                                                                       "description":  "Review and resolve input validation errors within {{ insert: param, si-10.2_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-10.3",
                                                                       "label":  "SI-10(3)",
                                                                       "title":  "Predictable Behavior",
                                                                       "description":  "Verify that the system behaves in a predictable and documented manner when invalid inputs are received."
                                                                   },
                                                                   {
                                                                       "id":  "si-10.4",
                                                                       "label":  "SI-10(4)",
                                                                       "title":  "Timing Interactions",
                                                                       "description":  "Account for timing interactions among system components in determining appropriate responses for invalid inputs."
                                                                   },
                                                                   {
                                                                       "id":  "si-10.5",
                                                                       "label":  "SI-10(5)",
                                                                       "title":  "Restrict Inputs to Trusted Sources and Approved Formats",
                                                                       "description":  "Restrict the use of information inputs to {{ insert: param, si-10.05_odp.01 }} and/or {{ insert: param, si-10.05_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-10.6",
                                                                       "label":  "SI-10(6)",
                                                                       "title":  "Injection Prevention",
                                                                       "description":  "Prevent untrusted data injections."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-11",
                                              "label":  "SI-11",
                                              "title":  "Error Handling",
                                              "description":  "Generate error messages that provide information necessary for corrective actions without revealing information that could be exploited; and Reveal error messages only to {{ insert: param, si-11_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-12",
                                              "label":  "SI-12",
                                              "title":  "Information Management and Retention",
                                              "description":  "Manage and retain information within the system and information output from the system in accordance with applicable laws, executive orders, directives, regulations, policies, standards, guidelines and operational requirements.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-12.1",
                                                                       "label":  "SI-12(1)",
                                                                       "title":  "Limit Personally Identifiable Information Elements",
                                                                       "description":  "Limit personally identifiable information being processed in the information life cycle to the following elements of personally identifiable information: {{ insert: param, si-12.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-12.2",
                                                                       "label":  "SI-12(2)",
                                                                       "title":  "Minimize Personally Identifiable Information in Testing, Training, and Research",
                                                                       "description":  "Use the following techniques to minimize the use of personally identifiable information for research, testing, or training: {{ insert: param, si-12.2_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-12.3",
                                                                       "label":  "SI-12(3)",
                                                                       "title":  "Information Disposal",
                                                                       "description":  "Use the following techniques to dispose of, destroy, or erase information following the retention period: {{ insert: param, si-12.3_prm_1 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-13",
                                              "label":  "SI-13",
                                              "title":  "Predictable Failure Prevention",
                                              "description":  "Determine mean time to failure (MTTF) for the following system components in specific environments of operation: {{ insert: param, si-13_odp.01 }} ; and Provide substitute system components and a means to exchange active and standby components in accordance...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-13.1",
                                                                       "label":  "SI-13(1)",
                                                                       "title":  "Transferring Component Responsibilities",
                                                                       "description":  "Take system components out of service by transferring component responsibilities to substitute components no later than {{ insert: param, si-13.01_odp }} of mean time to failure."
                                                                   },
                                                                   {
                                                                       "id":  "si-13.2",
                                                                       "label":  "SI-13(2)",
                                                                       "title":  "Time Limit on Process Execution Without Supervision",
                                                                       "description":  null
                                                                   },
                                                                   {
                                                                       "id":  "si-13.3",
                                                                       "label":  "SI-13(3)",
                                                                       "title":  "Manual Transfer Between Components",
                                                                       "description":  "Manually initiate transfers between active and standby system components when the use of the active component reaches {{ insert: param, si-13.03_odp }} of the mean time to failure."
                                                                   },
                                                                   {
                                                                       "id":  "si-13.4",
                                                                       "label":  "SI-13(4)",
                                                                       "title":  "Standby Component Installation and Notification",
                                                                       "description":  "If system component failures are detected: Ensure that the standby components are successfully and transparently installed within {{ insert: param, si-13.04_odp.01 }} ; and {{ insert: param, si-13.04_odp.02 }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-13.5",
                                                                       "label":  "SI-13(5)",
                                                                       "title":  "Failover Capability",
                                                                       "description":  "Provide {{ insert: param, si-13.05_odp.01 }} {{ insert: param, si-13.05_odp.02 }} for the system."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-14",
                                              "label":  "SI-14",
                                              "title":  "Non-persistence",
                                              "description":  "Implement non-persistent {{ insert: param, si-14_odp.01 }} that are initiated in a known state and terminated {{ insert: param, si-14_odp.02 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-14.1",
                                                                       "label":  "SI-14(1)",
                                                                       "title":  "Refresh from Trusted Sources",
                                                                       "description":  "Obtain software and data employed during system component and service refreshes from the following trusted sources: {{ insert: param, si-14.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-14.2",
                                                                       "label":  "SI-14(2)",
                                                                       "title":  "Non-persistent Information",
                                                                       "description":  "{{ insert: param, si-14.02_odp.01 }} ; and Delete information when no longer needed."
                                                                   },
                                                                   {
                                                                       "id":  "si-14.3",
                                                                       "label":  "SI-14(3)",
                                                                       "title":  "Non-persistent Connectivity",
                                                                       "description":  "Establish connections to the system on demand and terminate connections after {{ insert: param, si-14.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-15",
                                              "label":  "SI-15",
                                              "title":  "Information Output Filtering",
                                              "description":  "Validate information output from the following software programs and/or applications to ensure that the information is consistent with the expected content: {{ insert: param, si-15_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-16",
                                              "label":  "SI-16",
                                              "title":  "Memory Protection",
                                              "description":  "Implement the following controls to protect the system memory from unauthorized code execution: {{ insert: param, si-16_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-17",
                                              "label":  "SI-17",
                                              "title":  "Fail-safe Procedures",
                                              "description":  "Implement the indicated fail-safe procedures when the indicated failures occur: {{ insert: param, si-17_prm_1 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-18",
                                              "label":  "SI-18",
                                              "title":  "Personally Identifiable Information Quality Operations",
                                              "description":  "Check the accuracy, relevance, timeliness, and completeness of personally identifiable information across the information life cycle {{ insert: param, si-18_prm_1 }} ; and Correct or delete inaccurate or outdated personally identifiable information.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-18.1",
                                                                       "label":  "SI-18(1)",
                                                                       "title":  "Automation Support",
                                                                       "description":  "Correct or delete personally identifiable information that is inaccurate or outdated, incorrectly determined regarding impact, or incorrectly de-identified using {{ insert: param, si-18.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "si-18.2",
                                                                       "label":  "SI-18(2)",
                                                                       "title":  "Data Tags",
                                                                       "description":  "Employ data tags to automate the correction or deletion of personally identifiable information across the information life cycle within organizational systems."
                                                                   },
                                                                   {
                                                                       "id":  "si-18.3",
                                                                       "label":  "SI-18(3)",
                                                                       "title":  "Collection",
                                                                       "description":  "Collect personally identifiable information directly from the individual."
                                                                   },
                                                                   {
                                                                       "id":  "si-18.4",
                                                                       "label":  "SI-18(4)",
                                                                       "title":  "Individual Requests",
                                                                       "description":  "Correct or delete personally identifiable information upon request by individuals or their designated representatives."
                                                                   },
                                                                   {
                                                                       "id":  "si-18.5",
                                                                       "label":  "SI-18(5)",
                                                                       "title":  "Notice of Correction or Deletion",
                                                                       "description":  "Notify {{ insert: param, si-18.05_odp }} and individuals that the personally identifiable information has been corrected or deleted."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-19",
                                              "label":  "SI-19",
                                              "title":  "De-identification",
                                              "description":  "Remove the following elements of personally identifiable information from datasets: {{ insert: param, si-19_odp.01 }} ; and Evaluate {{ insert: param, si-19_odp.02 }} for effectiveness of de-identification.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "si-19.1",
                                                                       "label":  "SI-19(1)",
                                                                       "title":  "Collection",
                                                                       "description":  "De-identify the dataset upon collection by not collecting personally identifiable information."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.2",
                                                                       "label":  "SI-19(2)",
                                                                       "title":  "Archiving",
                                                                       "description":  "Prohibit archiving of personally identifiable information elements if those elements in a dataset will not be needed after the dataset is archived."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.3",
                                                                       "label":  "SI-19(3)",
                                                                       "title":  "Release",
                                                                       "description":  "Remove personally identifiable information elements from a dataset prior to its release if those elements in the dataset do not need to be part of the data release."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.4",
                                                                       "label":  "SI-19(4)",
                                                                       "title":  "Removal, Masking, Encryption, Hashing, or Replacement of Direct Identifiers",
                                                                       "description":  "Remove, mask, encrypt, hash, or replace direct identifiers in a dataset."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.5",
                                                                       "label":  "SI-19(5)",
                                                                       "title":  "Statistical Disclosure Control",
                                                                       "description":  "Manipulate numerical data, contingency tables, and statistical findings so that no individual or organization is identifiable in the results of the analysis."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.6",
                                                                       "label":  "SI-19(6)",
                                                                       "title":  "Differential Privacy",
                                                                       "description":  "Prevent disclosure of personally identifiable information by adding non-deterministic noise to the results of mathematical operations before the results are reported."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.7",
                                                                       "label":  "SI-19(7)",
                                                                       "title":  "Validated Algorithms and Software",
                                                                       "description":  "Perform de-identification using validated algorithms and software that is validated to implement the algorithms."
                                                                   },
                                                                   {
                                                                       "id":  "si-19.8",
                                                                       "label":  "SI-19(8)",
                                                                       "title":  "Motivated Intruder",
                                                                       "description":  "Perform a motivated intruder test on the de-identified dataset to determine if the identified data remains or if the de-identified data can be re-identified."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "si-20",
                                              "label":  "SI-20",
                                              "title":  "Tainting",
                                              "description":  "Embed data or capabilities in the following systems or system components to determine if organizational data has been exfiltrated or improperly removed from the organization: {{ insert: param, si-20_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-21",
                                              "label":  "SI-21",
                                              "title":  "Information Refresh",
                                              "description":  "Refresh {{ insert: param, si-21_odp.01 }} at {{ insert: param, si-21_odp.02 }} or generate the information on demand and delete the information when no longer needed.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-22",
                                              "label":  "SI-22",
                                              "title":  "Information Diversity",
                                              "description":  "Identify the following alternative sources of information for {{ insert: param, si-22_odp.02 }}: {{ insert: param, si-22_odp.01 }} ; and Use an alternative information source for the execution of essential functions or services on {{ insert: param, si-22_od...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "si-23",
                                              "label":  "SI-23",
                                              "title":  "Information Fragmentation",
                                              "description":  "Based on {{ insert: param, si-23_odp.01 }}: Fragment the following information: {{ insert: param, si-23_odp.02 }} ; and Distribute the fragmented information across the following systems or system components: {{ insert: param, si-23_odp.03 }}.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     },
                     {
                         "id":  "sr",
                         "label":  "SR",
                         "title":  "Supply Chain Risk Management",
                         "controls":  [
                                          {
                                              "id":  "sr-1",
                                              "label":  "SR-1",
                                              "title":  "Policy and Procedures",
                                              "description":  "Develop, document, and disseminate to {{ insert: param, sr-1_prm_1 }}: Designate an {{ insert: param, sr-01_odp.04 }} to manage the development, documentation, and dissemination of the supply chain risk management policy and procedures; and Review and updat...",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sr-2",
                                              "label":  "SR-2",
                                              "title":  "Supply Chain Risk Management Plan",
                                              "description":  "Develop a plan for managing supply chain risks associated with the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of the following systems, system components or system services: ...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-2.1",
                                                                       "label":  "SR-2(1)",
                                                                       "title":  "Establish SCRM Team",
                                                                       "description":  "Establish a supply chain risk management team consisting of {{ insert: param, sr-02.01_odp.01 }} to lead and support the following SCRM activities: {{ insert: param, sr-02.01_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-3",
                                              "label":  "SR-3",
                                              "title":  "Supply Chain Controls and Processes",
                                              "description":  "Establish a process or processes to identify and address weaknesses or deficiencies in the supply chain elements and processes of {{ insert: param, sr-03_odp.01 }} in coordination with {{ insert: param, sr-03_odp.02 }}; Employ the following controls to prot...",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-3.1",
                                                                       "label":  "SR-3(1)",
                                                                       "title":  "Diverse Supply Base",
                                                                       "description":  "Employ a diverse set of sources for the following system components and services: {{ insert: param, sr-3.1_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-3.2",
                                                                       "label":  "SR-3(2)",
                                                                       "title":  "Limitation of Harm",
                                                                       "description":  "Employ the following controls to limit harm from potential adversaries identifying and targeting the organizational supply chain: {{ insert: param, sr-03.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-3.3",
                                                                       "label":  "SR-3(3)",
                                                                       "title":  "Sub-tier Flow Down",
                                                                       "description":  "Ensure that the controls included in the contracts of prime contractors are also included in the contracts of subcontractors."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-4",
                                              "label":  "SR-4",
                                              "title":  "Provenance",
                                              "description":  "Document, monitor, and maintain valid provenance of the following systems, system components, and associated data: {{ insert: param, sr-04_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-4.1",
                                                                       "label":  "SR-4(1)",
                                                                       "title":  "Identity",
                                                                       "description":  "Establish and maintain unique identification of the following supply chain elements, processes, and personnel associated with the identified system and critical system components: {{ insert: param, sr-04.01_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-4.2",
                                                                       "label":  "SR-4(2)",
                                                                       "title":  "Track and Trace",
                                                                       "description":  "Establish and maintain unique identification of the following systems and critical system components for tracking through the supply chain: {{ insert: param, sr-04.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-4.3",
                                                                       "label":  "SR-4(3)",
                                                                       "title":  "Validate as Genuine and Not Altered",
                                                                       "description":  "Employ the following controls to validate that the system or system component received is genuine and has not been altered: {{ insert: param, sr-4.3_prm_1 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-4.4",
                                                                       "label":  "SR-4(4)",
                                                                       "title":  "Supply Chain Integrity â€” Pedigree",
                                                                       "description":  "Employ {{ insert: param, sr-04.04_odp.01 }} and conduct {{ insert: param, sr-04.04_odp.02 }} to ensure the integrity of the system and system components by validating the internal composition and provenance of critical or mission-essential technologies, pro..."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-5",
                                              "label":  "SR-5",
                                              "title":  "Acquisition Strategies, Tools, and Methods",
                                              "description":  "Employ the following acquisition strategies, contract tools, and procurement methods to protect against, identify, and mitigate supply chain risks: {{ insert: param, sr-05_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-5.1",
                                                                       "label":  "SR-5(1)",
                                                                       "title":  "Adequate Supply",
                                                                       "description":  "Employ the following controls to ensure an adequate supply of {{ insert: param, sr-05.01_odp.02 }}: {{ insert: param, sr-05.01_odp.01 }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-5.2",
                                                                       "label":  "SR-5(2)",
                                                                       "title":  "Assessments Prior to Selection, Acceptance, Modification, or Update",
                                                                       "description":  "Assess the system, system component, or system service prior to selection, acceptance, modification, or update."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-6",
                                              "label":  "SR-6",
                                              "title":  "Supplier Assessments and Reviews",
                                              "description":  "Assess and review the supply chain-related risks associated with suppliers or contractors and the system, system component, or system service they provide {{ insert: param, sr-06_odp }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-6.1",
                                                                       "label":  "SR-6(1)",
                                                                       "title":  "Testing and Analysis",
                                                                       "description":  "Employ {{ insert: param, sr-06.01_odp.01 }} of the following supply chain elements, processes, and actors associated with the system, system component, or system service: {{ insert: param, sr-06.01_odp.02 }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-7",
                                              "label":  "SR-7",
                                              "title":  "Supply Chain Operations Security",
                                              "description":  "Employ the following Operations Security (OPSEC) controls to protect supply chain-related information for the system, system component, or system service: {{ insert: param, sr-07_odp }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sr-8",
                                              "label":  "SR-8",
                                              "title":  "Notification Agreements",
                                              "description":  "Establish agreements and procedures with entities involved in the supply chain for the system, system component, or system service for the {{ insert: param, sr-08_odp.01 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sr-9",
                                              "label":  "SR-9",
                                              "title":  "Tamper Resistance and Detection",
                                              "description":  "Implement a tamper protection program for the system, system component, or system service.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-9.1",
                                                                       "label":  "SR-9(1)",
                                                                       "title":  "Multiple Stages of System Development Life Cycle",
                                                                       "description":  "Employ anti-tamper technologies, tools, and techniques throughout the system development life cycle."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-10",
                                              "label":  "SR-10",
                                              "title":  "Inspection of Systems or Components",
                                              "description":  "Inspect the following systems or system components {{ insert: param, sr-10_odp.02 }} to detect tampering: {{ insert: param, sr-10_odp.01 }}.",
                                              "enhancements":  [

                                                               ]
                                          },
                                          {
                                              "id":  "sr-11",
                                              "label":  "SR-11",
                                              "title":  "Component Authenticity",
                                              "description":  "Develop and implement anti-counterfeit policy and procedures that include the means to detect and prevent counterfeit components from entering the system; and Report counterfeit system components to {{ insert: param, sr-11_odp.01 }}.",
                                              "enhancements":  [
                                                                   {
                                                                       "id":  "sr-11.1",
                                                                       "label":  "SR-11(1)",
                                                                       "title":  "Anti-counterfeit Training",
                                                                       "description":  "Train {{ insert: param, sr-11.01_odp }} to detect counterfeit system components (including hardware, software, and firmware)."
                                                                   },
                                                                   {
                                                                       "id":  "sr-11.2",
                                                                       "label":  "SR-11(2)",
                                                                       "title":  "Configuration Control for Component Service and Repair",
                                                                       "description":  "Maintain configuration control over the following system components awaiting service or repair and serviced or repaired components awaiting return to service: {{ insert: param, sr-11.02_odp }}."
                                                                   },
                                                                   {
                                                                       "id":  "sr-11.3",
                                                                       "label":  "SR-11(3)",
                                                                       "title":  "Anti-counterfeit Scanning",
                                                                       "description":  "Scan for counterfeit system components {{ insert: param, sr-11.03_odp }}."
                                                                   }
                                                               ]
                                          },
                                          {
                                              "id":  "sr-12",
                                              "label":  "SR-12",
                                              "title":  "Component Disposal",
                                              "description":  "Dispose of {{ insert: param, sr-12_odp.01 }} using the following techniques and methods: {{ insert: param, sr-12_odp.02 }}.",
                                              "enhancements":  [

                                                               ]
                                          }
                                      ]
                     }
                 ]
};

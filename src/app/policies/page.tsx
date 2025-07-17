"use client";

import React, { useState } from "react";
import {
  Typography,
  Container,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Terms & Conditions sections
const LEGAL_SECTIONS = {
  privacy: [
    {
      title: "Introduction",
      content: `We/ MIRACLE ME, are an internet based mobile phone application by M/s We Heal Private Limited, and this document uses the words "we" and "MIRACLE ME" interchangeably, and "you" and "users" interchangeably. The expression "we" covers both MIRACLE ME and M/s We Heal Private Limited, as and when the context allows.

Terms "We", "MIRACLE ME", "M/s We Heal Private Limited", covers their respective current or former employees, officers, directors, agents, successors, assigns, parents, subsidiaries, divisions or affiliated corporations.

The users' right to privacy is of paramount importance to MIRACLE ME community.

We take data security and privacy with critical importance. We obligate ourselves to maintain a no-leak and no-disclosure business as any private and sensitive data must receive proportioned protection. In our application, users and providers / 'listeners', are in control and can decide what they want to share and what they prefer to keep private.`,
    },
    {
      title: "Information Protection",
      content: `- Any information you share with us by your own choosing is 'redacted', 'obscure', and 'censored' from everyone, including the employees of MIRACLE ME, as well as the external 'listeners' we bring in, for your engagement.

- The information or data you share with our 'listeners' or otherwise, is for "your eyes only". We only retain the basic minimum information like name, age, email ID, for the registration process.

- We do not send you messages without your permission.

- We send promotional messages with an option to opt-out at any time.

- We do not share data with any third party, whatsoever.

However, MIRACLE ME may, with your implied permission, use the basic information and data provided by you, to provide a more personalized online experience.`,
    },
    {
      title: "Data Collection",
      content: `MIRACLE ME stores any data entered by the user, in a very secured format deterring any leakage or misuse.

No "sensitive personal data" is collected or stored and used as per the required legal guidelines. We emphasize and actively inform all users to avoid sharing any "sensitive personal data" with anyone related to, or connected to, or representing MIRACLE ME.

The only purpose of collecting any basic or required information is to provide you with a more secure experience to the real-time users and enable the 'listeners' to address and engage the users, coherently and cogently.

In general, you can visit MIRACLE ME's portal without telling us who you are and without revealing any information about yourself. There are times, however, when MIRACLE ME may need information from you. Only in such incidences, as disclosed, MIRACLE ME reserves the right to gather the information and use it according to the terms mentioned.`,
    },
    {
      title: "Information Sharing",
      content: `MIRACLE ME does not rent, sell, or share personal or any other form of information about you to anyone, including non-affiliates, except to provide the services as agreed or intended to be generally provided through the MIRACLE ME application or any other service you've specifically requested, when MIRACLE ME has your permission.

MIRACLE ME provides your redacted and censored information to unspecified listeners (as defined in the disclaimer) who timely engage with MIRACLE ME under strict confidentiality agreements and non-disclosure contracts.

However, MIRACLE ME as per law, is legally bound to disclose information that any government organization with proper instructions from the court of law, in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, or as otherwise required by law.`,
    },
    {
      title: "Payments Data",
      content: `When you use our services for purchases or other financial transactions, we process additional information about you, including payment account and transaction information. Payment account and transaction information include information needed to complete the transaction (this includes information about the payment method, amounts involved). If you use our payments services, our privacy practices are described below:

When any party registers to use services making or giving payments, we receive your bank's name and confirm the bank account for use. If you do not have a BHIM UPI PIN already for your bank account, you can set one using your partial debit card number, expiry date, PIN (if required by your bank), and bank-issued one-time password (OTP) to set up a BHIM UPI PIN.

We DO NOT RETAIN any user's sensitive payment data (any debit card number, expiry date, PIN, OTP, or BHIM UPI PIN), as per law.

We don't have access to the BHIM UPI PIN because it is encrypted by Common Library (CL) software provided by National Payments Corporation of India.

If you would like to manage, change, limit, or delete your payment information, we allow you to do that through your Payments settings or by deleting your account.`,
    },
  ],
  terms: [
    {
      title: "How We Work",
      content: `MIRACLE ME allows you to access certain features or content in exchange for a recurring fee, as applicable (the "Membership Services"). Your transactions and any other use of the 'Membership Services' i.e. services you avail, post enrolling with MIRACLE ME's internet run mobile application, are subject to these "Terms of Service".

You undertake and understand that these terms apply to you, the moment you 'download' the "MIRACLE ME App", available on the concerned application store of your phone, or downloaded / used/ procured by any other medium.
You further understand and undertake that these Terms of Service are to be read along with our Privacy Policy, and each of these documents is incorporated in each other by reference.
These terms are legally binding and the application is governed by the laws of India, and falls within the New Delhi jurisdiction.`,
    },
    {
      title: "Listener Relationship",
      content: `We refer to these individuals who help you discuss any issue which you may want to discuss as "listeners", for the sake of terminology.

Though to the limited extent possible, we verify all such "listeners" associated with us, we do not conduct verification of each and every assertion made by the listeners and our vetting process is basic due diligence.

We cannot, at any point in time, be held to be responsible, if any information declared by any listener may prove to not be an accurate depiction of his or her portrayal, accomplishment, experience, or circumstance.

You understand that these "listeners" we curate to adhere to your optimum customer expectation, are not our employees or under our employment in any way, and are individuals associated with us for the limited purpose of helping you discuss your problems, concerns, issues, inhibitions, or general feelings and thoughts, in an associated role (experience sharing interaction) and each of these individuals/ listeners are liable for their own conduct, behavior, disclosures, revelations, advice or suggestion.`,
    },
    {
      title: "Service Limitations",
      content: `You undertake to proceed only with the declared understanding that we are not certified to give or prescribe medical or psychological care of assistance to any user, and are only a platform that enables you to discuss your problems, concerns, issues, inhibitions, or general feelings and thoughts, with our 'listeners' who, as per their disclosures, have been similarly placed in the past are may now be in a position to lend you an ear, support you by discussing your concerns and/ or suggest you alternatives to tackle your situation, in a non-professional way, without being liable for these discussions. We, MIRACLE ME, actively encourage you to seek professional assistance through government agencies like hospitals, police, fire department, etc., should you be at any medical, psychological, or physical risk, and need help.

You further understand that we as an application, have designed our interface to keep you anonymous, and still put you in touch with people who, as per them, are experienced on the issue and may be equipped to discuss your issues.`,
    },
    {
      title: "Liability Limitations",
      content: `If on the basis of what you choose to share, or choose to ask the listener, (which we recommend, to keep non-specific, so that your identity remains untraceable), if any issue arises, disputes are created, or a situation is created by your or the listener's action or conduct, which may not be in the best of the interests of either of the parties, please do report such incident to us, however, we cannot be responsible or held liable, even vicariously, for any such circumstance, incident, event, dispute, conflict. You or anyone acting on your behalf, undertake to keep us indemnified at all times, from all such circumstance, incident, event, dispute, conflict, that may arise on the basis of the conversation or disclosure or any involvement, which you may get into, with the individual listeners. We encourage you to not track or form an association of any nature with the listeners, for your anonymity.

YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO THE FOLLOWING DISCLAIMERS. WE ARE PROVIDING OUR SERVICES ON AN "AS IS" BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM COMPUTER VIRUS OR OTHER HARMFUL CODE.`,
    },
    {
      title: "Anti-Hacking Provisions",
      content: `You expressly agree not to use this portal in any manner or for any purpose that is prohibited by this membership contract. In addition, you expressly agree not to:

(1) use the portal for any purpose that is prohibited by any law or regulation, or to facilitate the violation of any law or regulation;

(2) use or attempt to use any "deep-link," "scraper," "robot," "bot," "spider," "data mining," "computer code" or any other automated device, program, tool, algorithm, process or methodology or manual process having similar processes or functionality, to access, acquire, copy, or monitor any portion of the portal or any data or content found on or accessed through the portal without our prior express written consent;

(3) obtain or attempt to obtain through any means any materials or information on the portal that has not been intentionally made publicly available;

(4) in any way bypass or circumvent any other measure employed to limit or prevent access to the application or its content;

(5) violate the security of the application or attempt to gain unauthorized access to the application, data, materials, information, computer systems or networks connected to any server associated with us, through hacking, password mining, or any other means;

(6) interfere or attempt to interfere with the proper working of the mobile application or any activities conducted on or through the application, including accessing any data, content, or other information prior to the time that it is intended to be available to the public on the application;

(7) recording of any conversation or chatting shall also amount to hacking and infringement of the Membership Policy.`,
    },
  ],
  disclaimer: [
    {
      title: "Service Disclaimer",
      content: `The extent of application services: Our services do not provide access to emergency services or emergency services providers, including the medical, police, fire departments, or hospitals, or otherwise connect to public safety answering points. You should ensure you can contact your relevant emergency services providers in your relevant city or local administration. Our services are limited to providing general non-certified advisory, discussions and guidance only.

WE DO NOT WARRANT THAT ANY INFORMATION PROVIDED BY US IS ACCURATE, COMPLETE, OR USEFUL, THAT OUR SERVICES WILL BE OPERATIONAL, ERROR-FREE, SECURE, OR SAFE, OR THAT OUR SERVICES WILL FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS.

WE DO NOT CONTROL, AND ARE NOT RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR USERS USE OUR SERVICES OR THE FEATURES, SERVICES, AND INTERFACES OUR SERVICES PROVIDE. WE ARE NOT RESPONSIBLE FOR AND ARE NOT OBLIGATED TO CONTROL THE ACTIONS OR INFORMATION (INCLUDING CONTENT) OF OUR USERS OR OTHER THIRD PARTIES.`,
    },
    {
      title: "Release of Claims",
      content: `YOU RELEASE US, OUR SUBSIDIARIES, AFFILIATES, OUR AND THEIR DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, AND AGENTS FROM ANY CLAIM, COMPLAINT, CAUSE OF ACTION, CONTROVERSY, DISPUTE, OR DAMAGES (TOGETHER, "CLAIM"), KNOWN AND UNKNOWN, RELATING TO, ARISING OUT OF, OR IN ANY WAY CONNECTED WITH ANY SUCH CLAIM YOU HAVE AGAINST ANY THIRD-PARTIES.

YOUR RIGHTS WITH RESPECT TO THE PARTIES ARE NOT MODIFIED BY THE FOREGOING DISCLAIMER IF THE LAWS OF THE COUNTRY OR TERRITORY OF RESIDENCE, APPLICABLE AS A RESULT OF YOUR USE OF OUR SERVICES, DO NOT PERMIT IT.`,
    },
    {
      title: "Indemnification",
      content: `If either the 'users' or the 'listeners' or any party on their behalf or a third party brings a claim (including a "Third-Party Claim") against us, in relation to any party's actions in re. MIRACLE ME, or any other use of our services by you, you will, to the maximum extent permitted by applicable law, indemnify, and hold MIRACLE ME and its employees and directors, harmless from and against all liabilities, damages, losses, and expenses of any kind (including reasonable legal fees and costs) relating to, arising out of, or in any way in connection with any of of our services.`,
    },
    {
      title: "Dispute Resolution",
      content: `Dispute Resolution and Governing Law: The law governing any dispute arising out of or related to MIRACLE ME shall be under express jurisdiction of courts at 'New Delhi', central district court.

The 'Governing Law' would be Indian Law. All disputes shall be referred to 'Arbitration' under sole arbitrator, appointed mutually or through FICCI, and shall either be a lawyer or the High Court or a retired District Judge or a retired senior Bureaucrat with the Government of India.

Arbitrator's fee shall not be more than as provided for in the 'model fee' under the Arbitration and Conciliation Act, 1996, and the language used, shall be English.

With regard to parties based out of India, as we are an Indian party, registered in India, with primary place of business based out of India, it would be assumed that the subject matter of any dispute arose in India and shall be subject to the substantial law of India. This Policy, should you choose to proceed to use any of our services, bind you legally, and this document expressly bars the jurisdiction of any other court or forum not based out of New Delhi, India.`,
    },
  ],
};

export function TermsAndConditions() {
  const [tabValue, setTabValue] = useState(0);
  const [expandedSection, setExpandedSection] = useState(false);

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
    setExpandedSection(false);
  };

  const handleAccordionChange =
    (panel: any) => (event: any, isExpanded: any) => {
      setExpandedSection(isExpanded ? panel : false);
    };

  const getTabContent = () => {
    let sections;
    let title;

    switch (tabValue) {
      case 0:
        sections = LEGAL_SECTIONS.privacy;
        title = "Privacy Policy";
        break;
      case 1:
        sections = LEGAL_SECTIONS.terms;
        title = "Terms of Service";
        break;
      case 2:
        sections = LEGAL_SECTIONS.disclaimer;
        title = "Disclaimers & Releases";
        break;
      default:
        sections = LEGAL_SECTIONS.privacy;
        title = "Privacy Policy";
    }

    return (
      <>
        <Typography
          variant="h4"
          className="pb-6 font-bold text-white text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {title}
          </span>
        </Typography>

        {sections.map((section: any, index: any) => (
          <Accordion
            sx={{
              borderRadius: "10px",
              backgroundColor: "transparent",
              "&.MuiPaper-root": {
                backgroundColor: "transparent",
              },
              "&:before": {
                display: "none",
              },
            }}
            key={index}
            expanded={expandedSection === `panel-${tabValue}-${index}`}
            onChange={handleAccordionChange(`panel-${tabValue}-${index}`)}
            className="mb-4 bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-blue-900/20 backdrop-blur-sm backdrop-saturate-150 border border-purple-500/20 rounded-xl overflow-hidden shadow-md shadow-purple-500/5 transition-all duration-300"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#a855f7" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="hover:bg-purple-500/10 transition-colors duration-300"
            >
              <Typography
                variant="h6"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 font-medium"
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="border-t border-purple-500/20 bg-indigo-900/10">
              <Typography
                variant="body1"
                className="text-gray-300 whitespace-pre-line"
              >
                {section.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden min-h-screen py-32">
        {/* Background Elements - Mystical theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl opacity-10 z-0"></div>

        <Container maxWidth="lg" className="relative z-10">
          {/* Header Section */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Typography
                variant="subtitle2"
                className="text-white font-medium"
              >
                Legal Information
              </Typography>
            </div>

            <Typography variant="h3" className="mb-4 font-bold text-white">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Commitments
              </span>{" "}
              & Policies
            </Typography>

            <Typography
              variant="body1"
              className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
            >
              Your privacy and trust are important to us. Please review our
              legal policies carefully to understand how we operate and protect
              your information.
            </Typography>
          </div>

          {/* Tabs Section */}
          <Box
            sx={{ borderBottom: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}
            className="mb-8"
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              TabIndicatorProps={{
                style: {
                  background: "linear-gradient(to right, #a855f7, #6366f1)",
                  height: "3px",
                  borderRadius: "3px",
                },
              }}
            >
              <Tab
                label="Privacy Policy"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-selected": { color: "#fff" },
                  textTransform: "none",
                  fontWeight: "medium",
                  fontSize: "1rem",
                }}
              />
              <Tab
                label="Terms of Service"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-selected": { color: "#fff" },
                  textTransform: "none",
                  fontWeight: "medium",
                  fontSize: "1rem",
                }}
              />
              <Tab
                label="Disclaimers"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-selected": { color: "#fff" },
                  textTransform: "none",
                  fontWeight: "medium",
                  fontSize: "1rem",
                }}
              />
            </Tabs>
          </Box>

          {/* Content Section */}
          <div className="bg-white/5 backdrop-blur-sm backdrop-filter backdrop-saturate-150 border border-white/10 rounded-2xl p-6 md:p-8">
            {getTabContent()}
          </div>

          {/* Bottom Contact */}
          <div className="mt-16 text-center">
            <Typography variant="body2" className="text-gray-400 pb-4">
              For questions about our policies, please contact us:
            </Typography>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10">
                <span className="text-purple-300 mr-2">✉</span>
                <Typography variant="body2" className="text-gray-300">
                  user@wehealapp.in
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default TermsAndConditions;

"use client";

import React, { useState } from "react";
import {
  Typography,
  Container,
  Collapse,
  IconButton,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// Categorized Mental Health FAQs
const MENTAL_HEALTH_CATEGORIES = [
  {
    name: "General Mental Health",
    icon: "fa-brain",
    questions: [
      {
        title: "What is Mental Health?",
        desc: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act as we cope with life. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood and aging.",
      },
      {
        title: "Who is a Therapist?",
        desc: "A therapist is a professional who is trained to provide treatment and rehabilitation. The term is often applied to psychologists, but it can include others who provide a variety of services, including social workers, counselors, life coaches, and many others. Therapists help people of all ages live happier, healthier, and more productive lives.",
      },
      {
        title: "What is Therapy?",
        desc: "Therapy is a treatment that helps someone feel better, grow stronger, etc., especially after an illness. It is designed to help people understand their feelings and thoughts and equip them to face challenges and lead better lives.",
      },
      {
        title:
          "Is therapy only for people with serious mental health conditions?",
        desc: "No, therapy is beneficial for anyone who is going through a tough time or wants to learn more about themselves. It's helpful for dealing with stress, relationships, career decisions, grief, and many other life situations - not just serious mental health conditions.",
      },
      {
        title: "Will I need medication if I start therapy?",
        desc: "Not necessarily. Therapists typically focus on talk therapy and behavioral interventions. Only psychiatrists can prescribe medication, and many people benefit from therapy without medication. If your therapist believes medication might help, they may refer you to a psychiatrist for evaluation.",
      },
      {
        title: "How long will I need therapy?",
        desc: "The duration of therapy varies greatly depending on your goals, the issues you're working on, and the type of therapy. Some people benefit from just a few sessions, while others may continue therapy for months or years. Your therapist will work with you to determine an appropriate timeline.",
      },
      {
        title: "Is what I tell my therapist confidential?",
        desc: "Yes, with limited exceptions. Therapists are bound by confidentiality laws and ethical codes. The main exceptions where a therapist might need to break confidentiality are if you're at risk of harming yourself or others, or in cases of child or elder abuse. Your therapist should explain these limits at your first session.",
      },
      {
        title: "How do I know if therapy is working?",
        desc: "Progress in therapy can sometimes be subtle. Signs therapy is working include: feeling more capable of handling your emotions, noticing positive changes in your relationships, developing better coping skills, gaining insights about yourself, and gradually moving toward your goals. Discuss your progress regularly with your therapist.",
      },
      {
        title: "Can therapy help with physical health problems?",
        desc: "Yes, therapy can help with managing chronic pain, adhering to medical treatments, coping with illness, and addressing behaviors that affect physical health (like sleep, diet, and exercise). The mind-body connection means that improving mental health often benefits physical health as well.",
      },
      {
        title: "What's the difference between a psychiatrist and a therapist?",
        desc: "Psychiatrists are medical doctors who specialize in mental health and can prescribe medication. Therapists (which may include psychologists, counselors, social workers, etc.) focus on talk therapy and behavioral interventions. Some people work with both a psychiatrist for medication management and a therapist for talk therapy.",
      },
    ],
  },
  {
    name: "Depression",
    icon: "fa-cloud-rain",
    questions: [
      {
        title: "What is depression?",
        desc: "Depression is more than just feeling sad. It's a common but serious mood disorder that causes severe symptoms affecting how you feel, think, and handle daily activities. These symptoms must be present for at least two weeks for a diagnosis of depression. Depression can happen at any age but often begins in adulthood.",
      },
      {
        title: "What are the symptoms of depression?",
        desc: "Symptoms of depression can include persistent sad or anxious mood, feelings of hopelessness, irritability, feelings of guilt or worthlessness, loss of interest in hobbies and activities, decreased energy, difficulty concentrating or making decisions, sleep problems (insomnia or oversleeping), appetite or weight changes, and thoughts of death or suicide. Not everyone with depression will experience all symptoms.",
      },
      {
        title: "How is depression treated?",
        desc: "Depression is typically treated with psychotherapy (talk therapy), medication, or a combination of both. Cognitive-behavioral therapy (CBT) is particularly effective for depression. Lifestyle changes like regular exercise, healthy diet, adequate sleep, and stress management can also help. In severe cases, treatments like electroconvulsive therapy (ECT) might be considered.",
      },
      {
        title: "How long does depression last?",
        desc: "The duration of depression varies greatly among individuals. Without treatment, episodes typically last several months to years. With proper treatment, many people see improvement in symptoms within 4-6 weeks, though full recovery may take longer. Some people experience a single episode, while others have recurrent episodes throughout life.",
      },
      {
        title: "Is depression genetic?",
        desc: "Depression can run in families, suggesting a genetic link. If a first-degree relative (parent or sibling) has depression, you have an approximately 2-3 times higher risk of developing it. However, genetics is just one factor. Environmental factors, life events, and other personal factors also play significant roles in whether someone develops depression.",
      },
    ],
  },
  {
    name: "Anxiety",
    icon: "fa-bolt",
    questions: [
      {
        title:
          "What is the difference between normal worry and anxiety disorder?",
        desc: "Normal worry is temporary, proportionate to the situation, and doesn't significantly interfere with daily life. Anxiety disorders involve worry or fear that is excessive, persistent (lasting 6 months or more), often irrational, and disrupts normal functioning. While everyone experiences anxiety sometimes, anxiety disorders are more intense and debilitating.",
      },
      {
        title: "What are common types of anxiety disorders?",
        desc: "Common anxiety disorders include Generalized Anxiety Disorder (persistent worry about many things), Social Anxiety Disorder (fear of social situations), Panic Disorder (recurring panic attacks), Specific Phobias (intense fear of specific objects or situations), Agoraphobia (fear of places that might cause panic), and Separation Anxiety Disorder. Each has distinct features but all involve excessive fear or worry.",
      },
      {
        title: "What are effective treatments for anxiety?",
        desc: "Effective treatments for anxiety include Cognitive-Behavioral Therapy (CBT), which helps change thought patterns; exposure therapy for specific fears; medication (like SSRIs or benzodiazepines); mindfulness and relaxation techniques; regular exercise; adequate sleep; and reducing caffeine and alcohol. Many people benefit from a combination of therapy and lifestyle changes.",
      },
      {
        title: "Can anxiety cause physical symptoms?",
        desc: "Yes, anxiety often manifests physically. Common physical symptoms include rapid heartbeat, shortness of breath, chest tightness, dizziness, sweating, trembling, muscle tension, headaches, fatigue, digestive issues, and sleep problems. These physical symptoms are real and not 'just in your head'—they're caused by your body's stress response.",
      },
      {
        title: "Is anxiety curable?",
        desc: "While anxiety disorders are typically chronic conditions, they are highly treatable, and many people experience significant reduction in symptoms or even complete remission. With proper treatment, most people learn to manage their anxiety effectively. Some may need ongoing treatment, while others might need help only during particularly stressful periods in their lives.",
      },
    ],
  },
  {
    name: "Relationships",
    icon: "fa-heart",
    questions: [
      {
        title: "Can therapy help with relationship problems?",
        desc: "Yes, therapy can be very effective for relationship issues. Couples therapy, family therapy, or even individual therapy can help improve communication, resolve conflicts, rebuild trust, and strengthen relationships. Therapists can provide a neutral space to discuss difficult topics and teach skills for healthier interactions.",
      },
      {
        title: "How do I know if my relationship is healthy?",
        desc: "Healthy relationships generally involve mutual respect, trust, honesty, good communication, support for each other's individuality, and a reasonable balance of give and take. While all relationships have challenges, healthy ones don't include patterns of control, isolation, disrespect, or abuse. If you're unsure about your relationship, discussing it with a therapist can provide perspective.",
      },
      {
        title: "What are common issues addressed in couples therapy?",
        desc: "Couples therapy commonly addresses communication problems, trust issues, financial conflicts, intimacy concerns, parenting disagreements, managing major life transitions, recovering from infidelity, and differences in goals or values. It can help couples who want to strengthen their relationship or those deciding whether to continue the relationship.",
      },
      {
        title: "Can therapy help after a breakup or divorce?",
        desc: "Absolutely. Therapy can provide valuable support during and after relationship endings. It can help you process grief, rebuild self-identity, understand patterns that contributed to the relationship's end, develop coping strategies, and eventually prepare for healthy future relationships if desired.",
      },
      {
        title: "Is it normal to need space in a relationship?",
        desc: "Yes, maintaining some individual space and independence is healthy in relationships. Everyone needs different amounts of personal time and space. Problems arise when partners have very different needs for space or when requests for space come from avoiding relationship issues. Open communication about space needs helps prevent misunderstandings.",
      },
    ],
  },
  {
    name: "Loneliness",
    icon: "fa-user-alt-slash",
    questions: [
      {
        title: "What is the difference between being alone and feeling lonely?",
        desc: "Being alone is a physical state of not being with others, while loneliness is an emotional response to feeling disconnected or isolated, regardless of physical company. You can feel lonely in a crowd if you don't feel understood or connected, and you can be alone without feeling lonely if you feel content and connected to others in general.",
      },
      {
        title: "How does loneliness affect mental and physical health?",
        desc: "Chronic loneliness can significantly impact both mental and physical health. It's associated with increased risk of depression, anxiety, stress, poor sleep quality, weakened immune function, heart disease, and cognitive decline. Loneliness can be as damaging to health as smoking 15 cigarettes a day, according to some research.",
      },
      {
        title: "What causes loneliness?",
        desc: "Loneliness can be caused by various factors including major life transitions (moving, graduating, changing jobs), loss of significant relationships, social anxiety, depression, limited social skills, working remotely or in isolation, cultural or language barriers, and feeling different from those around you. Some people may be more genetically predisposed to feeling lonely.",
      },
      {
        title: "How can therapy help with loneliness?",
        desc: "Therapy can help with loneliness by addressing underlying issues like social anxiety or depression, improving social skills, challenging negative thought patterns that contribute to feelings of isolation, processing grief from lost connections, and developing strategies for building meaningful relationships. Therapists can provide connection and support while helping you expand your social world.",
      },
      {
        title: "Are there different types of loneliness?",
        desc: "Yes, researchers identify several types of loneliness. Social loneliness is lacking a satisfying social network. Emotional loneliness is missing deep, intimate connections despite having social contacts. Existential loneliness relates to feeling fundamentally separate from others. Situational loneliness is temporary isolation due to circumstances. Understanding your specific type of loneliness can help address it effectively.",
      },
    ],
  },
  {
    name: "Anger",
    icon: "fa-fire",
    questions: [
      {
        title: "Is anger a normal emotion?",
        desc: "Yes, anger is a completely normal and healthy emotion. It's a natural response to perceived threats, injustice, or frustration. Anger becomes problematic only when it's excessive, expressed inappropriately, or interferes with relationships and daily functioning. Healthy anger can actually motivate positive change and boundary-setting.",
      },
      {
        title: "What are healthy ways to express anger?",
        desc: "Healthy expression of anger includes: acknowledging the feeling without judgment, taking time to cool down before responding, using 'I' statements to communicate your feelings, focusing on solutions rather than blame, physical exercise to release tension, and practicing relaxation techniques. The goal is to express anger assertively, not aggressively.",
      },
      {
        title: "How can therapy help with anger management?",
        desc: "Therapy for anger management typically helps you identify anger triggers, recognize early warning signs, develop coping strategies, improve communication skills, address underlying issues (like trauma or stress), challenge irrational thoughts that fuel anger, and learn relaxation techniques. Cognitive-behavioral therapy is particularly effective for anger issues.",
      },
      {
        title: "What's the difference between anger and aggression?",
        desc: "Anger is an emotion—an internal feeling that arises in response to certain situations. Aggression is a behavior—an action taken that can harm others physically or emotionally. You can feel angry without being aggressive, and learning to separate the feeling from harmful actions is key to healthy anger management.",
      },
      {
        title: "Can suppressing anger cause problems?",
        desc: "Yes, consistently suppressing or denying anger can lead to various problems including depression, passive-aggressive behavior, physical health issues (like high blood pressure or digestive problems), relationship difficulties, and eventually more explosive anger episodes. Healthy anger management involves acknowledging anger and expressing it appropriately, not suppressing it.",
      },
    ],
  },
  {
    name: "Addiction",
    icon: "fa-pills",
    questions: [
      {
        title: "What is addiction?",
        desc: "Addiction is a complex, chronic brain disorder characterized by compulsive substance use or behavior despite harmful consequences. It involves changes in brain circuits involved in reward, stress, and self-control. Addiction is considered a brain disorder because it alters brain structure and function, but environmental and developmental factors also influence risk.",
      },
      {
        title: "Can you be addicted to things other than substances?",
        desc: "Yes, behavioral addictions (sometimes called process addictions) involve compulsive engagement in rewarding behaviors despite negative consequences. These can include gambling disorder, internet gaming disorder, sex addiction, shopping addiction, food addiction, and others. While not all are officially recognized as disorders, they share similar patterns and brain mechanisms with substance addictions.",
      },
      {
        title: "What are the signs someone might have an addiction?",
        desc: "Signs of addiction include: inability to stop or control use despite wanting to, spending significant time obtaining, using, or recovering from the substance/behavior, continued use despite negative consequences, neglecting responsibilities and relationships, developing tolerance (needing more for the same effect), experiencing withdrawal symptoms, and craving the substance or activity.",
      },
      {
        title: "How is addiction treated?",
        desc: "Addiction treatment typically involves a combination of approaches: detoxification (if needed), behavioral therapies (like CBT or motivational enhancement), medication (for some substance addictions), treatment of co-occurring mental health issues, support groups, and lifestyle changes. Effective treatment addresses the whole person—not just the addiction—and is typically a long-term process with ongoing support.",
      },
      {
        title: "Is addiction a choice or a disease?",
        desc: "The current scientific consensus views addiction as a complex brain disorder—a disease—not simply a matter of choice or moral failing. While initial use is typically voluntary, continued use can lead to changes in brain function that challenge an addicted person's self-control and ability to resist intense urges. However, this doesn't mean recovery is impossible—treatment works, and people recover from addiction every day.",
      },
    ],
  },
];

function MentalHealthAllFaqs() {
  const [expandedItem, setExpandedItem] = useState({
    category: null,
    question: null,
  });
  const [activeTab, setActiveTab] = useState(0);

  const handleToggle = (categoryIndex: any, questionIndex: any) => {
    if (
      expandedItem.category === categoryIndex &&
      expandedItem.question === questionIndex
    ) {
      setExpandedItem({ category: null, question: null });
    } else {
      setExpandedItem({ category: categoryIndex, question: questionIndex });
    }
  };

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden pt-24 pb-20 min-h-screen">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 z-0"></div>
        <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10 z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl rounded-full bg-blue-500 filter blur-3xl opacity-5 z-0"></div>

        <Container maxWidth="lg" className="relative z-10">
          {/* Header */}
          <div className="flex flex-col gap-2 items-center text-center mb-14">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Typography
                variant="subtitle2"
                className="text-white font-medium"
              >
                Mental Health Resources
              </Typography>
            </div>

            <Typography variant="h2" className="mb-4 font-bold text-white">
              Mental Health
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 ml-2">
                FAQ Library
              </span>
            </Typography>

            <Typography
              variant="body1"
              className="mx-auto max-w-2xl text-gray-300 leading-relaxed"
            >
              Explore our comprehensive collection of answers to common
              questions about mental health, therapy, and emotional well-being.
            </Typography>
          </div>

          {/* Category Tabs */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            className="mb-8"
            TabIndicatorProps={{
              style: {
                background: "linear-gradient(to right, #8B5CF6, #EC4899)",
                height: "3px",
              },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
                "&.Mui-selected": {
                  color: "#fff",
                },
              },
            }}
          >
            <Tab label="All Topics" />
            {MENTAL_HEALTH_CATEGORIES.map((category, idx) => (
              <Tab
                key={idx}
                icon={<i className={`fas ${category.icon} mr-2`}></i>}
                label={category.name}
                iconPosition="start"
              />
            ))}
          </Tabs>

          {/* FAQ Content */}
          {activeTab === 0 ? (
            // All Categories View
            MENTAL_HEALTH_CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                    <i className={`fas ${category.icon} text-white`}></i>
                  </div>
                  <Typography variant="h4" className="font-semibold text-white">
                    {category.name}
                  </Typography>
                </div>

                <div className="grid gap-6">
                  {category.questions.map((faq, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                    >
                      <div
                        className={`px-6 py-5 cursor-pointer flex justify-between items-center ${
                          expandedItem.category === categoryIndex &&
                          expandedItem.question === questionIndex
                            ? "border-b border-white/10"
                            : ""
                        }`}
                        onClick={() =>
                          handleToggle(categoryIndex, questionIndex)
                        }
                      >
                        <Typography
                          variant="h6"
                          className="font-medium text-white"
                        >
                          {faq.title}
                        </Typography>
                        <IconButton
                          className={`transition-transform duration-300 ${
                            expandedItem.category === categoryIndex &&
                            expandedItem.question === questionIndex
                              ? "rotate-180"
                              : ""
                          }`}
                          size="small"
                        >
                          <i
                            className={`fa-solid fa-chevron-down ${
                              expandedItem.category === categoryIndex &&
                              expandedItem.question === questionIndex
                                ? "text-pink-400"
                                : "text-gray-400"
                            }`}
                          ></i>
                        </IconButton>
                      </div>

                      <Collapse
                        in={
                          expandedItem.category === categoryIndex &&
                          expandedItem.question === questionIndex
                        }
                      >
                        <Box className="px-6 py-5 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
                          <Typography
                            variant="body1"
                            className="text-gray-300 leading-relaxed"
                          >
                            {faq.desc}
                          </Typography>
                        </Box>
                      </Collapse>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Single Category View
            <div className="grid gap-6">
              {MENTAL_HEALTH_CATEGORIES[activeTab - 1].questions.map(
                (faq, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="backdrop-blur-sm bg-white/5 backdrop-saturate-150 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                  >
                    <div
                      className={`px-6 py-5 cursor-pointer flex justify-between items-center ${
                        expandedItem.category === activeTab - 1 &&
                        expandedItem.question === questionIndex
                          ? "border-b border-white/10"
                          : ""
                      }`}
                      onClick={() => handleToggle(activeTab - 1, questionIndex)}
                    >
                      <Typography
                        variant="h6"
                        className="font-medium text-white"
                      >
                        {faq.title}
                      </Typography>
                      <IconButton
                        className={`transition-transform duration-300 ${
                          expandedItem.category === activeTab - 1 &&
                          expandedItem.question === questionIndex
                            ? "rotate-180"
                            : ""
                        }`}
                        size="small"
                      >
                        <i
                          className={`fa-solid fa-chevron-down ${
                            expandedItem.category === activeTab - 1 &&
                            expandedItem.question === questionIndex
                              ? "text-pink-400"
                              : "text-gray-400"
                          }`}
                        ></i>
                      </IconButton>
                    </div>

                    <Collapse
                      in={
                        expandedItem.category === activeTab - 1 &&
                        expandedItem.question === questionIndex
                      }
                    >
                      <Box className="px-6 py-5 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
                        <Typography
                          variant="body1"
                          className="text-gray-300 leading-relaxed"
                        >
                          {faq.desc}
                        </Typography>
                      </Box>
                    </Collapse>
                  </div>
                )
              )}
            </div>
          )}

          {/* Support CTA */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <Typography
                    variant="h4"
                    className="font-bold text-white mb-2"
                  >
                    Need to speak with someone?
                  </Typography>
                  <Typography variant="body1" className="text-gray-300 mb-6">
                    Our compassionate therapists are here to help you navigate
                    life's challenges. Schedule a consultation today.
                  </Typography>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <a
                      href="/booking"
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                    >
                      Book a Session
                    </a>
                    <a
                      href="/resources"
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      Explore Resources
                    </a>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-40 h-40 md:w-48 md:h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-hands-helping text-white text-5xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default MentalHealthAllFaqs;

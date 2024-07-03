"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        id: "skills",
        title: "Skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next</li>
                <li>Java</li>
                <li>SpringBoot</li>
            </ul>
        )
    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>University of Colombo School of Computing</li>
                <li>Sirimavo Bandaranaike Vidyalaya</li>
            </ul>
        )
    },
    {
        id: "certifications",
        title: "Certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
                <li>Postman API Fundamental Student Expert</li>
                <li>Networking Essentials</li>
                <li>Web Design for Beginners</li>
            </ul>
        )
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  
    return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.jpg" alt="about" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                I am a full stack web developer with a passion for craeting interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, PostgreSQL, HTML, CSS and Git. I am a quick learner and I am always looking to expand my knowledge and skills. I am a team player and i am excited to work with others to create amazing applications.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton selecttab={() => handleTabChange("skills")} active={tab === "skills"}> 
                    {" "}Skills{" "} 
                </TabButton>
                <TabButton selecttab={() => handleTabChange("education")} active={tab === "education"}> 
                    {" "}Education{" "} 
                </TabButton>
                <TabButton selecttab={() => handleTabChange("certifications")} active={tab === "certifications"}> 
                    {" "}Certifications{" "} 
                </TabButton>
            </div>
            <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
      </div>
    </section>
  )

};

export default AboutSection;

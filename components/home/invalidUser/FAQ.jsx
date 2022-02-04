import React from "react";
import Accordion from "./Accordion";
import GetStarted from "./GetStarted";

function FAQ() {
  const accordionData = [
    {
      title: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices. ",
    },
    {
      title: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. ",
    },
    {
      title: "How do I cancel?",
      content:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
  ];

  return (
    <section className="pt-20 border-b-8 border-[#222] bg-black">
      <h1 className="pb-10 text-white text-center text-3xl font-semibold lg:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className=" w-[90%] max-w-[800px] mx-auto  text-white mb-10 lg:mb-16">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} key={title} />
        ))}
      </div>

      <GetStarted />
    </section>
  );
}

export default FAQ;

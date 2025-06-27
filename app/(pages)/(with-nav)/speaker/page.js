/* eslint-disable import/no-unresolved */

"use client";

import Hero from "../../../../sections/SpeakerHero";
import SpeakerAbout from "../../../../sections/SpeakerAbout";
import SpeakerExperience from "../../../../components/SpeakerExperience";
import SpeakerTools from "../../../../components/SpeakerTools";
import SpeakerContact from "../../../../components/SpeakerContact";
import Download from "../../../../components/Dawonload";

const Speaker = () => (
  <>
    {/* Hero Section  */}
    <Hero />
    {/* About Section  */}
    <SpeakerAbout />
    {/* Experience Section  */}
    <SpeakerExperience />

    {/* Speaking Topics */}
    <SpeakerTools />

    <div className="relative">
      <Download />
      <div className="gradient-03 z-0" />
    </div>

    {/* Contact section  */}
    <SpeakerContact />
  </>
);

export default Speaker;

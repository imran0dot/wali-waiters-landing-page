/* eslint-disable import/no-unresolved */

"use client";

import Hero from "../../../../sections/SpeakerHero";
import SpeakerAbout from "../../../../sections/SpeakerAbout";
import SpeakerExperience from "../../../../components/SpeakerExperience";
import SpeakerTools from "../../../../components/SpeakerTools";
import SpeakerContact from "../../../../components/SpeakerContact";

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

    {/* Contact section  */}
    <SpeakerContact />
  </>
);

export default Speaker;

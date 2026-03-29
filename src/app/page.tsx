"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { Film, MessageCircle, TrendingUp, Zap, Clock, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "Inquiry",          id: "inquiry"},
      ]}
      brandName="EditStudio"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Cinematic Storytelling for Your Brand"
      description="Professional freelance video editing to help you capture attention and drive engagement. Let's create something extraordinary."
      leftCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/professional-video-editing-software-time-1774796364320-4ca6952d.png", imageAlt: "Editing interface" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/close-up-of-video-editing-timeline-moder-1774796364554-5e623a0c.png", imageAlt: "Timeline editing" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/color-grading-tools-in-a-professional-vi-1774796367040-74c8e212.png", imageAlt: "Color grading" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/abstract-video-production-concept-art-mo-1774796364201-dabd42a8.png", imageAlt: "Video production" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/post-production-editing-studio-dashboard-1774796365828-b981dc1b.png", imageAlt: "Post production" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/modern-high-tech-video-rendering-interfa-1774796364733-07efe4a1.png", imageAlt: "Final cut" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/cinematic-visual-storytelling-modern-aes-1774796364605-fce637c9.png", imageAlt: "Workflow" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/digital-media-assets-organization-profes-1774796370711-273a59b2.png", imageAlt: "Media assets" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/render-pipeline-visual-high-tech-enginee-1774796365308-366419bf.png", imageAlt: "Render pipeline" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/motion-graphics-studio-work-environment--1774796365475-5031c219.png", imageAlt: "Motion design" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/audio-mastering-and-waveform-visualizati-1774796366745-e5dcfdf1.png", imageAlt: "Audio mastering" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/completed-film-project-preview-window-1774796366257-59a19b8a.png", imageAlt: "Success project" },
      ]}
      buttons={[{ text: "Start Project", href: "#inquiry" }]}
    />
  </div>

  <div id="inquiry" data-section="inquiry">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Full Name", content: "Input type: text" },
        { id: "2", title: "Email Address", content: "Input type: email" },
        { id: "3", title: "WhatsApp Number", content: "Input type: tel with placeholder +1 234 567 8900" },
        { id: "4", title: "Video Editing Type", content: "Multiple Choice: Reels, Talking head, SFX edit, UI style, Motion graphics, Explainer, Podcast, Other" },
        { id: "5", title: "Project Description", content: "Textarea: Explain your idea, topic, and editing style" },
        { id: "6", title: "Reference Video Link", content: "Input type: text (Optional)" },
        { id: "7", title: "Final Duration", content: "Dropdown: <30s, 30-60s, 1-2m, 2-5m, 5+m" },
        { id: "8", title: "Budget Range", content: "Dropdown: $50-$100, $100-$200, $200-$300, $300-$500, $500+" },
        { id: "9", title: "Deadline", content: "Input type: date" },
        { id: "10", title: "Additional Notes", content: "Textarea: Optional" },
      ]}
      ctaTitle="Work With Me"
      ctaDescription="Please fill out the form below. I will review your project and get back to you via WhatsApp within 24 hours."
      ctaButton={{ text: "Submit Project Inquiry" }}
      ctaIcon={MessageCircle}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Choose My Workflow?"
      description="I combine technical precision with creative flair to ensure every frame serves your story."
      features={[
        { title: "4K Quality", description: "Crisp visuals for every project.", buttonIcon: Zap, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/professional-video-editing-software-time-1774796364320-4ca6952d.png", imageAlt: "Professional video editing software timeline interface with dark modern theme." },
        { title: "Fast Turnaround", description: "Deadlines matter as much as quality.", buttonIcon: Clock, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/close-up-of-video-editing-timeline-moder-1774796364554-5e623a0c.png", imageAlt: "Close up of video editing timeline, modern software interface." },
        { title: "Collaborative", description: "Iterate until we reach perfection.", buttonIcon: Users, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/color-grading-tools-in-a-professional-vi-1774796367040-74c8e212.png", imageAlt: "Color grading tools in a professional video software interface." },
      ]}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Impact in Numbers"
      description="Helping brands scale through visual engagement."
      metrics={[
        { id: "m1", value: "500+", title: "Projects Completed", description: "Diverse range of video styles.", icon: Film },
        { id: "m2", value: "12M+", title: "Total Views", description: "Driving reach for clients.", icon: TrendingUp },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      title="Frequently Asked"
      description="Everything you need to know about starting a project."
      faqsAnimation="slide-up"
      faqs={[
        { id: "q1", title: "How do we start?", content: "Book a discovery call via the inquiry form." },
        { id: "q2", title: "Do you offer revisions?", content: "Yes, 2 rounds of revisions are included." },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AjpWKT6cSVBZtC53RteKU4bIef/minimalist-professional-video-editing-co-1774796363734-dd15417f.png"
      columns={[
        { title: "Platform", items: [{ label: "Portfolio", href: "#" }, { label: "Services", href: "#" }] },
        { title: "Company", items: [{ label: "Privacy Policy", href: "#" }, { label: "Contact", href: "#inquiry" }] },
      ]}
      copyrightText="© 2025 | EditStudio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  MessageCircle,
  Play,
  Star,
  UserRound,
  Dumbbell,
  BarChart3,
  CalendarDays,
  Monitor,
  ShieldCheck,
} from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "919947324091";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


/**
 * Coach Jithu — single-page responsive landing page 11
 * -------------------------------------------------
 * Next.js App Router / React / TypeScript
 *
 * Design principles:
 * - Mobile-first, with the reference's black / white / yellow system.
 * - Programs = ONE horizontal slider only.
 * - Transformations = 2 cards per row on mobile; no image before/after slider.
 * - No duplicate pricing/program section.
 * - No "Meet Coach Jithu" section.
 * - No nutrition section.
 * - No gym/facility section.
 * - Testimonials are Google-style written reviews, not video cards.
 */

const programCards = [
  {
    title: "Basic",
    price: "₹3,000",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Basic online fitness program priced at ₹3,000. Please share the next steps.",
    description: "Personalised online fitness coaching for building a consistent training routine.",
    features: [
      "Personalised workout plan",
      "Basic diet guidance",
      "Weekly workout schedule",
      "Progress tracking",
      "General fitness guidance",
      "WhatsApp support",
    ],
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Standard",
    price: "₹6,000",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Standard online fitness program priced at ₹6,000. Please share the next steps.",
    description: "More detailed coaching with personalised nutrition, progress reviews and regular guidance.",
    features: [
      "Personalised workouts",
      "Personalised diet plan",
      "Weekly progress review",
      "Workout plan updated based on progress",
      "Exercise technique correction",
      "Regular coach guidance",
      "Weight & measurement tracking",
      "WhatsApp support",
      "Lifestyle & habit guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Premium",
    price: "₹10,000",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Premium online fitness program priced at ₹10,000. Please share the next steps.",
    description: "1-to-1 premium coaching designed for maximum results and complete fitness transformation.",
    features: [
      "Dedicated 1-to-1 online coaching",
      "Fully customised workout & nutrition plan",
      "Individual training schedule",
      "Frequent progress monitoring",
      "Detailed exercise form correction",
      "Personalised adjustments based on lifestyle",
      "Priority coach access",
      "Accountability & motivation support",
      "Monthly transformation assessment",
      "Complete fitness transformation strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
  },
];

const dietitianCards = [
  {
    title: "COACH CONSULTATION",
    price: "Consultation Fee: ₹499",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Coach Consultation priced at ₹499. Please share the booking details.",
    image: "/images/IMG-20260708-WA0009.jpeg",
    features: [
      "Personalised Fitness Consultation with Coach Jithu",
      "Goal Assessment",
      "Workout Guidance",
      "Fitness Strategy",
      "Lifestyle Guidance",
      "Personalised Recommendations",
      "30-Minute 1-on-1 Consultation",
    ],
  },
  {
    title: "Personalized Diet Plan",
    price: "₹999",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Personalized Diet Plan package priced at ₹999. Please share the booking details.",
    image: "/images/DSR_9585.JPG",
    features: [
      "Detailed personalized diet plan",
      "Calorie & protein requirements",
      "Kerala/Indian food options",
      "Meal timings & portion guidance",
      "Food substitutions",
    ],
  },
  {
    title: "Consultation + Diet Plan",
    price: "₹1,499",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Consultation + Diet Plan package priced at ₹1,499. Please share the booking details.",
    image: "/images/file_0000000031207209b9a70abca5434cf5.png",
    highlight: "Recommended",
    features: [
      "1-on-1 dietitian consultation",
      "Complete personalized diet plan",
      "Calorie & macro calculation",
      "Food preferences considered",
      "Meal alternatives & substitutions",
      "Follow-up guidance",
    ],
  },
];

const gymMembershipCards = [
  {
    title: "Basic Package",
    image: "/images/Basicgympackage.png",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Basic Gym Membership Package priced at ₹1,000 without cardio / ₹2,000 with cardio. Please share the next steps.",
    pricing: "₹1,000 without cardio / ₹2,000 with cardio",
    highlight: "Best choice for affordable gym access",
    subtitle: "Gym Access & Guidance",
    features: [
      "Full Gym Access",
      "Access to Strength & Cardio Equipment*",
      "Basic Workout Guidance",
      "General Fitness Guidance",
      "Progress Tracking",
      "Flexible Membership Duration",
    ],
  },
  {
    title: "Standard Package",
    image: "/images/Standardgympackage.png",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Standard Gym Membership Package priced at ₹2,000 without cardio / ₹2,500 with cardio. Please share the next steps.",
    pricing: "₹2,000 without cardio / ₹2,500 with cardio",
    highlight: "Most Popular",
    subtitle: "Trainer Supervision",
    features: [
      "Everything in Basic Package",
      "Trainer Supervision",
      "Workout Routine",
      "Exercise Form & Technique Correction",
      "Sets, Reps & Rest-Time Guidance",
      "Progressive Workout Planning",
      "Regular Fitness Progress Monitoring",
      "Training Modifications Based on Progress",
      "Fat-Loss / Muscle-Building Guidance",
    ],
  },
  {
    title: "Premium Package",
    image: "/images/premiumgympackage.png",
    whatsappMessage:
      "Hi Coach Jithu, I’m interested in the Premium Gym Membership Package priced at ₹2,800 without cardio / ₹3,300 with cardio. Please share the next steps.",
    pricing: "₹2,800 without cardio / ₹3,300 with cardio",
    highlight: "Result-focused complete package",
    subtitle: "Workout & Diet Plan",
    features: [
      "Everything in Standard Package",
      "Personalized Workout Plan",
      "Personalized Diet Plan",
      "Goal-Based Training Strategy",
      "Weight Loss / Muscle Gain Guidance",
      "Calorie & Portion Guidance",
      "Regular Progress Tracking",
      "Workout Adjustments Based on Results",
      "Lifestyle & Fitness Guidance",
      "Dedicated Trainer Support",
    ],
  },
];

const heroGalleryPhotos = [
  "FINA8024.JPG.jpeg",
  "FINA8032.JPG.jpeg",
  "FINA8037.JPG.jpeg",
  "FINA8045.JPG.jpeg",
  "FINA8046.JPG.jpeg",
  "FINA8051.JPG.jpeg",
  "WhatsApp Image 2026-09-09 at .jpeg",
  "WhatsApp Image 2026-09-09 at 11.02.05 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 11.02.jpeg",
];

const transformations = [
  {
    name: "Transformation 01",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before1.png",
    after: "/images/After1.png",
  },
  {
    name: "Transformation 02",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before2.png",
    after: "/images/After2.png",
  },
  {
    name: "Transformation 03",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before3.png",
    after: "/images/After3.png",
  },
  {
    name: "Transformation 04",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before4.png",
    after: "/images/After4.png",
  },
  {
    name: "Transformation 05",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before5.png",
    after: "/images/After5.png",
  },
  {
    name: "Transformation 06",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before6.png",
    after: "/images/After6.png",
  },
  {
    name: "Transformation 07",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before7.png",
    after: "/images/After7.png",
  },
  {
    name: "Transformation 08",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before8.png",
    after: "/images/After8.png",
  },
  {
    name: "Transformation 10",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before10.jpeg",
    after: "/images/After10.jpg",
  },
  {
    name: "Transformation 11",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before11.png",
    after: "/images/After11.png",
  },
  {
    name: "Transformation 12",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before12.png",
    after: "/images/After12.png",
  },
  {
    name: "Transformation 13",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before13.png",
    after: "/images/After13.png",
  },
  {
    name: "Transformation 14",
    result: "Before / After",
    duration: "Transformation",
    program: "Coach Jithu's Fitness Target Gym & Studio",
    before: "/images/Before14.png",
    after: "/images/After14.png",
  },
];

const steps = [
  {
    number: "01",
    title: "Assessment",
    text: "Understand your goal, lifestyle, fitness level and training history.",
  },
  {
    number: "02",
    title: "Personalised Plan",
    text: "Custom workout and nutrition strategy built around your goal.",
  },
  {
    number: "03",
    title: "Train",
    text: "Follow your structured program with guidance and support.",
  },
  {
    number: "04",
    title: "Track",
    text: "Monitor your weight, measurements, strength and progress.",
  },
  {
    number: "05",
    title: "Transform",
    text: "Build sustainable results and a healthier you.",
  },
];

const strengths = [
  { title: "Personalised Coaching", icon: UserRound },
  { title: "Workout + Nutrition", icon: Dumbbell },
  { title: "Progress Tracking", icon: BarChart3 },
  { title: "Flexible Programs", icon: CalendarDays },
  { title: "Online & Offline Training", icon: Monitor },
  { title: "Long-Term Approach", icon: ShieldCheck },
];

const reviews = [
  {
    initials: "K",
    name: "Kriti Panika",
    meta: "4 reviews",
    time: "3 years ago",
    text: "Coach jithu is exceptional. They are knowledgeable, motivating, and dedicated. They push me to reach my fitness goals and always have a positive attitude. Their expertise and guidance have helped me make significant progress in my fitness journey. They customize workouts according to my needs and ensure that I maintain proper form while exercising. With their support and encouragement, I feel inspired to challenge myself and achieve new heights. I'm grateful to have such an amazing personal trainer who genuinely cares about my well-being and helps me stay on track.",
  },
  {
    initials: "A",
    name: "Abhirami Rajeev",
    meta: "Local Guide · 11 reviews",
    time: "a year ago",
    text: "Working in a private bank, my degrading health has always been a concern. Regularly going to the gym was therefore not an option for me. Finally I came to know about the possibilities of online training from Coach Jithu's Fitness Target Gym & Studio. They've given me all the needful information about the programme. Initially I was doubtful and tensed about the diet plan but they provided proper calorie deficit diet without tiredness or sleepiness. It's my 7th month of training. Their workout plan and nutritional advice is commendable.They are always available on whatsapp for doubt clearance. Day to day tracking of food, workout etc are done by them. Thankyou Coach Jithu for this extraordinary approach from you..🧡",
  },
  {
    initials: "A",
    name: "akhil saji",
    meta: "6 reviews",
    time: "3 years ago",
    text: "I've been following Coach Jithu's online personal training for past 3 months,a significant weight gain and overall athletic performance. One of the best online personal fitness coach in Kochi.",
  },
  {
    initials: "M",
    name: "Muzafir Esmail",
    meta: "3 reviews",
    time: "2 years ago",
    text: "My weight was 59 kg before i joined Coach Jithu's online weight gaining program.After 3 months of training and different diets now i am 69 kgs .I gained about 10 kgs of weight and i am very satisfied with the service provided by coach jithu's fitness target.I am sincerely happy for help and support you provided for helping me achieve this transformation.Thankyou Coach",
  },
];

const faqs = [
  { question: "Who can join online coaching?", answer: "Anyone looking for structured fitness coaching can join, whether your goal is weight loss, muscle gain, strength, fitness improvement or a healthier lifestyle." },
  { question: "Do I need gym equipment?", answer: "No. The training plan can be adapted to the equipment you have available. Home-based and gym-based workouts can both be structured according to your needs." },
  { question: "Is the diet personalised?", answer: "Yes. Nutrition guidance can be personalised around your fitness goal, food preferences, lifestyle, calorie and protein requirements, and daily routine." },
  { question: "Can I join from outside Kerala?", answer: "Yes. Online coaching can be provided from anywhere, so you can join even if you are outside Kerala. Your workout and nutrition guidance are managed online." },
  { question: "How does online training work?", answer: "After understanding your goals, fitness level and routine, Coach Jithu provides your workout and nutrition guidance online, with progress tracking, regular guidance and support." },
  { question: "How often will my plan be updated?", answer: "Your plan can be adjusted based on your progress, performance, goals and lifestyle. Workout and nutrition recommendations are modified when needed to keep your training effective." },
  { question: "Can beginners join?", answer: "Yes. Beginners can join. The coaching approach is adjusted to your current fitness level, experience and goals so you can build strength, technique and consistency safely." },
  { question: "Do you provide weight-loss programs?", answer: "Yes. Weight-loss coaching can include personalised workouts, nutrition guidance, calorie and portion guidance, progress tracking and adjustments based on your results." },
];

export default function Page() {
  const programScroller = useRef<HTMLDivElement>(null);
  const galleryScroller = useRef<HTMLDivElement>(null);
  const galleryDirectionRef = useRef<1 | -1>(1);
  const galleryFrameRef = useRef<number | null>(null);
  const galleryLastTimeRef = useRef(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllTransformations, setShowAllTransformations] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      const menuPanel = mobileMenuRef.current;
      const menuButton = document.querySelector(".mobile-menu");

      if (target && !menuPanel?.contains(target) && !menuButton?.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal")
    );

    if (revealItems.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scroller = galleryScroller.current;
    if (!scroller) return;

    // Continuous movement, roughly one card per second. The native horizontal
    // scrolling remains available for touch, mouse and trackpad interaction.
    const pixelsPerSecond = 72;

    const animate = (time: number) => {
      if (!galleryLastTimeRef.current) {
        galleryLastTimeRef.current = time;
      }

      const deltaSeconds = Math.min(
        0.05,
        (time - galleryLastTimeRef.current) / 1000,
      );
      galleryLastTimeRef.current = time;

      const maxScroll = Math.max(
        0,
        scroller.scrollWidth - scroller.clientWidth,
      );

      if (maxScroll > 0) {
        if (scroller.scrollLeft >= maxScroll - 1) {
          galleryDirectionRef.current = -1;
        } else if (scroller.scrollLeft <= 1) {
          galleryDirectionRef.current = 1;
        }

        scroller.scrollLeft +=
          galleryDirectionRef.current * pixelsPerSecond * deltaSeconds;
      }

      galleryFrameRef.current = requestAnimationFrame(animate);
    };

    galleryFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (galleryFrameRef.current !== null) {
        cancelAnimationFrame(galleryFrameRef.current);
      }
      galleryFrameRef.current = null;
      galleryLastTimeRef.current = 0;
    };
  }, []);

  useEffect(() => {
    const scroller = galleryScroller.current;
    if (!scroller) return;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      isDragging = true;
      startX = event.clientX;
      startScrollLeft = scroller.scrollLeft;
      scroller.setPointerCapture?.(event.pointerId);
      scroller.style.cursor = "grabbing";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      event.preventDefault();
      scroller.scrollLeft = startScrollLeft - (event.clientX - startX);
    };

    const stopDragging = () => {
      if (!isDragging) return;
      isDragging = false;
      scroller.style.cursor = "grab";
    };

    scroller.addEventListener("pointerdown", handlePointerDown);
    scroller.addEventListener("pointermove", handlePointerMove);
    scroller.addEventListener("pointerup", stopDragging);
    scroller.addEventListener("pointercancel", stopDragging);
    scroller.addEventListener("lostpointercapture", stopDragging);

    return () => {
      scroller.removeEventListener("pointerdown", handlePointerDown);
      scroller.removeEventListener("pointermove", handlePointerMove);
      scroller.removeEventListener("pointerup", stopDragging);
      scroller.removeEventListener("pointercancel", stopDragging);
      scroller.removeEventListener("lostpointercapture", stopDragging);
    };
  }, []);

  const scrollPrograms = (direction: "left" | "right") => {
    programScroller.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <main className="site">
      <style>{`
        :root {
          --black: #050505;
          --ink: #111111;
          --yellow: #ffd900;
          --yellow-soft: #fff3b5;
          --white: #050505;
          --paper: #0b0b0b;
          --line: #2a2a2a;
          --muted: #b3b3ad;
          --olive: #353400;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: var(--black);
        }

        body {
          margin: 0;
          background: var(--black);
          color: white;
          font-family:
            Inter, Geist, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font: inherit;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translate3d(0, 42px, 0);
          transition:
            opacity 620ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .scroll-reveal:nth-child(2) { transition-delay: 70ms; }
        .scroll-reveal:nth-child(3) { transition-delay: 140ms; }
        .scroll-reveal:nth-child(4) { transition-delay: 210ms; }
        .scroll-reveal:nth-child(5) { transition-delay: 280ms; }
        .scroll-reveal:nth-child(6) { transition-delay: 350ms; }

        @media (prefers-reduced-motion: reduce) {
          .scroll-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        .site {
          width: 100%;
          overflow-x: clip;
          background: var(--black);
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .eyebrow {
          margin: 0 0 8px;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.2em;
          font-weight: 800;
          text-transform: uppercase;
          color: #a5a59b;
        }

        .eyebrow.yellow {
          color: var(--yellow);
        }

        .section-title {
          margin: 0;
          max-width: 760px;
          font-size: clamp(30px, 5vw, 58px);
          line-height: 0.95;
          letter-spacing: -0.045em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .section-title span {
          color: var(--yellow);
        }

        .section-copy {
          margin: 12px 0 0;
          max-width: 620px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
        }

        .button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 18px;
          border: 1px solid transparent;
          border-radius: 5px;
          background: var(--yellow);
          color: #070707;
          text-decoration: none;
          font-size: 12px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          transition:
            transform 160ms ease,
            background 160ms ease,
            color 160ms ease,
            border-color 160ms ease;
          cursor: pointer;
        }

        .button:hover {
          transform: translateY(-2px);
          background: #ffe747;
        }

        .button:active {
          transform: translateY(0);
        }

        .button:focus-visible,
        .icon-button:focus-visible,
        .faq-button:focus-visible,
        a:focus-visible {
          outline: 3px solid var(--yellow);
          outline-offset: 3px;
        }

        .button.dark {
          background: var(--black);
          color: white;
        }

        .button.dark:hover {
          background: #242424;
        }

        .button.outline {
          border-color: currentColor;
          background: transparent;
          color: inherit;
        }

        .button.outline:hover {
          background: rgba(255, 217, 0, 0.08);
        }

        .icon-button {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.32);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.72);
          color: white;
          cursor: pointer;
          transition: 160ms ease;
        }

        .icon-button:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        /* HEADER */
        .header {
          position: fixed;
          z-index: 1000;
          top: 16px;
          left: 50%;
          width: min(1180px, calc(100% - 32px));
          height: 64px;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 14px;
          background: rgba(10, 10, 10, 0.88);
          color: white;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          color: white;
          text-decoration: none;
          line-height: 0.9;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          height: 46px;
          flex: 0 0 auto;
        }

        .brand-logo-image {
          display: block;
          width: auto;
          height: 42px;
          max-width: 180px;
          object-fit: contain;
        }

        .brand-name {
          display: block;
          font-size: 19px;
          font-weight: 950;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .brand-name span {
          color: var(--yellow);
        }

        .brand-tag {
          display: block;
          margin-top: 4px;
          font-size: 7px;
          letter-spacing: 0.18em;
          opacity: 0.72;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 22px;
        }

        .desktop-nav a {
          color: rgba(255, 255, 255, 0.86);
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
        }

        .desktop-nav a:hover {
          color: var(--yellow);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-instagram {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.32);
          border-radius: 5px;
          color: white;
          text-decoration: none;
          transition: 160ms ease;
        }

        .nav-instagram:hover {
          border-color: var(--yellow);
          color: var(--yellow);
          transform: translateY(-2px);
        }

        .mobile-menu {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
          position: relative;
          z-index: 1003;
        }

        .mobile-menu-panel {
          display: none;
        }

        .mobile-menu-panel.open {
          display: grid;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          color: white;
          isolation: isolate;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.08) 32%,
              rgba(0, 0, 0, 0.78) 82%,
              #050505 100%
            ),
            #050505;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent 68%),
            radial-gradient(circle at 76% 42%, rgba(255, 217, 0, 0.08), transparent 34%);
        }

        .hero-person-picture {
          position: absolute;
          z-index: 1;
          right: -2%;
          bottom: 0;
          width: min(58vw, 700px);
          height: 94%;
          pointer-events: none;
          user-select: none;
        }

        .hero-person {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom right;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 0 0 34px;
        }

        .hero-copy {
          max-width: 640px;
        }

        .hero-kicker {
          margin: 0 0 12px;
          color: var(--yellow);
          font-size: 11px;
          letter-spacing: 0.22em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(42px, 11vw, 82px);
          line-height: 0.86;
          letter-spacing: -0.06em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero-title span {
          display: block;
          color: var(--yellow);
        }

        .hero-text {
          max-width: 500px;
          margin: 16px 0 22px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 14px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hero-actions .button {
          min-width: 190px;
        }

        .hero-signature {
          position: absolute;
          top: 38%;
          left: 8%;
          color: rgba(255, 255, 255, 0.82);
          font-family: "Brush Script MT", "Segoe Script", cursive;
          font-size: 27px;
          transform: rotate(-8deg);
          opacity: 0.8;
          pointer-events: none;
        }

        .hero-note {
          position: absolute;
          top: 29%;
          right: 7%;
          max-width: 120px;
          color: white;
          font-family: "Brush Script MT", "Segoe Script", cursive;
          font-size: 18px;
          line-height: 1.05;
          transform: rotate(5deg);
          opacity: 0.8;
          pointer-events: none;
        }

        /* GENERIC SECTIONS */
        .light-section {
          background: var(--black);
          padding: 56px 0;
        }

        .soft-section {
          background: #0b0b0b;
          padding: 56px 0;
        }

        .dark-section {
          background:
            radial-gradient(circle at 50% 0%, #3d3c00 0%, #101000 42%, #050505 82%);
          color: white;
          padding: 56px 0;
        }

        .section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 26px;
        }

        .section-head .section-copy {
          margin-top: 8px;
        }

        .section-link {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: inherit;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
        }

        .section-link:hover {
          color: #c7aa00;
        }

        /* COACH JITHU GYM PHOTO GALLERY */
        .photo-gallery {
          overflow: hidden;
          background: #070707;
          padding: 72px 0 0;
        }

        .photo-gallery-head {
          padding-bottom: 10px;
        }

        .photo-gallery-head-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
        }

        .photo-gallery-title {
          margin: 0;
          max-width: 760px;
          color: var(--yellow);
          font-size: clamp(28px, 4vw, 50px);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 950;
        }

        .gym-map-button {
          flex: 0 0 auto;
          white-space: nowrap;
        }

        .photo-gallery-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(300px, 420px);
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 18px 0;
          overscroll-behavior-inline: contain;
          scroll-behavior: auto;
          touch-action: pan-x;
          cursor: grab;
          user-select: none;
        }

        .photo-gallery-track:active {
          cursor: grabbing;
        }

        .photo-gallery-track::-webkit-scrollbar {
          display: none;
        }

        .photo-gallery-card {
          position: relative;
          min-width: 0;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: transparent;
        }

        .photo-gallery-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* PROGRAMS — SINGLE SLIDER */
        .program-slider-wrap {
          position: relative;
        }

        .program-slider {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(250px, 310px);
          gap: 12px;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 2px 2px 12px;
        }

        .program-slider::-webkit-scrollbar {
          display: none;
        }

        .program-card {
          min-width: 0;
          overflow: hidden;
          scroll-snap-align: start;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .program-image {
          width: 100%;
          aspect-ratio: 1.35 / 1;
          object-fit: cover;
        }

        .program-body {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          padding: 16px;
        }

        .program-title {
          margin: 0;
          font-size: 22px;
          line-height: 1;
          letter-spacing: -0.035em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .program-price {
          margin: 6px 0 0;
          color: var(--yellow);
          font-size: 20px;
          font-weight: 950;
        }

        .program-description {
          margin: 9px 0 14px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.45;
        }

        .program-features {
          display: grid;
          gap: 7px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .program-feature {
          display: grid;
          grid-template-columns: 16px 1fr;
          gap: 7px;
          align-items: start;
          color: #deded8;
          font-size: 11px;
          line-height: 1.38;
        }

        .program-feature svg {
          width: 15px;
          height: 15px;
          margin-top: 1px;
          color: var(--yellow);
        }

        .program-body .button {
          width: 100%;
          margin-top: 18px;
        }

        /* DIETITIAN CONSULTATION */
        .dietitian-grid {
          display: grid;
          gap: 12px;
        }

        .dietitian-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .dietitian-card.recommended {
          border-color: rgba(255, 217, 0, 0.72);
        }

        .dietitian-image-wrap {
          position: relative;
          aspect-ratio: 1.35 / 1;
          overflow: hidden;
          background: #111;
        }

        .dietitian-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .dietitian-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 7px 9px;
          border-radius: 4px;
          background: var(--yellow);
          color: #050505;
          font-size: 9px;
          line-height: 1;
          font-weight: 950;
          text-transform: uppercase;
        }

        .dietitian-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          min-height: 260px;
          padding: 20px 17px 18px;
        }

        .dietitian-title {
          margin: 0;
          max-width: 280px;
          font-size: 21px;
          line-height: 1;
          letter-spacing: -0.035em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .dietitian-price {
          margin: 8px 0 16px;
          color: var(--yellow);
          font-size: 22px;
          font-weight: 950;
        }

        .dietitian-features {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .dietitian-feature {
          display: grid;
          grid-template-columns: 17px 1fr;
          gap: 7px;
          align-items: start;
          color: #d7d7d0;
          font-size: 12px;
          line-height: 1.42;
        }

        .dietitian-feature svg {
          width: 15px;
          height: 15px;
          margin-top: 1px;
          color: var(--yellow);
        }

        .dietitian-body > .button {
          width: 100%;
          margin-top: auto;
          padding-inline: 14px;
        }

        /* GYM MEMBERSHIP */
        .gym-grid {
          display: grid;
          gap: 12px;
        }

        .gym-image-wrap {
          position: relative;
          width: calc(100% + 36px);
          margin: -18px -18px 18px;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-bottom: 1px solid var(--line);
          background: #111;
        }

        .gym-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .gym-card {
          display: flex;
          flex-direction: column;
          padding: 18px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .gym-card.popular {
          border-color: rgba(255, 217, 0, 0.72);
        }

        .gym-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
        }

        .gym-card-title {
          margin: 0;
          font-size: 21px;
          line-height: 1;
          font-weight: 950;
          text-transform: uppercase;
        }

        .gym-card-subtitle {
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
        }

        .gym-badge {
          flex: 0 0 auto;
          max-width: 130px;
          padding: 6px 8px;
          border: 1px solid rgba(255, 217, 0, 0.55);
          border-radius: 4px;
          color: var(--yellow);
          font-size: 8px;
          line-height: 1.1;
          font-weight: 950;
          text-align: center;
          text-transform: uppercase;
        }

        .gym-pricing {
          margin: 18px 0 16px;
          padding: 12px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          color: #f1f1ea;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 800;
        }

        .gym-features {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .gym-book-button {
          width: 100%;
          margin-top: 18px;
        }

        .gym-feature {
          display: grid;
          grid-template-columns: 17px 1fr;
          gap: 7px;
          align-items: start;
          color: #d7d7d0;
          font-size: 12px;
          line-height: 1.42;
        }

        .gym-feature svg {
          width: 15px;
          height: 15px;
          margin-top: 1px;
          color: var(--yellow);
        }

        .slider-controls {
          display: none;
        }

        /* TRANSFORMATIONS — 2 PER ROW MOBILE */
        .transform-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .transform-grid:not(.show-all) .transform-card:nth-child(n + 5) {
          display: none;
        }

        .transform-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .before-after {
          display: grid;
          grid-template-columns: 1fr 1fr;
          aspect-ratio: 1.12 / 1;
          background: #111;
        }

        .ba-half {
          position: relative;
          overflow: hidden;
        }

        .ba-half + .ba-half {
          border-left: 1px solid white;
        }

        .ba-half img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ba-label {
          position: absolute;
          top: 7px;
          left: 7px;
          z-index: 2;
          padding: 5px 7px;
          border-radius: 5px;
          background: #050505;
          color: white;
          font-size: 8px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .ba-label.after {
          left: auto;
          right: 7px;
          background: var(--yellow);
          color: #050505;
        }

        .transform-meta {
          padding: 11px;
        }

        .transform-name {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
        }

        .transform-result {
          margin: 2px 0 1px;
          font-size: 14px;
          font-weight: 950;
        }

        .transform-small {
          margin: 0;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.35;
        }

        .transform-view-all {
          border-radius: 3px;
        }

        /* HOW IT WORKS */
        .process {
          position: relative;
        }

        .process-grid {
          display: grid;
          gap: 10px;
        }

        .step {
          position: relative;
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: stretch;
          gap: 10px;
        }

        .step-number {
          position: relative;
          z-index: 2;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-top: 5px;
          border: 2px solid var(--yellow);
          border-radius: 50%;
          background: #111100;
          color: var(--yellow);
          font-size: 11px;
          font-weight: 950;
        }

        .step:not(:last-child)::after {
          content: "";
          position: absolute;
          z-index: 1;
          top: 47px;
          bottom: -12px;
          left: 20px;
          width: 1px;
          background: rgba(255, 217, 0, 0.55);
        }

        .step-card {
          min-height: 96px;
          padding: 17px;
          border-radius: 8px;
          background: #171700;
          color: #111;
        }

        .step-card h3 {
          margin: 0;
          color: var(--yellow);
          font-size: 16px;
          line-height: 1.05;
          font-weight: 950;
        }

        .step-card p {
          margin: 7px 0 0;
          color: #c2c2ba;
          font-size: 13px;
          line-height: 1.45;
        }

        /* WHY CHOOSE */
        .strength-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .strength-card {
          min-height: 128px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 15px;
          border: 1px solid rgba(255, 217, 0, 0.35);
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.22);
        }

        .strength-icon {
          width: 28px;
          height: 28px;
          color: var(--yellow);
        }

        .strength-title {
          max-width: 130px;
          margin: 12px 0 0;
          font-size: 12px;
          line-height: 1.15;
          font-weight: 900;
          text-transform: uppercase;
        }

        /* GOOGLE REVIEWS */
        .reviews-grid {
          display: grid;
          gap: 10px;
        }

        .review-card {
          padding: 17px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .review-top {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .review-avatar {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #1a1a00;
          color: var(--yellow);
          font-weight: 900;
        }

        .review-name {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
        }

        .review-meta {
          margin: 2px 0 0;
          color: #777;
          font-size: 10px;
        }

        .review-rating {
          display: flex;
          align-items: center;
          gap: 2px;
          margin: 13px 0 9px;
          color: #f2bd00;
        }

        .review-rating svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        .review-time {
          margin-left: 7px;
          color: #888;
          font-size: 10px;
        }

        .review-text {
          margin: 0;
          color: #d0d0ca;
          font-size: 13px;
          line-height: 1.52;
        }

        .google-button {
          width: 100%;
          margin-top: 13px;
        }

        /* FAQ */
        .faq-list {
          border-top: 1px solid var(--line);
        }

        .faq-item {
          border-bottom: 1px solid var(--line);
        }

        .faq-button {
          width: 100%;
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0;
          border: 0;
          background: transparent;
          color: white;
          text-align: left;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
        }

        .faq-button svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .faq-button[aria-expanded="true"] svg {
          transform: rotate(180deg);
        }

        .faq-answer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 220ms ease;
        }

        .faq-answer.open {
          max-height: 120px;
        }

        .faq-answer p {
          margin: -1px 0 17px;
          padding-right: 32px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }

        /* CTA + FOOTER */
        .final-cta {
          background: var(--yellow);
          color: #050505;
          padding: 42px 0;
        }

        .final-cta-inner {
          display: grid;
          gap: 22px;
          align-items: center;
        }

        .final-title {
          margin: 0;
          font-size: clamp(32px, 7vw, 58px);
          line-height: 0.92;
          letter-spacing: -0.055em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .final-copy {
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.4;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .cta-actions .button {
          width: 100%;
        }

        .footer {
          background: #050505;
          color: white;
          padding: 42px 0 24px;
        }

        .footer-grid {
          display: grid;
          gap: 30px;
        }

        .footer-brand .brand-name {
          font-size: 25px;
        }

        .footer-nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 20px;
        }

        .footer-nav a {
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          font-size: 12px;
        }

        .footer-nav a:hover {
          color: var(--yellow);
        }

        .socials {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid #3b3b3b;
          border-radius: 50%;
          color: white;
        }

        .social-link:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .copyright {
          margin: 28px 0 0;
          padding-top: 17px;
          border-top: 1px solid #292929;
          color: #777;
          font-size: 10px;
          line-height: 1.5;
        }

        .whatsapp {
          position: fixed;
          z-index: 30;
          right: 18px;
          bottom: 18px;
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #20c768;
          color: white;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
          text-decoration: none;
          transition: transform 160ms ease;
        }

        .whatsapp:hover {
          transform: translateY(-3px);
        }

        /* TABLET */
        @media (min-width: 640px) {
          .container,
          .hero-content {
            width: min(1180px, calc(100% - 48px));
          }

          .hero {
            min-height: 820px;
          }

          .hero-content {
            padding-bottom: 55px;
          }

          .transform-grid {
            gap: 14px;
          }

          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .strength-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .final-cta-inner {
            grid-template-columns: 1fr auto;
          }

          .cta-actions {
            min-width: 280px;
          }

          .footer-grid {
            grid-template-columns: 1.2fr 1fr auto;
            align-items: start;
          }
        }

        /* DESKTOP */
        @media (min-width: 900px) {
          .container,
          .hero-content {
            width: min(1180px, calc(100% - 64px));
          }

          .header {
            top: 20px;
            width: min(1180px, calc(100% - 64px));
            height: 70px;
          }

          .desktop-nav {
            display: flex;
          }

          .mobile-menu {
            display: none;
          }

          .hero {
            height: 100svh;
            min-height: 0;
            align-items: center;
            overflow: hidden;
          }

          /*
           * Desktop hero image safe area
           * -----------------------------
           * The coach is sized from the AVAILABLE HERO HEIGHT, not viewport
           * width. The first ~25% of the hero is reserved as a clear zone
           * below the floating navigation. The remaining height is the image
           * safe area. On short laptop screens the image therefore shrinks
           * smoothly instead of growing into the navigation or being clipped.
           */
                    .hero-person-picture {
            position: absolute;
            z-index: 1;
            top: 170px;
            right: 10vw;
            bottom: auto;
            width: 680px;
            height: 901px;
            min-height: 0;
            overflow: visible;
            pointer-events: none;
            user-select: none;
          }

          .hero-person {
            display: block;
            width: 100%;
            height: 100%;
            max-width: none;
            max-height: none;
            aspect-ratio: 600 / 795;
            object-fit: contain;
            object-position: top right;
          }

          .hero-content {
            padding-top: 90px;
            padding-bottom: 50px;
          }

          .hero-copy {
            max-width: 520px;
            position: relative;
            z-index: 4;
          }

          .hero-title {
            font-size: clamp(54px, 5.5vw, 76px);
          }

          .hero-text {
            font-size: 14px;
          }

          .hero-signature,
          .hero-note {
            display: none;
          }

          .light-section,
          .soft-section,
          .dark-section {
            padding: 82px 0;
          }

.photo-gallery-track {
            grid-auto-columns: 300px;
            gap: 14px;
          }

          .photo-gallery-card {
            aspect-ratio: 16 / 9;
          }
.program-slider {
            grid-auto-columns: 310px;
            gap: 14px;
          }

          .program-card {
            border-radius: 6px;
          }

          .dietitian-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }

          .gym-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }

          .gym-card {
            min-height: 100%;
          }

          .gym-image-wrap {
            aspect-ratio: 16 / 9;
          }

          .slider-controls {
            position: absolute;
            right: 0;
            top: -66px;
            display: flex;
            gap: 8px;
          }

          .transform-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
          }

          .process-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 10px;
          }

          .step {
            display: block;
          }

          .step-number {
            margin: 0 0 10px;
          }

          .step:not(:last-child)::after {
            top: 20px;
            left: 41px;
            right: -10px;
            bottom: auto;
            width: auto;
            height: 1px;
          }

          .step-card {
            min-height: 150px;
          }

          .reviews-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .faq-layout {
            display: grid;
            grid-template-columns: 0.7fr 1.3fr;
            gap: 70px;
            align-items: start;
          }

          .faq-layout .section-head {
            display: block;
            margin: 0;
          }

          .faq-layout .section-copy {
            max-width: 360px;
          }
        }

        /* MOBILE FLOATING NAV */
        /* COMPACT DESKTOP / TABLET */
        @media (min-width: 900px) and (max-width: 1199px) {
          /*
           * Compact desktop: use the same height-driven safe-area model.
           * The image gets a smaller intended maximum, while short viewport
           * heights still take priority so the complete person remains visible.
           */

          .hero-copy {
            max-width: 470px;
          }
        }

        /*
         * Tablet landscape (640–899px)
         * Keep the coach image constrained to a stable composition rather
         * than allowing it to become a percentage-height image.
         */
        @media (min-width: 640px) and (max-width: 899px) {
          .hero {
            min-height: 820px;
            align-items: center;
            overflow: visible;
          }

          .hero-person-picture {
            right: 32px;
            left: auto;
            top: 25%;
            bottom: auto;
            width: 390px;
            height: min(530px, calc(75% - 40px));
            max-height: calc(75% - 40px);
            aspect-ratio: 390 / 530;
            transform: none;
            overflow: visible;
          }

          .hero-person {
            width: 100%;
            height: 100%;
            max-width: none;
            max-height: none;
            aspect-ratio: 390 / 530;
            object-fit: contain;
            object-position: top right;
          }

          .hero-content {
            padding-top: 120px;
            padding-bottom: 55px;
          }

          .hero-copy {
            max-width: 430px;
          }

          .hero-title {
            font-size: clamp(48px, 7vw, 64px);
          }

          .hero-text {
            max-width: 390px;
          }
        }

        @media (max-width: 639px) {
.header {
            top: 10px;
            width: calc(100% - 20px);
            height: 58px;
            border-radius: 12px;
          }

          .header-inner {
            gap: 8px;
          }

          .brand-logo {
            height: 42px;
          }

          .brand-logo-image {
            height: 36px;
            max-width: 150px;
          }

          .header .button {
            min-height: 40px;
            padding: 0 12px;
            font-size: 10px;
          }

          .nav-instagram {
            width: 38px;
            height: 38px;
          }

          .mobile-menu {
            width: 38px;
            height: 38px;
          }
        }

        @media (max-width: 899px) {
          .photo-gallery {
            padding-top: 58px;
          }

          .photo-gallery-head-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .photo-gallery-title {
            max-width: 620px;
            font-size: clamp(28px, 8vw, 42px);
          }

          .gym-map-button {
            min-height: 40px;
            padding-inline: 11px;
          }

          .mobile-menu-panel {
            position: fixed;
            z-index: 1001;
            top: 78px;
            left: 50%;
            width: min(1180px, calc(100% - 20px));
            transform: translateX(-50%);
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 12px;
            background: rgba(8, 8, 8, 0.98);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }

          .mobile-menu-panel a {
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 0 14px;
            border-bottom: 1px solid #242424;
            color: rgba(255, 255, 255, 0.92);
            text-decoration: none;
            font-size: 13px;
            font-weight: 800;
          }

          .mobile-menu-panel a:last-child {
            border-bottom: 0;
          }

          .mobile-menu-panel a:hover,
          .mobile-menu-panel a:focus-visible {
            color: var(--yellow);
            background: rgba(255, 217, 0, 0.06);
            outline: none;
          }
        }

        @media (max-width: 639px) {
          .hero {
            min-height: 860px;
            align-items: flex-start;
          }

          .hero-person-picture {
            left: 50%;
            right: auto;
            top: 160px;
            bottom: auto;
            width: min(100vw, 440px);
            max-width: none;
            height: auto;
            transform: translateX(-50%);
            opacity: 1;
          }

          .hero-person {
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center top;
          }

          .hero-signature {
            z-index: 3;
            left: 5%;
            top: 34%;
            max-width: 74px;
            font-size: 18px;
            line-height: 1;
            transform: rotate(-10deg);
          }

          .hero-note {
            z-index: 3;
            top: 32%;
            right: 3%;
            max-width: 72px;
            font-size: 15px;
            line-height: 1.08;
            text-align: left;
            transform: rotate(5deg);
          }

          .hero::after {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 5, 0) 0%,
                rgba(5, 5, 5, 0) 48%,
                rgba(5, 5, 5, 0.92) 59%,
                #050505 67%,
                #050505 100%
              );
          }

          .hero-content {
            padding-top: 485px;
          }

          .hero-title {
            font-size: clamp(39px, 12vw, 54px);
            line-height: 0.91;
            letter-spacing: -0.055em;
          }

          .hero-text {
            max-width: 330px;
            margin-top: 16px;
            font-size: 13px;
            line-height: 1.5;
          }

          .hero-actions {
            flex-direction: column;
            gap: 10px;
          }

          .hero-actions .button {
            width: 100%;
            min-width: 0;
          }
        }

        /* SMALL PHONES */
        @media (max-width: 359px) {
          .container,
          .hero-content {
            width: min(100% - 24px, 1180px);
          }

          .hero {
            min-height: 850px;
          }

          .hero-person {
            top: 70px;
            width: 84vw;
            max-width: 330px;
          }

          .hero-signature {
            left: 4%;
            top: 34%;
            font-size: 16px;
          }

          .hero-note {
            right: 2%;
            top: 32%;
            font-size: 13px;
            max-width: 66px;
          }

          .hero-content {
            padding-top: 455px;
          }

          .hero-title {
            font-size: 39px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .button {
            width: 100%;
          }

          .program-slider {
            grid-auto-columns: 78%;
          }

          .transform-meta {
            padding: 9px;
          }

          .transform-result {
            font-size: 12px;
          }

          .transform-small {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className="header">
        <div className="container header-inner">
          <a className="brand brand-logo" href="#home" aria-label="Coach Jithu home">
            <img
              className="brand-logo-image"
              src="/images/coachjithulogo.PNG"
              alt="Coach Jithu"
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#transformations">Transformations</a>
            <a href="#process">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a
              className="nav-instagram"
              href="https://www.instagram.com/coach.jithu?igsi=MnU1dXlkMW9jNjFh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram - Coach Jithu"
            >
              <InstagramIcon size={18} />
            </a>
            <a className="button" href="#contact">
              Join Now <ArrowRight size={15} />
            </a>
            <button
              className="mobile-menu"
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </header>

      <nav
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`mobile-menu-panel ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a>
        <a href="#transformations" onClick={() => setMobileMenuOpen(false)}>Transformations</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <picture className="hero-person-picture">
          <source
            media="(min-width: 900px)"
            srcSet="/images/CoachJithudesktop.png"
          />
          <img
            className="hero-person"
            src="/images/CoachJithudesktop.png"
            alt="Coach Jithu"
            draggable={false}
          />
        </picture>

        <div className="hero-signature" aria-hidden="true">
          Coach Jithu
        </div>
        <div className="hero-note" aria-hidden="true">
          A healthier
          <br />
          you.
          <br />
          A stronger
          <br />
          tomorrow.
        </div>

        <div className="hero-content scroll-reveal is-visible">
          <div className="hero-copy">
            <p className="hero-kicker">Coach Jithu · Fitness Coaching</p>
            <h1 className="hero-title">
              Your Body.
              <br />
              Your Goal.
              <span>My Expertise.</span>
            </h1>
            <p className="hero-text">
              Personalised fitness training, nutrition guidance and lifestyle
              transformation designed around your goals.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Start Your Transformation <ArrowRight size={16} />
              </a>
              <a className="button outline" href="#programs">
                View Programs <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COACH JITHU FITNESS TARGET GYM & STUDIO */}
      <section className="photo-gallery" aria-label="Coach Jithu's fitness target gym and studio">
        <div className="container photo-gallery-head">
          <div className="photo-gallery-head-row">
            <h4 className="photo-gallery-title">COACH JITHU&apos;S FITNESS TARGET GYM &amp; STUDIO</h4>
            <a
              className="button outline gym-map-button"
              href="https://share.google/ApWDdKE7zMXj1xwTx"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Map <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div
          ref={galleryScroller}
          className="photo-gallery-track"
          aria-label="Coach Jithu gym photo carousel"
        >
          {heroGalleryPhotos.map((photo, index) => (
            <article
              className="photo-gallery-card"
              data-gallery-card
              key={`${photo}-${index}`}
            >
              <img
                src={`/images/${photo}`}
                alt={`Coach Jithu fitness gallery photo ${index + 1}`}
                loading={index < 6 ? "eager" : "lazy"}
                draggable={false}
              />
            </article>
          ))}
        </div>
      </section>

      {/* TRANSFORMATIONS — 2 CARDS PER ROW ON MOBILE, NO IMAGE SLIDER */}
      <section id="transformations" className="scroll-reveal soft-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Transformations</p>
              <h2 className="section-title">
                Real People.
                <br />
                Real Results.
              </h2>
              <p className="section-copy">
                Before-and-after results from Coach Jithu&apos;s transformation programs.
              </p>
            </div>
          </div>

          <div className={`transform-grid ${showAllTransformations ? "show-all" : ""}`}>
            {transformations.map((item) => (
              <article className="transform-card scroll-reveal" key={item.name}>
                <div className="before-after">
                  <div className="ba-half">
                    <span className="ba-label">Before</span>
                    <img src={item.before} alt={`${item.name} transformation before`} loading="lazy" />
                  </div>
                  <div className="ba-half">
                    <span className="ba-label after">After</span>
                    <img src={item.after} alt={`${item.name} transformation after`} loading="lazy" />
                  </div>
                </div>
                <div className="transform-meta">
                  <p className="transform-name">{item.name}</p>
                  <p className="transform-result">{item.result}</p>
                  <p className="transform-small">{item.duration}</p>
                  <p className="transform-small">{item.program}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <button
              className="button outline transform-view-all"
              type="button"
              onClick={() => setShowAllTransformations((open) => !open)}
              aria-expanded={showAllTransformations}
            >
              {showAllTransformations ? "Hide" : "View All Transformations"}
            </button>
          </div>
        </div>
      </section>

      {/* ONLINE FITNESS PROGRAMS — SINGLE PROGRAM SLIDER */}
      <section id="programs" className="light-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">Online Fitness Training</p>
              <h2 className="section-title">My Programs</h2>
              <p className="section-copy">
                Personalised online fitness coaching with structured workouts,
                nutrition guidance, progress tracking and coach support.
              </p>
            </div>
            <div className="slider-controls" aria-label="Online program carousel controls">
              <button
                className="icon-button"
                type="button"
                aria-label="Previous online programs"
                onClick={() => scrollPrograms("left")}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="icon-button"
                type="button"
                aria-label="Next online programs"
                onClick={() => scrollPrograms("right")}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={programScroller}
            className="program-slider"
            aria-label="Online fitness programs carousel"
          >
            {programCards.map((program) => (
              <article className="program-card scroll-reveal" key={program.title}>
                <img
                  className="program-image"
                  src={program.image}
                  alt={`${program.title} online fitness program`}
                  loading="lazy"
                />
                <div className="program-body">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-price">{program.price}</p>
                  <p className="program-description">{program.description}</p>

                  <ul className="program-features">
                    {program.features.map((feature) => (
                      <li className="program-feature" key={feature}>
                        <Check aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="button"
                    href={whatsappLink(program.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join This Program <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIETITIAN CONSULTATION & DIET PLANS */}
      <section id="dietitian" className="soft-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">Fitness Consultation</p>
              <h2 className="section-title">FITNESS &amp; NUTRITION SUPPORT</h2>
              <p className="section-copy">Choose a fitness consultation or a personalized diet plan based on your goals,food preference,lifestyle</p>
            </div>
          </div>

          <div className="dietitian-grid">
            {dietitianCards.map((plan) => (
              <article className={`dietitian-card scroll-reveal ${plan.highlight ? "recommended" : ""}`} key={plan.title}>
                <div className="dietitian-image-wrap">
                  <img
                    className="dietitian-image"
                    src={plan.image}
                    alt={`${plan.title} dietitian service`}
                    loading="lazy"
                  />
                  {plan.highlight ? <span className="dietitian-badge">{plan.highlight}</span> : null}
                </div>

                <div className="dietitian-body">
                  <h3 className="dietitian-title">{plan.title}</h3>
                  <p className="dietitian-price">{plan.price}</p>

                  <ul className="dietitian-features">
                    {plan.features.map((feature) => (
                      <li className="dietitian-feature" key={feature}>
                        <Check aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="button"
                    href={whatsappLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book This Package <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* GYM MEMBERSHIP PROGRAMS */}
      <section id="gym-membership" className="soft-section scroll-reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">Gym Membership Programs</p>
              <h2 className="section-title">
                Train at the Gym.
                <br />
                Choose Your Package.
              </h2>
              <p className="section-copy">
                Membership options covering gym access, trainer supervision,
                workout planning and diet support.
              </p>
            </div>
          </div>

          <div className="gym-grid">
            {gymMembershipCards.map((plan) => (
              <article
                className={`gym-card scroll-reveal ${plan.highlight === "Most Popular" ? "popular" : ""}`}
                key={plan.title}
              >
                <div className="gym-image-wrap">
                  <img
                    className="gym-image"
                    src={plan.image}
                    alt={`${plan.title} at Coach Jithu's Fitness Target Gym & Studio`}
                    loading="lazy"
                  />
                </div>

                <div className="gym-card-top">
                  <div>
                    <h3 className="gym-card-title">{plan.title}</h3>
                    <p className="gym-card-subtitle">{plan.subtitle}</p>
                  </div>
                  <span className="gym-badge">{plan.highlight}</span>
                </div>

                <p className="gym-pricing">{plan.pricing}</p>

                <ul className="gym-features">
                  {plan.features.map((feature) => (
                    <li className="gym-feature" key={feature}>
                      <Check aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="button gym-book-button"
                  href={whatsappLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join This Package <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <p className="section-copy" style={{ marginTop: 18, maxWidth: 760 }}>
            Premium package is ideal for fat loss, muscle building, body
            transformation and lifestyle correction.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="dark-section scroll-reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">How It Works</p>
              <h2 className="section-title">
                A Simple Process
                <br />
                For Real Results.
              </h2>
            </div>
            <p className="section-copy" style={{ color: "#bdbdb5" }}>
              A clear, structured path from assessment to sustainable
              transformation.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <div className="step scroll-reveal" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="dark-section scroll-reveal" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">Why Choose Me?</p>
              <h2 className="section-title">
                Your Goal.
                <br />
                <span>My Expertise.</span>
              </h2>
            </div>
            <p className="section-copy" style={{ color: "#bdbdb5" }}>
              Personalised coaching built around the way you actually live and
              train.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map(({ title, icon: Icon }) => (
              <article className="strength-card scroll-reveal" key={title}>
                <Icon className="strength-icon" strokeWidth={1.8} />
                <p className="strength-title">{title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE-STYLE REVIEWS ONLY */}
      <section id="testimonials" className="light-section scroll-reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Google Reviews</p>
              <h2 className="section-title">What My Clients Say</h2>
              <p className="section-copy">
                Real reviews from clients — presented in a familiar Google
                review format.
              </p>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card scroll-reveal" key={review.name}>
                <div className="review-top">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <p className="review-name">{review.name}</p>
                    <p className="review-meta">{review.meta}</p>
                  </div>
                </div>

                <div className="review-rating" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                  <span className="review-time">{review.time}</span>
                </div>

                <p className="review-text">{review.text}</p>
              </article>
            ))}
          </div>

          <a className="button outline google-button" href="https://www.google.com/search?client=ms-android-samsung-rvo1&hs=V1aq&sca_esv=6696a1c1b2c1f540&cs=1&hl=en-IN&output=search&kgmid=/g/11k45mdfts&q=Coach_jithu&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/4&kgs=f592737bb2f0f06d&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/4" target="_blank" rel="noopener noreferrer">
            <span style={{ fontWeight: 950 }}>G</span>
            View More Reviews on Google <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="soft-section">
        <div className="container faq-layout">
          <div className="section-head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Common Questions</h2>
              <p className="section-copy">
                Everything you need to know before starting your coaching
                journey.
              </p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className="faq-item scroll-reveal" key={faq.question}>
                  <button
                    className="faq-button"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={17} />
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="scroll-reveal final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow" style={{ color: "#111" }}>
              Ready to Change Your Life?
            </p>
            <h2 className="final-title">Your Transformation Starts With One Decision.</h2>
            <p className="final-copy">
              Start with a conversation and choose the coaching approach that
              fits your goal.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button outline"
              href="https://wa.me/919947324091"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp Coach Jithu
            </a>
            <a
              className="button dark"
              href="https://www.instagram.com/coach.jithu?igsi=MnU1dXlkMW9jNjFh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={17} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand brand-logo" href="#home" aria-label="Coach Jithu home">
                <img
                  className="brand-logo-image"
                  src="/images/coachjithulogo.PNG"
                  alt="Coach Jithu"
                />
              </a>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#programs">Programs</a>
              <a href="#transformations">Transformations</a>
              <a href="#process">How It Works</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="socials" aria-label="Social links">
              <a
                className="social-link"
                href="https://www.instagram.com/coach.jithu?igsi=MnU1dXlkMW9jNjFh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Coach Jithu"
              >
                <InstagramIcon size={16} />
              </a>
              <a className="social-link" href="#" aria-label="Video channel">
                <Play size={16} />
              </a>
            </div>
          </div>

          <p className="copyright">
            © 2026 Coach Jithu. All rights reserved. · A healthier you. A
            stronger tomorrow.
          </p>
        </div>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/919947324091"
        aria-label="WhatsApp Coach Jithu"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CloudLink } from "@/components/cloud-link";
import { AnimatedBird } from "@/components/animated-bird";
import { MusicNote } from "@/components/music-note";
import { Button } from "@/components/ui/button";
import { Check, Music, Play, Star, Users, Zap } from "lucide-react";

export default function Home() {
  const [musicNotes, setMusicNotes] = useState<
    Array<{ id: number; left: string; delay: number }>
  >([]);

  useEffect(() => {
    // Generate initial music notes
    generateMusicNotes();

    // Set interval to generate new notes
    const interval = setInterval(() => {
      generateMusicNotes();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateMusicNotes = () => {
    const newNotes = [];
    const count = Math.floor(Math.random() * 3) + 1; // Generate 1-3 notes at a time

    for (let i = 0; i < count; i++) {
      newNotes.push({
        id: Date.now() + i,
        left: `${Math.random() * 80 + 10}%`, // Random horizontal position
        delay: Math.random() * 2, // Random delay up to 2 seconds
      });
    }

    setMusicNotes((prev) => [...prev, ...newNotes]);

    // Clean up old notes after animation duration (4s)
    setTimeout(() => {
      setMusicNotes((prev) => prev.filter((note) => !newNotes.includes(note)));
    }, 5000);
  };

  return (
    <main className="min-h-screen overflow-hidden relative sky-gradient">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <AnimatedBird
          pathClass="bird-path-1"
          size={60}
          primaryColor="#7c3aed"
          secondaryColor="#c026d3"
          delay={0}
        />
        <AnimatedBird
          pathClass="bird-path-2"
          size={50}
          primaryColor="#8b5cf6"
          secondaryColor="#d946ef"
          delay={1}
        />
        <AnimatedBird
          pathClass="bird-path-3"
          size={70}
          primaryColor="#6d28d9"
          secondaryColor="#a21caf"
          delay={2}
        />
        <AnimatedBird
          pathClass="bird-path-4"
          size={45}
          primaryColor="#9333ea"
          secondaryColor="#db2777"
          delay={3}
        />
        <AnimatedBird
          pathClass="bird-path-5"
          size={55}
          primaryColor="#7e22ce"
          secondaryColor="#be185d"
          delay={4}
        />
      </div>
      <nav className="relative z-20 pt-8 px-4 flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <CloudLink href="#about">About</CloudLink>
          <CloudLink href="#teachers">Teachers</CloudLink>
          <CloudLink href="#courses">Courses</CloudLink>
          <CloudLink href="#pricing">Pricing</CloudLink>
          <CloudLink href="#testimonials">Reviews</CloudLink>
        </div>
      </nav>
      <section className="relative z-10 pt-16 pb-32 md:pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white float-animation">
                Partichella
                <span className="gradient-text ml-4">Githoorn</span>
              </h1>

              <p className="text-xl md:text-2xl text-indigo-100 mb-8 font-light max-w-2xl mx-auto lg:mx-0 float-animation float-animation-delay-1">
                Where voices soar and dreams take flight in the magical setting
                of Giethoorn
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start float-animation float-animation-delay-2">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-xl rounded-full cta-button">
                  <Play className="mr-2 h-5 w-5" /> Start Your Journey
                </Button>
                <Button className="border-white text-white px-8 py-6 text-xl rounded-full">
                  <Music className="mr-2 h-5 w-5" /> Explore Classes
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md logo-container">
                <Image
                  src="/logo.png"
                  alt="Partichella Githoorn Logo"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 -mt-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-6">
              <Music className="h-8 w-8 text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-violet-700 mb-4">
              Expert Instruction
            </h3>
            <p className="text-gray-700">
              Learn from award-winning vocal coaches with decades of experience
              in all musical genres and styles.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-fuchsia-600" />
            </div>
            <h3 className="text-2xl font-bold text-fuchsia-700 mb-4">
              Inspiring Environment
            </h3>
            <p className="text-gray-700">
              Our school is nestled in the picturesque village of Giethoorn,
              providing a serene and creative atmosphere.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-violet-700 mb-4">
              Supportive Community
            </h3>
            <p className="text-gray-700">
              Join a welcoming community of singers who support each other's
              growth and celebrate achievements together.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 mt-24 px-4 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                About Our School
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Partichella Githoorn, where passion meets technique
                in the heart of the "Venice of the Netherlands." Our singing
                school is dedicated to helping students of all ages and
                abilities discover their unique voice and develop their musical
                talents.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to create a nurturing environment for
                vocal expression, our school combines traditional techniques
                with innovative approaches to bring out the best in every
                student.
              </p>
              <div className="flex items-center space-x-2 text-violet-600 mb-6">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <span className="text-gray-700 ml-2">
                  5.0 rating from over 100 students
                </span>
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                Learn More About Us
              </Button>
            </div>
            <div className="md:w-1/2 relative h-80 rounded-2xl overflow-hidden shadow-lg image-container">
              <Image
                src="githoorn.jpg"
                alt="Partichella Githoorn singing school"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Teachers Section */}
      <section
        id="teachers"
        className="relative z-10 mt-24 px-4 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center gradient-text">
            Our Teachers
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Learn from our passionate and experienced vocal coaches who are
            dedicated to helping you discover and develop your unique voice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* First teacher card */}
            <div className="teacher-card bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="mx-auto md:mx-0">
                  <div className="image-container w-40 h-40 rounded-full overflow-hidden border-4 border-violet-200 shadow-xl flex-shrink-0">
                    <Image
                      src="/face1.jpeg"
                      alt="Emma Jansen - Vocal Coach"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-violet-700 mb-2">
                    Emma Jansen
                  </h3>
                  <p className="text-fuchsia-600 font-medium mb-4">
                    Head Vocal Coach
                  </p>
                  <p className="text-gray-700 mb-4">
                    With over 15 years of experience in vocal training and
                    performance, Emma specializes in contemporary and classical
                    techniques. Her students have gone on to perform on national
                    stages and international competitions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
                      Classical
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-fuchsia-100 text-fuchsia-800">
                      Contemporary
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
                      Performance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second teacher card */}
            <div className="teacher-card bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="mx-auto md:mx-0">
                  <div className="image-container w-40 h-40 rounded-full overflow-hidden border-4 border-fuchsia-200 shadow-xl flex-shrink-0">
                    <Image
                      src="/face5.jpeg"
                      alt="Thomas de Vries - Vocal Coach"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-fuchsia-700 mb-2">
                    Thomas de Vries
                  </h3>
                  <p className="text-violet-600 font-medium mb-4">
                    Vocal Performance Coach
                  </p>
                  <p className="text-gray-700 mb-4">
                    Thomas brings his background as a professional opera singer
                    to help students master breath control, vocal projection,
                    and stage presence. His holistic approach focuses on both
                    technique and emotional expression.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-fuchsia-100 text-fuchsia-800">
                      Opera
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
                      Breath Control
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-fuchsia-100 text-fuchsia-800">
                      Stage Presence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="relative z-10 mt-24 px-4 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center gradient-text">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-violet-700 mb-3">
                Beginner Vocals
              </h3>
              <p className="text-gray-700 mb-4">
                Discover your voice and learn the fundamentals of singing
                technique, breathing, and vocal health. Perfect for those just
                starting their vocal journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-violet-600 mr-2" />
                  <span className="text-gray-700">
                    Proper breathing techniques
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-violet-600 mr-2" />
                  <span className="text-gray-700">
                    Vocal warm-ups and exercises
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-violet-600 mr-2" />
                  <span className="text-gray-700">Basic music theory</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c026d3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                  <circle cx="17" cy="7" r="5"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">
                Advanced Performance
              </h3>
              <p className="text-gray-700 mb-4">
                Refine your technique and develop your stage presence for
                captivating performances. For experienced singers looking to
                take their skills to the next level.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fuchsia-600 mr-2" />
                  <span className="text-gray-700">
                    Advanced vocal techniques
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fuchsia-600 mr-2" />
                  <span className="text-gray-700">Performance coaching</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fuchsia-600 mr-2" />
                  <span className="text-gray-700">
                    Recording studio sessions
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-violet-700 mb-3">
                Choir Ensemble
              </h3>
              <p className="text-gray-700 mb-4">
                Experience the joy of harmonizing with others in our supportive
                choir community. Learn to blend your voice with others and
                create beautiful harmonies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-violet-600 mr-2" />
                  <span className="text-gray-700">Harmony training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-violet-600 mr-2" />
                  <span className="text-gray-700">Group performances</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-violet-600 mr-2" />
                  <span className="text-gray-700">Community events</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c026d3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19.5 12.572 12 17l-7.5-4.428V5.428L12 1l7.5 4.428v7.144Z"></path>
                  <path d="M12 17v6"></path>
                  <path d="m4.5 7.5 7.5 4.5 7.5-4.5"></path>
                  <path d="M12 12 4.5 7.5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">
                Vocal Therapy
              </h3>
              <p className="text-gray-700 mb-4">
                Heal and strengthen your voice with specialized techniques and
                personalized guidance. Ideal for those recovering from vocal
                strain or seeking to improve vocal health.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fuchsia-600 mr-2" />
                  <span className="text-gray-700">Vocal rehabilitation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fuchsia-600 mr-2" />
                  <span className="text-gray-700">Personalized exercises</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fuchsia-600 mr-2" />
                  <span className="text-gray-700">Long-term vocal health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="relative z-10 mt-24 px-4 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Choose the perfect plan to match your singing goals. All plans
            include access to our state-of-the-art facilities and supportive
            community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="pricing-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-6">
                <h3 className="text-2xl font-bold text-violet-700 text-center">
                  Basic
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-violet-800">
                    €49
                  </span>
                  <span className="text-violet-600">/month</span>
                </div>
              </div>
              <div className="p-6 pricing-card-content">
                <ul className="space-y-4 pricing-card-features mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      1 weekly group lesson (60 min)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Access to practice rooms (2 hours/week)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Online learning resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Monthly progress assessment
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card pricing-popular bg-white rounded-2xl shadow-lg overflow-hidden transform scale-105">
              <div className="bg-gradient-to-r from-violet-100 to-fuchsia-100 p-6">
                <h3 className="text-2xl font-bold text-violet-700 text-center">
                  Premium
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-violet-800">
                    €89
                  </span>
                  <span className="text-violet-600">/month</span>
                </div>
              </div>
              <div className="p-6 pricing-card-content">
                <ul className="space-y-4 pricing-card-features mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      1 weekly private lesson (45 min)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      1 weekly group lesson (60 min)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Access to practice rooms (5 hours/week)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Online learning resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Bi-weekly progress assessment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-violet-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Quarterly recording session
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-violet-700 hover:bg-violet-800 text-white cta-button">
                  Join Premium
                </Button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-6">
                <h3 className="text-2xl font-bold text-fuchsia-700 text-center">
                  Professional
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-fuchsia-800">
                    €149
                  </span>
                  <span className="text-fuchsia-600">/month</span>
                </div>
              </div>
              <div className="p-6 pricing-card-content">
                <ul className="space-y-4 pricing-card-features mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      2 weekly private lessons (45 min each)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      All group classes included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Unlimited practice room access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Premium online resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Weekly progress assessment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Monthly recording session
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Performance opportunities
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  Get Professional
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative z-10 mt-24 px-4 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center gradient-text">
            Student Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Partichella Githoorn transformed my relationship with singing.
                The instructors are incredibly supportive and the natural
                setting is so inspiring! After just three months, I've seen
                remarkable improvement in my vocal range and confidence."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-violet-700 font-bold">EM</span>
                </div>
                <div>
                  <p className="text-violet-700 font-semibold">Emma Visser</p>
                  <p className="text-violet-600 text-sm">Student for 2 years</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I never thought I could sing before joining this school. Now I
                perform regularly and have discovered a whole new side of
                myself. The Premium plan has been worth every penny - the
                private lessons have accelerated my progress tremendously."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-fuchsia-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-fuchsia-700 font-bold">TK</span>
                </div>
                <div>
                  <p className="text-fuchsia-700 font-semibold">
                    Thomas Kuipers
                  </p>
                  <p className="text-fuchsia-600 text-sm">Student for 1 year</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "As a professional musician, I needed specialized coaching to
                prepare for auditions. The Professional plan at Partichella
                Githoorn gave me exactly what I needed. The recording sessions
                were invaluable for my portfolio, and I landed my dream role!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-violet-700 font-bold">LB</span>
                </div>
                <div>
                  <p className="text-violet-700 font-semibold">Lisa Bakker</p>
                  <p className="text-violet-600 text-sm">
                    Student for 6 months
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill={i < 4 ? 'currentColor' : 'none'}"
                      stroke="currentColor"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The choir ensemble at Partichella Githoorn has been a wonderful
                experience for my daughter. She's gained confidence, made
                friends, and developed her musical abilities. The instructors
                create a positive and encouraging environment."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-fuchsia-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-fuchsia-700 font-bold">MV</span>
                </div>
                <div>
                  <p className="text-fuchsia-700 font-semibold">
                    Marco van der Berg
                  </p>
                  <p className="text-fuchsia-600 text-sm">Parent of student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 mt-24 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Voice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Partichella Githoorn today and begin your journey to vocal
            excellence. The first lesson is on us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-violet-700 hover:bg-violet-50 px-8 py-6 text-xl rounded-full">
              Book a Free Trial
            </Button>
            <Button className="border-white text-white px-8 py-6 text-xl rounded-full">
              View Class Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 mt-24 mb-24 px-4 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center gradient-text">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                Visit Our School
              </h3>
              <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl mb-6">
                <div className="flex items-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 mt-1"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Dorpsstraat 42</p>
                    <p className="text-gray-700">8355 Giethoorn</p>
                    <p className="text-gray-700">The Netherlands</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700">+31 6 12345678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 mt-1"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700">
                      info@partichella-githoorn.nl
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                Opening Hours
              </h3>
              <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl">
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-700 font-medium">Monday - Friday:</p>
                  <p className="text-gray-700">9:00 AM - 8:00 PM</p>
                  <p className="text-gray-700 font-medium">Saturday:</p>
                  <p className="text-gray-700">10:00 AM - 6:00 PM</p>
                  <p className="text-gray-700 font-medium">Sunday:</p>
                  <p className="text-gray-700">Closed</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-violet-700 mb-1 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-violet-700 mb-1 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-violet-700 mb-1 font-medium"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full p-3 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="lessons">Lessons Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="trial">Free Trial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-violet-700 mb-1 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

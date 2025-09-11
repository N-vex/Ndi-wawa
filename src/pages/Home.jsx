import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Home.css";

export default function App() {
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  // Animate stats count up
  const stats = [
    { id: "stat-0", end: 25 },
    { id: "stat-1", end: 5 },
    { id: "stat-2", end: 5 },
    { id: "stat-3", end: 10 },
    { id: "stat-4", end: 99 },
  ];

  stats.forEach((stat) => {
    let obj = { val: 0 };
    gsap.to(obj, {
      val: stat.end,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        document.getElementById(stat.id).innerText = Math.floor(obj.val);
      },
    });
  });

  useEffect(() => {
    // Animate title bounce
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2.0, ease: "bounce.out" }
    );

    // Animate background hue shift
    gsap.to(bgRef.current, {
      filter: "hue-rotate(360deg)",
      duration: 10, // cycle speed
      repeat: -1, // infinite loop
      ease: "linear", // smooth
    });
  }, []);

  return (
    <>
    <div className="relative w-full h-screen">
  {/* Carousel Background */}
  <div id="default-carousel" className="absolute inset-0 w-full h-full z-0" data-carousel="slide">
    <div className="relative h-full overflow-hidden">
      {/* Item 1 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="./public/assets/slide1.jpg" className="absolute block w-full h-full object-cover" alt="slide1"/>
      </div>
      {/* Item 2 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="./public/assets/slide2.jpg" className="absolute block w-full h-full object-cover" alt="slide2"/>
      </div>
      {/* Item 3 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="./public/assets/slide3.jpg" className="absolute block w-full h-full object-cover" alt="slide3"/>
      </div>
    </div>
  </div>

  {/* Overlay Content */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6 bg-black/40">
    <h1  ref={titleRef}  className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
      Wawa Cooperate Club 🌍
    </h1>
    <p className="text-lg md:text-2xl max-w-2xl">
      From orphanages to neighborhoods, our hands reach out with love.
    </p>
    <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl shadow-lg hover:scale-105 transition">
      <a href="/about">Learn More</a>
    </button>
  </div>
</div>


      {/* body section */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Our Missions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center text-white dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Community Support Innovation
              </h3>
              <p>
                We organize events and initiatives to provide emotional and
                social support to orphans and their caregivers
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center text-white dark:border-gray-700 dark:bg-gray-800 ">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p>
                Twelve heads are better than one, especially when they're this
                brilliant. We brainstorm like caffeinated squirrels.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center text-white dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Health & Wellness</h3>
              <p>
                We provide access to healthcare services, nutritious food, and
                recreational activities to promote overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Our vision is to create a world where every orphan has the
                opportunity to thrive in a loving and supportive environment. We
                envision a future where our collective efforts lead to
                sustainable change, empowering orphans to become confident,
                capable, and compassionate individuals who contribute positively
                to society.
              </p>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="/assets/new.png"
                alt="Vision"
                className="rounded-lg shadow-lg w-full h-mid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Achievement Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center text-white dark:border-gray-700 dark:bg-gray-800">
              <img
                className="rounded-t-lg"
                src="/assets/pexels-olia-danilevich-8145335.jpg"
                alt=""
              />
              <div className="p-5">
                <a
                  href="/achievements"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Animated Stats */}
            <div className="grid grid-cols-2 gap-6 text-center text-white">
              {[
                { label: "Projects", value: 25 },
                { label: "Clients", value: 5 },
                { label: "Awards", value: 5 },
                { label: "Innovations", value: 10 },
                { label: "Successes", value: 99 },
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="text-5xl font-extrabold mb-2" id={`stat-${i}`}>
                    0
                  </h3>
                  <p className="text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white  rounded-lg shadow-lg p-6 text-center text-white dark:border-gray-700 dark:bg-gray-800 w-full h-full min-h-[500px] flex flex-col justify-between">
              <img
                className="rounded-t-lg mx-auto h-48 w-full object-cover"
                src="/assets/pexels-fauxels-3184291.jpg"
                alt="Team"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-4">Our Team</h3>
                <ul className="list-disc list-inside text-left">
                  <li>Ifeanyi Eze - Founder & Coordinator</li>
                  <li>Okechukwu Ndubuisi - Event Organizer</li>
                  <li>Chinedu Alumona - Tech Wizard</li>
                  <li>Ernest Asogwa - CFO Outreach</li>
                  <li>Ikechukwu Udechi - Assistance Sec. Gen. Coordinator</li>
                  <li>Fred Ekete - Marketing & Communications</li>
                </ul>
                <br />
                <a
                  href="/about"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center text-white dark:border-gray-700 dark:bg-gray-800 w-full h-full min-h-[500px] flex flex-col justify-between">
                <img
                  className="rounded-t-lg mx-auto h-48 w-full object-cover"
                  src="/assets/team1.png"
                  alt="img"
                />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Part of the Team at Work
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Photo of the Team at Work
                </p>
                <a
                  href="/join"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Become a member
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

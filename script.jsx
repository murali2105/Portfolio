const { useState, useEffect } = React;
const { motion } = window.Motion;

const skills = [
  { name: "Python", level: 80 },
  { name: "C/C++", level: 75 },
  { name: "PCB Design", level: 85 },
  { name: "Fusion 360", level: 80 },
  { name: "Embedded Systems", level: 85 },
  { name: "Drone Programming", level: 75 },
];

const projects = [
  {
    title: "Line Following Robot",
    desc: "Autonomous robot using IR sensors with optimized motor control.",
    tech: "Embedded Systems, Sensors",
  },
  {
    title: "Autonomous Disaster UAV",
    desc: "Drone for search & rescue with autonomous control.",
    tech: "UAV, Embedded Systems",
  },
  {
    title: "RC Electric Car",
    desc: "Rear-wheel-drive RC car with CAD and drivetrain design.",
    tech: "CAD, Electronics",
  },
];

function Portfolio() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "fixed w-40 h-40 bg-red-500/20 rounded-full blur-3xl pointer-events-none z-50 transition-all duration-75 ease-out";
    document.body.appendChild(glow);

    const handleMouseMove = (e) => {
      glow.style.left = e.clientX - 80 + "px";
      glow.style.top = e.clientY - 80 + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (document.body.contains(glow)) {
        document.body.removeChild(glow);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-gray-900 to-red-900 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle,red_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
        >
          Muralidharan D
        </motion.h1>

        <p className="mt-4 text-gray-300 text-lg z-10">
          Aspiring Mechatronics & Robotics Engineer
        </p>

        <p className="mt-4 max-w-xl text-gray-400 z-10">
          Building intelligent hardware systems integrating robotics, UAVs, and embedded technologies.
        </p>

        <div className="mt-8 flex gap-4 z-10">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl shadow-lg shadow-red-500/30 transition-colors">View Projects</button>
          <button className="border border-white hover:bg-white/10 transition-colors px-6 py-2 rounded-xl">Contact</button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-8 md:p-16 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl max-w-4xl mx-auto border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-red-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate Mechatronics student focused on robotics, UAV systems, AI, and embedded development. I love building real-world systems combining hardware and software.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="p-8 md:p-16 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="mb-2 font-medium">{skill.name}</p>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-8 md:p-16 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-red-500/30 hover:shadow-red-500/20 hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-bold text-red-300">{project.title}</h3>
              <p className="mt-3 text-gray-300 min-h-[4rem]">{project.desc}</p>
              <p className="mt-3 text-xs font-mono text-red-400 bg-red-500/10 inline-block px-2 py-1 rounded">{project.tech}</p>
              <div className="mt-6 flex gap-3">
                <button className="bg-red-600 hover:bg-red-700 transition-colors text-sm px-4 py-1.5 rounded-lg w-full">GitHub</button>
                <button className="border border-white/30 hover:bg-white/10 transition-colors text-sm px-4 py-1.5 rounded-lg w-full">Demo</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-8 md:p-16 text-center max-w-2xl mx-auto relative z-10">
        <div className="bg-gradient-to-b from-white/10 to-transparent p-8 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold mb-6 text-red-400">Let's Connect</h2>
          <div className="space-y-3 mb-8">
            <p className="text-gray-300 text-lg hover:text-red-400 transition-colors cursor-pointer">📧 muralidhana2005@gmail.com</p>
            <p className="text-gray-300 text-lg hover:text-red-400 transition-colors cursor-pointer">📱 +91 9443214437</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 rounded-xl shadow-lg shadow-red-500/30 text-lg font-medium">Connect on LinkedIn</button>
        </div>
      </section>

      <footer className="text-center p-8 text-gray-500 border-t border-white/10 mt-8 relative z-10">
        <p>© 2026 Muralidharan D. All rights reserved.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      {/* Navbar */}
       <nav className="flex items-center justify-between p-4 shadow-md">
      {/* Left: Hamburger */}
      <button className="space-y-1">
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Right: Name */}
      <div className="text-lg font-bold">
        Jessica De-Paz
      </div>
    </nav>

      {/* Hero / Intro */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Jessica</h1>
        <p className="text-lg max-w-xl">
          Computer Science student passionate about building software, leading projects, and creating impactful user experiences.
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          [Write a short bio here]
        </p>
      </section>

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto py-16 px-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-2">
          <li>
            <strong>Florida International University</strong> – B.A. in Computer Science (Expected July 2025)
          </li>
          {/* Add more schools here */}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">Rent Radar</h3>
            <p className="text-sm">A platform to reveal hidden rental fees using Firebase & React.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">TherapAI</h3>
            <p className="text-sm">AI-driven transcript summarization for therapy sessions.</p>
          </div>
          {/* Add more projects */}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-16 px-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Puzo Family Law Firm</strong> – Receptionist / Junior Paralegal  
            <span className="block text-sm text-gray-600">March 2022 – Jan 2023</span>
            <p className="text-sm">Managed office calendar, automated billing, and handled client communication.</p>
          </li>
          {/* Add more roles */}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">Let’s connect! You can reach me at:</p>
        <a href="mailto:jessica@email.com" className="text-blue-600 underline">
          jessica@email.com
        </a>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-700">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-700">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Jessica De-Paz. All rights reserved.
      </footer>
    </main>
  )
}

export function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-black w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">My Skills</h2>
      <div className="max-w-3xl text-lg md:text-xl leading-relaxed">
          <p className="mb-4">
            Here are some of the skills I've acquired over the years:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-bold">Programming Languages:</span> JavaScript, TypeScript, Python, Java, C++</li>
            <li><span className="font-bold">Web Development:</span> React, Node.js, Express, HTML5, CSS3, Tailwind CSS</li> 
            <li><span className="font-bold">Data Science & Machine Learning:</span> Pandas, NumPy, Scikit-learn, TensorFlow, Keras</li>
            <li><span className="font-bold">Databases:</span> MongoDB, MySQL, PostgreSQL</li>
          </ul>
      </div>
    </section>
  );
}
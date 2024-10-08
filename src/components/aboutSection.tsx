export function AboutSection() {
    return (
      <div className="bg-[#141414] pl-4 pr-4">
        <div className="grid items-center justify-center w-full max-w-[1300px] lg:h-[50vh] md:h-[60vh] h-full pb-2 px-6 mx-auto md:grid-cols-3 gap-4">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="mt-2 text-4xl pb-4 font-bold text-transparent bg-clip-text  bg-gradient-to-t from-[#ff0844] to-[#ffb199] md:text-5xl">
              <span className="AD">Alexandre Duteau</span>
            </h2>
            <p className="mt-2   text-lg font-semibold text-white leading-relaxed md:text-xl">
              Hello, I am a University student attending the <span className="UNI">University of Calgary</span>. I am currently pursuing a <span className="UNI">Computer Science</span> degree, and I am headed into my third year of classes.<br /><br />
              Some of my favorite artists are Bruno Mars, Arctic Monkeys, Wallows, 1975, Backseat Lovers, Hozier, and Vincent Vallieres!
            </p>
          </div>
          <div className="flex justify-center mt-8 md:mt-0 md:col-span-1">
            <img
              src="/images/personal.JPG"
              alt="Personal Photo"
              className="w-64 h-64 rounded-full object-cover object-[center top] scale-110 shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  
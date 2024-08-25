import './App.css';
import Card from './components/Card';
import ThemeToggle from './components/ThemeToggle';
import projects from './assets/projects.json';

import { FaCalendarDays } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

function App() {
    return (
        <div className="container mx-auto sm:px-32 text-left">
            <h1 className="inline text-5xl">My Portfolio</h1>

            <div className="sm:float-end flex">
                <a title="Website (Portfolio)" href="">
                    <CgWebsite className="mt-5" size={24} />
                </a>

                <a title="GitHub profile" target="_blank" href="https://github.com/amirrh6">
                    <FaGithub className="mt-5" size={24} />
                </a>

                <a title="Email" target="_blank" href="mailto:amirrezahh6@gmai.com">
                    <MdEmail className="mt-5" size={24} />
                </a>

                <a
                    title="LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/amirreza-hashemieh-494622247/"
                >
                    <FaLinkedin className="mt-5" size={24} />
                </a>

                <ThemeToggle />
            </div>

            <hr className="my-5" />

            <h2 className="text-4xl text-orange-500 mb-4">About me:</h2>
            <div>
                <p>
                    I am <strong>Amir(reza) Hashemieh</strong>, a Software Developer who focuses on
                    Backend Development but can also manage to do system programming, build full
                    stack Web apps and so more.
                </p>

                <h2 className="text-xl mt-2">Skills:</h2>

                <ul className="list-disc list-inside">
                    <li>
                        Programming Languages:
                        <ul className="list-disc list-inside ml-4">
                            <li>Typescript / JavaScript (Environments: Browser, Node.js)</li>
                            <li>Python</li>
                            <li>PHP</li>
                        </ul>
                    </li>

                    <li>
                        Tools and Frameworks
                        <ul className="list-disc list-inside ml-4">
                            <li>React</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                            <li>Telegram Bot API</li>

                            <li>Git</li>
                            <li>Postman, Thunderclient</li>
                            <li>
                                Static type checkers, Linters, Bundlers and Formatters for mentioned
                                technologies (Mypy, Pylint, Prettifier, ESLint, Vite …)
                            </li>

                            <li>Linux and Shell scripting (Bash)</li>

                            <li>MySQL, SQLite, MongoDB</li>

                            <li>Mongoose ODM</li>
                            <li>Django (Python), Flask (Python), Express (Node)</li>
                            <li>Redis</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <hr className="my-5" />

            <h2 className="text-4xl text-orange-500 mb-4">Job Experiences:</h2>
            <div>
                <div>
                    <h2 className="text-2xl">Neatco, Waterloo, ON</h2>
                    <a
                        target="_blank"
                        className="link-primary"
                        href="https://neatcoeng.com/amirreza-hashemieh"
                    >
                        Remote Software Developer
                    </a>
                    <h4 className="mb-4">
                        <FaCalendarDays className="inline" /> April 2022 - Present
                    </h4>

                    <p className="mt-2 mb-4">
                        I have worked on several projects, including but not limited to development
                        of standalone utilities as well as contributing to the company’s mainline
                        projects.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {projects.neatco.map((project) => {
                            return (
                                <Card
                                    key={project.id}
                                    //
                                    title={project.title}
                                    desc={project.desc}
                                    tags={project.tags}
                                />
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl">Saaimaan, Mashhad, Iran</h2>
                    <h3>Lead backend developer and project manager</h3>
                    <h4 className="mb-4">
                        <FaCalendarDays className="inline" /> August 2019 - October 2021
                    </h4>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {projects.saimaan.map((project) => {
                            return (
                                <Card
                                    key={project.id}
                                    //
                                    title={project.title}
                                    desc={project.desc}
                                    tags={project.tags}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <h2 className="text-4xl text-orange-500 mb-4">Notable Freelancing Experiences:</h2>
            <div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {projects.others.map((project) => {
                        return (
                            <Card
                                key={project.id}
                                //
                                title={project.title}
                                desc={project.desc}
                                tags={project.tags}
                            />
                        );
                    })}
                </div>
            </div>

            <hr className="my-5" />

            <h2 className="text-4xl text-orange-500 mb-4">Education:</h2>
            <div>
                <h2 className="text-2xl">Azad University, Mashhad, Iran</h2>

                <h3>Bachelor’s degree in Software Engineering</h3>
                <h4>
                    <FaCalendarDays className="inline" /> January 2020 - July 2024
                </h4>
            </div>
        </div>
    );
}

export default App;

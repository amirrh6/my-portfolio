import './App.css';
import Card from './components/Card';
import ThemeToggle from './components/ThemeToggle';
import { FaCalendarDays } from 'react-icons/fa6';

function App() {
    const projects = {
        neatco: [
            {
                id: 1,
                title: 'Neatco Utility Tool',
                desc: '',
                tags: ['']
            },
            {
                id: 2,
                title: 'Annotation Utility Web app',
                desc: '',
                tags: ['']
            },
            {
                id: 3,
                title: 'Crash Monitor',
                desc: '',
                tags: ['']
            },
            {
                id: 4,
                title: 'Neatco’s website',
                desc: '',
                tags: ['']
            }
        ],
        saimaan: [
            {
                id: 1,
                title: 'DastSaaz',
                desc: 'Developed and implemented a RESTful API for an online marketplace specializing in handmade products.',
                tags: ['PHP', 'Sqlite', 'FlightPHP (Routing)']
            },
            {
                id: 2,
                title: 'Shukul',
                desc: 'Created and maintained a RESTful API for an online store specializing in pastry and confectionery products.',
                tags: ['PHP, SQLite,', 'FlightPHP (Routing)', 'Aura SqlQuery (Query Building)']
            },
            {
                id: 3,
                title: 'PishroTire',
                desc: 'Designed and developed a RESTful API for an online store specializing in automobile tires.',
                tags: [
                    'JavaScript (Runtime: Node.js)',
                    'Mongoose (MongoDB)',
                    'Express',
                    'JWT (for authentication)'
                ]
            },
            {
                id: 4,
                title: 'Khanomito',
                desc: 'Developed a RESTful API for an online store featuring handmade products and foods crafted by women.',
                tags: ['JavaScript (Runtime: Node.js)', 'Mongoose (MongoDB)', 'Express']
            }
        ],
        others: [
            {
                id: 1,
                title: 'GMB',
                desc: '',
                tags: ['']
            }
        ]
    };

    return (
        <>
            <ThemeToggle />

            <hr className="my-5" />

            <div>
                <h1 className="text-4xl text-orange-500">About me:</h1>
            </div>

            <hr className="my-5" />

            <h1 className="text-4xl text-orange-500">Job Experiences:</h1>
            <div>
                <div>
                    <h2 className="text-2xl pt-4 mt-4">Saaimaan, Waterloo, ON</h2>
                    <h3>Remote Software Developer</h3>
                    <h4>
                        <FaCalendarDays className="inline" /> April 2022 - Present
                    </h4>

                    <p>
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
                    <h2 className="text-2xl pt-4 mt-4">Saaimaan, Mashhad, Iran</h2>
                    <h3>Lead backend developer and project manager</h3>
                    <h4>
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

            <h1 className="text-4xl text-orange-500">Notable Freelancing Experiences:</h1>
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
        </>
    );
}

export default App;

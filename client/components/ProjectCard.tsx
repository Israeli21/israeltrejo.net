type Project = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    link: string;
    skills: string[];
};

type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-[#13151c] border-2 border-[#4ECDC4]/30 rounded-lg p-6 hover:border-[#4ECDC4] transition-all duration-300 w-full max-w-xl cursor-pointer">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">
                {project.startDate} - {project.endDate}
            </p>
            <ul className="list-disc list-inside text-gray-300">
                {project.skills.map((skill, index) => (   
                    <li key={index} className="mb-1">{skill}</li>
                ))}
            </ul>
        </div>
    );
}
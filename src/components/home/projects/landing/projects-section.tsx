import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaRobot, FaMobile } from 'react-icons/fa'
import Image from 'next/image'
import { projectsData } from '../data/projects-data'
import CardOverlayStyle from '@/core/common/card-overlay-style'
import SectionHeader from '@/core/common/section-header'
export default function ProjectsSection() {
    const getProjectTypeIcon = (type: string) => {
        switch (type) {
            case 'website':
                return <FaGlobe className="text-blue-500" size={16} />
            case 'ai':
                return <FaRobot className="text-purple-500" size={16} />
            case 'app':
                return <FaMobile className="text-green-500" size={16} />
            default:
                return null
        }
    }

    const getProjectTypeTooltip = (type: string) => {
        switch (type) {
            case 'website':
                return 'Web Application'
            case 'ai':
                return 'AI Project'
            case 'app':
                return 'Mobile/Desktop App'
            default:
                return ''
        }
    }

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Featured Projects" link="/projects" linkText="View All Projects" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        project.featured && (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden
                                border border-gray-200 dark:border-gray-700/50 
                                hover:border-gray-300 dark:hover:border-gray-600/50 
                                transition-all duration-300 hover:shadow-xl
                                hover:scale-[1.02] transform"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

                                    {/* Project Links */}
                                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-900/80 hover:bg-gray-900
                                        transition-colors duration-300 group/link"
                                        >
                                            <FaGithub className="text-white" size={16} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-900/80 hover:bg-gray-900
                                        transition-colors duration-300 group/link"
                                        >
                                            <FaExternalLinkAlt className="text-white" size={16} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 sm:p-6 ">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100
                                        group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="relative group/tooltip cursor-pointer">
                                            {getProjectTypeIcon(project.projectType)}
                                            <div className="absolute -top-8 right-0 px-2 py-1 text-xs font-medium text-white
                                            bg-gray-900 dark:bg-gray-700 rounded-md opacity-0 group-hover/tooltip:opacity-100
                                            transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                                {getProjectTypeTooltip(project.projectType)}
                                                <div className="absolute -bottom-1 right-2 w-2 h-2 bg-gray-900 dark:bg-gray-700 
                                                transform rotate-45" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 ">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs z-50 font-medium text-gray-700 dark:text-gray-300
                                            bg-gray-100 dark:bg-gray-700/50 rounded-sm
                                            border border-gray-200 dark:border-gray-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <CardOverlayStyle />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}

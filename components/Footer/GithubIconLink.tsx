"use client" 

import React from 'react';
import { useStrokeColor } from './useStrokeColor'


interface GithubIconLinkProps {
    repoUrl: string;
}

const GithubIconLink: React.FC<GithubIconLinkProps> = ({ repoUrl }) => {
  const strokeColor = useStrokeColor();
    return (
        
        <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="תבקרו אותנו בגיטהאב"
        >
        <svg
            width="40"
            height="40"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
            className="text-transparent transition duration-300 cursor-pointer fill-current hover:text-blue-700 transform translate-y-3"
            >
            <g id="GitHub-Icon">
                <path
                    d="M26,2C14.9543,2,6,10.9543,6,22C6,31.3894,11.7984,39.1736,20.3333,41.8C21.3333,41.9333,21.6667,41.4667,21.6667,41.0667C21.6667,40.8,21.6667,39.6,21.6667,38.0667C14.5333,39.4667,13.4667,36.1333,13.4667,36.1333C12.6,34.0667,11.4,33.6667,11.4,33.6667C10,32.8667,11.8667,32.8667,11.8667,32.8667C13.6667,32.9333,14.6667,34.6,14.6667,34.6C16.4,37.8,19.4667,37.0667,20.6667,36.6C20.8667,35.6,21.3333,34.8667,21.8,34.4667C16.3333,33.8,11.4667,31.3333,11.4667,22.8667C11.4667,20.6667,12.1333,19,13.3333,17.6667C13.1333,17.0667,12.5333,14.6,13.8667,11.4667C13.8667,11.4667,15.4667,11,21.6667,14.8667C23.6667,14.2667,25.8667,14,28,14C30.1333,14,32.3333,14.2667,34.3333,14.8667C40.5333,11,42.1333,11.4667,42.1333,11.4667C43.4667,14.6,42.8667,17.0667,42.6667,17.6667C43.8667,19,44.5333,20.6667,44.5333,22.8667C44.5333,31.3333,39.6667,33.8,34.2,34.4667C34.8,34.9333,35.3333,35.8,35.3333,37.0667C35.3333,39.1333,35.3333,41,35.3333,41.0667C35.3333,41.4667,35.6667,41.9333,36.6667,41.8C45.2016,39.1736,51,31.3894,51,22C51,10.9543,42.0457,2,31,2H26Z"
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    </a>
);
}

export default GithubIconLink;
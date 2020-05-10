import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="conteiner-header">   
        <h1>GitHub Profiles</h1>
        <FaGithub size={24}/>     
    </header>
  );
}

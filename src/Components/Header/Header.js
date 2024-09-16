import React from 'react';
import "./Header.css";
import groupEnrollLogo from '../../Images/group-enroll-partnership-logo-white.png';

const Header = ({ formData, setFormData }) => {
    return (
        <div className='header-div'>
            <div className='header-logo-div'>
                <img src={groupEnrollLogo} height="30px" alt="group enroll logo" />
            </div>
            <div className='language-toggle'>
                {formData.language === "en" ? <span className='language-active'>EN</span> : <span className='language-inactive' onClick={() => setFormData({ ...formData, language: "en" })}>EN</span>}
                <span>&nbsp;|&nbsp;</span>
                {formData.language === "fr" ? <span className='language-active'>FR</span> : <span className='language-inactive' onClick={() => setFormData({ ...formData, language: "fr" })}>FR</span>}
            </div>
        </div>
    );
};

export default Header;
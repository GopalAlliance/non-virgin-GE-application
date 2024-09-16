import React, { useEffect, useState } from 'react';
import "./Application.css";

import InputMask from "react-input-mask";
import axios from 'axios';

import TermsAndConditions from '../OptIns/TermsAndConditions/TermsAndConditions';
import SpecificationsAndAssumptions from '../OptIns/SpecificationsAndAssumptions/SpecificationsAndAssumptions';
import PADDetails from '../OptIns/PADDetails/PADDetails';

const Application = ({ formData, setFormData }) => {
    const fileRef = React.useRef();
    const [file, setFile] = useState([]);
    const [dropState, setDropState] = useState("");

    const getExtension = (filename) => {
        return filename.split('.').pop();
    }

    const onDrag = (e) => {
        setDropState("drop-active");
        e.preventDefault();
    }
    const leaveDragZone = () => {
        setDropState("");
    }

    useEffect(() => {
        setDropState(dropState);
    }, [dropState]);

    const convertToMegabytes = (bytes) => {
        const conversion = (bytes / 1000000).toFixed(2);
        return `${conversion} MB`;
    }

    const checkLimit = (files) => {
        let size = 0;
        for (let index = 0; index < files.length; index++) {
            size = size + files[index]["size"];
        }
        if (size > 10000000) {
            return false;
        } else {
            return true;
        }
    }

    const handleFileChange = (e) => {
        e.preventDefault();
        const newFiles = e.target.files;
        if (newFiles.length !== 0) {
            let valid = true;
            for (let index = 0; index < newFiles.length; index++) {
                if (getExtension(newFiles[index]["name"].toLowerCase()) !== "pdf") {
                    valid = false;
                }
            }
            if (valid === true) {
                if (!checkLimit(newFiles)) {
                    alert("Files are too big to upload.");               
                } else if (newFiles.length > 6) {
                    alert("File limit exceeded.");
                } else {
                    setFile(e.target.files);
                }
            } else {
                alert("One or more files are not in pdf format.");
            }
        }
    }

    const handleFileDrop = (e) => {
        e.preventDefault();
        const newFiles = e.dataTransfer.files;
        if (newFiles.length !== 0) {
            let valid = true;
            for (let index = 0; index < newFiles.length; index++) {
                if (getExtension(newFiles[index]["name"].toLowerCase()) !== "pdf") {
                    valid = false;
                }
            }
            if (valid === true) {
                if (!checkLimit(newFiles)) {
                    alert("Files are too big to upload.");
                } else if (newFiles.length > 6) {
                    alert("File limit exceeded.");
                } else {
                    setFile(e.dataTransfer.files);
                }
            } else {
                alert("One or more files are not in pdf format.");
            }
        }
    }

    useEffect(() => {
        setFile(file);
        if (file) {
            setDropState("");
            checkLimit(file);
            console.log(file);
        }
    }, [file]);

    const today = new Date();
    const year = today.getFullYear();
    var firstYear = parseInt(year);
    var secondYear = parseInt(year);
    var nextMonth = ("0" + (today.getMonth() + 2)).slice(-2);
    if (nextMonth === "13") {
        nextMonth = "01";
        firstYear = firstYear + 1;
    }
    var followingMonth = ("0" + (today.getMonth() + 3)).slice(-2);
    if (followingMonth === "13") {
        followingMonth = "01";
        secondYear = secondYear + 1;
    } else if (followingMonth === "14") {
        followingMonth = "02";
        secondYear = secondYear + 1;
    }
    const firstDate = `${firstYear}-${nextMonth}-01`;
    const secondDate = `${secondYear}-${followingMonth}-01`;

    const [termsCheck, setTermsCheck] = useState(false);
    const [assumptionsCheck, setAssumptionsCheck] = useState(false);
    const [padCheck, setPadCheck] = useState(false);

    const setSameAsCompany = () => {
        setFormData({ ...formData, payorName: formData.companyName });
    }

    const checkPhoneFormat = (tel) => {
        return (/\(\d{3}\)\s*\d{3}-\d{4}/.test(tel));
    }

    const checkEmailFormat = (email) => {
        return (/\S+@\S+\.\S+/.test(email));
    }

    const checkPostalFormat = (code) => {
        return (/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/.test(code));
    }

    const parseOptIn = (input) => {
        if (input === true) {
            return "Accepted";
        } else {
            return "Not accepted";
        }
    }

    const isValid = () => {
        var valid = true;

        if (formData.contact_f_name === "" || formData.contact_f_name === undefined) {
            valid = false;
        }
        if (formData.contact_l_name === "" || formData.contact_l_name === undefined) {
            valid = false;
        }
        if (formData.contactTitle === "" || formData.contactTitle === undefined) {
            valid = false;
        }
        if (formData.companyAddress === "" || formData.companyAddress === undefined) {
            valid = false;
        }
        if (formData.companyProvince === "" || formData.companyProvince === undefined) {
            valid = false;
        }
        if (checkPhoneFormat(formData.companyTel) === false) {
            valid = false;
        }
        if (checkEmailFormat(formData.companyEmail) === false) {
            valid = false;
        }
        if (checkPostalFormat(formData.companyPostal) === false) {
            valid = false;
        }
        if (formData.institutionNum.length !== 3) {
            valid = false;
        }
        if (formData.transitNum.length !== 5) {
            valid = false;
        }
        if (formData.accountNum.length < 7 || formData.accountNum.length > 12) {
            valid = false;
        }

        if (termsCheck === false) {
            valid = false;
        }
        if (assumptionsCheck === false) {
            valid = false;
        }
        if (padCheck === false) {
            valid = false;
        }

        return valid;
    }

    const selectDocument = () => {
        document.getElementById("document-file").click();
    };

    const sendWebhook = () => {
        let templateParams = {
            company_name: formData.companyName,
            contact_first_name: formData.contact_f_name,
            contact_last_name: formData.contact_l_name,
            contact_title: formData.contactTitle,
            company_tel: formData.companyTel,
            company_email: formData.companyEmail,
            company_address: (formData.companyAddress).replace(/#/i, "%23"),
            company_postal: formData.companyPostal,
            company_province: formData.companyProvince,
            effective_date: formData.effectiveDate,
            payor_name: formData.payorName,
            institution_num: formData.institutionNum,
            transit_num: formData.transitNum,
            account_num: formData.accountNum,
            preferred_language: formData.preferred_language,
            terms_opt_in: parseOptIn(termsCheck),
            assumptions_opt_in: parseOptIn(assumptionsCheck),
            pad_opt_in: parseOptIn(padCheck)
        }

        var webhookString = "";

        for (const [key, value] of Object.entries(templateParams)) {
            webhookString = webhookString + key + "=" + value + "&";
        }

        webhookString = (process.env.REACT_APP_WEBHOOK_CONNECTION + webhookString);

        axios.post(webhookString).then((res) => {
        }).catch(err => console.error('An error has occured', err));

        alert("Application sent");
    }

    const sendFormData = async () => {
        // sendWebhook();
        console.log(file);
        try {
            var data = new FormData();
            data.append("file", file);
            data.append("companyName", formData.companyName);
            data.append("contactFirstName", formData.contact_f_name);
            data.append("contactLastName", formData.contact_l_name);
            data.append("contactTitle", formData.contactTitle);
            data.append("companyTel", formData.companyTel);
            data.append("companyAddress", formData.companyAddress);
            data.append("companyEmail", formData.companyEmail);
            data.append("companyPostal", formData.companyPostal);
            data.append("companyProvince", formData.companyProvince);
            data.append("effectiveDate", formData.effectiveDate);
            data.append("payorName", formData.payorName);
            data.append("institutionNum", formData.institutionNum);
            data.append("transitNum", formData.transitNum);
            data.append("accountNum", formData.accountNum);
            data.append("preferredLanguage", formData.preferred_language);
            data.append("termsOptIn", parseOptIn(termsCheck));
            data.append("assumptionsOptIn", parseOptIn(assumptionsCheck));
            data.append("padOptIn", parseOptIn(padCheck));
            console.log(data);
            const response = await axios.post(`${process.env.REACT_APP_GROUP_ENROLL_ENDPOINT}`, data);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className='group-enroll-application-form-container'>
            {formData.language === "fr" ?
                <div className='group-enroll-application-form-header'>Renseignements sur le promoteur du régime</div> :
                <div className='group-enroll-application-form-header'>Plan Sponsor Information</div>}
            <div className='group-enroll-application-form'>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='first-name-field'>Prénom du administrateur du régime</label> :
                        <label htmlFor='first-name-field'>Plan Admin First Name</label>}
                    <input
                        id="first-name-field"
                        type="text"
                        value={formData.contact_f_name}
                        onChange={(e) => setFormData({ ...formData, contact_f_name: e.target.value })}></input>
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='last-name-field'>Nom de famille du administrateur du régime</label> :
                        <label htmlFor='last-name-field'>Plan Admin Last Name</label>}
                    <input
                        id="last-name-field"
                        type="text"
                        value={formData.contact_l_name}
                        onChange={(e) => setFormData({ ...formData, contact_l_name: e.target.value })}></input>
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='plan-admin-title-field'>Poste de administrateur du régime</label> :
                        <label htmlFor='plan-admin-title-field'>Plan Admin Title</label>}
                    <input
                        id="plan-admin-title-field"
                        type="text"
                        value={formData.contactTitle}
                        onChange={(e) => setFormData({ ...formData, contactTitle: e.target.value })}></input>
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='company-name-field'>Nom de l'entreprise</label> :
                        <label htmlFor='company-name-field'>Company Name</label>}
                    <input
                        id="company-name-field"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}></input>
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='telephone-number-field'>Téléphone</label> :
                        <label htmlFor='telephone-number-field'>Telephone</label>}
                    <InputMask
                        type='tel'
                        mask="(999) 999-9999"
                        value={formData.companyTel}
                        disabled={false}
                        maskChar=""
                        onChange={(e) => setFormData({ ...formData, companyTel: e.target.value })}
                    >
                        {() =>
                            <input id="telephone-number-field" />}
                    </InputMask>
                </div>
                <div className='group-enroll-input-field'>
                    <label htmlFor='email-address-field'>Email</label>
                    <input
                        id="email-address-field"
                        type="text"
                        value={formData.companyEmail}
                        onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}></input>
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='company-address-field'>Adresse de la société</label> :
                        <label htmlFor='company-address-field'>Company Address</label>}
                    <input
                        id="company-address-field"
                        type="text"
                        value={formData.companyAddress}
                        onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}></input>
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='postal-code-field'>Code postal</label> :
                        <label htmlFor='postal-code-field'>Postal Code</label>}
                    <InputMask
                        type="text"
                        mask="a9a 9a9"
                        value={formData.companyPostal.toUpperCase()}
                        disabled={false}
                        maskChar=""
                        onChange={(e) => setFormData({ ...formData, companyPostal: e.target.value })}
                    >
                        {() =>
                            <input id="postal-code-field" />}
                    </InputMask>
                </div>
                <div className='group-enroll-input-field'>
                    <label htmlFor='province-select-field'>Province</label>
                    {formData.language === "fr" ?
                        <select id="province-select-field" value={formData.companyProvince} onChange={(e) => setFormData({ ...formData, companyProvince: e.target.value })}>
                            <option value={"NL"}>Terre-Neuve-et-Labrador</option>
                            <option value={"PE"}>IPE</option>
                            <option value={"NS"}>Nouvelle-Écosse</option>
                            <option value={"NB"}>Nouveau-Brunswick</option>
                            <option value={"QC"}>Québec</option>
                            <option value={"ON"}>Ontario</option>
                            <option value={"MB"}>Manitoba</option>
                            <option value={"SK"}>Saskatchewan</option>
                            <option value={"AB"}>Alberta</option>
                            <option value={"BC"}>Colombie-Britannique</option>
                            <option value={"NU"}>Nunavut</option>
                            <option value={"NT"}>Territoires du Nord-Ouest</option>
                            <option value={"YT"}>Yukon</option>
                        </select> :
                        <select id="province-select-field" value={formData.companyProvince} onChange={(e) => setFormData({ ...formData, companyProvince: e.target.value })}>
                            <option value={"NL"}>Newfoundland</option>
                            <option value={"PE"}>PEI</option>
                            <option value={"NS"}>Nova Scotia</option>
                            <option value={"NB"}>New Brunswick</option>
                            <option value={"QC"}>Quebec</option>
                            <option value={"ON"}>Ontario</option>
                            <option value={"MB"}>Manitoba</option>
                            <option value={"SK"}>Saskatchewan</option>
                            <option value={"AB"}>Alberta</option>
                            <option value={"BC"}>British Columbia</option>
                            <option value={"NU"}>Nunavut</option>
                            <option value={"NT"}>Northwest Territories</option>
                            <option value={"YT"}>Yukon</option>
                        </select>}
                </div>
                <div className='group-enroll-input-field'>
                    {formData.language === "fr" ?
                        <label htmlFor='effective-date-field'>Date effective</label> :
                        <label htmlFor='effective-date-field'>Effective Date</label>}
                    <select id="effective-date-field" value={formData.effectiveDate} onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}>
                        <option value={firstDate}>{firstDate}</option>
                        <option value={secondDate}>{secondDate}</option>
                    </select>
                </div>
            </div>

            {formData.companyProvince === "QC" ?
                <div className='preferred-language-container'>
                    <div>
                        {formData.language === "fr" ?
                            <span>Langue préférée pour les communications futures:</span>
                            :
                            <span>Preferred language for future communication:</span>}
                    </div>
                    <div className='preferred-language-button-group'>
                        <div className={formData.preferred_language === "en" ? "selected-language" : null} onClick={() => setFormData({ ...formData, preferred_language: "en" })}>
                            {formData.language === "fr" ?
                                <span>Anglais</span>
                                :
                                <span>English</span>}
                        </div>
                        <div className={formData.preferred_language === "fr" ? "selected-language" : null} onClick={() => setFormData({ ...formData, preferred_language: "fr" })}>
                            {formData.language === "fr" ?
                                <span>Français</span>
                                :
                                <span>French</span>}
                        </div>
                    </div>
                </div> : null}

            {formData.language === "fr" ?
                <div className='group-enroll-application-form-header'>Chargez vos documents (facultatif) - max. 10 MB</div> :
                <div className='group-enroll-application-form-header'>Upload Your Documents (Optional) - max. 10 MB</div>}
            <div className='group-enroll-required-documents'>
                {formData.language === "fr" ?
                    <ol>
                        <li>Proposition de Group Enroll</li>
                        <li>Résumé actuel des avantages</li>
                        <li>Facture la plus récente / forfait de renouvellement</li>
                    </ol>
                    :
                    <ol>
                        <li>Group Enroll proposal</li>
                        <li>Current summary of benefits</li>
                        <li>Most recent invoice / renewal package</li>
                    </ol>}
            </div>
            <div
                onDragOver={(e) => onDrag(e)}
                onDragLeave={() => leaveDragZone()}
                onDrop={(e) => handleFileDrop(e)}
                className={dropState === "drop-active" ? 'group-enroll-upload-document-section drop-active' : 'group-enroll-upload-document-section'}
                onClick={() => selectDocument()}>
                <div>
                    {formData.language === "fr" ?
                        <span>Chargez / déposer un document (pdf)</span> :
                        <span>Upload / Drop Document (pdf)</span>}
                </div>
                <input
                    type='file'
                    className='file-type'
                    name='document-file'
                    accept="application/pdf"
                    multiple
                    ref={fileRef}
                    id='document-file'
                    onChange={handleFileChange} />
            </div>

            <div className='group-enroll-list-of-documents'>
                {file ? (
                    Array.from(file).map((action, index) => (
                        <div className='group-enroll-document-box' key={index}>
                            <div className='document-name'>
                                {action.name}
                            </div>
                            <div className='document-size'>
                                {convertToMegabytes(action.size)}
                            </div>
                        </div>
                    ))
                ) : null}
            </div>

            {formData.language === "fr" ?
                <div className='group-enroll-application-form-header'>Informations sur les débits préautorisés</div> :
                <div className='group-enroll-application-form-header'>Pre-Authorized Debit Information</div>}
            <div className='group-enroll-banking-information-section'>
                <div className='group-enroll-payor-section'>
                    <div className='group-enroll-input-field'>
                        {formData.language === "fr" ?
                            <label htmlFor='payor-name-field'>Nom du payeur / Nom de l'entreprise</label> :
                            <label htmlFor='payor-name-field'>Name of Payor / Name of Company</label>}
                        <input
                            id="payor-name-field"
                            type="text"
                            value={formData.payorName}
                            onChange={(e) => setFormData({ ...formData, payorName: e.target.value })}></input>
                    </div>
                    {(formData.companyName.length > 0) && (formData.companyName !== formData.payorName) ?
                        <div>
                            {formData.language === "fr" ?
                                <div style={{ marginTop: 5 }} className='group-enroll-button' onClick={() => setSameAsCompany()}>
                                    Faire la même chose que le nom de l'entreprise
                                </div> :
                                <div style={{ marginTop: 5 }} className='group-enroll-button' onClick={() => setSameAsCompany()}>
                                    Make the same as company name
                                </div>}
                        </div> : null}
                </div>
                <div className='group-enroll-bank-details-section'>
                    <div className='group-enroll-input-field'>
                        {formData.language === "fr" ?
                            <label htmlFor='institution-number-field'>Numéro de institution</label> :
                            <label htmlFor='institution-number-field'>Institution Number</label>}
                        <InputMask
                            type="text"
                            mask="999"
                            value={formData.institutionNum}
                            disabled={false}
                            maskChar=""
                            onChange={(e) => setFormData({ ...formData, institutionNum: e.target.value })}
                        >
                            {() =>
                                <input id="institution-number-field" />}
                        </InputMask>
                    </div>
                    <div className='group-enroll-input-field'>
                        {formData.language === "fr" ?
                            <label htmlFor='transit-number-field'>Numéro de transit</label> :
                            <label htmlFor='transit-number-field'>Transit Number</label>}
                        <InputMask
                            type="text"
                            mask="99999"
                            value={formData.transitNum}
                            disabled={false}
                            maskChar=""
                            onChange={(e) => setFormData({ ...formData, transitNum: e.target.value })}
                        >
                            {() =>
                                <input id="transit-number-field" />}
                        </InputMask>
                    </div>
                    <div className='group-enroll-input-field'>
                        {formData.language === "fr" ?
                            <label htmlFor='account-number-field'>Numéro de compte bancaire</label> :
                            <label htmlFor='account-number-field'>Account Number</label>}
                        <InputMask
                            type="text"
                            mask="999999999999"
                            value={formData.accountNum}
                            disabled={false}
                            maskChar=""
                            onChange={(e) => setFormData({ ...formData, accountNum: e.target.value })}
                        >
                            {() =>
                                <input id="account-number-field" />}
                        </InputMask>
                    </div>
                </div>
            </div>

            <div className='group-enroll-banking-opt-in-section'>
                <div>
                    <TermsAndConditions formData={formData} setFormData={setFormData} />
                    <div className='form-checkbox-group'>
                        <input id='terms-checkbox' type='checkbox' value={termsCheck} onChange={() => setTermsCheck(!termsCheck)} />
                        <label htmlFor='terms-checkbox'>
                            {formData.language === "fr" ?
                                <span>J'accepte les termes et conditions</span>
                                :
                                <span>I agree to the Terms and Conditions</span>}
                        </label>
                    </div>

                    <SpecificationsAndAssumptions formData={formData} setFormData={setFormData} />
                    <div className='form-checkbox-group'>
                        <input id='plan-specifications-and-assumptions-checkbox' type='checkbox' value={assumptionsCheck} onChange={() => setAssumptionsCheck(!assumptionsCheck)} />
                        <label htmlFor='plan-specifications-and-assumptions-checkbox'>
                            {formData.language === "fr" ?
                                <span>J'accepte les spécifications et les hypothèses du plan</span>
                                :
                                <span>I agree to the Plan Specifications and Assumptions</span>}
                        </label>
                    </div>

                    <PADDetails formData={formData} setFormData={setFormData} />
                    <div className='form-checkbox-group'>
                        <input id='pad-details-checkbox' type='checkbox' value={padCheck} onChange={() => setPadCheck(!padCheck)} />
                        <label htmlFor='pad-details-checkbox'>
                            {formData.language === "fr" ?
                                <span>J'accepte les détails du DPA</span>
                                :
                                <span>I agree to the PAD Details</span>}
                        </label>
                    </div>
                </div>
            </div>

            {(isValid()) ?
                <div style={{ marginTop: 10 }} className='submit-form-button' onClick={() => { sendFormData() }}>
                    {formData.language === "fr" ?
                        <span>SOUMETTRE</span> :
                        <span>SUBMIT</span>}
                </div> :
                <div style={{ marginTop: 10 }} className='disabled-button'>
                    {formData.language === "fr" ?
                        <span>SOUMETTRE</span> :
                        <span>SUBMIT</span>}
                </div>}
        </div>
    );
};

export default Application;
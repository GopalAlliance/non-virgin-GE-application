import React, { useState } from 'react';
import "./SpecificationsAndAssumptions.css";

const SpecificationsAndAssumptions = ({ formData, setFormData }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='collapsible-container'>
            <div className='collapsible-header' onClick={() => setOpen(!open)}>
                {formData.language === "fr" ?
                    <span>Spécifications et hypothèses du plan</span>
                    :
                    <span>Plan Specifications and Assumptions</span>}
            </div>
            {open ?
                <div className='collapsible-content'>
                    {formData.language === "fr" ?
                        <div>
                            <ul>
                                <li> Les paiements sont retirés entre le 1er et le 5 de chaque mois et le mode de paiement des primes est le débit préautorisé (PAD) uniquement.</li>
                                <li> Un minimum de trois vies requis.</li>
                                <li> Participation obligatoire de 95%.</li>
                                <li> Les conjoints et/ou personnes à charge d'un employé admissible doivent être inclus dans les avantages du régime de l'employé, soit sous forme de régime couple, soit sous forme de régime familial.</li>
                                <li> Le contenu familial ne doit pas dépasser 50%.</li>
                                <li> Tous les employés doivent être activement au travail et travailler au moins 20 heures par semaine.</li>
                                <li> Ce régime collectif s’adresse aux entreprises qui n’ont pas de couverture d’avantages sociaux existante.</li>
                                <li> L'âge de cessation d'emploi correspond à la date la plus rapprochée de la retraite ou à 85 ans.</li>
                                <li> L'âge de fin des personnes à charge est de 21 ou 25 ans s'ils sont inscrits à l'école à temps plein.</li>
                                <li> Les employeurs contribuent <strong>au minimum</strong> à hauteur de 50% de la prime totale.</li>
                                <li> Les tarifs seront sujets à changement chaque année à votre date de renouvellement et sont indiqués en dollars canadiens (CAD), par personne et par mois. De plus, Group Enroll se réserve le droit d'examiner l'expérience en matière de réclamations pour chaque division et de séparer les divisions en différents pools. Cela signifie que certaines divisions peuvent avoir des taux différents des autres en même temps.</li>
                                <li> Les droits standard s’appliquent pour la conversion en police individuelle.</li>
                                <li> La carte-médicaments sera applicable à tous les groupes de ce plan.</li>
                                <li> Le délai de carence est de 3 mois pour tout nouveau salarié. Aucun délai de carence pour les personnes actives au travail à la date du début de la couverture du groupe.</li>
                                <li> Aucune preuve d’assurabilité n’est requise pour les prestations de base.</li>
                            </ul>
                            <p className='plan-header-text'>Couverture médicaments de la RAMQ pour les employés de 65 ans et plus:</p>
                            <ul>
                                <li> Tous les employés de 65 ans et plus basés au Québec sont admissibles à l'assurance médicaments de la RAMQ et y sont automatiquement inscrits, à moins qu'ils ne s'en retirent.
                                    Par conséquent, nous supposerons que GreenShield serait le deuxième payeur pour les réclamations de médicaments pour tous les employés québécois de cette tranche d'âge.</li>
                                <li> Si un employé choisit de se retirer de la couverture de la RAMQ, faisant de GSC le premier payeur pour les réclamations de médicaments, il y aura des frais supplémentaires de
                                    200 $ par mois (célibataire) et de 400 $ par mois (famille).</li>
                            </ul>
                            <p className='plan-header-text'>Pour les résidents du Québec:</p>
                            <ul>
                                <li> Il est obligatoire qu'un conseiller agréé appelle le demandeur pour confirmer les détails de la demande avant qu'elle ne soit approuvée.</li>
                                <li> Une fois la demande terminée, le conseiller agréé appellera le demandeur dans les 24 à 48 heures.</li>
                            </ul>
                        </div>
                        :
                        <div>
                            <ul>
                                <li> Payments are withdrawn between the 1st-5th of each month and the premium payment method is pre-authorized debit (PAD) only.</li>
                                <li> A minimum of three lives required.</li>
                                <li> Mandatory participation of 95%.</li>
                                <li> Spouses and/or Dependents of an eligible employee must be included under the employee's benefits plan either as a single+1 or a family plan.</li>
                                <li> Family content to be no greater than 50%.</li>
                                <li> All Employees must be actively at work, working a minimum of 20 hours per week.</li>
                                <li> This group plan is designed for companies who have no existing group benefits coverage.</li>
                                <li> A termination age of the earlier of retirement or age 85.</li>
                                <li> Dependents termination age is 21 or 25 if enrolled in full-time school.</li>
                                <li> Employers contribute <strong>a minimum</strong> of 50% of the total premium.</li>
                                <li> Rates will be subject to change annually on your renewal date, and rates are shown in Canadian dollars (CAD), per person, per month. Furthermore, Group Enroll reserves the right to review claims experience for each division and separate divisions into various pools. Meaning certain divisions may have different rates from others at the same time.</li>
                                <li> Standard rights apply to convert to an individual policy.</li>
                                <li> Pay Direct Drug card will be applicable to all groups within this plan.</li>
                                <li> The waiting period is 3 months for all new employees. No waiting period for those actively at work on the date of the group’s coverage commences.</li>
                                <li> Evidence of insurability is not required for core benefits.</li>
                            </ul>
                            <p className='plan-header-text'>RAMQ drug coverage for employees aged 65 and over:</p>
                            <ul>
                                <li> All Quebec-based employees aged 65 and over are eligible for drug coverage
                                    through the RAMQ program and are automatically enrolled unless they opt
                                    out. As a result, we will assume that GreenShield would be the second payer
                                    on drug claims for all Quebec-based employees in this age range.</li>
                                <li> Should an employee choose to opt out of RAMQ coverage, making GSC first
                                    payer on drug claims, there would be an additional charge of $200 per month
                                    (single) and $400 per month (family).</li>
                            </ul>
                            <p className='plan-header-text'>For residents of Quebec:</p>
                            <ul>
                                <li> It is mandatory that a licensed advisor calls the applicant to confirm the
                                    details of the application before it is approved.</li>
                                <li> Upon completion of the application, the licensed advisor will call the applicant
                                    within 24-48 hours.</li>
                            </ul>
                        </div>}
                </div> : null}
        </div>
    );
};

export default SpecificationsAndAssumptions;
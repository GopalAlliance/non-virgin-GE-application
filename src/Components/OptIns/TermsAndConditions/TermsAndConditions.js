import React, { useState } from 'react';
import "./TermsAndConditions.css";

const TermsAndConditions = ({ formData, setFormData }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='collapsible-container'>
            <div className='collapsible-header' onClick={() => setOpen(!open)}>
                {formData.language === "fr" ?
                    <span>Termes et conditions</span> :
                    <span>Terms and Conditions</span>}
            </div>
            {open ?
                <div className='collapsible-content'>
                    {formData.language === "fr" ?
                        <div>
                            <p>
                                <strong>ACCORD DE PLAN DE DÉBIT PRÉAUTORISÉ &#40;DPA&#41;</strong>
                            </p>
                            <p>
                                Nous reconnaissons que l'autorisation est fournie au profit de GreenShield et de l'institution de traitement
                                et est fournie en contrepartie du fait que l'institution de traitement accepte de traiter les débits sur notre
                                compte, comme indiqué ci-dessus, (le « compte ») conformément aux règles du Association canadienne des paiements.
                            </p>
                            <p>
                                Nous garantissons que toutes les personnes dont la signature est requise pour autoriser les retraits du compte
                                ont signé l'autorisation et que toutes les personnes signant cette autorisation sont nos signataires autorisés
                                et sont habilitées à conclure cet accord.
                            </p>
                            <p>
                                Nous autorisons par la présente le bénéficiaire à émettre des débits préautorisés (tels que définis dans la règle
                                H4 des règles de l'Association canadienne des paiements) (le « DPA ») tirés sur le compte, aux fins suivantes :
                            </p>

                            <p>
                                Paiement de la facturation mensuelle des avantages sociaux de groupe GreenShield
                            </p>

                            <p>
                                Nous pouvons annuler l'autorisation à tout moment en fournissant un avis écrit au bénéficiaire.
                            </p>

                            <p>
                                Nous reconnaissons que la fourniture et la remise de l'autorisation au bénéficiaire constituent une livraison de
                                notre part à l'institution de traitement. Toute remise de l'Autorisation au Bénéficiaire, quel que soit le mode
                                de livraison, constitue une livraison de notre part. Sauf accord écrit contraire, le bénéficiaire nous fournira,
                                à l'adresse indiquée à la section 1 :
                            </p>

                            <p>
                                (a) en ce qui concerne les DPA d'un montant fixe, un avis écrit du montant à débiter (le « Montant du paiement »)
                                et de la ou des dates auxquelles le Montant du paiement débité sera affiché sur notre compte (la « Date de paiement »),
                                au moins 10 jours civils avant la date de paiement du premier DPA, et cet avis doit être fourni chaque fois qu'il
                                y a un changement dans le montant du paiement ou la ou les dates de paiement ;
                            </p>

                            <p>
                                (b) en ce qui concerne les DPA à montant variable, un avis écrit du montant du paiement et de la ou des dates de paiement,
                                au moins 10 jours civils avant la date de paiement de chaque DPA ; et
                            </p>

                            <p>
                                (c) with respect to a PAD plan that provides for the issuance of a PAD in response to a direct action of ours (such as,
                                but not limited to, a telephone instruction) requesting the Payee to issue a PAD in full or partial payment of a billing
                                received by us for a payment obligation that meets the requirements of Section 2 of Rule H4, no notice is required.
                            </p>

                            <p>
                                Le bénéficiaire peut émettre un DPA mensuellement, d'un montant n'excédant pas le total payable de la facturation mensuelle
                                des garanties collectives.
                            </p>

                            <p>
                                Nous reconnaissons que l'institution de traitement n'est pas tenue de vérifier qu'un DPA a été émis conformément aux détails
                                de l'autorisation, y compris, mais sans s'y limiter, le montant, ou que tout objectif de paiement pour lequel le DPA a été
                                émis a été rempli. par le bénéficiaire comme condition pour honorer un DPA émis ou fait émettre par le bénéficiaire sur le compte.
                            </p>

                            <p>
                                La révocation de l'autorisation ne met pas fin à tout contrat de biens ou de services existant entre nous et le bénéficiaire.
                                L'autorisation s'applique uniquement au mode de paiement et n'a par ailleurs aucune incidence sur le contrat de biens ou de
                                services échangés.
                            </p>

                            <p>
                                Nous pouvons contester un DPA uniquement dans les conditions suivantes :
                            </p>

                            <ul>
                                <li>&#40;i&#41; le DPA n'a pas été prélevé conformément à l'autorisation ;</li>
                                <li>&#40;ii&#41; l'autorisation a été révoquée ; ou</li>
                                <li>&#40;iii&#41; la notification préalable, comme l'exige l'article 8, n'a pas été reçue.</li>
                            </ul>

                            <p>
                                Nous reconnaissons que, afin d'être remboursé, une déclaration selon laquelle (i), (ii) ou (iii)
                                a eu lieu doit être complétée et présentée à la succursale de l'institution de traitement détenant
                                le compte jusqu'à et y compris 10 jours ouvrables après la date à laquelle le DPA en litige a été
                                porté au compte.
                            </p>

                            <p>
                                Nous reconnaissons qu'en cas de contestation d'un DPA au-delà du délai autorisé dans cette section,
                                la question doit être résolue uniquement entre nous et le bénéficiaire, en dehors du système de paiement.
                            </p>

                            <p>
                                Nous convenons que les renseignements contenus dans l'autorisation peuvent être divulgués à la Banque
                                Royale du Canada si nécessaire pour compléter toute opération de DPA.
                            </p>
                        </div> :
                        <div>
                            <p>
                                <strong>PRE-AUTHORIZED DEBIT &#40;PAD&#41; PLAN AGREEMENT</strong>
                            </p>
                            <p>
                                We acknowledge that the Authorization is provided for the benefit of GreenShield and the Processing Institution
                                and is provided in consideration of the Processing Institution agreeing to process debits against our account, as listed
                                above, &#40;the “Account”&#41; in accordance with the Rules of the Canadian Payments Association.
                            </p>
                            <p>
                                We warrant and guarantee that all persons whose signatures are required to authorize withdrawals from the Account have
                                signed the Authorization and that all persons signing this Authorization are our authorized signing officers and are
                                empowered to enter into this agreement.
                            </p>
                            <p>
                                We hereby authorize the Payee to issue Pre-Authorized Debits &#40;as defined in Rule H4 of the Rules of the Canadian
                                Payments Association&#41; &#40;the “PAD”&#41; drawn on the Account, for the following purpose:
                            </p>

                            <p>
                                Payment of GreenShield Monthly Group Benefit Billing
                            </p>

                            <p>
                                We may cancel the Authorization at any time upon providing written notice to the Payee.
                            </p>

                            <p>
                                We acknowledge that provision and delivery of the Authorization to the Payee constitutes delivery by us to the Processing
                                Institution. Any delivery of the Authorization to the Payee, regardless of the method of delivery, constitutes delivery by us.
                                Unless otherwise agreed to in writing, the Payee will provide to us, at the address provided in Section 1:
                            </p>

                            <p>
                                &#40;a&#41; with respect to fixed amount PADs, written notice of the amount to be debited &#40;the “Payment Amount”&#41; and
                                the date&#40;s&#41; on which the Payment Amount debited will be posted to our Account &#40;the “Payment Date”&#41;, at
                                least 10 calendar days before the Payment Date of the first PAD, and such notice shall be provided every
                                time there is a change in the Payment Amount or the Payment Date&#40;s&#41;;
                            </p>

                            <p>
                                &#40;b&#41; with respect to variable amount PADs, written notice of the Payment Amount and the Payment Date&#40;s&#41;, at
                                least 10 calendar days before the Payment Date of every PAD; and
                            </p>

                            <p>
                                &#40;c&#41; with respect to a PAD plan that provides for the issuance of a PAD in response to a direct action of ours
                                &#40;such as, but not limited to, a telephone instruction&#41; requesting the Payee to issue a PAD in
                                full or partial
                                payment of a billing received by us for a payment obligation that meets the requirements of Section 2 of
                                Rule H4, no notice is required.
                            </p>

                            <p>
                                The Payee may issue a PAD monthly, in an amount not exceeding the Total Payable of the Monthly Group Benefit Billing.
                            </p>

                            <p>
                                We acknowledge that the Processing Institution is not required to verify that a PAD has been issued in accordance with
                                the particulars of the Authorization including, but not limited to, the amount, or that any purpose of payment for which the
                                PAD was issued has been fulfilled by the Payee as a condition to honoring a PAD issued or caused to be issued by the
                                Payee on the Account.
                            </p>

                            <p>
                                Revocation of the Authorization does not terminate any contract for goods or services that exists between us and the Payee. The Authorization applies only to the method of payment and does not otherwise have any bearing on the contract
                                for goods or services exchanged.
                            </p>

                            <p>
                                We may dispute a PAD only under the following conditions:
                            </p>

                            <ul>
                                <li>&#40;i&#41; the PAD was not drawn in accordance with the Authorization;</li>
                                <li>&#40;ii&#41; the Authorization was revoked; or</li>
                                <li>&#40;iii&#41; pre-notification, as required under Section 8, was not received.</li>
                            </ul>

                            <p>
                                We acknowledge that, in order to be reimbursed, a declaration to the effect that either &#40;i&#41;, &#40;ii&#41;, or &#40;iii&#41; took place must be
                                completed and presented to the branch of the Processing Institution holding the Account up to and including 10 business
                                days after the date on which the PAD in dispute was posted to the Account.
                            </p>

                            <p>
                                We acknowledge that when disputing any PAD beyond the time allowed in this section, it is a matter to be resolved solely
                                between us and the Payee, outside the payments system.
                            </p>

                            <p>
                                We agree that the information contained in the Authorization may be disclosed to the Royal Bank of Canada as required
                                to complete any PAD transaction.
                            </p>
                        </div>
                    }

                </div> : null}
        </div>
    );
};

export default TermsAndConditions;
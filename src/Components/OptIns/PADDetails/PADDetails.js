import React, { useState } from 'react';
import "./PADDetails.css";

const PADDetails = ({ formData, setFormData }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='collapsible-container'>
            <div className='collapsible-header' onClick={() => setOpen(!open)}>
                {formData.language === "fr" ?
                <span>Détails du DPA</span>
                :
                <span>PAD Details</span>}
            </div>
            {open ?
                <div className='collapsible-content'>
                    {formData.language === "fr" ?
                        <div>
                            <p>
                                Nous, le payeur (administrateur), autorisons GreenShield et l'institution financière désignée à débiter le compte bancaire du payeur
                                nommé ci-dessus conformément à nos instructions pour des paiements mensuels récurrents réguliers et/ou des paiements uniques pour le paiement
                                de tous les frais découlant de le(s) compte(s) de l'entreprise. Les paiements mensuels réguliers pour le
                                montant total des services rendus seront débités de notre compte spécifié le jour convenu de chaque mois. Le payeur (administrateur)
                                renonce au droit de recevoir un préavis du montant du DPA et convient que nous n’exigeons pas un préavis du montant du DPA avant
                                le traitement du débit.
                            </p>

                            <p>
                                Cette autorisation doit rester en vigueur jusqu'à ce que GreenShield reçoive une notification écrite de notre part concernant ses
                                modifications ou sa résiliation. Cette notification doit être reçue au moins 10 jours ouvrables avant la date prévue du prochain débit.
                                Nous pouvons obtenir un exemple de formulaire d’annulation ou plus d’informations sur notre droit d’annuler
                                un accord de DPA auprès de notre institution financière ou en visitant www.cdnpay.ca.
                            </p>

                            <p>
                                Nous disposons de certains droits de recours si un débit n'est pas conforme à cet accord. Par exemple, nous avons le droit de recevoir un
                                remboursement pour tout DPA non autorisé ou non conforme au présent Accord de DPA. Pour obtenir un formulaire de demande de remboursement ou
                                pour plus d'informations sur nos droits de recours, vous pouvez contacter notre institution financière ou en visitant www.cdnpay.ca.
                            </p>

                            <p>
                                Le DPA sera retiré entre le 1er et le 5 de chaque mois.
                            </p>

                            <p>
                                Passez en revue les termes de ce plan de préautorisation comme indiqué ci-dessus.
                            </p>
                        </div> :
                        <div>
                            <p>
                                We, the payor &#40;plan sponsor&#41;, authorize GreenShield and the financial institution designated, to debit the bank
                                account of the payor named above as per our instructions for monthly regular recurring payments and/or one–time
                                payments for payment of all charges arising under the company account&#40;s&#41;. Regular monthly payments for the full amount
                                of services rendered will be debited to our specified account on the agreed upon day of each month. The payor &#40;plan sponsor&#41;
                                waives the right to receive pre-notification of the amount of the PAD and agrees that we do not require advance notice
                                of the amount of PAD’s before the debit is processed.
                            </p>

                            <p>
                                This authority is to remain in effect until GreenShield has received written notification from us of its changes or
                                termination. This notification must be received at least 10 business days before the next debit is scheduled. We may
                                obtain a sample cancellation form or more information on our right to cancel a PAD Agreement
                                at our financial institution or by visiting www.cdnpay.ca.
                            </p>

                            <p>
                                We have certain recourse rights if any debit does not comply with this agreement. For example, we have the right to
                                receive reimbursement for any PAD that is not authorized or is not consistent with this PAD Agreement. To obtain a form
                                for a Reimbursement Claim, or for more information on our recourse rights, you may contact our financial institution or by
                                visiting www.cdnpay.ca.
                            </p>

                            <p>
                                PAD will be withdrawn between the 1st and the 5th of each month.
                            </p>

                            <p>
                                Review the terms of this pre-authorization plan as outlined above.
                            </p>
                        </div>}
                </div> : null}
        </div>
    );
};

export default PADDetails;
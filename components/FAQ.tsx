/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import { ImQuestion } from "react-icons/im";
import Faq from "../public/FAQ.svg";

const FAQ = () => {
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const handleClick1 = () => {
    setfirst(!first);
  };
  const handleClick2 = () => {
    setSecond(!second);
  };
  const handleClick3 = () => {
    setThird(!third);
  };
  const handleClick4 = () => {
    setFourth(!fourth);
  };
  return (
    <>
      <section id="FAQ" className="bg-white dark:bg-gray-900 mt-24">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <Image src={Faq} width="640" height="430" alt="coach" />
          <h1 className="flex justify-center mx-4 items-center text-4xl font-semibold text-center text-gray-800 dark:text-white mt-12">
            FAQ
          </h1>

          <div className="mt-12 space-y-8">

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={handleClick1}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Quand commencera le formation?
                </h1>
                {first ? (
                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {first ? (
                <div>
                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Samedi 15/10/2022
                  </p>
                </div>
              ) : null}
            </div>
            {/* Second */}
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={handleClick2}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Combien de s??ances?
                </h1>
                {second ? (
                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {second ? (
                <div>
                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    02 sessions sur :
                    <br />
                    Niveau 01 : "les bases th??oriques et pratiques n??cessaires
                    pour la prise en charge d'une plaie".
                    <br />
                    Niveau 02 : " les diff??rentes techniques de sutures cutan??es
                    des deux plans superficiel et profond".
                  </p>
                </div>
              ) : null}
            </div>
            {/* Third */}
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={handleClick3}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Quels sont les objectifs p??dagogiques de la formation au
                  niveau 01?
                </h1>
                {third ? (
                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {third ? (
                <div>
                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Niveau 01 : les bases th??oriques et pratiques n??cessaires
                    pour assurer une prise en charge d'une plaie"
                    <br />
                    Dur??e: 03 heures.
                    <br />
                    1- Introduction sur la suture .
                    <br />
                    2- Conna??tre les principes d'asepsie.
                    <br />
                    3- ??num??rer les diff??rents antiseptiques.
                    <br />
                    4- Savoir se laver les mains convenablement.
                    <br />
                    5- Savoir enfiler des gants st??riles.
                    <br />
                   6- Savoir pr??parer un plateau de suture et conna??tre les
                    instruments et comment les tenir.
                    <br />
                    7- D??crire les diff??rents fils de suture.
                    <br />
                    8- D??crire la prise en charge initiale de la plaie
                    (anesth??sie/parage/nettoyage).
                    <br />
                    9- Pr??senter les points de suture simples avec un n??ud cutan??.
                    <br />
                    10- Ordonnance de sortie et surveillance des malades
                    (changement de pansement).
                    <br />
                    11- Technique d'ablation des fils et d??lai de cicatrisation.
                  </p>
                </div>
              ) : null}
            </div>
            {/* Fourth */}
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={handleClick4}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Quels sont les objectifs p??dagogiques de la formation au
                  niveau 02?
                </h1>
                {fourth ? (
                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {fourth ? (
                <div>
                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Niveau 02 : "Les diff??rentes techniques de sutures cutan??es
                    des deux plans superficiel et profond"
                    <br />
                    Dur??e: 03 heures.
                    <br />
                    1- Suture profonde ou point invers?? : ( Technique ,
                    indications , avantages...) <br />
                    2- Point de Blair-Donatti : ( Technique, indications ,
                    avantages...) <br />
                    3- Point d???angle cutan??o-dermique: ( Technique, indications ,
                    avantages...) <br />
                    4- Le point en U : ( Technique, indications , avantages...){" "}
                    <br />
                    5- le point h??mostatique ou le point en X : ( Technique,
                    indications , avantages...) <br />
                    6- les surjets : surjet intradermique ?? esth??tique ?? et
                    surjet ??pidermique pass?? ( Technique, indications ,
                    avantages...) <br />
                    7- des cas cliniques ( plaie de la main et suture d'une
                    ??pisiotomie pour nos futures internes ).{" "}
                  </p>
                </div>
              ) : null}
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

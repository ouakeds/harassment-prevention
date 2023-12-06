export default function App() {

    const teachers = [
        'Madame BOURRELI', 'Madame EL ALLOUCHI', 'Madame FLAMANT', 'Monsieur LESAINT', 'Madame MARIEN', 'Madame OUAKED', 'Monsieur RAGEOT', 'Monsieur SALAMA'
    ]
    return (
        <div className=" bg-blue-500 flex w-full h-full justify-center">
            <div className="w-full h-full md:max-w-4xl  bg-white p-6 rounded-lg flex-col">
                <h1 className="text-xl md:text-2xl font-bold uppercase">Dispositif Anti-Harcelement</h1>
                
                <div className="py-6">

                    <div className="py-2">
                        <label className="font-semibold text-l">Qui souhaitez-vous prévenir ?</label>
                        <select className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choisir un professeur ressource</option>
                            {
                                teachers.map((teacher: string) => {
                                    return <option value={teacher}>{teacher}</option>
                                })
                            }
                        </select>
                    </div>
                    
                    <div className="py-2">
                        <label className="font-semibold text-l">
                            Êtes-vous la personne concernée où connaissez-vous celle-ci ? (optionnel)
                        </label>
                        <input className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="Vous pouvez rester anonyme ou indiquer la personne concernée" />
                    </div>

                    <div className="py-2">
                        <label className="font-semibold text-l">Décrivez précisément la situation</label>
                        <textarea rows={6} className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="" />
                    </div>

                    
                    <div className="py-2">
                        <label className="font-semibold text-l">Quand la situation s'est elle produite ?</label>
                        <input type="date" className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="" />
                    </div>

                                     
                    <div className="py-2">
                        <label className="font-semibold text-l">Où est-ce que la situation s'est déroulée?</label>
                        <input className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="" />
                    </div>

                    <div className="py-2">
                        <label className="font-semibold text-l">Vous êtes-vous déjà confié à quelqu'un et si oui à qui ?</label>
                        <textarea rows={2} className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="" />
                    </div>

       

                    <div className="py-2">
                        <label className="font-semibold text-l">Est-ce qu'il y a des témoins qui ont assisté à la scène? (Si oui précisez les personnes)</label>
                        <textarea rows={2} className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="" />
                    </div>

                    <div className="py-2">
                        <label className="font-semibold text-l">La situation se répète-t-elle ?</label>
                        <select className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div>
                    
                    <div className="py-2">
                        <label className="font-semibold text-l">Si c'est le cas, depuis quand se répète-t-elle?</label>
                        <input type="date" className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="" />
                    </div>

                    <div className="py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Avez-vous des preuves à ajouter?</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="multiple_files" type="file" multiple />
                    </div>

                </div>

                <button className="bg-blue-500 py-2.5 w-full uppercase text-white font-semibold">
                    Envoyer
                </button>
            </div>
        </div>
    );
}
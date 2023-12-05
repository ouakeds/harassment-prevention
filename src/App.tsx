export default function App() {

    return (
        <div className="h-screen w-screen bg-blue-500 flex items-center justify-center">
            <div className="w-full max-w-xl bg-white p-6 rounded-lg">
                <h1 className="text-xl md:text-2xl font-bold uppercase">Dispositif Anti-Harcelement</h1>
                
                <div className="py-6">
                    <div className="py-2">
                        <label className="font-semibold text-l">Qui souhaitez vous prévenir ?</label>
                        <select className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choisir un professeur ressource</option>
                            <option value="US">Leila Ouaked</option>
                            <option value="CA">Professeur Layton</option>
                        </select>
                    </div>

                    <div className="py-2">
                        <label className="font-semibold text-l">Quel est votre problème ?</label>
                        <textarea rows={6} className="mt-2 w-full px-6 py-2.5 border border-gray-300 rounded-lg" placeholder="Vous êtes totalement anonyme, nous remedierons à votre problème.." />
                    </div>

                    <div className="py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Avez vous des preuves à ajouter?</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="multiple_files" type="file" multiple />
                    </div>
                </div>

                <button className="bg-blue-500 font-semibold text-white uppercase w-full py-1.5 rounded-lg">
                    Envoyer
                </button>
            </div>
        </div>
    );
}
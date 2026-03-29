import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Majjati', photo: '/user.png' };

  const liste1 = ["Lait", "Pain", "Fromage"];
  const liste2 = ["Pomme", "Banane", "Orange"];

  return (
    <div>
      <h1>Composants de base</h1>

      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />

      <h1>Mes voitures</h1>

      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="BMW" modele="X5" couleur="Noir" />
      <Voiture marque="Audi" modele="A4" couleur="Blanc" />

      <h1>Mes courses</h1>

      <h2>Liste 1</h2>
      <ListeCourses elements={liste1} />

      <h2>Liste 2</h2>
      <ListeCourses elements={liste2} />
    </div>
  );
}

export default App;
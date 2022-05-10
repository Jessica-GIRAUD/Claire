### Installation des environnements

Télécharger VS Code sur https://code.visualstudio.com/
Telecharger NodeJS sur https://nodejs.org/fr/ (choisir le version "Recommandé pour la plupart des utilisateurs")
Télécharger FileZilla sur https://filezilla-project.org/download.php?type=server

### Cloner le repository Git

Ouvrir le terminal et se positionner sur l'emplacement choisi pour copier (cloner) le repo
Effectuer la commande `git clone https://github.com/Jessica-GIRAUD/Claire.git`
Ouvrir le dossier avec VS Code

### Installation des dépendances

Ouvrir le terminal VS Code et effectuer la commande `npm install`

### Lancer le projet en local

Dans le terminal, `npm start`
Une fenêtre de ton navigateur s'ouvre sur http://localhost:3000 et ton site apparaît.

### Modification

Appliquer les modifications au site.

Pour un nouveau paragraphe, utilise les balises <p> Ton nouveau paragraphe. </p>
pour un nouveau titre, utilise les balises <h1> Ton titre </h1> (idem pour un titre à moindre importance => <h2> Ton titre 2 </h2>)
Pour une mise en gras d'un mot clé, utilise la balise <strong>.

Exemple :

<p> Je code mon site en <strong> autonomie. </strong> </p>

Pour enregistrer les modifications sur le repo github, effectuer dans la console :
`git add .`
`git commit -m "écrire ici le titre que tu souhaites donner à tes modifications"`
`git push origin single-page`

### Déploiment

Une fois toutes les modifications effectuées, dans la console, lancer la commande :
`npm run build`

Dans ton dossier (qui contient ton site), un nouveau dossier appelé Build a été créé.
Ouvrir FileZilla.
Se connecter au serveur OVH.
Trouver le dossier Build dans la partie de gauche et le glisser dans le dossier www de la partie de droite.

Une fois le transfert terminé, le site est en ligne.

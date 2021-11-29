# QuizzJS

Dans ce projet du quizz, on trouve un dossier __test__ contenant les tests. Un dossier jest avec des fichiers qui sont les mêmes que dans src à l'exéception des imports et exports au début et à la fin des fichiers ce qui permet leur utilisation pour les tests. Babel qui contient le code transpile de src. src qui contient le code avec les commentaires avant transpile par babel

Avant d'ouvrir index.html, il faut installer les modules avec la commande.

```bash
npm install
```

Puis transpile le code avec la commande (Si le code est mit à jour)

```bash
npm run babel
```

Pour effectuer les tests

```bash
npm test
```

Le quizz peut-être lancer avec l'extension live code server sur VSCode ou juste à l'ouverture du fichier index.html. Une fois le questionnaire finis pour recommencer il faut raffraichir la page, vous avez 30 secondes entre chaque question pour répondre.

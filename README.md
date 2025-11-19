
# PROJET ZEUS – Assistant IA d'Investigation Numérique

**Projet intégrateur CIN4 2025/2026** • Prof. Thierry MINKA • 27 étudiants  
**Date : 19 novembre 2025** ,
**Projet Réalisé par la promotion CIN4 -2025/2026**

[Cahier des charges complet – 44 pages](docs/cahier_des_charges.pdf)

## NOUS AVONS DÉJÀ PERDU ASSEZ DE SEMAINES.

Depuis le début, le projet n’avançait pas :  
- personne ne savait quoi et ou coder  
- pas de repo commun  
- pas de branches  
- pas de structure claire  
- Chacun était désinteressé  

J’ai donc vu important de faire ce Repositroy qui contient déjà :

- Création du repo privé  
- Architecture complète (dossiers, modules, fichiers de base)  
- Toutes les branches `module-a/development` à `module-k/development` + intégration déjà créées et pushées  
- Dossiers `src/`, `tests/`, `docs/`, `Dockerfile`, `requirements.txt`, `README.md` dans chaque module  
- README + CONTRIBUTING ultra-clair  
- docker-compose, .gitignore, etc.  
- Tout est déjà là. Tout est déjà prêt.

**Il ne reste plus qu’à coder.**

## 11 MODULES & ÉQUIPES

| Équipe       | Module | Mission principale                              | Techno imposée                 |
|--------------|--------|-------------------------------------------------|--------------------------------|
| Équipe 1     | A      | Interface mandataire (dashboard, cas)           | React + TypeScript             |
| Équipe 2     | B      | Matching experts + scoring CV                   | Python + TF-IDF + PostgreSQL   |
| Équipe 3     | C      | Contrats PDF (hachés SHA-256)                   | Python + LaTeX + Jinja2        |
| Équipe 4     | D      | Workflow acceptation/refus experts              | FastAPI + Machine à états      |
| Équipe 5     | E      | Préparation mission + questions d’audition      | Python                         |
| Équipe 6     | F      | Analyse PV (NLP, incohérences, NER)             | spaCy + FastAPI                |
| Équipe 7     | G      | Hypothèses forensiques + plan méthodologique    | Base de connaissances          |
| Équipe 8     | H      | Analyse rapports techniques + chaîne optimale   | Algorithmes de scoring        |
| Équipe 9     | I      | Rapport final PDF professionnel                 | LaTeX + Python                 |
| Intégration  | J + K  | Sécurité, logs immuables, XAI, API Gateway      | Docker + FastAPI + Redis       |

## COMMENT COMMENCER EN 2 MINUTES (littéralement)

```bash
git clone https://github.com/12natanael/projet_zeus.git
cd projet_zeus
git checkout module-X/development        # remplace X par a, b, c, d…
# → tu es sur TA branche, TA seule responsabilité
# → tu codes directement dans modules/module-X/
```

C’est tout.  
Pas besoin de créer quoi que ce soit d’autre.  
Tout est déjà fait.

## RÈGLES (à lire en 30 secondes)

- Ne jamais pousser directement sur `main`
- Toujours travailler sur `module-X/development`
- Quand une fonctionnalité est terminée → Pull Request vers `main` (2 reviews minimum)
- Respecter la structure des dossiers (sinon l’intégration finale sera un cauchemar vraiment svp LES GARS)

→ Toutes les explications détaillées sont dans [CONTRIBUTING.md](CONTRIBUTING.md)

## MESSAGE AUX VIBES CODEURS

J’ai passé des dizaines d’heures à tout structurer pour qu'on est **plus aucune excuse** pour ne pas avancer.  
Tout est prêt. Tout est clair. Tout est privé.  
Il ne manque que notre code.

**Respectez ce qui est déjà en place.** 
Ça va nous faire gagner des semaines entières et éviter un drame à la fin.

On a déjà trop de retard.  
Aujourd’hui, on passe en mode turbo.



@12natanael (disponible à tout moment si vous bloquez)
```


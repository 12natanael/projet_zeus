
# GUIDE DE CONTRIBUTION – PROJET ZEUS  


Tout est déjà fait les GARS.  
on a **plus qu’à suivre ces étapes comme une recette de cuisine**.

### 1. Récupère le projet sur ton ordi (1 seule fois)

Ouvre **un terminal** (dans Cursor, VS Code, ou PowerShell) et copie-colle ces 3 lignes :

```bash
git clone https://github.com/12natanael/projet_zeus.git
cd projet_zeus
git pull
```

Tu as maintenant tout le projet sur ton PC.

### 2. Va sur TA branche (à faire à chaque fois que tu codes)

Regarde ton numéro d’équipe → tu as une lettre :

- Équipe 1 → lettre **a**  
- Équipe 2 → lettre **b**  
- Équipe 3 → lettre **c**  
- …  
- Intégration → `integration`

Copie-colle **une seule** de ces lignes selon ton équipe :

```bash
# Équipe 1
git checkout module-a/development

# Équipe 2
git checkout module-b/development

# Équipe 3
git checkout module-c/development

# Équipe 4 → remplace juste la lettre
git checkout module-d/development

# ... jusqu'à Équipe 9
git checkout module-i/development

# Intégration (J + K)
git checkout module-integration/development
```

Tu es maintenant sur **TA branche perso**.  
Personne d’autre ne travaille dessus. Tu peux tout casser, c’est safe.

### 3. Mets à jour avant de coder (à faire tous les jours)

```bash
git pull origin module-X/development
```
(remplace X par ta lettre, ou rien si tu es sur intégration)

### 4. Code tranquillement

Tu codes dans ce dossier → `modules/module-X/`  
Tout est déjà créé :
- `src/` → ton vrai code
- `tests/` → tes tests (obligatoire)
- `docs/` → copie-colle ta partie du cahier des charges (pages indiquées dans le PDF)

### 5. Quand tu as fini un truc (même petit)

```bash
git add .
git commit -m "feat: j'ai fait le bouton login"        # décris brièvement
git push
```

C’est tout. Ton code est sauvé.

### 6. Quand une fonctionnalité est vraiment terminée et testée

Tu vas sur GitHub → il y a un gros bouton vert **"Pull Request"**  
Tu cliques → tu mets :
- Titre : `Équipe 3 – Génération contrat PDF`
- Description : `J'ai fini la génération avec Jinja2 + hachage SHA-256`

Tu assignes **2 personnes** pour review (n’importe qui sauf toi)  
Quand ils mettent "Approved" → quelqu’un merge dans `main`

### RÈGLES ULTRA-SIMPLES (à ne jamais oublier)

| Ce qu’il faut faire                  | Ce qu’il NE FAUT SURTOUT PAS faire                 |
|--------------------------------------|-----------------------------------------------------|
| Travailler sur `module-X/development` | Pousser directement sur `main`                     |
| Faire `git pull` tous les jours     | Ignorer les conflits                                |
| Écrire des tests                     | Laisser `tests/` vide                               |
| Respecter les dossiers déjà créés    | Créer des dossiers n’importe où                     |
| Faire des commits clairs             | Commit avec message "aaa" ou vide                   |

### Besoin d’aide ?

Tu bloques sur Git ? Tu ne sais pas quoi coder ?  
→ Envoie un message privé à **@12natanael** si je peux , je vais repondre, ou sinon, tu pourras voir le prof directement.Mais lisez juste bien la partie qui vous concerne et faites des recherches svp.
ET JE RAPPELLE ENCORE DE RESPECTER LA STRUCTURE SVP, JE SAIS QUE VOUS ETES DES VIBES CODEURS,N'EMBROUILLER JUSTE PAS LA STRUCTURE MIS EN PLACE!

On a déjà plusieurs semaines  de retard.  


Tout est prêt.  
Il ne manque que le code.
```

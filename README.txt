GESTION ECOLE RDC — VERSION PWA MULTIPLATEFORME

Cette version peut être installée comme application sur Android et sur ordinateur depuis un navigateur compatible, après mise en ligne en HTTPS.

Fichiers importants :
- index.html : application
- manifest.webmanifest : identité de l'application
- sw.js : fonctionnement hors ligne/cache
- icon-192.png et icon-512.png : icônes
- eleves_livres_login.webp : image des élèves sur la connexion

Installation :
1. Mettre le dossier sur un hébergement HTTPS (GitHub Pages convient).
2. Ouvrir le site dans Chrome/Edge.
3. Android : menu du navigateur > Installer l'application / Ajouter à l'écran d'accueil.
4. Ordinateur : bouton Installer l'application dans la barre d'adresse ou dans le menu du navigateur.

IMPORTANT : cette version est une PWA. Pour que les données soient réellement partagées entre téléphone et ordinateur, il faudra connecter l'application à Supabase (base de données + stockage + authentification). Le localStorage actuel reste propre à chaque appareil/navigateur.

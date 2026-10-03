GESTION ÉCOLE RDC — VERSION PROPRE SUPABASE

Cette version contient UN SEUL index.html à la racine.
Elle est prévue pour GitHub Pages et peut être installée comme PWA sur téléphone et ordinateur.

SUPABASE
1. Ouvrir Supabase > SQL Editor.
2. Ouvrir le fichier supabase_school.sql.
3. Copier tout son contenu dans SQL Editor puis cliquer sur Run.
4. L'application est déjà configurée avec le projet Supabase utilisé pour cette version.
5. Mettre les fichiers index.html, eleves_livres_login.webp et supabase_school.sql à la racine du dépôt GitHub.

IMPORTANT
- Les données sont synchronisées dans la table public.school_state.
- L'application conserve aussi un cache local pour continuer à fonctionner si le réseau est momentanément indisponible.
- La clé utilisée dans le navigateur est une clé publishable/anon : la sécurité réelle doit être renforcée avant une utilisation publique avec Supabase Auth et des politiques RLS par école.

PORTAIL ÉLÈVE
Le portail est inclus dans le même index.html. Il peut être ouvert avec :
?portail=eleve
Ainsi, aucun deuxième index.html n'est nécessaire.

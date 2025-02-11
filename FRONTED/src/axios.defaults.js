axios.defaults.baseURL = 'http://localhost:8000/';
2
3
4
5
6
// Définir des en-têtes par défaut pour toutes les requêtes
axios.defaults. headers. common ['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type']='application/ison'
axios.defaults. headers. common ['Accept'] = 'application/json';
7
8
9
10
// Permettre l'envoi des cookies lors des requêtes cross-domain
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken= true;
11
12
13
// Exporter axios pour l'utiliser dans vos composants
export default axios;
/*
 * Featured Content Bar - injecteur pour Jellyfin 12
 *
 * Avant : la barre était ajoutée en remplaçant home-html.<hash>.chunk.js.
 * Jellyfin 12 : l'accueil du layout Modern (défaut, Affichage > Mode = Auto) est une
 * page React (apps/modern/routes/home.tsx) qui n'utilise plus ce fichier, donc la
 * barre n'apparaît plus. Ce script recrée l'<iframe> au même endroit
 * (#indexPage #homeTab, avant .sections). Il marche aussi en layout Legacy.
 *
 * Installation : voir README (ui/spotlight.html et ui/List.txt restent inchangés).
 */
(function () {
  'use strict';

  // Chemin de spotlight.html (celui utilisé par l'ancien home-html.chunk.js)
  var SPOTLIGHT_SRC = '/web/ui/spotlight.html';

  var scheduled = false;

  function ensureFrame() {
    scheduled = false;

    var homeTab = document.querySelector('#indexPage #homeTab');
    if (!homeTab) return;

    // Déjà présent (injecté par ce script ou par l'ancien chunk patché) : rien à faire
    if (homeTab.querySelector(':scope > iframe.featurediframe')) return;

    var frame = document.createElement('iframe');
    frame.className = 'featurediframe';
    frame.src = SPOTLIGHT_SRC;
    homeTab.insertBefore(frame, homeTab.firstChild);
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(ensureFrame);
  }

  // React recrée #homeTab à chaque retour sur l'accueil : on surveille le DOM
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  schedule();
})();

initDarkmode()

function initDarkmode() {
  const mode = localStorage.getItem('bootstrap-sncf-css-name')
  if (mode === 'dark') {
    document.write('<link rel="stylesheet" type="text/css" title="Mode sombre" name="dark" href="scripts/bootstrap-sncf.metier.v4.3.1-r5/bootstrap-sncf.darkmode.css" id="activecss">')
    document.write('<link rel="stylesheet alternate" type="text/css" title="Style classique" name="light" href="scripts/bootstrap-sncf.metier.v4.3.1-r5/bootstrap-sncf.css" id="inactivecss">')
  }
  else {
    document.write('<link rel="stylesheet" type="text/css" title="Style classique" name="light" href="scripts/bootstrap-sncf.metier.v4.3.1-r5/bootstrap-sncf.css" id="activecss">')
    document.write('<link rel="stylesheet alternate" type="text/css" title="Mode sombre" name="dark" href="scripts/bootstrap-sncf.metier.v4.3.1-r5/bootstrap-sncf.darkmode.css" id="inactivecss">')
  }
}

function toggleDarkmode() {
  const activecss = document.getElementById('activecss')
  const inactivecss = document.getElementById('inactivecss')
  const oldhref = activecss.getAttribute('href')
  const newhref = inactivecss.getAttribute('href')
  const name = inactivecss.getAttribute('name')
  activecss.setAttribute('href', newhref)
  inactivecss.setAttribute('href', oldhref)
  localStorage.setItem('bootstrap-sncf-css-name', name)
}
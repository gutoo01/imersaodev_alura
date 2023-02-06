var filmeGuto = 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg'

var outroFilme = 'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg'

var maisUmFilme = 'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg'

var lista = [filmeGuto, outroFilme, maisUmFilme]

for (i = 0; i >= 2; i++) {
  document.write(`<img src= ${lista[i]}>`)
}

// document.write(`<img src=${lista[1]}>`)
// document.write(`<img src=${lista[2]}>`)
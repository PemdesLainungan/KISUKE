import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285397904282', 'Anno_Djie', true],
  ['6285397904282'], 
  ['6285397904282'] 
] //Numeros de owner 

global.mods = ['6285397904282'] 
global.prems = ['6285397904282', '6285397904282', '66285397904282']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'ANNO┃ᴮᴼᵀ' 
global.author = '@Anno_Djie' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/nansoffc\n' 
global.dygp = 'https://chat.whatsapp.com/GkfU6lFBfeAD6pvBNjyd5d'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'http://info-nanzone.nans.tech/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://i.ibb.co/tbHVZZ5/20230528-113117.png' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
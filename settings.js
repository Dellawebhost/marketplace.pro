require("./all/module.js")

global.owner = "6285861398259"
global.dev = "6283842155959"
global.namabot = "Pushkontak By denz" 
global.della = "DENZ HOSTING"
global.namaowner = "della Dev"
global.versi = "Versi script 1.0.2"
global.idsaluran = "120363349892708976@newsletter"
global.linkgc = 'https://chat.whatsapp.com/CGWMk08sm3BKb4EantTFZY'
global.linksaluran = "https://whatsapp.com/channel/0029VagTCBr1iUxQVNZbMA3I"
global.linkyt = "https://youtube.com/@denzstorex"
global.menu = `╔╼『𝙶𝚁𝚄𝙿 𝚃𝙴𝚁𝚃𝚄𝚃𝚄𝙿』•
╠╾⪼ pushkontak2 
╠╾⪼ savekontak2 
╠╾⪼ lisgc
╚╼──━━⪼
╔╼『𝙶𝚁𝙾𝚄𝙿 𝚃𝙴𝚁𝙱𝚄𝙺𝙰』•
╠╾⪼ pushkontak
╠╾⪼ savekontak
╠╾⪼ idgc
╚╼──━━⪼
╔╼『𝚂𝙴𝚃𝚃𝙸𝙽𝙶 𝙼𝙴𝙽𝚄』•
╠╾⪼ sendpayment
╠╾⪼ setpayment
╠╾⪼ delpayment
╠╾⪼ Done
╠╾⪼ panel
╚╼──━━⪼
╔╼『𝙹𝙿𝙼 𝙿𝙾𝚂𝚃』•
╠╾⪼ teksjpm
╠╾⪼ setjpm
╠╾⪼ jpm
╠╾⪼ jpmtesti
╚╼──━━⪼
╔╼『𝙵𝙸𝚃𝚄𝚁 𝚃𝙰𝙼𝙱𝙰𝙷𝙰𝙽』•
╠╾⪼ qc
╠╾⪼ sticker 
╠╾⪼ delpanel 
╠╾⪼ cpanel
╠╾⪼ listpanel
╠╾⪼ tts
╠╾⪼ open
╠╾⪼ close
╠╾⪼ setppgc
╠╾⪼ setnamagc
╠╾⪼ setdesk
╠╾⪼ owner
╠╾⪼ sc
╠╾⪼ backupsc
╠╾⪼ add
╠╾⪼ kick.
╠╾⪼ promote
╠╾⪼ demote
╠╾⪼ list
╠╾⪼ get 
╚╼──━━⪼`
global.packname = "WhatsApo Bot YanzStore"
global.author = "YanzStore BOTZ"
global.list =`*List harga panel denz*
*➬* 1gb   ➩   1k
*➬* 2gb   ➩   2k
*➬* 3gb   ➩   3k
*➬* 4gb   ➩   4k
*➬* 5gb   ➩   5k
*➬* 6gb   ➩   6k
*➬* 7gb   ➩   7k
*➬* 8gb   ➩   8k
*➬* 9gb   ➩   9k
*➬* unli   ➩   10k
        ➥ *Open adp↓*
➬ *Admin Panel* 10k
        ➥ *Open Reseller panel↓*
➬ *Reseller panel* 15k
        ➥  *Open Owner panel↓*
➬ *Owner panel* 20k
*Buy?* *Pm* di bawah
`
global.autoread = false 
global.anticall = true

/*~~~~~~~~~~ SETTING IMAGE ~~~~~~~~~~~*/
global.image = "./media/denz.png"
global.image2 = './media/denz.png'
global.thumbnail ="link thumbnail lu"

/*~~~~~~~~~~ SETTINGS PANEL ~~~~~~~~~~*/
global.egg = "15"
global.loc = "1"
global.domain = "https://denzprivatonly.digital-server.biz.id"
global.apikey = "ptla_GBjErYjlChOt51ZiozduBH7T6GKD0KPHtjd0W4oiHt0"
global.capikey = "ptlc_00Ds3SCisUnXegR6gJjNDoHbRMXPb8P5WHnGnMpUr7B"

/*~~~~~~~~~ SETTING MESSAGE ~~~~~~~~~~*/
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Berhasil mengambil data ✅", 
"wait": "🕧 Proses, Mohon Tunggu Sebentar", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "Fitur Ini Hanya Untuk Owner Bot❗", 
"developer": "Fitur Ini Hanya Untuk Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
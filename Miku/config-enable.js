let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `πππππ ππ ππππππππ`,
rows: [
{title: "β¨ | ππ΄π»π²πΎπΌπ΄", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π° π±πΈπ΄π½ππ΄π½πΈπ³π° π΄π½ π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} welcome`},

{title: "π | π°π½ππΈπ»πΈπ½πΊ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π π³π΄ πΆπππΏπΎπ π³π΄ ππ·π°πππ°πΏπΏ", rowId: `${usedPrefix + command} antilink`},   
{title: "π | π°π½ππΈπ»πΈπ½πΊ πΈ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π πππ΄ πΈπ½πΈπ²πΈπ°π½ π΄π½ π·πππΏπ", rowId: `${usedPrefix + command} antilink2`},    
{title: "π | π³π΄ππ΄π²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π π½πΎππΈπ΅πΈπ²π°π²πΈπΎπ½π΄π π³π΄ π½ππ΄ππ° πΌπΎπ³πΈπ΅πΈπ²π°π²πΈπΎπ½ π΄π½ ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} detect`},      
{title: "β | ππ΄ππππΈπ²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π πΏπ°ππ° ππ°π²π°π πΆπ΄π½ππ΄ π³π΄ πΆπππΏπΎπ", rowId: `${usedPrefix + command} restrict`},
{title: "β | ANTI TAKA TAKA", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° πΏπ°ππ° ππ°π²π°π TAKA TAKAS π³π΄ πΆπππΏπΎπ", rowId: `${usedPrefix + command} antitakatakas`}, 
{title: "βοΈ | π°πππΎππ΄π°π³", description: "πΌπ°ππ²π° π°πππΎπΌπ°ππΈπ²π°πΌπ΄π½ππ΄ π»π°π π²πΎπ½ππ΄πππ°π²πΈπΎπ½π΄π π²πΎπΌπΎ π»π΄πΈπ³πΎ", rowId: `${usedPrefix + command} autoread`},
{title: "βοΈ | π°πππΎLEVELUP", description: "SUBIRA EL NIVEL DE LOS USUARIOS AUTOMATICAMENTE CUANDO TENGA LA XP SUFICIENTE", rowId: `${usedPrefix + command} autolevelup`},
{title: "πΎ | π°πππΎπππΈπ²πΊπ΄π", description: "ππΎπ³π°π π»π°π πΈπΌπ°πΆπ΄π½π΄π, ππΈπ³π΄πΎπ πΎ π΄π½π»π°π²π΄π π΄π½ππΈπ°π³πΎπ ππ΄ π²πΎπ½ππ΄πππ΄π½ π΄π½ πππΈπ²πΊπ΄π", rowId: `${usedPrefix + command} autosticker`},
{title: "π€ | SIMSIMI", description: "SIMSIMI UNA INTELIGENCIA ARTIFIAL QUE TE CONTESTARA ALGUNAS PREGUNTAS Y CHARLARA CON TIGO", rowId: `${usedPrefix + command} simsimi`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `
β­βββββββββββββββ·
ββ¦ββοΈβ¨ππππ_ππππ«
β°β¬ββββββββββββββ·
ββ€π₯πππππ
ββ¦βπα©­βΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${name}
ββ¦βπα©­βππ΄π»π΄π²π²πΈπΎπ½π° ππ½π° π³π΄ π»π°π πΎπ²πΏπΈπΎπ½π΄π ππ΄ π³π΄ππ°π²ππΈππ° πΏπ°ππ° ππΈπ΄πΌπΏππ΄ πππ΄ ππ°π»π΄π½ π΄π½ π»π° ππΈπΆππΈπ΄π½ππ΄ π»πΈπππ° πΎ π³π° π²π»πΈπ²πΊ π΄π½ π°π»πΆππ½ π±πΎππΎπ½ π³π΄ π΄πππ΄ πΌπ΄π½ππ°πΉπ΄
ββ¦βπ±πππ ππππππβοΈ 
β°ββββββββββββββ·
${author}`,
title: null,
buttonText: "ππππππππππ ππππ’",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'antitakatakas':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('rowner', m, conn)
throw false
}
chat.antitakatakas = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.sender = isEnable          
break
case 'sender':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('rowner', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('rowner', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antifakes = isEnable
break
case 'antifakes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
bot.antifakes = isEnable
break
case 'antifakes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
chat.autosticker = isEnable         
break
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('rowner', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simsimi = isEnable          
break
case 'autolevelup':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('rowner', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `β­βββββββββββββββ·\nββ¦ββοΈβ¨ππππ_ππππ«\nβ°β¬ββββββββββββββ·\nββ¦βπα©­βοΈ ππππππ: ${type}\nββ¦βπ±α©­β ππππππ: ${isEnable ? 'π°π²ππΈππ°π³πΎ' : 'π³π΄ππ°π²ππΈππ°π³πΎ'}
ββ¦βπα©­β ππππ: ${isAll ? 'π΄πππ΄ π±πΎπ' : isUser ? '' : 'π΄πππ΄ π²π·π°π'}
ββ¦βπ±πππ ππππππβοΈ 
β°ββββββββββββββ·`, author, null, [[`${isEnable ? 'οΈπ³π΄ππ°π²ππΈππ°π' : 'π°π²ππΈππ°ποΈ'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['πΌπ΄π½π', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

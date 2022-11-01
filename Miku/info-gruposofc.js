let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
╭─────────────┈⊷
│◦➛@ffxryu.18
╰┬────────────┈⊷
┌┤๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS 
│◦➛☃️️ᩭ✎UNIRTE AL LOS💖 GRUPOS 
│◦➛🌹️ᩭ✎OFICIALES DEL BOT DE👩‍🏫✨
│◦➛🍃️@ffxryu.18
│◦➛📚️ᩭ✎ SOMOS UNA FAMILIA DE BOTS 
│◦➛🌆𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐆𝐫𝐚𝐭𝐢𝐬𝟏
│◦➛🍀ᩭ✎https://chat.whatsapp.com/BOAp22xLodrAvxbLG0AD4z
│◦➛☘️𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐆𝐫𝐚𝐭𝐢𝐬𝟐
│◦➛✨ᩭ✎https://chat.whatsapp.com/LuHSCjQuCe8G5ucRCQxkJr
│◦➛@ffxryu.18
╰────────────┈⊷`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `@ffxryu.18`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/jairgonzales3/RyuBot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['grupos','script']
export default handler

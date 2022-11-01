let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
╭─────────────┈⊷
│◦➛@ffxryu.18
╰┬────────────┈⊷
│◦➛📔ᩭ✎si deseas 🤝apoyarme mejor ayúdame y apóyame en mi cuenta oficial de Instagram
│◦➛🍀𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫
│◦➛📚ᩭ✎http://wa.me/51955095498
│◦➛📔𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦
│◦➛🍀ᩭ✎https://www.instagram.com/ffxryu.18
│◦➛@ffxryu.18
╰────────────┈⊷`
let buttonMessage= {
'document': { url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley` },
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
'sourceUrl': 'https://youtu.be/6FYKkeBCTdw' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '☃️𝙼𝙴𝙽𝚄🍀'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '🌱𝙶𝙸𝚃𝙷𝚄𝙱📚'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['donar','script']

export default handler

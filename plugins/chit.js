let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    global.db.data.users[who].exp += 999999999999999999999999999999999999
    global.db.data.users[who].limit += 999999999999999999999999999999999999
    global.db.data.users[who].money += 999999999999999999999999999999999999
    conn.sendButton(m.chat, `*Ancrit Mainnya Hebat :l* 
    + *${global.db.data.users[who].exp}* EXP Tersisa
    + *${global.db.data.users[who].limit}* Limit Tersisa
    + *${global.db.data.users[who].money}* Money Tersisa`, author, null, [
        ['Chit', `${usedPrefix + command}`]
    ], m)
}
handler.help = ['ngechit']
handler.tags = ['mods']
handler.command = /^(ngechit)$/i
handler.group = true
handler.mods = true

module.exports = handler
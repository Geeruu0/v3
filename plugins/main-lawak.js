let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/3e49a66125d766426ee5f.png', m, { packname: "Geeruu", author: "@adi" })
}

handler.customPrefix = /^(wk|wkwk|wkwkwk|wkwkwkwkwk|lucu|ngakak|ngabrut|lawak|lawack|awok|AWOKAWOK|awokawokawok)$/i
handler.command = new RegExp

module.exports = handler

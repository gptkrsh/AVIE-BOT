const { Client } = require('discord.js')

const client = new Client()

client.on('message', msg => {
  if (msg.author.id === '750139509076787310') {
    msg.react(':Avie:1047929399690936432')
    console.log('OMG AVIIIIEEEEE!')
  }
})

client.once('ready', () => {
  console.log('JAAAXXXX! is here')
})

client.login(process.env.DISCORD_TOKEN)

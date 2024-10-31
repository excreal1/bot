#INSTALL
```
git clone https://github.com/excreal1/bot

# Install dependencies
npm install node-fetch dotenv discord.js
```

#Create a .env file and add the following:
```
#1Password CLI

#replace the references with your own

DISCORD_TOKEN="op://dev/Discord BOT/DISCORD_TOKEN"
GUILD_ID="op://dev/Discord BOT/GUILD_ID"
APP_ID="op://dev/Discord BOT/APP_ID"
PUBLIC_KEY="op://dev/Discord BOT/PUBLIC_KEY"

```

```

# How to load credentials to .env file during runtime
op run --env-file yourscript.env -- yourscript.sh
```

```
# Run the bot
# Make sure to have 1Password CLI installed
# Also modify .env file with your Discord credentials from 1password

npm start
```


from telegram import Update
from telegram.ext import Application, MessageHandler, filters

# Токен вашего бота
TOKEN = 'YOUR_BOT_TOKEN'

async def handle_web_app_data(update: Update, context):
    web_app_data = update.message.web_app_data.data
    print(f"Received data from Mini App: {web_app_data}")
    await update.message.reply_text("Товар успешно добавлен в корзину!")

# Создание приложения
application = Application.builder().token(TOKEN).build()

# Обработчик данных от Mini App
application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, handle_web_app_data))

# Запуск бота
application.run_polling()
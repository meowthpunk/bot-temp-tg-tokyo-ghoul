from aiogram import Bot, Dispatcher, types
from aiogram.utils.executor import set_webhook
from aiohttp import web

from web_app import routes as webapp_routes
import logging

logging.basicConfig(level=logging.DEBUG)

BOT_TOKEN = "BOT_TOKEN"
WEBHOOK_HOST = "yourdomen.com"
WEBHOOK_PATH = "/webhook"
WEBHOOK_URL = f"{WEBHOOK_HOST}{WEBHOOK_PATH}"
WEBAPP_HOST = "0.0.0.0"
WEBAPP_PORT = 8080


async def on_startup(dp: Dispatcher):
    await dp.bot.set_webhook(WEBHOOK_URL)


async def on_shutdown(dp: Dispatcher):
    await dp.bot.delete_webhook()


async def cmd_start(message: types.Message):
    markup = types.InlineKeyboardMarkup(
        inline_keyboard=[
            [
                types.InlineKeyboardButton(
                    text="Web app",
                    web_app=types.WebAppInfo(url=f"{WEBHOOK_HOST}/test_webapp"),
                )
            ]
        ]
    )
    await message.answer("Click it!", reply_markup=markup)


def main():
    bot = Bot(BOT_TOKEN, parse_mode="HTML")
    dp = Dispatcher(bot)
    app = web.Application()
    app["bot"] = bot
    app.add_routes(webapp_routes)
    set_webhook(
        dispatcher=dp,
        webhook_path=WEBHOOK_PATH,
        skip_updates=True,
        on_startup=on_startup,
        on_shutdown=on_shutdown,
        web_app=app,
    )
    dp.register_message_handler(cmd_start, commands=["start"])
    web.run_app(app, port=WEBAPP_PORT, host=WEBAPP_HOST)


if __name__ == "__main__":
    main()

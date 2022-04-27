import logging
from aiogram import Bot, Dispatcher, executor, types
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.types.web_app_info import WebAppInfo
from aiogram.types import MenuButton

# Объект бота
bot = Bot(token="5388724168:AAGck_2xlwnIr4ZH9GyQLsfwEBDS4NBKL1k", parse_mode=types.ParseMode.HTML)
# Диспетчер для бота
dp = Dispatcher(bot)
# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)


# Хэндлер на команду /test1
@dp.message_handler(commands="test1")
async def cmd_test1(message: types.Message):
    await message.reply("Test 1")
# Хэндлер на команду /test2
async def cmd_test2(message: types.Message):
    await message.reply("Test 2")

# Где-то в другом месте...


@dp.message_handler(commands="inline_url")
async def cmd_inline_url(message: types.Message):
    buttons = [
        types.InlineKeyboardButton(text="ОФОРМИТЬ ЗАКАЗ", url="https://mastergroosha.github.io/telegram-tutorial-2/buttons/"),
    ]
    keyboard = types.InlineKeyboardMarkup(row_width=1)
    keyboard.add(*buttons)
    await message.answer("Кнопки-ссылки", reply_markup=keyboard)

dp.register_message_handler(cmd_inline_url, commands="test2")

@dp.message_handler(commands="start")
async def cmd_start(message: types.Message):
    await message.answer("Let's start!😀", reply_markup=InlineKeyboardMarkup().add(InlineKeyboardButton(text="Order food", web_app = WebAppInfo(url="https://hub.delivery/"))))
    menu_button = MenuButton()
    print(message.chat.id)
    print(menu_button)


# on_startup(print('pizda'))
executor.start_polling(dp, skip_updates=True)

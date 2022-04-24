from aiogram import Bot, Dispatcher, types, asyncio
from aiogram.utils.executor import set_webhook
from aiohttp import web

from web_app import routes as webapp_routes
import logging

logging.basicConfig(level=logging.DEBUG)


if __name__ == '__main__':
    main()

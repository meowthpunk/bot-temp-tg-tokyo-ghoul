from aiohttp import web
from aiohttp.web_fileresponse import FileResponse

routes = web.RouteTableDef()


@routes.post("/webapp_response")
async def post_handler(request):
    bot = request.app["bot"]
    data = await request.json()
    color_emoji = {"red": "🔴", "green": "🟢", "blue": "🔵"}
    await bot.send_message(chat_id=data["chatId"], text=f"You select: {color_emoji[data['color']]}")
    return web.Response(status=200)


@routes.get("/test_webapp")
async def get_handler(request):
    return FileResponse("test.html")

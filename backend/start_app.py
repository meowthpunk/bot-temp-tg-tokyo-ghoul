# star_app.py
from starlette.applications import Starlette
from starlette.responses import JSONResponse
import uvicorn
import ssl

app = Starlette()


@app.route("/")
async def homepage(request):
    return JSONResponse({"hello": "world"})

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="192.168.137.1",
        port=80,
        ssl_version = ssl.PROTOCOL_SSLv23,
        # cert_reqs = ssl.CERT_OPTIONAL,
        ssl_keyfile="./key.pem",        # Note that the generated certificates
        ssl_certfile="./cert.pem",      # are used here
    )

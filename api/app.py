from aiohttp import web

async def handle(request):
    res = [
        {"name": "Spooky Skeleton", "votes": 1},
        {"name": "Ghost", "votes": 2},
        {"name": "Pumpkin", "votes": 5 }
    ]
    headers = {"Access-Control-Allow-Origin": "*"}
    return web.json_response(res, headers=headers)

app = web.Application()
app.add_routes([web.get('/list', handle)])

web.run_app(app, port=4000)

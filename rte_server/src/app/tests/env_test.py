from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return 'Your environment already setup🚀 and enjoy it ✨!'

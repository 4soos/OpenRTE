# rte_server

## Overview

### Code Format

just follow autopep8.

```
pip install autopep8
```

### Tools

* Docker

* docker-compose

* pip

* VS-Code or PyCharm

* Datagrip


### Project structure

```
app
├── api              - web related stuff.
│   ├── dependencies - dependencies for routes definition.
│   ├── errors       - definition of error handlers.
│   └── routes       - web routes.
├── config           - application configuration, startup events, logging.
├── db               - db related stuff.
│   ├── migrations   - manually written alembic migrations.
│   └── repositories - all crud stuff.
├── models           - pydantic models for this application.
│   ├── domain       - main models that are used almost everywhere.
│   └── schemas      - schemas for using in web routes.
├── services         - logic that is not just crud related.
└───tests            - all test files
└── main.py          - FastAPI application creation and configuration.
```

## Project setup

### Python Env

```bash
cd your_project_path_root\src\app\config

pip install -r env

```


### Verify the env
input command below,

```bash
cd your_project_path_root\src\app\tests

uvicorn env_test:app

```
and open your browser, and input `http://127.0.0.1:8000/`,

after this you can get ` {"message":"Hello World"} ` from your browser 🎉.


### Compiles and hot-reloads for development


### Compiles and minifies for production


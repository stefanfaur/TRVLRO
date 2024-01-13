# TRVLRO

Trvlro is an app designed to provide personalized travel itineraries for cities in Romania. It leverages user personality data and city profiles to make tailored suggestions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Poetry
- Npm

### Installing

#### Backend

To run the backend, you will need to have the `.env`  and `_service_account_keys.json`(Firestore Credentials) files in your backend directory. This file contains environment variables necessary for the backend to run correctly.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
poetry install

# Run the backend
poetry run python -m trvlro
```

This will start the server on the configured host. You can find swagger documentation at `/api/docs`.

#### Frontend

To run the frontend, you will also need to have the `.env.local` file in your frontend directory. This file contains environment variables necessary for the frontend to run correctly.

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the frontend
npm start
```

This will start the frontend on the configured host.

## Deployment

#### Backend

You can start the project with docker using this command:

```bash
docker-compose -f deploy/docker-compose.yml --project-directory . up --build
```

If you want to develop in docker with autoreload add `-f deploy/docker-compose.dev.yml` to your docker command.
Like this:

```bash
docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . up --build
```

This command exposes the web application on port 8000, mounts current directory and enables autoreload.

But you have to rebuild image every time you modify `poetry.lock` or `pyproject.toml` with this command:

```bash
docker-compose -f deploy/docker-compose.yml --project-directory . build
```

#### Frontend

First you have to build the static files:

```bash
npm run build
```

Then you can serve them on the cloud, or on-prem with:

```bash
npm run serve
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [FastAPI](https://fastapi.tiangolo.com/) - The backend framework used
* [Poetry](https://python-poetry.org/) - Dependency Management

### Structure

#### Backend

```bash
$ tree "trvlro"
trvlro
├── conftest.py  # Fixtures for all tests.
├── __main__.py  # Startup script. Starts uvicorn.
├── services  # Package for different external services such as rabbit or redis etc.
├── settings.py  # Main configuration settings for project.
├── static  # Static content.
├── tests  # Tests for project.
└── web  # Package contains web server. Handlers, startup config.
    ├── api  # Package with all handlers.
    │   └── router.py  # Main router.
    ├── application.py  # FastAPI application configuration.
    └── lifetime.py  # Contains actions to perform on startup and shutdown.
```



## Authors

* **Stefan Faur** - Backend API, Frontend - [stefanfaur](https://github.com/stefanfaur)
* **Adel Drinceanu** - Frontend, Authentication - [Adel0s](https://github.com/Adel0s)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


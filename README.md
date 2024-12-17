# Project Setup

## Development Setup

To run the project in **development mode**:

1. Start the containers using Docker Compose:

   ```bash
   docker compose -f base.yml up --build
   ```

2. Access the development server:

   - **Frontend (Next.js):** [http://localhost:3000/](http://localhost:3000/)
   - **Backend (Django API):** [http://localhost:8000/](http://localhost:8000/)

---

## Production Setup

To run the project in **production mode**:

1. Start the containers using Docker Compose:

   ```bash
   docker compose -f prod.yml up --build
   ```

2. Access the production server:

   - **Combined Application (Nginx):** [http://localhost/](http://localhost/)

   Nginx routes requests as follows:

   - Static/frontend files: proxied to the **frontend** service.
   - API requests: proxied to the **Django backend** service.

---

## Notes

- **Development Mode:** Changes to the codebase are reflected immediately.
- **Production Mode:** Optimized builds are served, and Nginx handles routing for both the frontend and backend.

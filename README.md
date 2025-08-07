
# PettyGo ERP

PettyGo is a modular, extensible ERP system built with NestJS (backend), Next.js (frontend), and Prisma ORM. It is designed for modern businesses and can be customized for a wide range of industries.

---

## Quick Start
1. Clone the repo and install dependencies (`npm install` in each package)
2. Set up your database (see `prisma/`)
3. Start backend and frontend servers
4. Access the app in your browser

---

## Architecture & Modules

- See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for a full overview of the workspace structure, core technologies, and enhancement roadmap.
- Each business module (HR, CRM, Accounting, etc.) has its own doc in [`docs/`](docs/). Example: [`docs/hr.md`](docs/hr.md), [`docs/crm.md`](docs/crm.md), etc.
- Core shared modules (auth, rbac, tenant, workflows) are documented in [`docs/core.md`](docs/core.md).

---

## How to Contribute (Step-by-Step)
1. Pick a module to work on (see `docs/`)
2. Review its controller, service, DTOs, and entities
3. Add or extend features as per the enhancement checklist in the module doc
4. Write/extend tests (unit/integration)
5. Update documentation
6. Open a pull request

---

## Further Development
- Follow the enhancement recommendations in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and each module doc
- Add new modules by following the existing structure
- Keep documentation up to date

---

## License
MIT

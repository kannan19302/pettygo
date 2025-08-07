# Core Modules

## Overview
Core modules provide shared functionality and infrastructure for all business modules in the ERP system.

---

## List of Core Modules

### Auth
- Authentication (login, JWT, OAuth2, SSO)
- Password management
- User registration
- Security best practices

### RBAC (Role-Based Access Control)
- Role and permission management
- Access control for all modules
- Hierarchical roles

### Tenant
- Multi-tenancy support
- Tenant isolation
- Tenant onboarding and management

### Dynamic Models
- Dynamic schema/model creation
- Support for custom fields and entities

### Workflows
- Business process automation
- Workflow designer and engine
- Integration with all modules

---

## Recommended Enhancements
- Add audit logging for all core actions
- Add API documentation for core endpoints
- Add integration tests for core modules
- Add admin UI for managing core features

---

## File Structure
- `core.module.ts`: Main core module
- Subfolders: `auth/`, `rbac/`, `tenant/`, `dynamic-models/`, `workflows/`

---

## Documentation
- Document all core APIs and usage
- Add usage examples for integration with business modules

---

//# Security Policy
# Security Policy

## Supported Versions
We actively maintain the latest production release of this project. All previous major versions may not receive security updates unless critical.

| Version | Supported          |
|---------|--------------------|
| 1.x.x   | ✅ Active support   |
| 0.x.x   | ❌ Unsupported      |

## Reporting a Vulnerability

If you discover a security issue, please report it directly and privately to our team:

- 📧 **Email:** support@lettherebelight.org
- 📁 Include: a description, reproduction steps, and potential impact

Do **not** create a public GitHub issue to avoid exposing vulnerabilities.

All reports will be investigated, acknowledged within 48 hours, and resolved promptly.

## Security Practices

- Use HTTPS for all external requests
- Store secrets in `.env` (not in source code)
- Sanitize inputs in all forms and API routes
- Enforce strict permission access on backend routes

## Tools

- Node.js security updates via `npm audit`
- Dependency scanning using GitHub's built-in alerts

# Frontend Data Contract

This document describes the API endpoints, request types, response types, parameter rules, and edge cases for the three frontend features.

---

## Feature 1 - Date Range Filter

### Endpoint

- `GET /api/metrics/facets`
- Existing metrics endpoint with `start_date` and `end_date` filters

### Request Type

`DateRangeFilter`

```ts
start_date?: string;
end_date?: string;
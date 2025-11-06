# TrackZen — Device Inventory Dashboard (Frontend)

**What it is**  
TrackZen is a static frontend prototype of a device inventory and service dashboard.
Built with HTML, Bootstrap 5, and modern vanilla JavaScript modules. All data is mock/local.

**Features**
- Dashboard summary cards (total devices, active, needs service, expired warranty)
- Devices list with search and status filters
- Add device form that persists to LocalStorage
- Dark / Light theme persisted to LocalStorage
- Modular JS utilities (`dom.js`, `storage.js`, `api.js`)

**How to run locally**
1. Clone the repo
2. Open `index.html` (or `devices.html`) in a browser — no build step needed.
3. To simulate persistence across pages, use `add-device.html` to save to LocalStorage.

**Deploy**
- Deploy as a static site on Vercel / Netlify (no backend required).

**Notes**
- Data source: `assets/js/api.js` (initial mock dataset). When `trackzen:devices` exists in LocalStorage, the app will use that instead of the default dataset.


------------------------------------------

## TrackZen Project Report

### Overview

TrackZen is a lightweight device management dashboard built as a static frontend prototype. It demonstrates common admin UI features (KPIs, searchable lists, modals) while keeping data persistence simple via LocalStorage.

Key points:

- Purpose: Track IT assets, service status, and warranty information.
- Tech: HTML5, CSS3, Bootstrap 5 and ES6 modules (vanilla JS).
- Hosting: Optimized for static hosting (Vercel / Netlify) — no backend required.

### Pages

- `index.html` — Dashboard with summary cards and recent devices table.
- `devices.html` — Full device list with search & filters and device detail modal.
- `add-device.html` — Add / edit device form (accessible and responsive).

### User flow

- Dashboard: shows total devices, active devices, needs service, and expired warranties. Each recent device row opens a detail modal.
- Add Device Modal: minimal required input (only `Device Name` is mandatory). Saves to LocalStorage and updates UI instantly.
- Devices List: searchable, filterable; rows open the same detail modal; devices can also be added from this page.

### Data & storage

- LocalStorage key: `trackzen:devices` — used as the single source of truth in the browser.
- Default: `assets/js/api.js` provides a mock dataset. Once the user adds devices, LocalStorage takes precedence over the mock data.

### Project structure

```
trackzen/
├── index.html
├── devices.html
├── add-device.html
├── assets/
│   ├── css/       (base.css, components.css, theme.css)
│   ├── js/        (api.js, dom.js, storage.js, dashboard.js, devices.js, modal.js, theme.js)
│   └── img/icons/
└── README.md
```

### Features

- Dynamic KPIs that update from the devices dataset
- Search and filters on the device list
- Dark / Light theme toggle persisted across sessions
- LocalStorage persistence (no backend)
- Accessible modals and form controls (labels, aria attributes, and keyboard operability)
- Responsive layout using Bootstrap utilities

### Accessibility & performance

- Form controls include labels and aria-labels; logical tab order is maintained.
- `aria-live` regions are used for updating search results.
- Color contrast checked for both light and dark themes.
- JS is modular (ES6 imports) to avoid blocking page load.

### Extensibility

- Swap `assets/js/api.js` for real REST endpoints to connect a backend.
- Add validation rules or richer fields in the add/edit form.
- Lift persistence to a small Express API or serverless functions if multi-user sync is needed.

### Summary

TrackZen is intentionally simple but demonstrates sound frontend architecture: modular code, responsive UI, theming, accessibility, and client-side persistence. It’s well suited as a portfolio demo or starting point for a fuller asset-management app.

--------------------



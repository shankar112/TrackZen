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

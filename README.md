# prophet-update-test

A tiny Prophet plugin (browser script only, no server, no key) for checking
that plugin sources and updates work. It adds a page "Update test" in the
menu and a section in Settings that show the script's and manifest's version.

Add it in Omniscient → Settings → Plugins with the source
`https://github.com/kotekhizanov/prophet-update-test`.

To test an update: bump `VERSION` in `omniscient.js` and `version` in
`prophet-plugin.json`, push to `main`, press Check (or wait for the next
check), approve the new version, reload Omniscient.

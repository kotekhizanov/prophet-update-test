// Update test: shows which version of the plugin Omniscient runs.
// To test an update: bump VERSION here and "version" in prophet-plugin.json,
// push, press Check in Settings → Plugins, approve, reload Omniscient.
const VERSION = "0.2.0";

export function activate(prophet) {
  try {
    const line = () =>
      `Script ${VERSION}, manifest ${prophet.plugin.version}, note "${prophet.settings().note}".`;
    prophet.ui.page({
      id: "version",
      title: "Update test",
      icon: "puzzle",
      render(body) {
        const p = document.createElement("p");
        p.className = "hint";
        p.textContent = line();
        body.append(p);
      },
    });
    prophet.ui.settingsSection({
      title: "Update test",
      render(body) {
        const p = document.createElement("p");
        p.className = "hint";
        p.textContent = line();
        body.append(p);
      },
    });
    console.info(`[update-test] ${line()}`);
  } catch (e) {
    console.warn("[update-test] failed", e);
  }
}

<script lang="ts">
  import { setNt4Context } from "@frc-web-components/svelte";
  import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";
  import Examples from "./lib/Examples.svelte";

  setNt4Context('localhost');
  const themes = new DashboardThemes();
  themes.addThemeRules("dark", darkTheme);

  let theme = "light";

  function updateTheme(newTheme: string) {
    theme = newTheme;
    themes.setTheme(document.body, theme);
  }
</script>

<div class="App">
  <div class="theme-chooser">
    <label>
      <input
        type="radio"
        name="theme-chooser"
        on:click={() => {
          updateTheme("light");
        }}
        checked={theme === "light"}
      />{" "}
      Light Theme
    </label>
    <label>
      <input
        type="radio"
        name="theme-chooser"
        on:click={() => {
          updateTheme("dark");
        }}
        checked={theme === "dark"}
      />{" "}
      Dark Theme
    </label>
  </div>
  <Examples />
</div>

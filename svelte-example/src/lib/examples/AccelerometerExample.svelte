<script lang="ts">
  import "@frc-web-components/fwc/components/accelerometer";
  import { getEntry } from "@frc-web-components/svelte";

  let value = getEntry("/dash/accelerometer/value", 0);
</script>

<frc-accelerometer value={$value} />

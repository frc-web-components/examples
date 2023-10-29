<script lang="ts">
  import "@frc-web-components/fwc/components/3-axis-accelerometer";
  import { getEntry } from '../networktables';
  
  let x = getEntry('/dash/3AxisAccelerometer/x', 0);
  let y = getEntry('/dash/3AxisAccelerometer/y', 0);
  let z = getEntry('/dash/3AxisAccelerometer/z', 0);
</script>

<frc-3-axis-accelerometer x={$x} y={$y} z={$z} />

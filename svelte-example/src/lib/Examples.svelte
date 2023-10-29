<script lang="ts">
  import AccelerometerExample from "./examples/AccelerometerExample.svelte";
  import ThreeAxisAccelerometerExample from "./examples/ThreeAxisAccelerometerExample.svelte";

  const exampleComponents = [
    { name: "3-Axis Accelerometer", component: ThreeAxisAccelerometerExample },
    { name: "Accelerometer", component: AccelerometerExample },
  ];

  let selectedExample = exampleComponents[0];
</script>

<div>
  <select class="example-select" bind:value={selectedExample}>
    {#each exampleComponents as option}
      <option value={option}>{option.name}</option>
    {/each}
  </select>

  <div>
    <svelte:component this={selectedExample.component} />
  </div>
</div>

<script lang="ts">
  import AccelerometerExample from "./examples/AccelerometerExample.svelte"
  import ThreeAxisAccelerometerExample from "./examples/ThreeAxisAccelerometerExample.svelte"

  const exampleComponents = ["3-Axis Accelerometer", "Accelerometer"]

  let selectedExample = exampleComponents[0]

  
  function handleChange(event: Event): void {
    const target = event.target as HTMLSelectElement
    selectedExample = target.value
  }
</script>

<div>
  <select
    class="example-select"
    bind:value={selectedExample}
    on:change={handleChange}
  >
    {#each exampleComponents as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  <div>
    {#if selectedExample === "3-Axis Accelerometer"}
      <ThreeAxisAccelerometerExample />
    {:else if selectedExample === "Accelerometer"}
      <AccelerometerExample />
    {/if}
  </div>

</div>

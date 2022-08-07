<svelte:options tag="my-counter" />

<script>
  export let count = 0;
  $: count = +count;
  const increment = (ev) => {
    count += 1;
    const event = new CustomEvent("change", {
      detail: count,
      bubbles: true,
      cancelable: true,
      composed: true, // makes the event jump shadow DOM boundary
    });
    ev.target.dispatchEvent(event);
  };
</script>

<button on:click={increment}>
  count is {count}
</button>

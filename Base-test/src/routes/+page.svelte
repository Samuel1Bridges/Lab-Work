<script>
    import Cards from "../components/Card.svelte";
    export let data;
    const people = data.people;
    console.log(people);

</script>
<main>
    {#each people as person}
        <Cards {person} />
    {/each}
</main>
<style>
    main{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin: 3em;
    }
    
</style> 
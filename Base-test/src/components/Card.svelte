
<!-- JavaScript -->
<script>
import Picture from "./Picture.svelte";
import Details from "./Details.svelte";
export let person;
</script>


<!-- Html -->
<section>
    <Picture {person}/>
    <Details {person} />
</section>


<!-- Css -->
<style>

section{
    display: flex;
    border: 2px solid black;
}
</style>


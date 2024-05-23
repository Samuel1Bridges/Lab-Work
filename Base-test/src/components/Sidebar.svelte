<script>
   export let navItems ;
</script>
<nav>

    <ul>
        {#each navItems as item }
            <li><a href="{item.herf}">{item.text}</a></li>
        {/each}
    </ul>
    

</nav>

<style>
    ul{
        list-style-type: none;
 
        background-color: gray;
    }
    li{
        margin: 1em;
        text-align: center;
        padding: 1em;
        border: 1px solid black;
    }
    a{
        text-decoration: solid;
        color: black;
    }
</style>
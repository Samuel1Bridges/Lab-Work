<script>
    let navItems =[
        {text: "Home", herf:""},
        {text: "About", herf:""},
        {text:"My Cards", herf:""},
        {text:"Contact", herf:""},
        {text:"Cats", herf:""}
        ]
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
        position: fixed;
        display: flex;
        flex-direction: row;
        width: 6em;
        height: 100%;
        top: 4.1em;
        left: 0px;
        border: 3px solid black;
        background-color: gray;
        display: flex;
        flex-direction: column;
        justify-content: left;

    }
    li{
        margin: 2px;
        border: 1px solid black;
        text-align: center;
    }
</style>
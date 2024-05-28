<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Sidebar from "../components/Sidebar.svelte";

    let navItems =[
        {text: "Home", herf:"/"},
        {text: "My Card", herf:"/cards"},
        {text:"My Profile", herf:"/profile"},
        ]
</script>

<div class="container">
    <header>
        <Header />
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <Footer />
    </footer>
    </div>     

<style>
    :global(body){
        margin: 0;
    }
    .container{
        display: grid;
        grid-template: auto 1fr auto / auto 1fr ;
    }

    header{

        grid-column: 1 / 3;
    }
    footer{
        grid-column: 1 / 3;
    }
    main{
        display: flex;
        flex-wrap: wrap;

    }
</style>
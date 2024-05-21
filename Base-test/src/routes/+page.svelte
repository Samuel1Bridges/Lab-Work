<script>
    import Card from "../components/Card.svelte";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Sidebar from "../components/Sidebar.svelte";

    let navItems =[
        {text: "Home", herf:"/"},
        {text: "About", herf:"/about"},
        {text:"My Cards", herf:"/cards"},
        {text:"Contact", herf:"/contact"},
        {text:"Blog", herf:"/blog"}
        ]
</script>
<div class="containor">
<header>
    <Header />
</header>
<div class="left">
<Sidebar {navItems}/>
</div>
<section>
<Card />
<Card />
</section>


<footer>
<Footer />
</footer>
</div>
<style>
    .containor{
        display: grid;
        grid-template: auto 1fr auto / auto 1fr ;
    }
    .left{
        background-color: gray;
        border: 1px solid black;
        padding: 1em;
        grid-column: 1 / 2;
    }
    header{

        grid-column: 1 / 3;
    }
    footer{
        grid-column: 1 / 3;
    }
    section{
        display: flex;
        flex-wrap: wrap;

    }
    
</style>
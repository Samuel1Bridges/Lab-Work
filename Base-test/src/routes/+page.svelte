<script>
    import Card from "../components/Card.svelte";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Sidebar from "../components/Sidebar.svelte";
</script>

<Header />

<Sidebar />

<section>
<Card />
<Card />
</section>

<Footer />
<style>
    section{
        display: flex;
        margin-left: 7em;
        margin-top:7em; 
    }
    
</style>
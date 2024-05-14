<script>
    import Card from "../componets/Card.svelte";
    import Header from "../componets/Header.svelte";
    import Sidebar from "../componets/Sidebar.svelte";
    import Footer from "../componets/Footer.svelte";
</script>

<Header />
<Sidebar />
<section>
<Card />
<Card />
<Card />
<Card />
<Card />
</section>
<Footer />
<style>
    section{
        display: flex;
        margin-left: 15em;
        margin-top: 5em;
    }
</style>
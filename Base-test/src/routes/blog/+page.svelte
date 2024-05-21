<script>
    let articles = [
        {
            slug: "cats",
            title:"Cats are the internet",
            body:"stuffff",
        },
        {
            slug: "dogs",
            title:"Dogs are the internet",
            body:"stgggggg",
        }
    ]
</script>

<ul>
    {#each articles as article}
        <li><a href="/blog/{article.slug}">{article.title}</a></li>
    {/each}
</ul>

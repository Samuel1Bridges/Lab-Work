<script>
export let person;
</script>

<!-- Details person -->
<dl>
    <dt>Name</dt>
    <dd>{person.name}</dd>
    <dt>Email</dt>
    <dd>{person.email}</dd>
    <dt>Phone</dt>
    <dd>{person.phone}</dd>
    <dt>location</dt>
    <dd>{person.address.city}</dd>
    <dt>Website</dt>
    <dd>{person.website}</dd>
</dl>
<style>
dl{
    display: flex;
    flex-direction: column;
    width: 15em;
}
</style>
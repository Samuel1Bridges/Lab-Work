<script>
    let person ={
        firstname: "John",
        lastname: "Doe",
        age: "34",
        location:" morge",
        occupation:"dead"
    }
</script>

<!-- Details person -->
<dl>
    <dt>Name</dt>
    <dd>{person.firstname} {person.lastname}</dd>
    <dt>age</dt>
    <dd>{person.age}</dd>
    <dt>location</dt>
    <dd>{person.location}</dd>
    <dt>occupation</dt>
    <dd>{person.occupation}</dd>
</dl>
<style>
dl{
    display: flex;
    flex-direction: column;
    padding: 1em;
}
</style>
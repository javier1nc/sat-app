<script lang="ts">

import { CodeBlock } from '@skeletonlabs/skeleton';

	type users = {
        name: string;
        email: string;
        user: string;

    };
	function addRow() {
        data = [...data, [...newRow]]
        newRow = columns
    }
	function deleteRow(rowToBeDeleted) {
        data = data.filter(row => row != rowToBeDeleted)
    }
	let columns = ["Nombre", "Correo", "Usuario"]
	let data: users = [
        ["Abel", "abel@example.com", "abel23"],
        ["Beto", "beto@gmail.com", "beto23"],
        ["Carla", "carla@mail.com", "carla23"]
    ]
	let newRow = [...columns];
</script>

<!-- Responsive Container -->
<div class="table-container">
	<table class="table table-hover">
	<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				{#each row as cell}
				<td contenteditable="true" bind:innerHTML={cell} />
				{/each}
				<button type="button" class="btn variant-filled" on:click={() => deleteRow(row)}>X</button>
			</tr>
		{/each}
	</tbody>

	<tfoot>
		<tr style="color: grey">
			{#each newRow as column}
				<td contenteditable="true" bind:innerHTML={column} />
			{/each}
			<button type="button" class="btn variant-filled" on:click={addRow}>agregar</button>
		</tr>

	</tfoot>

	</table>
</div>

	<br>
	<CodeBlock language="javascript" code={JSON.stringify(data, null, 2)}></CodeBlock>

<style>
</style>
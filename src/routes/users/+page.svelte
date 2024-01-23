<script lang="ts">

import { CodeBlock } from '@skeletonlabs/skeleton';

	type users = {
        name: string;
        email: string;
        user: string;
		role: string;
    };
	function addRow() {
        data = [...data, [...newRow]]
        newRow = columns
    }
	function deleteRow(rowToBeDeleted) {
        data = data.filter(row => row != rowToBeDeleted)
    }
	let columns = ["Nombre", "Correo", "Usuario","Role"]
	let data: users = [
        ["Abel", "abel@example.com", "abel23","administrador"],
		["Beto", "beto@gmail.com", "beto23","usuario"],
		["Carla", "carla@mail.com", "carla23","invitado"]
    ]
	let roles = ["administrador","usuario","invitado"]
	let newRow = [...columns];


	$: console.log('Updated options:', roles)
</script>

<!-- Responsive Container -->
<div class="table-container">
	<table class="table table-hover">
	<thead >
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr class="">

				{#each row as cell}
				<td contenteditable="true" bind:innerHTML={cell} class=""/>
				{/each}
				<td class="">
					<select bind:value={row[3]} class="selctor">
						{#each roles as value}<option {value}>{value}</option>{/each}
					</select>
				<td/>

				<div class="">
					<button type="button" class="btn variant-filled" on:click={() => deleteRow(row)}>X</button>
				</div>

			</tr>
		{/each}
	</tbody>

	<tfoot>
		<tr style="color: grey" >
			{#each newRow as column}
				<td contenteditable="true" bind:innerHTML={column} />
			{/each}
			<td>
				<select bind:value={newRow[3]} class="selctor">
					{#each roles as value}<option {value}>{value}</option>{/each}
				</select>
			</td>

			<button type="button" class="btn variant-filled" on:click={addRow}>agregar</button>
		</tr>

	</tfoot>

	</table>
</div>

	<br>
	<CodeBlock language="typescript" code={JSON.stringify(data, null, 2)}></CodeBlock>
	<br>
	<CodeBlock language="typescript" code={JSON.stringify(roles, null, 2)}></CodeBlock>
	<br>

<style>
	.selctor {
	    @apply text-black;
	}
</style>
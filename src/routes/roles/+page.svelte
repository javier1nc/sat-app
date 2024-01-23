<script lang="ts">

import { CodeBlock } from '@skeletonlabs/skeleton';
import { message } from './../stores.js'

	type roles = {
		usuario: string;
		role: string;
	};
	function addRow() {
		data = [...data, [...newRow]]
		newRow = columns
	}
	function deleteRow(rowToBeDeleted) {
		data = data.filter(row => row != rowToBeDeleted)
	}
	let columns = ["Role", "Permisos"]
	let data: roles = [
		["administrador", "Nivel1"],
		["usuario", "Nivel2"],
		["invitado", "Nivel3"]
	]
	let newRow = [...columns];


	let roles = []

	$: if(data){
		roles = []
		for (let tuple of data) {
			roles.push(tuple[0]);
		}
	}

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
	<br/>
	<CodeBlock language="typescript" code={JSON.stringify(data, null, 2)}></CodeBlock>
	<br/>
	<br/>
	<CodeBlock language="typescript" code={JSON.stringify(roles, null, 2)}></CodeBlock>
	<p>{$message}</p>
<style>
</style>
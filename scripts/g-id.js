let global_id_index = 0

function generate_id() {
	++global_id_index
	return 'g-id-' + global_id_index
}
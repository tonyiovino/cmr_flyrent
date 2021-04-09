<template>
    <div class="vehicles page">
        <app-list
            :items="vehicles"
            :itemType="itemType"
            @item-clicked="vehicleClicked"
            @action1="vehicleDelete"
        ></app-list>
    </div>
</template>

<script>
import List from '@/components/List.vue'
import Vehicle from '@/components/Vehicle.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
		return {
			itemType: Vehicle,
		}
	},

    computed: {
		...mapGetters([
			'vehicles'
		])
	},

    methods: {
        ...mapActions([
            'deleteVehicle'
        ]),

        vehicleClicked (vehicleId) {
            alert('Click su automobile id ' + vehicleId)
		},

        vehicleDelete (vehicleId) {
            this.deleteVehicle(vehicleId)
        }
    },

    components: {
        appList: List
    }
}
</script>
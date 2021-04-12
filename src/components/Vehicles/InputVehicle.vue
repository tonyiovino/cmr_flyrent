<template>
    <div class="input">
        <h2 class="heading-secondary">Nuovo Veicolo</h2>

        <form class="form" @submit.prevent="submit">
            <div class="form__group">
                <input type="text" class="form__input" id="brand" v-model.trim="brand" placeholder="Marca" required>
                <label for="brand" class="form__label">Marca</label>
            </div>

            <div class="form__group">
                <input type="text" class="form__input" id="model" v-model.trim="model" placeholder="Modello" required>
                <label for="model" class="form__label">Modello</label>
            </div>

            <div class="form__group">
                <input type="text" class="form__input" id="license_plate" v-model.trim="license_plate" placeholder="Targa" required>
                <label for="license_plate" class="form__label">Targa</label>
            </div>

            <div class="form__actions">
                <button class="btn btn--primary">Salva</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            brand: '',
            model: '',
            license_plate: ''
        }
    },

    methods: {
        submit () {
            if (this.brand === '' || this.model === '' || this.license_plate === '') return

            this.$emit('save', {
                brand: this.brand,
                model: this.model,
                license_plate: this.license_plate
            })
            this.brand = this.model = this.license_plate = ''
        }
    }
}
</script>
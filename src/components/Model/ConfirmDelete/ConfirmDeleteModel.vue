<template>
    <div id="media-confirm-model">
        <v-dialog v-model="this.$store.state.showConfirmDeleteModal" persistent width="500px">
            <v-card>
                <v-card-title
                class="grey lighten-4 title"
                >
                Confirm Delete
                <v-spacer></v-spacer>
                <v-icon >delete</v-icon>
            </v-card-title>
            <v-container>
                <div class="confirm-text">
                    <strong>{{ text }}</strong>
                </div>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="hideConfirmDeleteModal()">Cancel</v-btn>
                <v-btn color="success">Confirm</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import * as types from "./../../../store/mutation-types";

export default {
    name: 'media-confirm-model',
    data: () => ({
    }),

    props:{
        text:{
            type: String,
            required: false,
            default: 'Are you sure want to delete ?'
        }
    },

    computed:{

    },

    methods:{
        hideConfirmDeleteModal: function() {
            this.$store.commit(types.HIDE_CONFIRM_DELETE_MODAL);
        }
    }
}
</script>

<style>
.confirm-text {
    text-align: left;
    font-size: 20px;
}
</style>
